const app = require("express")();
const hbs = require('express-hbs');
const bodyParser = require("body-parser");
const config = require("../config.json");
const path = require("path");

module.exports = () => {

    return new Promise((resolve, reject) => {

        app.engine('hbs', hbs.express4({
            partialsDir: path.join(__basedir, '/views/partials'),
            layoutsDir: path.join(__basedir, '/views/layouts'),
            defaultLayout: path.join(__basedir, "/views/layouts/main"),
        }));

        app.set('view engine', 'hbs')
        app.set('views', path.join(__dirname, 'views/pages'))

        app.use(require("./routes"));

        app.listen(config.port, resolve).on('error', (err) => reject({
            info: "Port occupé",
            err: err
        }));


    })
}