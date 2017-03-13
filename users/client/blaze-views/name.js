import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

import "./name.html";

Template.nameView.onCreated(function() {
  this.state = new ReactiveDict();

  this.autorun(() => {
    let subscription = this.subscribe("Names", Meteor.userId());

    if (subscription.ready()) {
      const doc = Names.findOne({ userId: Meteor.userId() });
      if (doc) {
        // checkboxes
        this.state.set("middleNameDNA", doc.middleName);
        this.state.set("priorNameUsed", doc.priorNameUsed);
      } else {
        // checkboxes
        this.state.set("middleNameDNA", null);
        this.state.set("priorNameUsed", null);
      }
    }
  });
});

Template.nameView.helpers({
  formMode() {
    let doc = Names.findOne({ userId: Meteor.userId() });
    if (doc) {
      return {
        doc: doc,
        id: "NamesForm",
        schema: "NamesSchema",
        type: "method-update"
      };
    } else {
      return {
        doc: null,
        id: "NamesForm",
        schema: "NamesSchema",
        type: "method"
      };
    }
  },
  checkboxState(field) {
    let ckbx = Template.instance().state.get(field);
    if (ckbx)
      return { value: ckbx };
    else
      return { value: "" };
  },
  radioState(field) {
    debugger;
    var rdo = Template.instance().state.get(field);

    if (rdo && rdo === "No") return false;
    else if (rdo && rdo === "Yes") return true;
    else return false;
  },
});

Template.nameView.events({
  "click .checkbox-click-event": (event, template) => {
    var handle = event.target;
    let value = handle.checked ? "N/A" : "";
    let name = handle.name;

    template.state.set(name, value);
  },
  "click button[type=submit]": (event, template) => {
    event.preventDefault();

    let doc = {};

    doc.firstName = template.find("input[name=firstName]").value;
    doc.middleName = template.find("input[name=middleName]").value;
    doc.middleNameDNA = template.find("input[name=middleNameDNA]").checked;
    doc.lastName = template.find("input[name=lastName]").value;
    doc.priorNameUsed = template.find("input[name=priorNameUsed]").value;

    let record = Names.findOne({ userId: Meteor.userId() });

    if (record) {
      // update
      Meteor.call("updateTheName2", doc, error => {
        if (error) {
          console.log("error", error);
        }
      });
    } else {
      // insert
      Meteor.call("insertTheName2", doc, (error, _id) => {
        if (error) {
          console.log("error", error);
        }

        if (_id) {}
      });
    }
  },
  'click .radio-click-event': (event, template) => {
    var handle = event.target;
    var mode = template.state.get('mode');
    var value = handle.value;
    var name = handle.name;

    template.state.set(name, value);
  }
});
