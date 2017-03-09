Meteor.publish("Tasks", function() {
  return tasks.find({});
});
