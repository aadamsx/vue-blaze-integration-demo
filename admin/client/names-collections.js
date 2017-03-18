"use strict";

import server from "./common-server-connection.js";

let Names = new Meteor.Collection('names', server);

let subNamesOverview = () => {
  server.subscribe('NamesOverview');
}

let unsubNamesOverview = () => {
  let handle = server.subscribe('NamesOverview');
  debugger;
  if (handle) handle.stop();
}

let subNames = (userId) => {
  server.subscribe('Names', userId);
}

let unsubNames = () => {
  let handle = server.subscribe('Names');
  if (handle) handle.stop();
}

export { Names, subNamesOverview, unsubNamesOverview, subNames, unsubNames };
