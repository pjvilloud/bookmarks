import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class NewdashboardRoute extends Route {
  model(){
    return this.store.createRecord('dashboard');
  }

  @action
  willTransition() {
    if (this.currentModel.hasDirtyAttributes) {
      this.currentModel.rollbackAttributes();
    }
  }
}
