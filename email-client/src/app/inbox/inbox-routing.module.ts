import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { path: ':id', component: EmailShowComponent},
      { path: '', component: PlaceholderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
