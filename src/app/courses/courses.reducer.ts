import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { compareCourses, Course } from "./model/course";
import { createReducer, on } from "@ngrx/store";
import { loadAllcoursesAction, loadedAllCoursesAction } from "./courses.actions";
import { areCoursesLoadedSelector } from "./courses.selectors";

export interface CourseState extends EntityState<Course>{
    areCoursesLoaded: boolean
}

const adapter = createEntityAdapter<Course>(
    {
        sortComparer: compareCourses
    }
);

export const coursesFeatureKey = "courses";

export const courseInitalState = adapter.getInitialState({areCoursesLoaded: false});

export const coursesReducer = createReducer(
    courseInitalState,
    on(loadedAllCoursesAction, (state, action) => 
     adapter.setAll(action.courses, {
        ...state, 
        areCoursesLoaded: true
        })
    )
)

export const coursesSelectors = adapter.getSelectors();