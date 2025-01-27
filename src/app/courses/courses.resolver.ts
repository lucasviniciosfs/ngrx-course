
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { Store } from '@ngrx/store';
import { loadAllcoursesAction } from './courses.actions';
import { finalize, first, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CoursesResolver implements Resolve<any> { 

    loading = false;
    constructor(private store: Store){}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.store.pipe(
            tap(() => {

                if(!this.loading){
                    this.loading = true;
                    this.store.dispatch(loadAllcoursesAction())
                }

            }),
            first(),
            finalize(() => this.loading = false)
        );
    }
}