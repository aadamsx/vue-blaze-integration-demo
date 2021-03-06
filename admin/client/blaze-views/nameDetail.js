"use strict";

import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

import "./nameDetail.html";

import { Names, subNames, unsubNames } from "../names-collections.js";

Template.nameDetail.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.set('nameId', Session.get('nameId'));

  this.autorun(() => {
    let subscription = subNames(this.state.get('nameId'));
    // this.subscribe("Names", this.state.get('nameId'));
  });
});

Template.nameDetail.onDestroyed(function() {
  unsubNames();
});

Template.nameDetail.helpers({
  names() {
    return Names.find({});
  }
});

Template.nameDetail.events({
  "click .impersontate": (event, template) => {
    event.preventDefault();

    Meteor.connection.setUserId(this.state.get('nameId'));
  },
});
