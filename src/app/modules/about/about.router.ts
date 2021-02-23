import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from '.';

import { AuthGuard } from '@app/modules/shared/providers';

const routes: Routes = [
    {
        path: 'about',
        component: ContainerComponent,
        canActivate: [AuthGuard],
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
export class AboutRoutingModule { }
