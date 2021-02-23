import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from '.';
import { AuthGuard } from '../authentication/providers/auth.guard';

const routes: Routes = [
    {
        path: 'contact',
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
export class ContactRoutingModule { }
