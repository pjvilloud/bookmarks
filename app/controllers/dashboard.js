import Controller from '@ember/controller';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class DashboardController extends Controller {

  @tracked displayDeleteModal = false;

  @tracked editButtonsActive = false;

  @action
  toggleEditButtons(){
    this.editButtonsActive = !this.editButtonsActive;
  }

  @action
  delete(){
    let categories = this.model.hasMany("categories").value();
    this.model.destroyRecord().then(() => {
      if (categories){
        categories.forEach((category) => {
          let bookmarks = category.hasMany("bookmarks").value();
          category.destroyRecord().then(() => {
            bookmarks.forEach((bookmark) => {
              bookmark.destroyRecord();
            });
          });
        });
      }
      this.transitionToRoute("index");
    });
  }

}
