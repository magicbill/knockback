// Generated by CoffeeScript 1.3.3
var PROJECTS_API_KEY_PARAM, PROJECTS_BASE_URL, Project;

PROJECTS_BASE_URL = 'https://api.mongolab.com/api/1/databases/angularjs/collections/projects';

PROJECTS_API_KEY_PARAM = 'apiKey=4f847ad3e4b08a2eed5f3b54';

Project = Backbone.Model.extend({
  url: function() {
    return "" + PROJECTS_BASE_URL + "/" + this.id + "?" + PROJECTS_API_KEY_PARAM;
  }
});