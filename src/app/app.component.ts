import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FavoriteChangedArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'weektwo-angular';
  title!: string;

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedArgs) {
    console.log("Favorite Changed: ", eventArgs);
  }

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  courses = [ 1, 2 ];

}
