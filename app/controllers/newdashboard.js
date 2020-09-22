import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewdashboardController extends Controller {
  @action
  addDashboard(){
    this.model.save().then((newDashboard) => {
      this.transitionToRoute("dashboard", newDashboard.id);
    });
  }

  @action
  transitionToIndex(){
    this.transitionToRoute("index");
  }
}
