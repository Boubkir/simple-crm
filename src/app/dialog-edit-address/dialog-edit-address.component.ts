import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent {
  user: User;
  birthDate: Date;
  loading: boolean = false;
  userId: string;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogEditAddressComponent>
  ) {}

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.onNoClick();
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
