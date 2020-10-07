
const Route = require("./Countries");
const appRouter = (app, fs) => {
// Testing the basic route
  app.get("/", (req, res) => {
    res.send("Welcome to our express application for API endpoint");
  });
  Route(app, fs);
};
module.exports = appRouter;