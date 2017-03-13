Meteor.publish("NamesOverview", function() {
  return Names.find({ });
});

Meteor.publish("Names", function(userId) {
  return Names.findOne({ userId: userId });
});
