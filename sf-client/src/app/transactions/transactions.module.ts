import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'transactions', component: TransactionsListComponent},
    ])
  ],
  declarations: [TransactionsListComponent]
})
export class TransactionsModule { }
