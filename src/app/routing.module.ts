import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from '@app/modules/main'

import { AuthGuard } from './modules/authentication/providers/auth.guard';

const routes: Routes = [
    { path: '', component: ContainerComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }
