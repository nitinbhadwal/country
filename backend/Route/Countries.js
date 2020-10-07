var fs = require("fs");
var getData = fs.readFileSync("./CountriesList/Countries.json");
var countries = JSON.parse(getData);



// Get countries endpoint
const countryRoutes = (app) => {
  app.get("/api/rest-countries-v1", authenticateJWT, (req, res) => {});
  function authenticateJWT(req, res, next) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const initialIndex = (page - 1) * limit;
    const lastIndex = page * limit;
    const data = {};
    if (lastIndex < countries.length) {
      data.next = {
        page: page + 1,
        limit: limit,
      };
    }
    if (initialIndex > 0) {
      data.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    // customized Token
    if (
      req.headers.authorization ===
      "d%#@##@ds93432$#%^#$#Dfdfd$%@#@)IOIkjkj&*$%^%GFGD"
    ) {
      // filter country with search keyword
      if (req.query.country !== "") {
        redefinedCountries = countries.filter(function (user) {
          return user.name.toLowerCase().indexOf(req.query.country) != -1;
        });
        data.data = redefinedCountries.slice(initialIndex, lastIndex);
        res.send({ data: data, total: redefinedCountries.length });
      }
      // Condition true when no search keyword entered
      else {
        data.data = countries.slice(initialIndex, lastIndex);
        res.send({ data: data, total: countries.length });
      }
    } else res.sendStatus(403);
  }




  
  // Get single country details
  app.get("/api/rest-countries-v1/:name/", (req, res) => {
    // customized Token
    if (
      req.headers.authorization ===
      "d%#@##@ds93432$#%^#$#Dfdfd$%@#@)IOIkjkj&*$%^%GFGD"
    ) {
      var word = req.params.name;
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      if (word) {
        for (var i = 0; i < countries.length; i++) {
          if (countries[i].name == word) {
            var reply = countries[i];
          }
        }
      }
      res.send(reply);
    } else res.sendStatus(403);
  });
};

module.exports = countryRoutes;
