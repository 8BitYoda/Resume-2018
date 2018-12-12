import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    const patrn = /^(\d{1})?(\d{3})??(\d{3})(\d{4})$/;

    if (patrn.test(value)) {
      const arr: Array<any> = value.match(patrn);

      if (arr[1]) {
        return (
          '+' + arr[1] + ' (' + arr[2] + ') ' + ' ' + arr[3] + '-' + arr[4]
        );
      } else {
        if (arr[2]) {
          return '(' + arr[2] + ') ' + ' ' + arr[3] + '-' + arr[4];
        } else {
          return arr[3] + '-' + arr[4];
        }
      }
    }
    return value;
  }
}
