import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectResponse } from 'src/app/projects/models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly mainUrl = 'https://api.github.com/users/dzolotarova/repos';

  constructor(private httpClient: HttpClient) {}

  getProjects(): Observable<ProjectResponse[]> {
    return this.httpClient.get<ProjectResponse[]>(this.mainUrl);
  }
}
