import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { CoursesHttpService } from "./services/courses-http.service";
import { loadAllcoursesAction, loadedAllCoursesAction, saveEditedCourseAction } from "./courses.actions";
import { concatMap, map, mergeMap } from "rxjs/operators";

@Injectable()
export class CoursesEffect {

    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAllcoursesAction),
            concatMap((action) => {
                return this.coursesService.findAllCourses();
            }),
            map((courses) => loadedAllCoursesAction({courses}))
        )
    )

    editCourse$ = createEffect(() => 
        this.actions$.pipe(
            ofType(saveEditedCourseAction),
            concatMap(updateEntity => {
                return this.coursesService.saveCourse(updateEntity.course.id, updateEntity.course.changes)
            })
        )
    , {dispatch: false})

    constructor(private actions$: Actions, private coursesService: CoursesHttpService){}
}