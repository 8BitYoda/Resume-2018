import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    // TODO: make more robust
    // assumes number is only 10 numbers, not counting on extensions and country codes.

    if (value.length === 10) {
      // rewrite with regex
      const areaCode: string = value.substr(0, 3);
      const firstThree: string = value.substr(3, 3);
      const lastFour: string = value.substr(6);
      return '(' + areaCode + ') ' + firstThree + '-' + lastFour;
    }
    return value;
  }
}
