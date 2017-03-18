Names = new Mongo.Collection("names");

NamesSchema = new SimpleSchema({
  userId: { type: String, optional: true },
  firstName: { type: String, optional: false, defaultValue: null },
  middleName: { type: String, optional: false, defaultValue: null },
  middleNameDNA: { type: Boolean, optional: true },
  lastName: { type: String, optional: false, defaultValue: null },
  priorNameUsed: { type: String, optional: false,
    autoform: {
      options: function () {
        return [
          {label: "No", value: "No"},
          {label: "Yes", value: "Yes"}
        ];
      }
    },
    defaultValue: null
  },
  nameUsed: { type: String, optional: true,
    custom: function () {
      if (Meteor.isClient) {
        if (this.priorNameUsed.value === 'Yes')
          return "required";
      }
    },
    defaultValue: null
  },
  defaultsSet: { type: Boolean, optional: true, defaultValue: false },
  createdAt: { type: Date, optional: true, defaultValue: null },
  updatedAt: { type: Date, optional: true }
});

Names.attachSchema(NamesSchema);

Names.deny({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}
});
