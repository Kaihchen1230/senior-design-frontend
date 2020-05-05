import { Pipe, PipeTransform } from '@angular/core';
import {Repo} from '../models/repo.model';

@Pipe({name: 'PlatformFilterPipe'})
export class PlatformFilterPipe implements PipeTransform {
    transform(repos: Repo[], platformSelected: string): Repo[] {
        return repos.filter(repo => {
            if (!platformSelected) {
                return true;
            }
            return repo.platform === platformSelected;
        });
      }
}
