"use strict";

import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

import "./namesOverview.html";

import { Names, subNamesOverview, unsubNamesOverview } from "../names-collections.js";

Template.namesOverview.onCreated(function() {
  this.state = new ReactiveDict();

  let subscription = subNamesOverview();

  // setTimeout(function(){ unsubNamesOverview(); }, 10000);

  // if (subscription.Ready()) { // do something... };
});

Template.namesOverview.onDestroyed(function() {
  unsubNamesOverview();
});



Template.namesOverview.helpers({
  names() {
    var names = Names && Names.find({});
    return names;
  }
});

Template.namesOverview.events({
  "click .list-item": (event, template) => {
    event.preventDefault();

    debugger;

    var handle = event.target;
    var nameId = handle.id;

    if (nameId) {
      Session.set('nameId', nameId);
      FlowRouter.go('name.detail.view');
    }
    else {
      throw new Meteor.Error('Issue: no NameID');
    }
  }
});
