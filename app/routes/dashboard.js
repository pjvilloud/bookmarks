import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  model(params){
    return this.store.findRecord('dashboard', params.dashboard_id, {
      include: 'categories,categories.bookmarks'
    })
  }

}
