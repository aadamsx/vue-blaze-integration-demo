// import { createClass } from 'asteroid'
//
// const Asteroid = createClass()
// // Connect to a Meteor backend
// const asteroid = new Asteroid({
//   endpoint: 'ws://localhost:5000/websocket',
// })

// var remote = DDP.connect('http://localhost:5000/');
// Names = new Meteor.Collection('names', remote);
//
// remote.subscribe('NamesOverview', function() {
//   debugger;
//   var names = Names.find();
//   console.log(names.count());  // get 1
// });

// asteroid.subscribe("NamesOverview");

//debugger;

// var _name = asteroid.getCollection("name");

// asteroid.ddp.on('added', ({collection, id, fields}) => {
//   // we need proper document object format here
//   debugger;
//   if (collection === 'names') {
//     // Names = new Mongo.Collection("names", fields);
//   }
// });
//
// asteroid.ddp.on('removed', (removedDoc) => {
//   debugger;
//   if (removedDoc.collection === 'todo') {
//   }
//   if (removedDoc.collection === 'users') {
//   }
// });
//
// asteroid.ddp.on('changed', (updatedDoc) => {
//   debugger;
//   if (updatedDoc.collection === 'todo') {
//   }
// });
//
// export default asteroid;
