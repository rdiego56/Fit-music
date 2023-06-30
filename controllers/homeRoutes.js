const router = require('express').Router();
const { Bodyparts } = require('../../models');
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

router.get('/bodypart/:id', withAuth, async (req, res) => {
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
    res.render('bodypart', { bodypart, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;






