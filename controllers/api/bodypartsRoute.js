const router = require('express').Router();
const { Bodyparts } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req,res)=>{
  try{
    const dbBodypartsData = await Bodyparts.findall();

    const bodyparts = dbBodypartsData.map((bodypart) =>
    bodypart.get({ plain: true })
    );

    res.render('homepage',{
      bodyparts,
      loggedIn: req.session.loggedIn,
    });
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});




// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newBodypart = await Bodyparts.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newBodypart);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }); 