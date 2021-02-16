import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';
import {HeroesComponentComponent} from './heroes-component/heroes-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponentComponent,
  },
  {
    path: '**',
    redirectTo: '', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
