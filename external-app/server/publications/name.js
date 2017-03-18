// Meteor.publish("NamesOverview", function() {
//   if (! this.userId) {
//     throw new Meteor.Error('namesOverview.unauthorized',
//       'This data doesn\'t belong to you.');
//   }
//
//   return Names.find({ });
// });
//
// Meteor.publish("Names", function() {
//   if (! this.userId) {
//     throw new Meteor.Error('names.unauthorized',
//       'This data doesn\'t belong to you.');
//   }
//
//   return Names.find({ userId: this.userId, limit: 1 });
// });
