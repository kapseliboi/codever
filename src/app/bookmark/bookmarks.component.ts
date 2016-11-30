import {Component, OnInit} from "@angular/core";
import {Bookmark} from "../model/bookmark";
import {Observable} from "rxjs";
import {BookmarkStore} from "./store/BookmarkStore";
import {List} from "immutable";

@Component({
  selector: 'my-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements  OnInit{

  allBookmarks: Observable<List<Bookmark>>;

  constructor(private bookmarkStore: BookmarkStore) { }

  getBookmarks(): void {
    this.allBookmarks = this.bookmarkStore.getBookmarks();
    console.log('BookmarksComponent.getBookmarks - allBookmarks');
    console.log(this.allBookmarks);
  }

  ngOnInit(): void {
    this.getBookmarks();
  }

}
