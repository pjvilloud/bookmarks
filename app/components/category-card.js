import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CategoryCardComponent extends Component {
  @tracked displayDeleteModal = false;
  @tracked displayAddModal = false;
  @tracked editButtonsActive = false;
  @tracked newBookmark;

  @service store;

  @action
  openAll(){
    this.args.category.hasMany("bookmarks").value().forEach(bookmark => {
      window.open(bookmark.url);
    })
  }

  @action
  toggleEditButtons(){
    this.editButtonsActive = !this.editButtonsActive;
  }

  @action
  edit(){

  }

  @action
  delete() {
    let bookmarks = this.args.category.hasMany("bookmarks").value();
    this.args.category.destroyRecord().then(() => {
      if(bookmarks){
        bookmarks.forEach((bookmark) => {
          bookmark.destroyRecord();
        });
      }
    });
  }

  // @action
  // newRecord(){
  //   this.newBookmark = this.store.createRecord("bookmark", {
  //     category: this.args.category
  //   })
  // }
  //
  // @action
  // cancelAdd(){
  //   this.newBookmark.rollbackAttributes();
  // }
  //
  // @action
  // add() {
  //   let bookmarks = this.args.category.hasMany("bookmarks").value();
  //   this.args.category.destroyRecord().then(() => {
  //     if(bookmarks){
  //       bookmarks.forEach((bookmark) => {
  //         // need access to the store
  //         bookmark.destroyRecord();
  //         // this.store.unloadRecord(bookmark);
  //       });
  //     }
  //   });
  // }
}
