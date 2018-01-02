import {Component} from '@angular/core';
import {RegistrationDialogDirective} from './registration-dialog.directive';
import {RegistrationService} from './registration.service';
import {UsersListService} from './users-list.service';
import {MatTableDataSource} from '@angular/material';
import {Row} from './users-list.types';

@Component({
  selector: 'el-users2-list',
  styleUrls: ['users-list.css'],
  template: `
    <div class="example-container mat-elevation-z8">
      <div class="example-header">
        <mat-form-field>
          <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
        </mat-form-field>
      </div>

      <mat-table #table [dataSource]="dataSource">

        <!-- Position Column -->
        <ng-container matColumnDef="firstName">
          <mat-header-cell *matHeaderCellDef>First Name</mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element.firstName}}</mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="lastName">
          <mat-header-cell *matHeaderCellDef>Last Name</mat-header-cell>
          <mat-cell *matCellDef="let element"> {{element.lastName}}</mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      </mat-table>
    </div>
  `
})
export class UsersListComponent {
  public displayedColumns = ['firstName', 'lastName'];
  public dataSource = new MatTableDataSource();

  constructor(public usersListService: UsersListService) {
    usersListService.rowsObservable.subscribe((rows: Row[]) => {
      this.dataSource = new MatTableDataSource<Row>(rows);
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
