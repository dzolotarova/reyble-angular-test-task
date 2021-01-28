import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectResponse } from '@app/projects/models/projects.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects$: Observable<ProjectResponse[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.projects$ = this.initProjects();
  }

  private initProjects(): Observable<ProjectResponse[]> {
    return this.activatedRoute.data.pipe(map((projects) => projects.data));
  }
}
