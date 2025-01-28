import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey, coursesSelectors, CourseState } from "./courses.reducer";

export const selectorsCourseState = createFeatureSelector<CourseState>(coursesFeatureKey);

export const selectAllCourses = createSelector(
    selectorsCourseState,
    coursesSelectors.selectAll
)

export const selectBeginner = createSelector(
    selectAllCourses,
    (courses) => courses.filter(course => course.category === "BEGINNER")
)

export const selectAdvanced = createSelector(
    selectAllCourses,
    (courses) => courses.filter(course => course.category === "ADVANCED")
)

export const selectPromo = createSelector(
    selectAllCourses,
    (courses) => courses.filter(course => course.promo).length
)

export const areCoursesLoadedSelector = createSelector(
    selectorsCourseState,
    (state) => state.areCoursesLoaded
)