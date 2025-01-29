import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
import { Update } from "@ngrx/entity";

export const loadAllcoursesAction = createAction(
    "[Courses Resolver] Load All Courses"
)

export const loadedAllCoursesAction = createAction(
    "[Courses Effect] Loaded Courses",
    props<{courses: Course[]}>()
)

export const saveEditedCourseAction = createAction(
    "[Edit Course Modal] Edit Course",
    props<{course: Update<Course>}>()
)