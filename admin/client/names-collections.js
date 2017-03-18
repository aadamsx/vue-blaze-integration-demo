"use strict";

import Server from "./common-server-connection.js";
import { Mongo } from 'meteor/mongo';

let Names = new Mongo.Collection('names', Server);

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
