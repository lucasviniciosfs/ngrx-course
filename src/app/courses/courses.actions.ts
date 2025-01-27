import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllcoursesAction = createAction(
    "[Courses Resolver] Load All Courses"
)

export const loadedAllCoursesAction = createAction(
    "[Courses Effect] Loaded Courses",
    props<{courses: Course[]}>()
)