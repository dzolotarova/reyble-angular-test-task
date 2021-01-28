import { Pipe, PipeTransform } from '@angular/core';
import { Project, ProjectResponse } from '@app/projects/models/projects.model';

@Pipe({
  name: 'mapProjects',
})
export class MapProjectsPipe implements PipeTransform {
  transform(projects: ProjectResponse[]): Project[] {
    return projects.map((project) => {
      const {
        archived,
        created_at,
        default_branch,
        description,
        disabled,
        fork,
        full_name,
        has_issues,
        id,
        language,
        license,
        name,
        open_issues,
        pushed_at,
        size,
        stargazers_count,
        updated_at,
        url,
        watchers,
      } = project;

      return {
        archived,
        created_at,
        default_branch,
        description,
        disabled,
        fork,
        full_name,
        has_issues,
        id,
        language,
        license,
        name,
        open_issues,
        pushed_at,
        size,
        stargazers_count,
        updated_at,
        url,
        watchers,
      };
    });
  }
}
