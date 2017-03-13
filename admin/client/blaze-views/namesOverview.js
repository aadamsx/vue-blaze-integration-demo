import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

import "./namesOverview.html";

Template.namesOverview.onCreated(function() {
  this.state = new ReactiveDict();

  this.autorun(() => {
    this.subscribe("NamesOverview");
  });
});

Template.namesOverview.helpers({
  names() {
    return Names.find({});
  }
});

Template.namesOverview.events({
  "click .list-item": (event, template) => {
    event.preventDefault();

    var handle = event.target;
    var nameId = event.id;

    if (nameId) {
      Session.set('nameId', nameId);
      FlowRouter.go('name.detail.view');
    }
    else {
      throw new Meteor.error('Issue: no NameID');
    }
  }
});
