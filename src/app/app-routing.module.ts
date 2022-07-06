import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './components/client/client-layout/client-layout.component';

const routes: Routes = [
  { path: '', component: ClientLayoutComponent },
  { path: 'heroes', component: ClientLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
