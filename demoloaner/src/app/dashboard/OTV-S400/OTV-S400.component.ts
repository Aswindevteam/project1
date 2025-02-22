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
  selector: 'app-OTV-S400',
  templateUrl: './OTV-S400.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Otvs400Component{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR OTV-S400',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','The OTV-S400 must be cleaned and disinfected according to instruction described in the instruction manual.', `${s1}`],
            ['2', 'Connection', 'With the power of the OTV-S400 OFF, Verify that the electrical contacts in the video connector for the OTV-S400 has no damages.\n- Connect the video connector for the camera head to the OTV-S400 all the way.\nInspect the following items:\n・ The camera head is securely connected to the OTV-S400 with the video connector.\n・ A click sounds when the video connected is inserted all the way', `${s2}`],
            ['3', 'Power ON', 'Verify that the air vents on the chassis and rear panel of the OTV-S400 are not clogged with dusts and/or foreign substances.\n- Press the power switch on the OTV-S400.\n- Verify that the power indicator lights up.\n- Place a hand in front of the air vents on the rear panel.\n- Verify by feeling that the air is exhausted from the air vents', `${s3}`],
            ['4', 'Monitor screen', 'Connect the rigid telescope to the CLV-S400 with the light guide cable.\n- Connect the rigid telescope to the camera head.\n- Turn ON the light source and press the LAMP button on the light source.\n- Verify that the data display setting is ON.\n- Place a gloved palm over the distal end. \nInspect the following items:\n・ The palm image displayed on the monitor is normal.\n・ The status indicators are displayed on the upper left of the monitor', `${s4}`],
            ['5', 'White balance adjustment', 'Insert the distal end into the white cap.\n- Press the White balance button on the touch panel for one second.\nInspect the following items:\n・ Verify that the status indicator of the White balance on the touch panel changes from Incomplete to Complete.\n・ A Complete message appears on the monitor.', `${s5}`],
            ['6', 'Auto-brightness adjustment', 'Press the brightness mode button to set brightness mode to AUTO.\n- Press the brightness adjustment button (“+” or “-“) to set the brightness level to “0.”\n- Point the distal end toward an object. Move the distal end closer to the object and then away from it within a distance of 5 to 60 mm.\n- Verify that the brightness of the endoscope image on the monitor is normal.\n- Hold the distal end at a distance of 30 to 40 mm from the object.\n- Press the brightness adjustment buttons (“+” and “-“). Inspect the following items:\n・ When either of the brightness buttons is pressed, a beep sounds and the brightness increases or decreases.\n・ When either of the buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\n- Verify that the light illuminated from the distal end increases or decreases according to the brightness setting.', `${s6}`],
            ['7', 'One-touch auto focus', 'Move the distal end near to a gloved palm and press the one-touch auto focus switch on the camera head.\n- Verify that the image on the monitor is automatically focused.\n- Move the distal end away from the palm and press the one-touch auto focus switch.\n- Verify that the image on the monitor is automatically focused..', `${s7}`],
            ['8','RELEASE', 'Press the Observation tab on the touch panel.\n- On the Observation/Record window, press the Execute button for RELEASE1.\n- Verify that a beep sounds and the endoscope image freezes in a very short time, then returns to the live image.\n- Press the Execute button for RELEASE2.\n- Verify that a beep sounds and the endoscope image freezes in a very short time, then returns to the live image', `${s8}`],
            ['9', 'Custom switches', 'Press the Info tab on the touch panel. The Information display window appears.\n- Press the Scope information button on the touch panel. The Switch Information window appears on the monitor.\n- Press SW1, SW2, and SW3 on the camera head. Verify that the pressed switch is highlighted in blue in the Switch Information window.', `${s9}`],
            ['10', 'NBI observation function', 'Press the Observation tab on the touch panel. The Observation/Record window appears.\n- Press the Pull-down key for the Observation mode and select NBI.\n- Verify that the NBI icon appears in the status indicator on the monitor and touch panel.\n- Press the Pull-down key for the Observation mode and select WLI.\n- Verify that observation mode returns to WLI.', `${s10}`],
            ['11','Power OFF','Press the power switch on the OTV-S400.\n- Verify that the OTV-S400 is turned off and the power indicator for the power switch extinguishes',`${s11}`],
            ['12',' Data Delete and Reset','Delete and Reset previous data, ie user setting, saved image, patient data etc',`${s12}`]

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
      {text:'Issue date : : 01 April 2020',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : : 01 April 2020',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'OTV-S400_'+sno}`; // Custom file name
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
