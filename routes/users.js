const express = require('express');
const router = express.Router();
const path = require('path')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const nodemailer = require('nodemailer');
// Load User model
const User = require('../models/User');
// const firstMail = require('../firstmail.html')
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));
// Register
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password, password2, code, wallet,} = req.body;
  let errors = [];
  const referalcode = first_name + Math.floor(Math.random() * 76876559);

  if (!first_name || !last_name|| !email || !password || !password2  || !wallet) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      first_name,
      last_name,
      email,
      password,
      password2,
      wallet
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          first_name,
          last_name,
          email,
          password,
          password2,
          code,
          referalcode,
          wallet
        });
      } else {
        const newUser = new User({
          first_name,
          last_name,
          email,
          password,
          password2,
          code,
          referalcode,
          wallet
        });

        
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                console.log(email);
     
                let transporter = nodemailer.createTransport({
                  host: 'mail.privateemail.com',
                  port: 465,
                  secure: true, // true for 465, false for other ports
                  auth: {
                      user: 'mail@b.com', // generated ethereal user
                      pass: 'mirahmirah'  // generated ethereal password
                  },
                  tls:{
                    rejectUnauthorized:false
                  }
                });
              
                // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Bennit from Coin " <mail@b.com>', // sender address
                    to: email, // list of receivers
                    subject: 'Your Passport to financial Freedom', // Subject line
                    text: 'Start Today!', // plain text body
                    html: ``
                };
              
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);   
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                });
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;