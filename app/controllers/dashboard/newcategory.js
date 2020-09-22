import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DashboardNewcategoryController extends Controller {
  @action
  addCategory(){
    this.model.category.set("dashboard", this.model.dashboard);
    this.model.category.save().then(() => {
      this.transitionToRoute("dashboard", this.model.dashboard.id);
    });
  }

  @action
  transitionToDashboard(){
    this.transitionToRoute("dashboard", this.model.dashboard);
  }
}
