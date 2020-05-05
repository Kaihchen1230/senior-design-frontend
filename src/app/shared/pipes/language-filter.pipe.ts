import { Pipe, PipeTransform } from '@angular/core';
import {Repo} from '../models/repo.model';

@Pipe({name: 'LanguageFilterPipe'})
export class LanguageFilterPipe implements PipeTransform {
    transform(repos: Repo[], selectedLanguage: string): Repo[] {
        return repos.filter(repo => {
            if (!selectedLanguage) {
                return true;
            }
            return repo.language === selectedLanguage;
        });
      }
}
