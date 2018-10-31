var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    firstName: 'Christopher',
    lastName: 'Hobdy',
    stAddress: '4140 Windsor Castle Way',
    city: 'Atlanta',
    state: 'GA',
    zip: '30034',
    phoneNumber: '(678)977-9570',
    email: 'hobdy.chris02@gmail.com',
    education: [
      {
        schoolName: 'Huntingdon College',
        degree: 'Bachelor',
        major: 'Compu Sci',
        gpa: '3.0',
        datesEnrolled: 'Aug 10th - May 22nd'
      },
      {
        schoolName: 'GA State',
        degree: 'Bachelor',
        major: 'Compu Sci',
        gpa: '3.0',
        datesEnrolled: 'May 10th - June 22nd'
      }
    ],
    navBarItems: ['About', 'Experience', 'Education', 'Skills', 'Interests', 'Awards' ]
  });
});

module.exports = router;
