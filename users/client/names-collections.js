"use strict";

import Server from "./common-server-connection.js";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Mongo } from 'meteor/mongo';

Meteor.call = function(){
  return Server.call.apply(Server, arguments);
};
Accounts.connection = Server;

let Names = new Mongo.Collection('names', Server);

let NamesSchema = new SimpleSchema({
  userId: { type: String, optional: true },
  firstName: { type: String, optional: false, defaultValue: null },
  middleName: { type: String, optional: false, defaultValue: null },
  middleNameDNA: { type: Boolean, optional: true },
  lastName: { type: String, optional: false, defaultValue: null },
  priorNameUsed: { type: String, optional: false,
    autoform: {
      options: function () {
        return [
          {label: "No", value: "No"},
          {label: "Yes", value: "Yes"}
        ];
      }
    },
    defaultValue: null
  },
  nameUsed: { type: String, optional: true,
    custom: function () {
      if (Meteor.isClient) {
        if (this.priorNameUsed.value === 'Yes')
          return "required";
      }
    },
    defaultValue: null
  },
  defaultsSet: { type: Boolean, optional: true, defaultValue: false },
  createdAt: { type: Date, optional: true, defaultValue: null },
  updatedAt: { type: Date, optional: true }
});

Names.attachSchema(NamesSchema);

Names.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Names.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

let subNamesOverview = () => {
  Server.subscribe('NamesOverview');
}

let unsubNamesOverview = () => {
  let handle = Server.subscribe('NamesOverview');
  debugger;
  if (handle) handle.stop();
}

let subNames = (userId) => {
  Server.subscribe('Names', userId);
}

let unsubNames = () => {
  let handle = Server.subscribe('Names');
  if (handle) handle.stop();
}

export { Names, subNamesOverview, unsubNamesOverview, subNames, unsubNames };
