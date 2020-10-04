import Route from '@ember/routing/route';
import RSVP from "rsvp";
import {action} from "@ember/object";

export default class DashboardEditbookmarkRoute extends Route {
  model(params){
    return RSVP.hash({
      dashboard: this.modelFor("dashboard"),
      category: this.store.findRecord("category", params.category_id),
      bookmark: params.bookmark_id === "new" ?
        this.store.createRecord("bookmark") : this.store.findRecord("bookmark", params.bookmark_id)
    });
  }

  @action
  willTransition() {
    if (this.currentModel.bookmark.hasDirtyAttributes) {
      this.currentModel.bookmark.rollbackAttributes();
    }
  }

}
