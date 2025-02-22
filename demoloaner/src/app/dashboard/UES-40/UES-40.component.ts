import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import { CommonModule, formatDate } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Content } from 'pdfmake/interfaces';

@Component({
  selector: 'app-UES-40',
  templateUrl: './UES-40.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Ues40Component{
  startTime:any;
  endTime:any;
  cdsDate:any;
  startDate = formatDate(new Date(), 'dd/MM/yyyy', 'en-US')
  formGroup: any;
  de_lo:any;
  remarks:any;

  constructor(private fb: FormBuilder,private router:Router,private renderer :Renderer2,private location:Location) {
    this.formGroup = this.fb.group({
      delo:[,Validators.required],
      sn_o:[,Validators.required],
      cds_date:[,Validators.required],
      cds_by:[,Validators.required],
      insBy:[,Validators.required],

      s1_result: [,Validators.required],
      s2_result:  [,Validators.required],
      s3_result: [,Validators.required],
      s4_result:  [,Validators.required],
      s5_result:  [,Validators.required],
      s6_result:  [,Validators.required],
      s7_result:  [,Validators.required],
      s8_result:  [,Validators.required],
      s9_result:  [,Validators.required],
      s10_result:  [,Validators.required],
      s11_result:  [,Validators.required],

      remarks:[]
    });
  }

  ngOnInit(){
    this.formGroup.controls['delo'].setValue('Demo');
    this.formGroup.get('remarks').valueChanges.subscribe((value:any)=>{
      this.remarks=value
    })
    this.formGroup.get('delo').valueChanges.subscribe((value:any)=>{
      this.de_lo=value
    })
    const path=this.location.path();
    sessionStorage.setItem('path',path)
    var s_time = new Date();
    this.startTime=s_time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  download() {
    if(this.remarks==undefined){
      this.remarks=''
    }
    const data=this.formGroup.value;
  if(this.formGroup.status=='INVALID'){
    alert('fill the all field')
  }else{
    var f_time = new Date();
    this.endTime=f_time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    let s1=data['s1_result'];
    let s2=data['s2_result'];
    let s3=data['s3_result'];
    let s4=data['s4_result'];
    let s5=data['s5_result'];
    let s6=data['s6_result'];
    let s7=data['s7_result'];
    let s8=data['s8_result'];
    let s9=data['s9_result'];
    let s10=data['s10_result'];
    let s11=data['s11_result'];

    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR UES-40',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
       {
       table: {
           widths: [125, 125, 125, 125],
           body: [
               [ { text: 'DEMO/LOANER', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data['delo']}`,alignment:'center'},{ text: 'S.No', fillColor: '#CCCCCC' ,alignment:'center'},{ text: `${sno}`,alignment:'center' }],
               [ { text: 'CDS DATE', fillColor: '#CCCCCC',alignment:'center' },{ text: `${this.cdsDate}`,alignment:'center' }, { text: 'CDS BY', fillColor: '#CCCCCC',alignment:'center' },{ text: `${data['cds_by']}`, alignment:'center'}]
           ]
       }
   },
   {
    table: {
        widths: [25, 125, 275, 75],
        body: [
            [ { text: 'S.N', fillColor: '#CCCCCC', alignment:'center' },{ text: 'INSPECTION ITEM ',fillColor: '#CCCCCC' ,alignment:'center'},{ text: 'INSPECTION STANDARD', fillColor: '#CCCCCC' ,alignment:'center'},{ text: 'INSEPECTION RESULT',alignment:'center',fillColor: '#CCCCCC'  }],
            ['1', 'Cleaning & Disinfection','Clean and disinfect the UES-40 according to the instructions in the corresponding Instructions Manual', `${s1}`],
            ['2', 'Exterior of UES-40', 'Inspect the UES-40 exterior for noticeable scratches, grime, and/or deformation that may affect the functionality', `${s2}`],
            ['3', 'Power-on operation check', 'The software ROM version number is indicated on the Bipolar output setting indicator.\nThe front-panel LEDs must remain fully illumiated for approximately 3 seconds.\nA low tone sounds, followed by high tone.', `${s3}`],
            ['4', 'Fan operation', 'The UPHF40OT00/01U (oscillation-board) fan must revolve.\nThe converter fan must also revolve.', `${s4}`],
            ['5', 'Panel switch check', 'A tone must e sounded when each switch is pressed.\nWhen the switches for each type of mode are pressed, the corresponding LEDs must be illuminated and extinguished properly.\nWhen each output control switch (▲/▼) is pressed, the corresponding digit of the 7-segment LED must increase or decrease.\nWhen the Foot-switch select switch is pressed, the corresponding LED toggles between functions.\nWhen the select or Memory switches are pressed, the corresponding 7-segment LEDs must be displayed accordingly.', `${s5}`],
            ['6', 'Single type patient plate detection check', 'The alarm must be audible.\nThe warning indicator is illuminated and the monopolar coagulation output setting indicator displays the error code "01". ', `${s6}`],
            ['7', 'Split type patient plate detection check', 'The alarm must be audible.\nThe warning indicator is illuminated and the monopolar coagulation output setting indicator displays the error code "01"', `${s7}`],
            ['8','Power measurements under a 300Ω standard load', 'The volume must change when the volume knob is turned.Both handpiece must be capable of producting cutting and coagulation output.\n\nThe power in Pure mode (output level 150W) must be 120 to 180W.\n\nThe power in Pure mode (output level 150W) must be 120 to 180W.\n\nThe power in Coag 1 mode (output level 60W) must be 48 to 72W.\n\nThe power in Coag 1 mode (output level 120W) must be 96 to 144W.\n\nThe power in Blend mode (output level 125W) must be 100 to 150W.\n\nThe power in Blend mode (output level 250W) must be 200 to 300W\n\nThe power in Coag 2 mode (output level 60W) must be 48 to 72W.\n\nThe power in Coag 2 mode (output level 120W) must be 96 to 144W.', `${s8}`],
            ['9', 'Power measurements under a 200Ω standard load(for monopolar mode)', 'The MAJ-1258 coagulation pedal must be capable of producting output\n\nThe power in Spray mode (output level 60W) must be 48 to 72W.', `${s9}`],
            ['10', 'Power measurements under a 100Ω standard load (for bipolar mode)', 'The MAJ-1258 coagulation pedal must be capable of producting output\n\nThe power in Soft 1 mode (output level 45W) must be 36 to 54W\n\nThe power in Soft 1 mode (output level 90W) must be 72 to 108W.', `${s10}`],
            ['11','Power measurements under a 100Ω standard load (for saline mode)','The UES-40 must automatically switch to saline mode when a cord is plugged into the saline port.\nIf open output is continued, the alarm must sound and the error message "02" must be displayed on the monopolar coagulation output setting.\nThe MAJ-1258 cut pedal must be capable of producing output.\n\nThe power in Blend mode (output level 160W) must be 128 to 192W.\n\nThe power in Blend mode (output level 320W) must be 256 to 384W.',`${s11}`],


        ],
    }
},
       {
               table: {
                   widths: [125, 125, 125, 125],
                   body: [
                      [ {text: 'INSPECTION DATE', fillColor: '#CCCCCC',alignment:'center'},{ text: `${this.startDate}`},{ text: 'INSPECTION BY', fillColor: '#CCCCCC' },{ text: `${data['insBy']}`,alignment:'center'  }],
                       [{text:'START TIME',fillColor: '#CCCCCC',alignment:'center'}, `${this.startTime}`, { text: 'FINAL RESULT',fillColor: '#CCCCCC', rowSpan: 2 },{text:`${overRes}`, rowSpan: 2,alignment:'center'}],
                       [{text:'END TIME',fillColor: '#CCCCCC',alignment:'center'}, `${this.endTime}`, '', '']
                   ]
               }
        },
       {
               table: {
                   widths: [527],
                   body: [
                      [{text:`REMARKS:${this.remarks}`,margin:[0,0,0,30]}]
                   ]
               }
        },
        {text: '*This is an electronically generated report, hence does not require a signature',fontSize:6   },


   ];

   if(image_data_url){
    content.unshift(
      {text:'Issue date : 20 Mar 2019',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 20 Mar 2019',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'UES-40_'+sno}`; // Custom file name
      const newWindow = window.open(URL.createObjectURL(blob));
      // newWindow.document.title = fileName;
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = fileName;
      downloadLink.click();
    });

   // Wrap the content array in a dd object

       this.router.navigate(['/'])
     }

   }
   ngOnDestroy(){
    sessionStorage.removeItem('image_data_url')
   }
}
