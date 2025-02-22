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
  selector: 'app-CLV-180',
  templateUrl: './CLV-180.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Clv180Component{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CLV-180',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the CLV-180 according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power ON', 'Verify that the air vents on the chassis and rear panel of the CLV-180 are not clogged with dusts and/or foreign substances.\n- Verify that the lamp cover on the left side of the CLV-180is closed completely.\n-Press the power switch on the CLV-180 with no endoscope connected.Inspect the following items:\n- The power indicator lights up.\n- The indicators on the control panel light up normally. If the indicators on the control panel blink, it is likely that the CLV-180 is defective.\n-Press the power switch to turn OFF the CLV-180.\n-Connect an endoscope to the CLV-180 and turn ON the CLV-180.\n- Place a hand in front of the air vents on the chassis and rear panel.\n-Verify by feeling that the air is exhausted from the air vents.', `${s2}`],
            ['3', 'Lamp hour indicator', 'Inspect the lamp according to the lamp hour indicator.\nReplace the lamp under the following conditions:\n-The Indicator lights at “500h.”\n-The light intensity lowers.\n- The newly replaced lamp does not light properly', `${s3}`],
            ['4', 'Main Lamp', 'With the light not illuminated from the distal end, press the LAMP button.\n-Verify that the ON indicator for the LAMP button lights up.\n- Verify that the light is illuminated from the distal end.\n-Press and hold the LAMP button for one second.\n-Verify that the light from the distal end extinguishes.', `${s4}`],
            ['5', 'Brightness adjustment (Brightness mode selection function)', 'Press the AUTO/MAN. brightness button.\nInspect the following items:\n-Brightness mode switches between “AUTO” and “MAN.” with a beep sound.\n-The brightness mode indicator “AUTO” or “MAN.” lights up according to brightness  mode setting', `${s5}`],
            ['6', 'Auto-brightness adjustment', 'Press the AUTO/MAN. brightness button to switch to “AUTO.”\n- Point the distal end toward an object. Move the distal end closer to the object and then away from it within a distance of 5 to 60 mm.\n- Verify that the brightness of the image on the monitor remains the same regardless of the distance between the object and distal end.\n- Hold the distal end at a distance of 30 to 40 mm from the object.\n- Press the brightness adjustment buttons (“  ” and “ ").Inspect the following items:\n-When either of the brightness buttons is pressed, a beep sounds and the brightness increases or decreases. The brightness level indicator changes by one.\n- When either of the buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\n- When either of the brightness buttons is pressed, the brightness of the endoscope image on the monitor increases or decreases accordingly.', `${s6}`],
            ['7', 'High intensity illumination mode', '-Connect the endoscope to the CLV-180. The connecting endscope must support high intensity function.-\nPress the AUTO/MAN. brightness button to switch to “MAN.”\n-Press the brightness adjustment button (“ “ or “ ”) to set the brightness level to 0.\n- Connect the endoscope to the CLV-180. The connecting endoscope must support high intensity illumination mode.\n-Press the HIGH button to set high intensity mode.\n- Verify that high intensity mode indicators lights up.\n-Verify that a light emitted from the distal end becomes brighter.\n- Press the HIGH button to release high intensity mode.\n-Verify that the high intensity mode button extinguishes.\n-Verify that the light illuminated from the distal end returns to the original illumination level.\n-Press the HIGH button again and verify that high intensity illumination mode is set.\n-Disconnect the endoscope from the CLV-180. Verify that the high intensity mode indicator remains lit.', `${s7}`],
            ['8','Manual brightness adjustment', 'Press the AUTO/MAN. brightness button to switch to“MAN.”\n- Press the brightness adjustment buttons (“ “ and “ ”).Inspect the following items:\n- When either of the brightness buttons is pressed, a beep sounds and the brightness increases or decreases. The brightness level is indicated.\n- When either of the brightness adjustment buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\n- The brightness of a light illuminated from the endoscope distal end increases or decreases accordingly', `${s8}`],
            ['9', 'Airflow function', 'Press the AIR button to set airflow to ON.\nInspect the following items:\n- The air flow indicator “ON” lights up.\n- A beep sounds\n- Set the airflow to “H.” Immerse the distal end into the water.\n- Cover the hole on the air/water valve with a finger to verify that bubbles are generated from the distal end.\n- With the hole covered with the finger, press the AIR button on the CLV-180. Verify that bubbles stop.', `${s9}`],
            ['10', 'Transillumination function', 'Press the TRANS ILLUM button.\nInspect the following items:\n- A beep sounds.\n- The transillumination indicator on the front panel blinks.\n- The manual brightness level is set to the maximum.\n- After 7 seconds, the light returns to its original brightness level and the transillumination indicator extinguishes.', `${s10}`],
            ['11','NBI observation function','-Connect the endoscope to the CLV-180. The connecting endoscope must support the NBI observation function.\n- Inspect that the MODE button illuminates and the NBI indicator lights in green.\n- Press the MODE button.Inspect the following items:\n- The color of the light illuminated from the distal end changes to blue.\n- The color of the NBI indicator changes to white.',`${s11}`],
            ['12','Power OFF ','-Press the power switch on the CLV-180.\n- Verify that the CLV-180 is turned off and the power indicator for the power switch extinguishes',`${s12}`]

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
      {text:'Issue date : 20 July 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 20 July 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CLV-180_'+sno}`; // Custom file name
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
