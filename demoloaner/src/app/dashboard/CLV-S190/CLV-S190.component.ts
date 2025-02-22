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
  selector: 'app-CLV-S190',
  templateUrl: './CLV-S190.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Clvs190Component{
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


    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CLV-S190',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','The CLV-S190 must be cleaned and disinfected according to instructions described in the Instructions Manual.', `${s1}`],
            ['2', 'Power On', '1. Confirm that the ventilation grills on the side and rear panels of the light source are not covered with dust or other materials.\n2. Confirm that the lamp cover is attached firmly.\n3. Press the power switch of the light source.\n4. Confirm that the power indicator lights up.\n 5. Confirm that the emergency lamp inductor on the control panel is not lighting or blinking.\n6. Confirm that air is exhausted by holding your hand in front of the ventilation grills onthe rear panel.', `${s2}`],
            ['3', 'light', '1. Press the lamp button if the examination lamp is in standby and confirm that the lamp indicator “ON” lights up.\n2. Confirm that the examination light is emitted from the distal end of the endoscope.When the lamp light intensity decrease even if the “500 h” indicator does not light up,replace the examination lamp with a new one as described.\n3. Press and hold the lamp button for about 1 second: the lamp indicator “STBY” lights up.\n4. Confirm that the examination light is not emitted from the distal end of the endoscope', `${s3}`],
            ['4', 'Brightness mode switching function', '1. Confirm that the brightness mode button lights up.\n2. Press the brightness mode button on the control panel and confirm that each press switches the brightness mode indicators between “AUTO” and “MANU”.', `${s4}`],
            ['5', 'Automatic brightness adjustment', '1. Confirm that the endoscope is connected to the light source and the video system center, and that both are turned ON.\n2. Press the lamp button on the control panel: the examination lamp is ignited.\n3. Press the brightness mode button and select “AUTO”.\n4. Point the distal end of the endoscope at a suitable object and vary the distance between 5 and 60 mm. Confirm that the light being emitted from the distal end varies with the distance..', `${s5}`],
            ['6', 'Manual brightness adjustment', '1. Press the lamp button on the control panel: the examination lamp is ignited.\n2. Press the brightness mode button and select “MANU”.\n3. Press the brightness buttons (“–” or “+”) andconfirm the following:\n• Each time either of the brightness buttons is pressed, a beep is heard and the brightness level increases or decreases accordingly. The brightness indicator also increases or decreases.\n• When either of the brightness buttons is pressed continuously, successive beeps are heard and the brightness indicator increases or decreases continuously.\n• The brightness of the light emitted from the distal end of the endoscope increases or decreases according to the brightness level.', `${s6}`],
            ['7', 'Optical-digital observation function', '1. Confirm that the observation mode selection indicators show the available opticaldigital observation modes.\n2. Press the observation mode button on the front panel to light up the observation mode indicator “ON”. Confirm that the endoscopic image is displayed in the opticaldigital observation indicated by the observation mode selection indicator.\n3. Press the observation mode button. The observation mode indicator “STBY” lights up,and the instrument returns to the normal light observation mode', `${s7}`],
            ['8', 'High intensity mode', '1. Press the brightness mode button on the control panel and confirm that the “MANU”indicator lights up.\n2. Press the brightness buttons on the control panel to set the brightness level to 0.\n3. Press the intensity mode button on the control panel: the normal mode is changed to high intensity mode.\n4. Confirm that the high intensity mode indicator lights up and that the light emitted from the endoscope’s distal end increases compared to the normal mode.\n5. Press the intensity mode button to switch to the normal intensity mode.\n6. Confirm that the high intensity mode indicator goes out and the light emitted from the endoscope’s distal end decreases compared to the high intensity mode.\n7. Press the brightness mode button and confirm that the “AUTO” indicator lights up.', `${s8}`],


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
      {text:'Issue date : : 18 June 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : : 18 June 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CLV-S190_'+sno}`; // Custom file name
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
