import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorInterceptor } from '@app/projects/interceptors/error.interceptor';
import { ProjectsComponent } from '@app/projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { MapProjectsPipe } from 'src/app/projects/pipes/map-projects.pipe';

@NgModule({
  declarations: [ProjectsComponent, MapProjectsPipe],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
})
export class ProjectsModule {}
