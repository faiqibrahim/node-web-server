const hbs = require('hbs');
const settings = require('../settings');

var loadHbs = () => {
    loadPartials(hbs);
    loadHelpers(hbs);

    return hbs;
};

var loadPartials = (hbs) => {
    hbs.registerPartials(settings.ABS_PATH_ROOT + '/views/partials');
}

var loadHelpers = (hbs) => {
    hbs.registerHelper('screamIt', (data) => data.toUpperCase());
    hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

};

module.exports = {
    loadHbs
};

