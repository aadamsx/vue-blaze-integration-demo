FlowRouter.route("/", {
  action() {
    BlazeLayout.render("mainLayout", { aside: "sidebar", main: "placeHolder" });
  },
  name: "home.view"
});

FlowRouter.route("/name", {
  action() {
    BlazeLayout.render("mainLayout", { aside: "sidebar", main: "nameView" });
  },
  name: "name.view"
});
