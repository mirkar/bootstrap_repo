 // Declare initial main content element and initialize it with empty html
 // Eventially used as a child of #main-wrkspace-content element
var mainWrkSpace = $("<div id='main-wkrspace'></div>");





$.routes.add('/sqm/', function() {
    
    console.log("Enterinr sqm");

    console.log("Loading sqmLeftSidebar.html into sidebar");
    $("#left-sidebar").load("assets/static/sqmLeftSidebar.html");

    console.log("Making SQM from top menu active and loading sqm.html into the main workspace");
    $("#navbarCollapse .active").toggleClass("active");
    mainWrkSpace.load("assets/static/sqm.html");
    $("#navbarCollapse [href='#/sqm/']").parent().toggleClass("active");

    console.log("Leaving sqm");
});

$.routes.add('/sqm/dashboards/', function() {

    console.log("Entering sqm/dashboards");

   
     
     // When  /sqm/dashboards/ is being accessed via bookmark or refreshed by user in the browser,
     // we need to load sqmLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/sqmLeftSidebar.html", function() {
            $("#left-sidebar [href='#/sqm/dashboards/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/sqm/']").parent().toggleClass("active");    
        });
        
    }
    // /sqm/dashboards/ is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/sqm/dashboards/']").parent().toggleClass("active");   
    }


    var rendered_html = render('sqm-dashboards-tmpl', applicationStatuses);
    //console.log(rendered_html);
    
    mainWrkSpace.html(rendered_html);

/*
    mainWrkSpace.load("assets/static/sqm-dashboards.html",function(){
        console.log("Loading assets/static/sqm-dashboards.html");     
        });
*/
    console.log("Leaving sqm/dashboards");

});


$.routes.add('/sqm/reports/', function() {

    console.log("Entering sqm/reports");
    
    
    

     // When  /sqm/reports/ is being accessed via bookmark or refreshed by user in the browser,
     // we need to load sqmLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/sqmLeftSidebar.html", function() {
            $("#left-sidebar [href='#/sqm/reports/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/sqm/']").parent().toggleClass("active");    
        });
        
    }
    // /sqm/reports/ is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/sqm/reports/']").parent().toggleClass("active");   
    }


    // Handbars template library related code

    // Load the template using script tag (which is located inside of the main html)
    var source=$("#sqm-reports-template").html();
    

    var template = Handlebars.compile(source);
    
    // Oviously just for illustration/convinience purpose the template
    // context is a hard coded js variable
    var context = {title: "Reports",body: "This is a placeholder page for Reports. Generate by Handlebars using script tag"};

    // generate resulting html using compiled template and provided context
    var rendered_html = template(context);
    
    
    // At this point handlebars has generated html ready to be loaded into JQuery element
    // So let's use it
    mainWrkSpace.html(rendered_html);


    /*
    mainWrkSpace.load("assets/static/sqm-reports.html",function(){
        console.log("Loading assets/static/sqm-reports.html");     
    });
    */

    console.log("Leaving sqm/reports");
    });

$.routes.add('/sqm/settings/', function() {

    console.log("Entering sqm/settings");

     // When  /sqm/settings/ is being accessed via bookmark or refreshed by user in the browser,
     // we need to load sqmLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/sqmLeftSidebar.html", function() {
            $("#left-sidebar [href='#/sqm/settings/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/sqm/']").parent().toggleClass("active");    
        });
        
    }
    // /sqm/settings/ is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/sqm/settings/']").parent().toggleClass("active");   
    }

    
    // Handbars template library related code

    var source; // This is where the template source is to be stored

    
    // Combine url for the template source location
    var tmpl_dir='assets/templates';
    var tmpl_name = 'sqm-settings-tmpl'
    var tmpl_url=tmpl_dir + '/' +  tmpl_name + '.html';

    // Make a synchronous (YES  I KNOW !!) ajax request to get the template source from the url
    $.ajax ({
        url: tmpl_url,
        method: 'GET',
        async: false,
        success: function(data){
            source=data
            console.log('sqm-settings-tmpl source has been loaded');
        }

    });
    
    // Compile the template fro the source
    var template = Handlebars.compile(source);

    // Generate resulting html
    var rendered_html = template({title: 'Settings', body: "The template source has been loaded via a synchronous (yes, I'm a bad boy) ajax call."});

    mainWrkSpace.html(rendered_html);

    /*
    mainWrkSpace.load("assets/static/sqm-settings.html",function(){
        console.log("Loading assets/static/sqm-settings.html");     
    });
    */

    console.log("Leaving sqm/settings");   

});

$.routes.add('/sqm/tools/', function() {

    console.log("Entering sqm/tools");

    

     // When  /sqm/tools/ is being accessed via bookmark or refreshed by user in the browser,
     // we need to load sqmLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/sqmLeftSidebar.html", function() {
            $("#left-sidebar [href='#/sqm/tools/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/sqm/']").parent().toggleClass("active");    
        });
        
    }
    // /sqm/tools/ is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/sqm/tools/']").parent().toggleClass("active");   
    }


    var rendered_html = render('sqm-tools-tmpl', {title: "Tools", body: "The template source has been loaded via a synchronous ajax call with use of custom renderer function"});
    mainWrkSpace.html(rendered_html);

