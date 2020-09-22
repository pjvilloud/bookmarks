import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {action} from "@ember/object";

export default class DashboardNewbookmarkRoute extends Route {
  model(params){
    return RSVP.hash({
      dashboard: this.modelFor("dashboard"),
      category: this.store.findRecord("category", params.category_id),
      bookmark: this.store.createRecord("bookmark")
    });
  }

  @action
  willTransition() {
    if (this.currentModel.bookmark.hasDirtyAttributes) {
      this.currentModel.bookmark.rollbackAttributes();
    }
  }

}
