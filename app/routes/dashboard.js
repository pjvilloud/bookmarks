import Route from '@ember/routing/route';

export default class DashboardRoute extends Route {
  renderTemplate(controller, model) {
    if(model.get('isNew')){
      this.render('dashboard.edit', {
        model: model
      });
    } else {
      this.render();
    }

  }
  model(params){
    return params.dashboard_id === "new" ?
      this.store.createRecord("dashboard") :
      this.store.findRecord('dashboard', params.dashboard_id, {
      include: 'categories,categories.bookmarks'
    })
  }

}
