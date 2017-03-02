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
  userId: { type: String, optional: true },
  firstName: { type: String, optional: false, defaultValue: null },
  middleName: { type: String, optional: false, defaultValue: null },
  middleNameDNA: { type: Boolean, optional: true },
  lastName: { type: String, optional: false, defaultValue: null },
  defaultsSet: { type: Boolean, optional: true, defaultValue: false },
  createdAt: { type: Date, optional: true, defaultValue: null },
  updatedAt: { type: Date, optional: true }
});

Names.attachSchema(NamesSchema);
