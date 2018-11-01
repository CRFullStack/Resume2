var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    firstName: 'Gaara',
    lastName: 'Shinobi',
    stAddress: '41 adams way',
    city: 'Atlanta',
    state: 'GA',
    zip: '30000',
    phoneNumber: '(678)666-6888',
    email: 'g.shinobi@gmail.com',
    education: [
      {
        schoolName: 'Huntingdon Unv.',
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
    ]
  });
});

module.exports = router;
