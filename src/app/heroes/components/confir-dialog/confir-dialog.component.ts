import { Component, Inject } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confir-dialog',
  templateUrl: './confir-dialog.component.html',
  styles: ``
})
export class ConfirDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

}
