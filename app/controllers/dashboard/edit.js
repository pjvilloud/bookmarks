import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditdashboardController extends Controller {
  @action
  saveDashboard(){
    this.model.save().then((dashboard) => {
      this.transitionToRoute("dashboard", dashboard.get("id"));
    });
  }

  @action
  transitionToIndex(){
    this.transitionToRoute("index");
  }
}
