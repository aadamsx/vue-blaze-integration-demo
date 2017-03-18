FlowRouter.route("/", {
  action() {
    BlazeLayout.render("mainLayout", { aside: "sidebar", main: "placeHolder" });
  },
  name: "home.view"
});

FlowRouter.route("/names-overview", {
  action() {
    BlazeLayout.render("mainLayout", { aside: "sidebar", main: "namesOverview" });
  },
  name: "names.overview.view"
});

FlowRouter.route("/name-detail", {
  action() {
    BlazeLayout.render("mainLayout", { aside: "sidebar", main: "nameDetail" });
  },
  name: "name.detail.view"
});
