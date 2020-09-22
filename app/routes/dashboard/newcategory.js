import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class DashboardNewcategoryRoute extends Route {
  model(){
    return RSVP.hash({
      dashboard: this.modelFor("dashboard"),
      category: this.store.createRecord("category")
    });
  }

  @action
  willTransition() {
    if (this.currentModel.category.hasDirtyAttributes) {
      this.currentModel.category.rollbackAttributes();
    }
  }
}
