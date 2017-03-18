import { createClass } from 'asteroid'

const Asteroid = createClass()
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: 'ws://localhost:5000/websocket',
})

// asteroid.subscribe("NamesOverview");

// asteroid.ddp.on('added', (doc) => {
//   // we need proper document object format here
//   debugger;
//   if (doc.collection === 'names') {
//   }
//   if (doc.collection === 'users') {
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

export default asteroid;
