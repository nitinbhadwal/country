var countries = require('../shared/countries.json');
class Country{
    static  list(req,res){
        try {
            var page = parseInt(req.query.page || 1);
            var limit = parseInt(req.query.limit || 20);
            var keyword = req.query.keyword;
            var startIndex = (page - 1) * limit;
            var endIndex = page * limit;
            var total = countries.length;
            var data = [];
            if(keyword){
                data = Country.searchCountry(keyword);
                total = data.length;
                data = data.slice(startIndex, endIndex);
            }else{
                data = Country.getCountries(startIndex, endIndex)
            }
            res.json({data, total, limit, status:200, message:'Countries list'});
        } catch (error) {
            res.json({data:[], total:0, limit:0, status:500, message:'Internal server error'})
        }

    }

    static getCountries(startIndex, endIndex){
        return countries.slice(startIndex, endIndex);
    }
    static searchCountry(keyword){
        return countries.filter(country => ((country.name).toLowerCase()).includes(keyword.toLowerCase()));
    }
}

module.exports = Country;