import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'projects',
    loadChildren: () => import('@app/projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthenticationGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
