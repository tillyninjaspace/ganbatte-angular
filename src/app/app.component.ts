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

  courses: any;

   onAdd() {
     this.courses.push({id: 4, name: 'course4'});
   }

   onChange(course: any) {
     course.name = 'UPDATED';
   }

   loadCourses() {
    this.courses = [
        {id: 1,name: "course1"},
        {id: 2,name: "course2"},
        {id: 3,name: "course3"},
       ];
   }

   trackCourse(index: number, course: any) {
    return course? course.id : undefined;
   }

  viewMode = 'map';

}
