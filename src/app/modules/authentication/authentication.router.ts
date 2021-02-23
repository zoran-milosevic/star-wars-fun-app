import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent, LogoutComponent } from '.';

const routes: Routes = [
    {
        path: 'login',
        component: ContainerComponent,
        children: [

        ]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        children: [

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule { }
