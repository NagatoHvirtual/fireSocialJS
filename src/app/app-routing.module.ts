import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Code404Component } from './modules/code404/code404.component';

const routes: Routes = [
  { path: '', data: { title: 'FireSocial', route: 'public' }, loadChildren: 'src/app/public/public.module#PublicModule' },
  { path: '', data: { title: 'FireSocial', route: 'private' }, loadChildren: 'src/app/private/private.module#PrivateModule' },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    public router: Router,
    public firebaseAuth: AngularFireAuth
  ) {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      let publicRoute: Route = this.router.config.find(route => route.data.route === 'public'),
        privateRoute: Route = this.router.config.find(route => route.data.route === 'private');

      if (user) {
        this.router.config.splice(this.router.config.indexOf(publicRoute), 0);
        this.router.config = [privateRoute].concat(this.router.config);
      } else {
        this.router.config.splice(this.router.config.indexOf(privateRoute), 0);
        this.router.config = [publicRoute].concat(this.router.config);
      }
      this.router.resetConfig(this.router.config);
      document.location.href = '#/';
      this.router.navigateByUrl('/');
    });
  }
}