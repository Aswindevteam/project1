import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-more-page',
  templateUrl: './add-more-page.component.html',
  styleUrls: ['./add-more-page.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true
})
export class AddMorePageComponent {
  acceptOnlyNumber = '[0-9\/]*'
  sc1: boolean = false;
  sc2: boolean = false;
  clicked: boolean = true;
  formGroup!: FormGroup;
  sc1Grup!: FormGroup;
  sc2Grup!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddMorePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      sn_01: [, Validators.required],
      sn_02: [, Validators.required]
    })
    this.sc1Grup = this.fb.group({
      s1: [, Validators.required],
      s2: [, Validators.required],
      s3: [, Validators.required],
      s4: [, Validators.required],
      s5: [, Validators.required],
      s6: [, Validators.required],
      s7: [, Validators.required],
      s8: [, Validators.required],
      s9: [, Validators.required],
      s10: [, Validators.required],
      s11: [, Validators.required],
      s12: [, Validators.required],
      s13: [, Validators.required],
      s14: [, Validators.required],
      s15: [, Validators.required],
      s16: [, Validators.required],
      s17: [, Validators.required],
      s18: [, Validators.required],
      s19: [],
      s20: [],
      s21: [],
      s22: [],
      s23: []

    })
    this.sc2Grup = this.fb.group({
      s1: [, Validators.required],
      s2: [, Validators.required],
      s3: [, Validators.required],
      s4: [, Validators.required],
      s5: [, Validators.required],
      s6: [, Validators.required],
      s7: [, Validators.required],
      s8: [, Validators.required],
      s9: [, Validators.required],
      s10: [, Validators.required],
      s11: [, Validators.required],
      s12: [, Validators.required],
      s13: [, Validators.required],
      s14: [, Validators.required],
      s15: [, Validators.required],
      s16: [, Validators.required],
      s17: [, Validators.required],
      s18: [],
      s19: [],
      s20: [],
      s21: [],

    })
  }

  scfun1() {
    this.clicked = false
    this.sc1 = true
  }
  scfun2() {
    this.clicked = false
    this.sc2 = true
  }
  onNoClick(): void {
    this.clicked = true;
    this.sc1 = this.sc2 = false;
  }
  ngOnInit() {
  }
  sc1Submit() {
    if ((!this.formGroup.valid) || (!this.sc1Grup.valid)) {
      alert('fill all fields')
    } else {
      const data = {
        head: this.formGroup.getRawValue(),
        body: this.sc1Grup.getRawValue()
      }
      this.download(data)
      sessionStorage.setItem('data', 'sc1')
    }
  }
  sc2Submit() {
    if ((!this.formGroup.valid) || (!this.sc2Grup.valid)) {
      alert('fill all fields')
    } else {
      const data = {
        head: this.formGroup.getRawValue(),
        body: this.sc2Grup.getRawValue()
      }
      this.download(data)
      sessionStorage.setItem('data', 'sc2')
    }
  }
  download(data: any) {
    this.dialogRef.close('true');
    sessionStorage.setItem('addmore', JSON.stringify(data))
    this.onNoClick()

  }
}
