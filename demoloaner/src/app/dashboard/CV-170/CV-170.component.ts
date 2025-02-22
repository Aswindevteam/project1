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
  selector: 'app-CV-170',
  templateUrl: './CV-170.component.html',
  styleUrls: ['./CV-170.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Cv170Component {
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




    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p)&&(s4==p)&&(s5==p)&&(s6==p) &&(s7==p)&&(s8==p) &&(s9==p)&&(s10==p)
    &&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CV-170',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','Clean and disinfect the CV-170 according to the instructions in the corresponding Instructions Manual.', `${s1}`],
            ['2', '170 series,flexible videoscope', '1. Confirm that the video system center and all connected devices are turned OFF.\n2. Confirm that the electrical contacts inside the video connector socket of the video system center are not damaged.\n3. Connect the light guide connector of the videoscope to the output socket of the video system center.\n4. Push the video connector of the videoscope into the video connector socket of the video system center all the way until it clicks, holding the video system center with a hand so that it will not move.Confirm that the “UP” mark faces upwards.', `${s2}`],
            ['3', 'Inspection of the power supply', '1. Confirm that the ventilation grills on the right side and rear side panels of the video system center are not covered with dust or other materials.\n2. Press the power switch of the video system center. The power indicator lights up.', `${s3}`],
            ['4', 'Inspection of the examination light', '1. Press the lamp button: the lamp “ON” indicatorlights up.\n2. Confirm that the examination light is emittedfrom the distal end of the endoscope.\n3. Press and hold the lamp button for about 1 second: the lamp indicator turns OFF.\n4. Confirm that the examination light is not emitted from the distal end of the endoscope.', `${s4}`],
            ['5', 'Inspection of the monitor display', '1. Confirm that the endoscopic image and the characters are displayed on the monitor.Display the characters on the monitor when they are cleared as described.\n2. Confirm that the date and time are correct.\n3. Confirm that the memory counter and the CVP counter, etc. is displayed in the endoscopic image screen.\n4. Confirm that enough space is available on the portable memory or internal buffer of the video system center to store endoscopic images.\n5. Confirm that the endoscopic image is normal by observing any object such as the palm of your hand.', `${s5}`],

            ['6', 'Inspection of the brightness adjustment Function(Inspection of the automatic brightness adjustment)', '1. Confirm that the endoscope is connected to the video system center and turn the video system center ON.\n2. Press the lamp button to ignite the examination lamp.\n3. Press the brightness mode button to light up the brightness mode indicator.\n4. Point the distal end of the endoscope at a suitable object and vary the distance between 5 and 60mm. Confirm that brightness of the endoscopic image on the monitor is stable.\n5. Press the brightness buttons (“-” or “+”) to confirm the following:\n- Each time either of the brightness buttons is pressed, a beep is heard and the brightness increases or decreases accordingly.\n- When either of the brightness buttons is pressed continuously, successive beeps are heard and the brightness indicator increases or decreases continuously.\n- The brightness of the light emitted from the distal end of the endoscope increases or decreases according to the brightness indicator', `${s6}`],
            ['7', 'Inspection of the brightness adjustment Function (Inspection of the manual brightness adjustment)', '1. Press the lamp button to ignite the examination lamp. \n2. Confirm that the brightness mode indicator is OFF. When it lights up, press the brightness mode button to turn it OFF.\n3. Press the brightness buttons (“-” or “+”) to confirm the following:\n- Each time either of the brightness buttons is pressed, a beep is heard and the brightness increases or decreases accordingly.\n- When either of the brightness buttons is pressed continuously, successive beeps are heard and the brightness indicator increases or decreases continuously.\n- The brightness of the light emitted from the distal end of the endoscope increases or decreases according to the brightness indicator.', `${s7}`],
            ['8', 'Inspection of the freeze function', '1. Press the “FREEZE” key on the keyboard or the custom switch to which the “FREEZE” function is assigned to confirm that the live endoscopic image freezes and a short beep is heard.\n2. Press the “FREEZE” key or the custom switch to which the “FREEZE” function is assigned again to confirm that the frozen image returns to the live image.', `${s8}`],
            ['9', 'Inspection of the release function', '1, Press the “RELEASE” key on the keyboard or the custom switch to which the “RELEASE” function is assigned. \n2. Confirm that a beep is heard, and the live endoscopic image freezes for a short time.Then the image returns to the live image.\n3. Confirm that the selected recording device is activated.\n4. Confirm that the counter for the recording devices displayed on the monitor increments by one.', `${s9}`],
            ['10', 'Inspection of the orientation function', 'If the orientation function is activated, confirm that the indication on the monitor is an endoscopic image rotated by 180°.', `${s10}`],
            ['11', 'Inspection of the custom switches', 'Confirm that the functions assigned to the custom switches (the endoscope’s remote switches, foot switches, custom buttons on the front panel, and custom keys on the keyboard) are operated normally.', `${s11}`],
            ['12', 'Inspection of the opticaldigital observation Function (Inspection of NBI observation)', '1 Press the custom switch to which the “NBI” function is assigned or the observation mode select button on the front panel of the video system center.\n2 Confirm that “NBI” appears at the upper right of the endoscopic image screen, and the observation mode selection indicator shows “ON”.\n3 Press the custom switch to which the “NBI” function is assigned or the observation mode selection button on the front panel: “NBI” indicated at the upper right of the endoscopic image screen disappears, the observation mode selection indicator on the front panel goes out, and observation mode becomes the normal observation mode.', `${s12}`],
            ['13', 'Inspection of air and water feeding', '1. Press the airflow button repeatedly and confirm that the indication of the airflow regulator indicators light up in the cycle of “L” (low), “H” (high), and OFF. \n2. Press the airflow button to change the airflow level and confirm that the amount of bubbles from the air/water nozzle changes accordingly.\n3. Press the airflow button to change the airflow level and confirm that the amount of water from the air/water nozzle changes accordingly.', `${s13}`],
            ['14', 'Inspection of power off', '1. Press the power switch of the video system center.\n2. Confirm that the video system center is turned off.', `${s14}`],
            ['15', 'Data Delete and Reset', 'Delete and Reset previous data, ie user setting, saved image, patient data etc.', `${s15}`],

        ],
    }
},
// ,function() {
//   if (!image_data_url) {

//     return { text: '', pageBreak: 'after' };
//   } else {

//     return { text: '' };
//   }
// }(),
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
      {text:'Issue date : 16 Sep 2020',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 16 Sep 2020',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CV-170_'+sno}`; // Custom file name
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
