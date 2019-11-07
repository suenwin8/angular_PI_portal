import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class SharedPipesModule {
    datePipe: any;

    public transformDate(mydate: DatePipe) {
        return this.datePipe.transform(mydate, 'yyyy MMM dd'); // whatever format you need.
      }
}
