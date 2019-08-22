const express = require('express');
const router = express.Router();


router.get('/profile',(req,res) => {
  res.render('profile',{title:'내 정보 - NodeBird', user: null});
});

router.get('/join',(req,res) => {
  res.render('join',{
  title:'회원가입 - NodeBird',
  user: null,
  joinError:req.flash('joinError'),
  });
});

router.get('/',(req,res) => {
  res.render('main',{title:'NodeBird',
  twits: [],
  user: null,
  joinError:req.flash('joinError'),
  });
});

module.exports = router;
