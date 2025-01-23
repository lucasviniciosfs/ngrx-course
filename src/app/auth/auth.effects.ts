import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginAction, logoutAction } from "./auth.actions";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(   
            ofType(loginAction),
            tap((user) => {
                localStorage.setItem("user", JSON.stringify(user.user))
                this.router.navigateByUrl('courses')
            })
        )
    }, {dispatch: false});

    logout$ = createEffect(() => {
        return this.actions$.pipe(   
            ofType(logoutAction),
            tap(() => {
                localStorage.removeItem("user");
                this.router.navigateByUrl('')
            })
        )
    }, {dispatch: false});

    constructor(private actions$: Actions, private router: Router){}
}