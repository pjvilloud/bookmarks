import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class EditdashboardRoute extends Route {
  model(){
    let {dashboard_id} = this.paramsFor('dashboard');
    return this.store.findRecord("dashboard", dashboard_id);
  }

  @action
  willTransition() {
    if (this.currentModel.hasDirtyAttributes) {
      this.currentModel.rollbackAttributes();
    }
  }
}
