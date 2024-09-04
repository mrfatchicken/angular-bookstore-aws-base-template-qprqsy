import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book-store',
  },
  {
    path: 'book-store',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./book-store/book-store.module').then((m) => m.BookStoreModule),
  },
  {
    path: 'log-in',
    component: LogInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
