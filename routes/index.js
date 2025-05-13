const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));

// Your Needs
router.get('/your-needs', forwardAuthenticated, (req, res) => res.render('needs'));


// Our Solution
router.get('/our-solution', forwardAuthenticated, (req, res) => res.render('solution'));


// About Us
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));

// Investing
router.get('/investing', forwardAuthenticated, (req, res) => res.render('investing'));






// Create a finanacial strategy
router.get('/create-a-financial-strategy', forwardAuthenticated, (req, res) => res.render('create'));

//make investment decision
router.get('/make-investment-decision', forwardAuthenticated, (req, res) => res.render('investment'));


//save and build for retirement
router.get('/save-build-for-retirement', forwardAuthenticated, (req, res) => res.render('retirement'));



//financial planning services
router.get('/financial-planing-services', forwardAuthenticated, (req, res) => res.render('financials'));

//mutual funds
router.get('/mutual-funds', forwardAuthenticated, (req, res) => res.render('mutual'));

//managed accounts 
router.get('/managed-account', forwardAuthenticated, (req, res) => res.render('managed'));

//trust services
router.get('/trust-services', forwardAuthenticated, (req, res) => res.render('trust'));



//what makes us better
router.get('/what-makes-us-better', forwardAuthenticated, (req, res) => res.render('better'));


//save money
router.get('/save-money', forwardAuthenticated, (req, res) => res.render('save'));


//manage financials
router.get('/manage-financials', forwardAuthenticated, (req, res) => res.render('manage'));

//manage financials
router.get('/IRA-vs-savings', forwardAuthenticated, (req, res) => res.render('ira'));




//FINANACIAL SERVIVES 

// TERMS
router.get('/term-and-condition', forwardAuthenticated, (req, res) => res.render('terms'));

//PRIVACY POLICY
router.get('/privacy-policy', forwardAuthenticated, (req, res) => res.render('privacy'));

//REFUND POLICY
router.get('/refund-policy', forwardAuthenticated, (req, res) => res.render('refund'));


// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);
router.get('/invest', ensureAuthenticated, (req, res) =>
  res.render('invest', {
    user: req.user
  })
);

router.get('/return-on-investments', ensureAuthenticated, (req, res)=>{
  res.render('returns')
  user: req.user
})
router.get('/withdrawal', ensureAuthenticated, (req, res) =>
  res.render('withdrawal', {
    user: req.user
  })
);
router.get('/history', ensureAuthenticated, (req, res) =>
  res.render('history', {
    user: req.user
  })
);
router.get('/analytics', ensureAuthenticated, (req, res) =>
  res.render('analytics', {
    user: req.user
  })
);

router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);

router.get('/withdrawal-success', ensureAuthenticated, (req, res) =>
  res.render('success', {
    user: req.user
  })
);

router.get('/deposit-success', ensureAuthenticated, (req, res) =>
  res.render('deposit', {
    user: req.user
  })
);
router.get('/checkout', ensureAuthenticated, (req, res) =>
  res.render('checkout', {
    user: req.user
  })
);
router.get('/bloop', ensureAuthenticated, (req, res) =>
  res.render('complete', {
    user: req.user
  })
);
router.get('/select-coin-19843667164', ensureAuthenticated, (req, res) =>
  res.render('coin', {
    user: req.user
  })
);
router.get('/bit-pay', ensureAuthenticated, (req, res) =>
  res.render('bitpay', {
    user: req.user
  })
);


router.get('/ether-pay', ensureAuthenticated, (req, res) =>
  res.render('etherpay', {
    user: req.user
  })
);


router.get('/litecoin-pay', ensureAuthenticated, (req, res) =>
  res.render('litecoinpay', {
    user: req.user
  })
);


router.get('/binance-pay', ensureAuthenticated, (req, res) =>
  res.render('binancepay', {
    user: req.user
  })
);

router.get('/usdt-pay', ensureAuthenticated, (req, res) =>
  res.render('usdt', {
    user: req.user
  })
);



module.exports = router;