/*
    mainWrkSpace.load("assets/static/sqm-tools.html",function(){
        console.log("Loading assets/static/sqm-tools.html");     
    });
*/

    console.log("Leaving sqm/tools");   

});

$.routes.add('/jenkins/', function() {
    console.log("Entering jenkins");

    console.log("Loading jenkinsLeftSidebar.html into sidebar");
    $("#left-sidebar").load("assets/static/jenkinsLeftSidebar.html");

    $("#navbarCollapse .active").toggleClass("active");
    mainWrkSpace.load("assets/static/jenkins.html");
    $("#navbarCollapse [href='#/jenkins/']").parent().toggleClass("active");
    console.log("Leaving jenkins");
});


$.routes.add('/jenkins/overview/', function() {

    console.log("Entering jenkins/overview");

     // When  jenkins/overview is being accessed via bookmark or refreshed by user in the browser,
     // we need to load jenkinsLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/jenkinsLeftSidebar.html", function() {
            $("#left-sidebar [href='#/jenkins/overview/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/jenkins/']").parent().toggleClass("active");    
        });
        
    }
    // /jenkins/overview is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/jenkins/overview/']").parent().toggleClass("active");   
    }


    mainWrkSpace.load("assets/static/jenkins-overview.html",function(){
        console.log("Loading assets/static/jenkins-overview.html");     
    });

    console.log("Leaving jenkins/overview");   

});


$.routes.add('/jenkins/dashboards/', function() {

    console.log("Entering jenkins/dashboards");

     // When  jenkins/dashboards is being accessed via bookmark or refreshed by user in the browser,
     // we need to load jenkinsLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/jenkinsLeftSidebar.html", function() {
            $("#left-sidebar [href='#/jenkins/dashboards/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/jenkins/']").parent().toggleClass("active");    
        });
        
    }
    // /jenkins/overview is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/jenkins/dashboards/']").parent().toggleClass("active");   
    }


    mainWrkSpace.load("assets/static/jenkins-dashboards.html",function(){
        console.log("Loading assets/static/jenkins-dashboards.html");     
    });

    console.log("Leaving jenkins/dashboards");   

});



$.routes.add('/nagios/', function() {

    console.log("Entering nagios");

    console.log("Loading nagiosLeftSidebar.html into sidebar");
    $("#left-sidebar").load("assets/static/nagiosLeftSidebar.html");


    $("#navbarCollapse .active").toggleClass("active");
    mainWrkSpace.load("assets/static/nagios.html");
    $("#navbarCollapse [href='#/nagios/']").parent().toggleClass("active");
    console.log("Leaving nagios");
});



    





$.routes.add('/splunk/', function() {

    console.log("Entering splunk");

    console.log("Loading splunkLeftSidebar.html into sidebar");
    $("#left-sidebar").load("assets/static/splunkLeftSidebar.html");


    $("#navbarCollapse .active").toggleClass("active");
    mainWrkSpace.load("assets/static/splunk.html");
    $("#navbarCollapse [href='#/splunk/']").parent().toggleClass("active");
    console.log("Leaving splunk");

});


$.routes.add('/splunk/howtos/', function() {

    console.log("Entering splunk/howtos");

     // When  splunk/howtos is being accessed via bookmark or refreshed by user in the browser,
     // we need to load splunkLeftSidebar.html and make corresponing top menu and left sidebar elements active
      if ($("#left-sidebar").text() ==="") {
        console.log("Left sidebar is empty");
        $("#left-sidebar").load("assets/static/splunkLeftSidebar.html", function() {
            $("#left-sidebar [href='#/splunk/howtos/']").parent().toggleClass("active");
            $("#navbarCollapse [href='#/splunk/']").parent().toggleClass("active");    
        });
        
    }
    // /jenkins/overview is being accessed in a regular way via user's click
    else {
            $("#left-sidebar > .active").toggleClass("active");
            $("#left-sidebar [href='#/splunk/howtos/']").parent().toggleClass("active");   
    }


    mainWrkSpace.load("assets/static/splunk-howtos.html",function(){
        console.log("Loading assets/static/splunk-howtos.html");     
    });

    console.log("Leaving splunk/howtos");   

});


$.routes.add('/', function() {
    console.log("Ready default");
    mainWrkSpace.load("assets/static/about.html");
    console.log("Loading mainLeftSidebar.html into sidebar");
    // Currently mainLeftSidebar.html is empty
    $("#left-sidebar").load("assets/static/mainLeftSidebar.html");
    // Remove "active" from the top menu (if any)
    $("#navbarCollapse .active").toggleClass("active");
});






$(document).ready(function() {
    console.log("Entering MAIN");
    
    
    //console.log($(location).attr('pathname'));
    //console.log($(location).attr('hash'));
    
    //Using $.routes there is no way to define an action
    //for url without hash.
    if ($(location).attr('hash') === "") 
    {
        console.log("Location hash is empty. Loading assets/static/about.html");
        mainWrkSpace.load("assets/static/about.html");
        console.log("Loading mainLeftSidebar.html into sidebar");
		// Currently mainLeftSidebar.html is empty
		$("#left-sidebar").load("assets/static/mainLeftSidebar.html");

    }
    
    
    
    $("#main-wrkspace-content").append(mainWrkSpace);
    console.log("Leaving MAIN");
});


