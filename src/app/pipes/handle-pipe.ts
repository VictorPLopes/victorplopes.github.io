import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handle',
})
export class HandlePipe implements PipeTransform {
  transform(value: string): string {
    const trimmedHandle: string = value.trim();
    return trimmedHandle.startsWith('@') ? trimmedHandle.replace('@', '') : trimmedHandle;
  }
}
