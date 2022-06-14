const repository = require('../db/repo/devotional-repo');

module.exports = (app, repo) => {
    // Get dotay's devotional
    app.get('/devotional/:date', async (req, res, next) => {
        const todayDate = req.params['date']
        const result = await repository.getTodayDevotional(repo, todayDate);

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                'msg': 'error retrieving today\'s devotional'
            })
        }
    }, []);

    // Get all devotional paginated
    // app.get('/devotional', async (req, res, next) => {
    //     const result = await repository.getTodayDevotional(repo);
    //     if (result) {
    //         res.status(200).json(result);
    //     } else {
    //         res.status(404).json({
    //             'msg': 'error retrieving today\'s devotional'
    //         })
    //     }
    // });

    // Create a new devotional
    app.post('/devotional', async (req, res, next) => {
        let payload = req.body;
        const result = await repository.create(repo, payload);

        if (result._id) {
            res.status(200).json({
                msg: 'devotional created successfully.'
            });
        } else {
            res.status(404).json(`ERROR: error while creating devotional.`)
        }
    })
}