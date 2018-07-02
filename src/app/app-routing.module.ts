import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhilippinesComponent } from './philippines/philippines.component';
import { IndivRegionComponent } from './indiv-region/indiv-region.component';
import { IndivProvinceComponent } from './indiv-province/indiv-province.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/philippines', pathMatch: 'full' },
  { path: 'philippines', component: PhilippinesComponent },
  { path: 'region/:key', component: IndivRegionComponent },
  { path: 'province/:key', component: IndivProvinceComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PhilippinesComponent,
  IndivRegionComponent,
  IndivProvinceComponent,
  PageNotFoundComponent
];
