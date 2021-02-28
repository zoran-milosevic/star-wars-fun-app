import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent, OverviewComponent, DetailComponent } from '.';

import { AuthGuard } from '@app/modules/shared/providers';

const routes: Routes = [
    {
        path: 'home',
        component: ContainerComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
            { path: 'detail/:resource/:id', component: DetailComponent, canActivate: [AuthGuard] }
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
export class MainRoutingModule { }
