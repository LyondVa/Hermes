import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    InfiniteScrollDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
