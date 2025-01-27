import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Course } from "./model/course";
import { createReducer, on } from "@ngrx/store";
import { loadAllcoursesAction, loadedAllCoursesAction } from "./courses.actions";

export interface CourseState extends EntityState<Course>{}

const adapter = createEntityAdapter<Course>();

export const coursesFeatureKey = "courses";

export const courseInitalState = adapter.getInitialState();

export const coursesReducer = createReducer(
    courseInitalState,
    on(loadedAllCoursesAction, (state, action) => 
     adapter.setAll(action.courses, state)
    )
)

export const coursesSelectors = adapter.getSelectors();