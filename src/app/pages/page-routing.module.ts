import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index5Component } from './index5/index5.component';

const routes: Routes = [
    {
        path: '',
        component: Index5Component
    },
    {
        path: 'index-5',
        component: Index5Component
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
