import EmberRouter from '@ember/routing/router';
import config from 'bookmarks/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('dashboard', { path: '/dashboards/:dashboard_id'}, function() {
    this.route('newcategory');
    this.route('add');
    this.route('newbookmark', { path: '/category/:category_id/new'});
  });
  this.route('newdashboard');
});
