Names = new Mongo.Collection("names");

Names.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !!userId;
  },
  update: function(userId, doc) {
    // only allow updating if you are logged in
    return !!userId;
  }
});

NamesSchema = new SimpleSchema({
  _id: { type: String, optional: true, denyUpdate: true },
  userId: {
    type: String,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return "123"; //Meteor.userId;
      } else {
        this.unset();
      }
    },
    index: 1,
    denyUpdate: true
  },
  firstName: { type: String, optional: false, defaultValue: null },
  middleName: { type: String, optional: false, defaultValue: null },
  middleNameDNA: { type: Boolean, optional: true },
  lastName: { type: String, optional: false, defaultValue: null },
  defaultsSet: { type: Boolean, optional: true, defaultValue: false },
  createdAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else {
        this.unset();
      }
    },
    denyUpdate: true
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Names.attachSchema(NamesSchema);
