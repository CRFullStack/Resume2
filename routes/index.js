var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    // add nav bar items to the navBarItems arr
    navBarItems: ['About', 'Experience', 'Education', 'Awards', 'Interests', 'Skills' ],
    about: { // the about section 
      firstName: 'Gaara',
      lastName: 'Shinobi',
      stAddress: '400 adams way',
      city: 'Atlanta',
      state: 'GA',
      zip: '300000',
      phoneNumber: '(678)477-6888',
      email: 'g.shinobi02@gmail.com',
      summary: 'Chris I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
      socialMedia:[
          {
          icon: 'fa-linkedin-in', //linkedin icon
          url: '#'
        },
        {
          icon: 'fa-github', //github icon
          url: 'https://github.com/CRFullStack'
        }
      ]
    },
    education: [ //the education section. Add as many dictionaries as needed to the education obj
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
    ],
    experience:[ // the experience section. Add as many dictionaries as needed to the experience obj
      {
        title: 'web designer',
        company: 'cfa',
        summary: 'Im the best',
        date: '01/2009 - current'
      },
      {
        title: 'web designer2',
        company: 'cfa',
        summary: 'Im the best2',
        date: '01/2009 - current'
      },
      {
        title: 'web designer3',
        company: 'cfa',
        summary: 'Im the best3',
        date: '01/2009 - current'
      }
    ]
    
  }); //end render
}); //end get

module.exports = router;
