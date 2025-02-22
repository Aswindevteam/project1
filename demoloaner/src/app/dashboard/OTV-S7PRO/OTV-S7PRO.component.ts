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
  selector: 'app-OTV-S7PRO',
  templateUrl: './OTV-S7PRO.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Otvs7proComponent{
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
      s12_result:  [,Validators.required],
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
    let s12=data['s12_result'];
    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)&&(s12==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR OTV-S7PRO',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','The OTV-S7PRO must be cleaned and disinfected according to instruction described in the instruction manual.', `${s1}`],
            ['2', 'Power ON', 'Connect the light source to the instrument using the light source cable or light control cable.\nConnect the endoscope and the keyboard to OTV-S7Pro.\nPress the power switch of the OTV-S7Pro and the power switch of the light source.\nConfirm that the power indicator is illuminated.', `${s2}`],
            ['3', 'Monitor', 'Confirm that the monitor displays the endoscopic image.\nHold the endoscope’s distal end towards your palm.\nConfirm that the monitor displays the image of palm normally.', `${s3}`],
            ['4', 'Monitor Display', 'When no text (patient data) is shown on the monitor, change the display to full-patientdata display.\nConfirm that the date and time are correct.\nConnect the video printer, the digital filing system, and the videocassette recorder to the instrument. CVP counter, D.F counter, and Indication of VCR should be displayed on the monitor.', `${s4}`],
            ['5', 'Brightness control', 'Set the auto/manual brightness button of the xenon light source to “AUTO” mode.\nPress the brightness adjustment buttons to set the brightness level to “0”.\nPlace the endoscope’s distal end towards your palm. Move the distal end of the endoscope between 1 cm and 3 cm from your palm.\nCheck the brightness of the image on the monitor.\nConfirm that the brightness of the image on the monitor remains constant regardless of the distance between the palm and distal end.', `${s5}`],
            ['6', 'FREEZE', 'Press the “FREEZE” key on the keyboard.\nConfirm that the live endoscopic image freezes and a short beep is heard.\nPress the “FREEZE” key again.\nConfirm that the frozen image returns to the live image.\nAssign the freeze function to the scope switches and/or foot switches, and confirm that these switches function properly', `${s6}`],
            ['7', 'RELEASE', 'Press the “RELEASE” key on the keyboard.\nConfirm that the live image freezes for a short time and a beep is heard.\n(*)Turn on the power of the selected recording device.\n(*)Confirm that the counter for the recording devices,which are displayed on the monitor, increments by one every time the RELEASE function is activated.\nConfirm the function of the scope switches and/or the foot switches work properly,when the release function is assigned to those switches', `${s7}`],
            ['8','PinP (Picture in Picture)function', 'Press the PinP button on the front panel. Confirm that the image is displayed on the monitor as the PinP image.', `${s8}`],
            ['9', ' Orientation function', 'Assign the orientation function to the scope switches and/or the foot switches.\nPress the scope switch and/or the foot switch to which the orientation function is assigned.\nConfirm that the endoscopic image on the monitor rotated by 180 degrees.\nConfirm that the rotated image returns to the normal image when the scope switch or the foot switch is pressed again.', `${s9}`],
            ['10', 'NBI observation', 'Assign NBI observation mode to the scope switch and/or the foot switch.\nPress the scope switch and/or the foot switch to which the NBI observation mode is assigned. \nConfirm the following:\nCheck if “NBI” is displayed on the upper right corner of the endoscopic image on the monitor to confirm NBI observation mode is activated. Confirm that the color of the light emits from the endoscope’s distal end changes to blue.', `${s10}`],
            ['11','Custom switch','Confirm that the preset switches (the remote switches and the foot switches of the endoscope) work properly as assigned.',`${s11}`],
            ['12',' Turn off the power','Press the power switch of the OTV-S7Pro.\nConfirm that the power of the OTV-S7Pro is turned off, and the power switch indicator goes out.',`${s12}`]

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
      {text:'Issue date : 05 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 05 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'OTV-S7PRO_'+sno}`; // Custom file name
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
