const hbsUtils = require('./hbsUtils');
const middlewareUtils = require('./middlewareUtils');

var init = (app) => {
    setViewEngine(app, hbsUtils.loadHbs());
    middlewareUtils.loadMiddleware(app);
    loadRoutes(app);
};

var setViewEngine = (app, viewEngine) => {
    app.set('view engine', viewEngine);
};

var loadRoutes = (app) => {
    app.get('/', (req, resp) => {
        // resp.send('Hello Express!');
        resp.render('home.hbs', {
            pageTitle: 'Home',
            welcomeMessage: 'Welcome to Home',
            introHeading: 'Welcome'
        })
        ;
    })
    ;

    app.get('/about', (req, resp) => {
        resp.render('about.hbs', {
            pageTitle: 'About',
            introHeading: 'About'
        });
    })
    ;

    app.get('/bad', (req, resp) => {
        resp.send({
            errorMessage: 'Error Handling Message'
        });
    })
    ;
};

module.exports = {
    init
};