// Meteor.methods({
//   updateTheName2: function(doc) {
//     if (! this.userId) {
//       throw new Meteor.Error('update-name.unauthorized');
//     }
//     let record = Names.findOne({ userId: this.userId });
//     doc.userId = record.userId;
//     doc.defaultsSet = record.defaultsSet;
//     doc.createdAt = record.createdAt;
//     doc.updatedAt = new Date();
//     // doc._id = record._id;
//     NamesSchema.namedContext("myContext").validate(doc);
//     var context = NamesSchema.namedContext("myContext");
//     if (!context.isValid()) {
//       console.log(context.invalidKeys());
//     }
//
//     Names.update({ _id: record._id }, { $set: doc });
//   },
//   insertTheName2: function(doc) {
//     if (! this.userId) {
//       throw new Meteor.Error('insert-name.unauthorized');
//     }
//     doc.userId = this.userId;
//     doc.defaultsSet = true;
//     doc.createdAt = new Date();
//     doc.updatedAt = null;
//
//     let _id = Names.insert(doc);
//     return _id;
//   }
// });
