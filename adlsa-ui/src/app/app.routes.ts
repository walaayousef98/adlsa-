import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './core/layout/root/root.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/feature.module').then(m => m.FeatureModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

