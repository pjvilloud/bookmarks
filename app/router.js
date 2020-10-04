import EmberRouter from '@ember/routing/router';
import config from 'bookmarks/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('dashboard', {path: '/dashboards/:dashboard_id'}, function () {
    this.route('newcategory');
    this.route('edit');
    this.route('editbookmark', {path: '/category/:category_id/:bookmark_id'});
  });
});
