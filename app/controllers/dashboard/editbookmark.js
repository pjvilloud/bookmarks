import Controller from '@ember/controller';
import {action} from "@ember/object";

export default class DashboardNewbookmarkController extends Controller {

  @action
  save(){
    this.model.bookmark.category = this.model.category;
    this.model.bookmark.save().then(() => {
      this.transitionToRoute("dashboard", this.model.dashboard.id);
    });
  }

  @action
  cancelSave(){

  }
}
