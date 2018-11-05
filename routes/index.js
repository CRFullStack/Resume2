var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    // add nav bar items to the navBarItems arr
    navBarItems: ['About', 'Experience', 'Education', 'Awards', 'Interests', 'Skills' ],
    about: { // the about section
      image: "/startbootstrap-resume-gh-pages/img/profile.jpg",
      firstName: 'Gaara',
      lastName: 'Shinobi',
      stAddress: '400 adams way',
      city: 'Atlanta',
      state: 'GA',
      zip: '300000',
      phoneNumber: '(678)477-6888',
      email: 'g.shinobi02@gmail.com',
      summary: 'Chris I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
      socialMedia:[ //add your social media icons + url here
          {
          icon: 'fa-linkedin-in', //linkedin icon
          url: '#'
        },
        {
          icon: 'fa-github', //github icon
          url: 'https://github.com/CRFullStack'
        },
        {
          icon: 'fa-twitter-square', //linkedin icon
          url: '#'
        },
        {
          icon: 'fa-twitter-square', //linkedin icon
          url: '#'
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
    ], 
    awards:[
      "Googlehttps://stackoverflow.com/questions/6074045/make-bubble-help-appear-when-i-hover-over-a-link#6074083eveloper",
      "Cisco https://stackoverflow.com/questions/6074045/make-bubble-help-appear-when-i-hover-over-a-link#6074083",
      "MSMC https://stackoverflow.com/questions/6074045/make-bubble-help-appear-when-i-hover-over-a-link#6074083",
      "OSSCP https://stackoverflow.com/questions/6074045/make-bubble-help-appear-when-i-hover-over-a-link#6074083"
    ],
    interests:{
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },// end of interests
    skillIcons:[
        {
          icon:"fa-css3-alt",
          title:"CSS3"
        },{
          icon:"fa-html5",
          title:"html5"
        },{
          icon:"icon-debian",
          title:"Linux-Debian"
        },{
          icon:"fa-js-square",
          title:"JavaScript"
        },{
          icon:"fa-angular",
          title:"Angular"
        },{
          icon:"fa-react",
          title:"React"
        },{
          icon:"fa-node-js",
          title:"Node.js"
        },{
          icon:"fa-sass",
          title:"Sass"
        },{
          icon:"fa-less",
          title:"Less"
        },{
          icon: "fa-wordpress",
          title:"Wordpress"
        },{
          icon:"fa-gulp",
          title: "Gulp"
        },{
          icon:"fa-grunt",
          title:"Grunt"
        },{
          icon:"fa-npm",
          title:"npm"
        },{
          icon:"icon-apache",
          title:"Apache"
        }
      ]
    
  }); //end render
}); //end get

module.exports = router;
