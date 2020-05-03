import { Pipe, PipeTransform } from '@angular/core';
/*
Return the first 200 chars from the Repo Desciption
If length > 200, add "..." to the end
*/
@Pipe({name: 'RepoDesciptionPipe'})
export class RepoDesciptionPipe implements PipeTransform {
    transform(description: string): string {
        let newDes: string = description.substring(0, 200);
        if (description.length > 200) {
            newDes += '...';
        }
        return newDes;
      }
}
