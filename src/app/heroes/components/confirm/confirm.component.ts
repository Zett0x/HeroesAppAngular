import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  delete(){
    this.dialogRef.close(true);

  }
  close(){

    this.dialogRef.close();

  }

}
