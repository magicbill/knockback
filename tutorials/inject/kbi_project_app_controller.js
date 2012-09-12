// Generated by CoffeeScript 1.3.3
var ProjectAppController, projectAppStartRouting;

ProjectAppController = function(view_model, element) {
  var active_el, knockback_model, loadPage, projects, router;
  knockback_model = {
    id: 'id_kb',
    name: 'Knockback.js',
    description: 'Backbone.js + Knockout.js is amazingly!',
    site: 'http://kmalakoff.github.com/knockback/'
  };
  projects = new ProjectCollection([knockback_model]);
  projects.fetch();
  active_el = null;
  loadPage = function(el) {
    if (active_el) {
      ko.removeNode(active_el);
    }
    return element.appendChild(active_el = el);
  };
  router = new Backbone.Router();
  router.route('*path', null, function() {
    return _.defer(loadUrlFn(''));
  });
  router.route('', null, function() {
    return loadPage(kb.renderTemplate('list.html', new ProjectListViewModel(projects)));
  });
  router.route('new', null, function() {
    return loadPage(kb.renderTemplate('detail.html', new ProjectViewModel(new Project(), projects)));
  });
  router.route('edit/:projectId', null, function(project_id) {
    var project;
    if (!(project = projects.get(project_id))) {
      loadUrl('');
      return;
    }
    return loadPage(kb.renderTemplate('detail.html', new ProjectViewModel(project)));
  });
  return this;
};

projectAppStartRouting = function() {
  if (!Backbone.History.started) {
    return Backbone.history.start({
      pushState: true,
      root: window.location.pathname
    });
  }
};