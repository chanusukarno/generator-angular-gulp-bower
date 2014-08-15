'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AngularGulpBowerGenerator = yeoman.generators.Base.extend({
promptUser: function() {
        var done = this.async();
        // have Yeoman greet the user
        console.log(this.yeoman);
 
        var prompts = [{
            name: 'appName',
            message: 'Enter your project name?'
        }
        ];
 
        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            done();
        }.bind(this));
    },
    scaffoldFolders: function(){
    this.mkdir("app");
    this.mkdir("app/fonts");
    this.mkdir("app/images");
    this.mkdir("app/partials");
    this.mkdir("app/scripts");
    this.mkdir("app/scripts/controllers");
    this.mkdir("app/scripts/directives");
    this.mkdir("app/scripts/data");
    this.mkdir("app/scripts/filters");
    this.mkdir("app/scripts/services");
    this.mkdir("app/scripts/utility");
    this.mkdir("gulp");
},
copyMainFiles: function(){
    this.copy("_gulpfile.js", "Gulpfile.js");
    this.copy("_package.json", "package.json");
    this.copy("_bower.json", "bower.json");
    this.copy("_main.css", "app/styles/main.css"); 
    this.copy("_.bowerrc", ".bowerrc");
    this.copy("_mainApp.js", "app/scripts/mainApp.js");  
    this.copy("_gulp/_build.js", "gulp/build.js");   
    this.copy("_gulp/_server.js", "gulp/server.js");  
    this.copy("_gulp/_watch.js", "gulp/watch.js");  
    this.copy("_gulp/_wiredep.js", "gulp/wiredep.js");
    this.copy("_sampleController.js", "app/scripts/controllers/sampleController.js");    
    this.copy("_sampleDirective.js", "app/scripts/directives/sampleDirective.js");
    this.copy("_sampleService.js", "app/scripts/services/sampleService.js");
    this.copy("_sample.json", "app/scripts/data/sample.json");
    this.copy("_sampleFilter.js", "app/scripts/filters/sampleFilter.js");
    this.copy("_util.js", "app/scripts/utility/util.js");
    this.copy("_constant.js", "app/scripts/utility/constant.js");
    this.copy("_page1.html", "app/partials/page1.html");

    var context = { 
        site_name: this.appName 
    };
 
    this.template("_index.html", "app/index.html", context);
},
runNpm: function(){
    console.log("\n Done loading files! \nInstalling Node modules and Bower packages...\n");
    this.npmInstall("", function(){
        console.log("\n Done installing node modules!\n Run 'npm start' to build and serve the project");        
    });
    this.bowerInstall("", function(){
        console.log("\n  Done installing bower Packages\n");
    });
}
});

module.exports = AngularGulpBowerGenerator;