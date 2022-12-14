import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputUrlComponent } from './output-url/output-url.component';

const routes: Routes = [
  {path:':id', component: OutputUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
