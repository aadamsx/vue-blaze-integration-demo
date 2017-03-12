Meteor.publish("Names", function(userId) {
  return Names.find({ userId: userId });
});
