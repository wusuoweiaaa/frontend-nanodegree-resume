//bio
var bio = {
    "Name": "Wei Wu",
    "role": "Web-Developer",
    "contacts": {
        "mobile": "152****4037",
        "email": "oyoung3231@gmail.com",
        "github": "wusuoweiaaa",
        "location": "HaiNan, China"
    },
    "picture_URL": "images/me.jpg",
    "welcome_message": "All things in their being are good for something.",
    "skills": ["HTML", "CSS", "JS", "Python", "Github", "Matlab", "Linux"],

    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.Name);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.picture_URL);
        var message = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
        $("#header").append(formattedPicture);
        $("#header").append(message);

        $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
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
        "school_name": "ShanDong University of Technology and Science",
        "location": "QingDao, ShanDong, China",
        "degree": "B.E",
        "majors": "CS",
        "dates": "2013 - 2017"
    }],

    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Front End Development Cerfication",
        "school": "FreeCodeCamp",
        "date": "2016",
        "url": "https://www.freecodecamp.com"
    }],

    "display": function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace("%data%", school.school_name);
            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var schoolDate = HTMLschoolDates.replace("%data%", school.dates);
            var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(schoolName + schoolLocation + schoolDegree + schoolDate + schoolMajor);
        });

        $('#education').append(HTMLonlineClasses);
        $(".online-courses").append(HTMLonlineClasses);

        for (var j = 0; j < education.onlineCourses.length; j++) {
        		$("#education").append(HTMLschoolStart);
        		var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        		onlineTitle = onlineTitle.replace("#", education.onlineCourses[j].url);
        		var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        		var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].date);
        		var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        		$(".education-entry:last").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
        }
    }
};

var projects = {
    "projects": [{
            "title": "mockup-to-article",
            "dates": "2016",
            "description": "This is the first project.Create a simple web page with HTML.",
            "image": "images/model.jpg"
        },
        {
            "title": "animal-trading-cards",
            "dates": "2016",
            "description": "This is second project.I create a Giraffa trading card.Use css change color and picture size.",
            "image": "images/animalcard.jpg"
        },
        {
            "title": "Design-mockup-portfolio",
            "dates": "2016",
            "description": "This is the third project.I learned a lot about HTML and css. I also learn responsive Web design fundamentals and responsive image to create my own responsive web page. That's fabulous.",
            "image": "images/profile.jpg"
        }
    ],

    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDecription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedImage = HTMLprojectImage.replace("%data%", project.image);
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDecription + formattedImage);
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

            var Employer = HTMLworkEmployer.replace("%data%", job.employer);
            var Title = HTMLworkTitle.replace("%data%", job.title);
            var Dates = HTMLworkDates.replace("%data%", job.dates);
            var Location = HTMLworkLocation.replace("%data%", job.location);
            var Description = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(Title + Employer);
            //$(".work-entry:last").append(Employer);
            $(".work-entry:last").append(Dates);
            $(".work-entry:last").append(Location);
            $(".work-entry:last").append(Description);

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
upName(bio.Name);

$('#mapDiv').append(googleMap);
