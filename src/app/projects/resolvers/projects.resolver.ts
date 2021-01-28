import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectResponse } from '@app/projects/models/projects.model';
import { ProjectsService } from '@app/projects/services/projects.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsResolver implements Resolve<ProjectResponse[]> {
  constructor(private projectsService: ProjectsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectResponse[]> {
    return this.projectsService.getProjects();
  }
}
