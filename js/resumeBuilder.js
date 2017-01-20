//bio
var bio = {
    "name": "Wei Wu",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "152****4037",
        "email": "oyoung3231@gmail.com",
        "github": "wusuoweiaaa",
        "location": "HaiNan, China"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "All things in their being are good for something.",
    "skills": ["HTML", "CSS", "JS", "Python", "Github", "Matlab", "Linux"],

    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        //append
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
        $("#header").append(formattedPicture);
        $("#header").append(message);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
//education
var education = {
    "schools": [{
        "name": "ShanDong University of Technology and Science",
        "location": "QingDao, ShanDong, China",
        "degree": "B.E",
        "majors": ["CS"],
        "dates": "2013 - 2017",
        "url": "http://www.sdust.edu.cn"
    }],

    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Front End Development Cerfication",
        "school": "FreeCodeCamp",
        "dates": "2016",
        "url": "https://www.freecodecamp.com"
    }],

    "display": function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolUrl = HTMLonlineURL.replace("%data%",school.url);
            //append
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolDate + formattedSchoolUrl);

            school.majors.forEach(function(major){
                //format majors
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                //append
                $(".education-entry:last").append(formattedSchoolMajor);
            });


        });

        $('#education').append(HTMLonlineClasses);

        for (var j = 0; j < education.onlineCourses.length; j++) {
        		$("#education").append(HTMLschoolStart);
        		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        		formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[j].url);
        		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            //append
        		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
        }
    }
};

var projects = {
    "projects": [{
            "title": "mockup-to-article",
            "dates": "2016",
            "description": "This is the first project.Create a simple web page with HTML.",
            "images": ["images/model.jpg"]
        },
        {
            "title": "animal-trading-cards",
            "dates": "2016",
            "description": "This is second project.I create a Giraffa trading card.Use css change color and picture size.",
            "images": ["images/animalcard.jpg"]
        },
        {
            "title": "Design-mockup-portfolio",
            "dates": "2016",
            "description": "This is the third project.I learned a lot about HTML and css. I also learn responsive Web design fundamentals and responsive image to create my own responsive web page. That's fabulous.",
            "images": ["images/profile.jpg"]
        }
    ],

    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDecription = HTMLprojectDescription.replace("%data%", project.description);
            project.images.forEach(function(image){
            // format image
                var formattedImage = HTMLprojectImage.replace("%data%", image);
            // append formatted image
                $(".project-entry:last").append(formattedImage);
            });
            //append
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDecription);
        });
    }
};

var work = {
    'jobs': [{
            'employer': 'hahaha',
            'title': 'Officer',
            'location': 'ShenZhen, China',
            'dates': '2014',
            'description': 'Interesting'
        },
        {
            'employer': 'huh',
            'title': 'Officer',
            'location': 'Canton, China',
            'dates': '2015',
            'description': 'Fabulous'
        }
    ],
    'display': function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            //append
            $(".work-entry:last").append(formattedTitle + formattedEmployer);
            //$(".work-entry:last").append(Employer);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);

        });
    }
};

function upName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name = name.join(" ");
    return name;
}

work.display();
bio.display();
education.display();
projects.display();
upName(bio.name);

$('#mapDiv').append(googleMap);
