import { Pipe, PipeTransform } from '@angular/core';
/*
Return the first 200 chars from the Repo Desciption
If length > 200, add "..." to the end
*/
@Pipe({name: 'RepoDesciptionPipe'})
export class RepoDesciptionPipe implements PipeTransform {
    transform(description: string, maxLength: number): string {
        if (!description) {
            return null;
        }
        let newDes: string = description.substring(0, maxLength);
        if (description.length > maxLength) {
            newDes += '...';
        }
        return newDes;
      }
}
