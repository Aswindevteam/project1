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
  selector: 'app-CLV-S200-IR',
  templateUrl: './CLV-S200-IR.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Clvs200irComponent{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CLV-S200-IR',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the CLV-S200-IR according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power ON', 'Verify that the air vents on the chassis and rear panel of the CLV-S200-IR are not clogged with dusts and/or foreign substances.\nVerify that the lamp cover on the left side of the CLV-S200-IR is closed completely.\nPress the power switch on the CLV-S200-IR. Inspect the following items.The power indicator lights up.\nThe emergency lamp indicator “SPARE LAMP” is off on the control panel.\nPlace a hand in front of the air vents on the rear panel.\nVerify by feeling that the air is exhausted from the air vents.', `${s2}`],
            ['3', 'Lamp hour indicator', 'Inspect the lamp according to the lamp hour indicator.\nReplace the lamp under the following conditions:\n・The Indicator lights at “500h.”\n・The light intensity lowers.\n・ The newly replaced lamp does not light properly', `${s3}`],
            ['4', 'Main Lamp', 'With the light not illuminated from the distal end, press the LAMP button on the control panel.\n・Verify that the ON indicator for the LAMP button lights up.\n・ Verify that the light is illuminated from the distal end.\n・Press and hold the LAMP button for one second.\n・Verify that the light from the distal end extinguishes.', `${s4}`],
            ['5', 'Brightness adjustment (Brightness mode selection function)', 'Press the AUTO/MAN. brightness button.\nInspect the following items:\n・Brightness mode switches between “AUTO” and “MAN.” with a beep sound.\n・The brightness mode indicator “AUTO” or “MAN.” lights up according to brightness  mode setting', `${s5}`],
            ['6', 'Auto-brightness adjustment', 'Connect the rigid telescope to the CLV-S200-IR with the light guide cable.\nConnect the camera head to the camera control unit.\nTurn ON the CLV-S200-IR and camera control unit.Press the LAMP button.\nVerify that the light is illuminated from the distal end.\nPress the brightness mode button to switch to “AUTO.”\n Point the distal end toward an object. Move the distalend closer to the object and then away from it within a distance of 5 to 60 mm.\nVerify that the brightness of the image on the monitorremains the same regardless of the distance between the object and distal end.\nHold the distal end at a distance of 30 to 40 mm from the object.\nPress the brightness adjustment buttons (“+” and “-“). Inspect the following items.\nWhen either of the brightness buttons is pressed, a beep sounds and the brightness increases or decreases.\nWhen either of the buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\nVerify that the light illuminated from the distal end increases or decreases according to the brightness setting.', `${s6}`],
            ['7', 'Manual brightness adjustment', 'Press the LAMP button.\nVerify that the light is illuminated from the distal end.\nPress the brightness mode button to switch to “MANU.”\nHold the distal end at a distance of 30 to 40 mm from the object.\nPress the brightness adjustment buttons (“+“ and “-”). \nInspect the following items.\n When either of the brightness buttons is pressed, a beep sounds and the brightness increases or decreases.\nThe brightness indicator increases and decreases accordingly.\nWhen either of the brightness adjustment buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\nThe brightness of the light illuminated from the endoscope distal end increases or decreases according to the brightness setting.', `${s7}`],
            ['8','NBI observationfunction', 'Verify that the observation mode button lights up.\nPress the observation mode button. Inspect the following items:\nThe observation mode indicator ON lights up.\nObservation mode switches to NBI observation.\nPress the observation mode button. Inspect the following items:\nThe observation mode indicator “STBY” lights up.\nObservation mode returns to WLI observation mode', `${s8}`],
            ['9', 'IR operation check', '\nPress the "observation mode select button". "IR" of the "observation mode selection indicator" should light up.\nWhen you press the "observation mode button" while "IR" of the "observation mode selection indicator" is ON, "Standby" of the "observation mode indicator" should go out and "ON" should light up.\nThe injection light from the distal end of the rigid scope should change from white to blue green.\nNo noise should be generated when the TURRET moves.\nWhen you press the "observation mode button" again,"ON" of the "observation mode indicator" should go out and "Standby" should light up.\nThe injection light from the distal end of the rigid scope should change from blue green to white.\nNo noise should be generated when the TURRET moves', `${s9}`],
            ['10', 'High intensity illumination mode', 'Press the AUTO/MANU brightness button to switch to “MANU”- Verify that the MANU indicator lights up.\nPress the brightness adjustment button (“+“ or “-”) to set the brightness level to 0. Press the intensity mode button to set high intensity mode.\nInspect the following item.\nThe high intensity mode indicator (HIGH) lights up.\nThe light illuminated from the distal end becomes brighter.\nPress the button again to switch to normal intensity mode.\nInspect the following items.\nThe high intensity indicator extinguishes.\nThe light intensity of the illumination from the distal end lowers.\nPress the AUTO/MAN button to switch to AUTO.\nVerify that the AUTO indicator lights up.', `${s10}`],
            ['11','Power OFF ','・Press the power switch on the CLV-S200-IR..\n・ Verify that the CLV-S200-IR. is turned off and the power indicator for the power switch extinguishes',`${s11}`]

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
      {text:'Issue date : 20 30 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 30 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CLV-S200-IR_'+sno}`; // Custom file name
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
