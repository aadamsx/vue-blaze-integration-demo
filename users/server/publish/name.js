Meteor.publish("Names", function(userId) {
  return Names.findOne({ userId: userId });
});
