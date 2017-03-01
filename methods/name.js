if (Meteor.isClient) {
  AutoForm.hooks({
    NamesForm: {
      onSuccess: function(operation, result, template) {
        debugger;
        console.log(result);
      },
      onError: function(formType, error) {
        debugger;
        console.log(error);
      },
      onSubmit: function(doc) {
        debugger;
        Schemas.Names.clean(doc);
        this.done();
        return false;
      },
      before: {
        insert: function(doc) {
          debugger;
          return this.result(doc);
        },
        update: function(doc) {
          debugger;
          return this.result(doc);
        }
      },
      after: {
        insert: function(error, result) {
          debugger;
          if (error) {
            console.log("Insert Error:", error);
          }
        },
        update: function(error, result) {
          debugger;
          if (error) {
            console.log("Update Error:", error);
          } else {
            console.log("Updated!", result);
          }
        }
      }
    }
  });
}

Meteor.methods({
  updateTheName: function(modifier, objID) {
    debugger;
    Names.update(objID, modifier);
  },
  insertTheName: function(doc) {
    debugger;
    // Schemas.Names.clean(doc);
    // check(doc, Schemas.Names.simpleSchema());
    // doc._id = "";
    // doc.defaultsSet = true;
    // doc.createdAt = new Date();
    // doc.updatedAt = "";
    Names.insert(doc);
  }
});
