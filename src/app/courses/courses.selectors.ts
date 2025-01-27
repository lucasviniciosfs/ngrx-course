import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey, coursesSelectors, CourseState } from "./courses.reducer";

export const selectorsCourseState = createFeatureSelector<CourseState>(coursesFeatureKey);

export const selectAllCourses = createSelector(
    selectorsCourseState,
    coursesSelectors.selectAll
)