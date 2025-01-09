const Url = require('../models/URL');

const get_home = (req, res) => {
    Url.find()
    .then(data => {
        res.render('../views/index', {urls: data});
    })
    .catch(err => {
        res.render('error');
    })
};

const add_url = (req, res) => {
    const url = new Url(req.body);
    url.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            res.render('error');
        })
}

module.exports = {get_home, add_url};