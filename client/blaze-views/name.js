import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

import "./name.html";

Template.nameView.onCreated(function() {
  this.state = new ReactiveDict();

  this.autorun(() => {
    let subscription = this.subscribe("Names", "123");

    if (subscription.ready()) {
      const doc = Names.findOne({ userId: "123" });
      debugger;
      if (doc) {
        // checkboxes
        this.state.set("middleNameDNA", {
          checked: doc.middleNameDNA,
          value: doc.middleName
        });
      } else {
        // checkboxes
        this.state.set("middleNameDNA", null);
      }
    }
  });
});

Template.nameView.helpers({
  formMode() {
    var doc = Names.findOne({ userId: "123" });
    if (doc) {
      return {
        doc: doc,
        collection: "Names",
        id: "NamesForm",
        schema: "NamesSchema",
        type: "method-update",
        method: "updateTheName"
      };
    } else {
      return {
        doc: null,
        collection: "Names",
        id: "NamesForm",
        schema: "NamesSchema",
        type: "method",
        method: "insertTheName"
      };
    }
  },
  checkboxState(field) {
    let ckbx = Template.instance().state.get(field);
    debugger;
    if (ckbx)
      return { value: ckbx.value };
    else
      return { value: "" };
  }
});

Template.nameView.events({
  // "click .btn-primary": (event, template) => {}
  "click .checkbox-click-event": (event, template) => {
    // event.preventDefault();
    var handle = event.target;
    let value = handle.checked ? "N/A" : "";
    let name = handle.name;

    template.state.set(name, value);
  }
});
