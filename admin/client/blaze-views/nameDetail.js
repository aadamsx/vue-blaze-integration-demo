import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";
import { createClass } from "asteroid";

import "./nameDetail.html";

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'ws://localhost:5000/websocket',
});

Template.nameDetail.onCreated(function() {
  this.state = new ReactiveDict();
  // this.state.set('nameId', Session.get('nameId'));
  asteroid.subscribe("Names", Session.get('nameId'));

  this.autorun(() => {
    // this.subscribe("Names", this.state.get('nameId'));
  });
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
