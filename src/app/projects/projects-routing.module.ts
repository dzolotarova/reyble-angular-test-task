import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from '@app/projects/projects.component';
import { ProjectsResolver } from '@app/projects/resolvers/projects.resolver';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    {
      path: 'projects',
      component: ProjectsComponent,
      data: { title: marker('Projects') },
      resolve: { data: ProjectsResolver },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProjectsRoutingModule {}
