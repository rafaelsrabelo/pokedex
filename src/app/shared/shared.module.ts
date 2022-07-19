import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokerHeaderComponent } from './poker-header/poker-header.component';



@NgModule({
  declarations: [
    PokerHeaderComponent
  ],
  exports: [
    PokerHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
