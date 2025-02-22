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
  selector: 'app-CV-290',
  templateUrl: './CV-290.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Cv290Component{
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
      s13_result:  [,Validators.required],
      s14_result:  [,Validators.required],
      s15_result:  [,Validators.required],
      s16_result:  [,Validators.required],
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
    let s13=data['s13_result'];
    let s14=data['s14_result'];
    let s15=data['s15_result'];
    let s16=data['s16_result'];
    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)&&(s16==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CV-290',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the CV-290 according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power Lamp', 'Press the power switch and verify that the power indicator lights up', `${s2}`],
            ['3', 'Cooling Fan', 'Cover the ventilation with hand and verify that ventilation is normal.', `${s3}`],
            ['4', 'Light Emission', 'Turn on jigs, inspect that light is emitted from the distal end', `${s4}`],
            ['5', 'Monitor Screen', 'Verify that endoscope image displayed on monitor screen.', `${s5}`],
            ['6', 'Auto-Brightness', 'Verify that the auto-brightness mode( IRIS mode indicator) is "AUTO" and the brightness level setting is "0".\nPlace the gloved palm over the distal end. move the palm at distance between 1 and 3 cm from the distal end.\nThe brightness of the palm image on the monitor screen is consistent.\nA light intensity of light emitted from the distal end changes on according to the level setting.\nPlace a gloved palm over of the distal end at a distance of approximately 3 cm.\n Cover the distal end and palm with cloth, press the brightness adjustment button on the light source.\nVerify that the brightness of the palm images display on the monitor changes according to level setting.', `${s6}`],
            ['7', 'Display Contents ', 'Inspect that all the alphanumeric character information is displayed correctly.\nInspect that the date is correct and time is correctly displayed up to minutes. \nInspect that memory capacity counter and CVP counter are displayed according to connected equipment.\nDisplay the palm on the monitor with the distal end. inspect that the endoscope image is displayed in normal color without noise.', `${s7}`],
            ['8', 'Freeze Function', 'On the keyboard, press the FREEZE key or a custom switch assigned with the FREEZE function. Inspect that the endoscope image freeze with short beep.\nPress the FREEZE key or custom switch again. Inspect that the frozen image returns to the live image.', `${s8}`],
            ['9','Release Function ', 'On the keyboard, press the RELEASE key or custom switch assigned to the RELEASE function. Inspect that the beep sounds and the endoscope image freeze in very short time,then returns to the live image.\nInspect that the image recording device specified as the image recording destination functions.\nInspect that counting on the image recording device counter increase each time the RELEASE function is activated.', `${s9}`],['10', 'PIP, POP', 'Press the PIP/POP ON button on the keyboard. Verified that the image is displayed in PIP mode.Press the PIP/POP mode button, verify that image display mode switches from PIP to POP.', `${s10}`],
            ['11', 'Orientation', 'Set orientation to ON, inspect that the image rotated by 180 degrees is displayed on the monitor. ', `${s11}`],
            ['12','Custom Switch ','Inspect the custom switches (Endoscope remote switch, footswitch, front panel custom button, keyboard custom key) function normally according to the assigned functions.',`${s12}`],
            ['13','Optical Digital','Inspect that the observation mode indicators light up on the front panel of the connected light source according the settings.\nOn the keyboard, press the NBI key or a custom switch assigned with NBI. Inspect that NBI mode is set with NBI displayed at the top right of the endoscope image on the monitor.',`${s13}`],
            ['14','Appearance Check','Inspect that the ventilation on the CV-190 is not clogged with dusts and/or foreign objects',`${s14}`],
            ['15','Power OFF','Press the power switch and verify that the CV-290 is turned off and the power indicator extinguishes',`${s15}`],
            ['16','Data Delete and Reset','Delete and Reset previous data, ie user setting, saved image, patient data etc',`${s16}`]

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
      {text:'Issue date : 16 Sep 2020',alignment:'right',fontSize:5,},{text:'REV NO : 01',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 16 Sep 2020',alignment:'right',fontSize:5,},{text:'REV NO : 01',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CV-290 _'+sno}`; // Custom file name
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
