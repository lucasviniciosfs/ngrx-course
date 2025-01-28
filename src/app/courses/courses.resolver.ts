
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { select, Store } from '@ngrx/store';
import { loadAllcoursesAction } from './courses.actions';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { areCoursesLoadedSelector } from './courses.selectors';

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<any> { 

    loading = false;
    constructor(private store: Store){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.store.pipe(
            select(areCoursesLoadedSelector),
            tap((areCoursesLoaded) => {

                if(!this.loading && !areCoursesLoaded){
                    this.loading = true;
                    this.store.dispatch(loadAllcoursesAction())
                }

            }),
            filter((arecoursesloaded) => arecoursesloaded),
            first(),
            finalize(() => this.loading = false)
        );
    }
}