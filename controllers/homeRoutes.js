const router = require('express').Router();
const { Bodyparts, Workouts } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbBodypartsData = await Bodyparts.findAll();

    const bodyparts = dbBodypartsData.map((bodypart) =>
      bodypart.get({ plain: true })
    );

    res.render('homepage', {
      bodyparts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/bodyparts/:id', withAuth, async (req, res) => {
  try {
    const dbBodypartsData = await Bodyparts.findByPk(req.params.id, {
      include: [
        {
          model: Workouts,
          attributes: ['id', 'name', 'description', 'sets', 'reps'],
        },
      ],
    });
    const bodypart = dbBodypartsData.get({ plain: true });
    res.render('bodyparts', { bodypart, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;






