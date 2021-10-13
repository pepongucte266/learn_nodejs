class NewsController {

    // [GET]
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('detail')
    }
}

module.exports = new NewsController;