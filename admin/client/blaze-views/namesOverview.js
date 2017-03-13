import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";
import { createClass } from "asteroid";

import "./namesOverview.html";

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'ws://localhost:5000/websocket',
});


asteroid.subscribe("NamesOverview");


Template.namesOverview.onCreated(function() {
  this.state = new ReactiveDict();
  asteroid.subscribe("NamesOverview");


  this.autorun(() => {
    asteroid.subscribe("NamesOverview");

    // this.subscribe("NamesOverview");
  });
});

Template.namesOverview.helpers({
  names() {
    asteroid.subscribe("NamesOverview");

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
