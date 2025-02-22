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
  selector: 'app-cv-150',
  templateUrl: './cv-150.component.html',
  styleUrls: ['./cv-150.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Cv150Component {
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
      s17_result:  [,Validators.required],
      s18_result:  [,Validators.required],

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
    let s17=data['s17_result'];
    let s18=data['s18_result'];



    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p)&&(s4==p)&&(s5==p)&&(s6==p) &&(s7==p)&&(s8==p) &&(s9==p)&&(s10==p)
    &&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)&&(s16==p)&&(s17==p)&&(s18==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CV-150',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','Clean and disinfect the CV-150 according to the instructions in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power switch', 'It must be possible to turn power on and off properly.', `${s2}`],
            ['3', 'Cooling fan', 'The supply direction of air must be correct.', `${s3}`],
            ['4', 'Output connector', 'It must be possible to connect and disconnect a scope properly', `${s4}`],
            ['5', 'Front-panel buzzer', 'The LEDs corresponding to switch operations must light and a buzzer must sound at the same time.', `${s5}`],

            ['6', 'Lamp on/off', 'It must be possible to turn on and off the lamp.', `${s6}`],
            ['7', 'Scope detection', 'When the scope is disconnected, the diaphragm must be fully closed.', `${s7}`],
            ['8', 'Noise/vibration', 'When the pump is operated with the lamp on, significant noise or vibration must not occur.', `${s8}`],
            ['9', 'Interlock switch', 'Opening the lamp door with power on must turn off the power.', `${s9}`],
            ['10', 'Clock function and battery backup', 'The data settings existing before power is turned off must be backed up.', `${s10}`],
            ['11', 'Image', 'Images must be free from significant noise, bleeding of color, and nonuniformity of luminance.', `${s11}`],
            ['12', 'Automatic light control', 'Automatic light control must function properly.', `${s12}`],
            ['13', 'Freeze function', 'Normal freeze operations must be possible.', `${s13}`],
            ['14', 'IRIS mode select', 'When IRIS mode is changed, the display status of the window must change properly.', `${s14}`],
            ['15', 'Lamp select lever position detection', 'An error must occur when the lamp is not in the correct position', `${s15}`],
            ...(image_data_url !== null ? [['', '', '', { text: '', pageBreak: 'before' }]] : []),
            ['16', 'Appearance check', 'Inspection of the suction functionThere must be no excessive scratches, dirt, or discolored appearance.\nThe step and gap between the front panel and the top cover must be 1 mm or below. The external surfaces must be free of convex/ concave that physically makes cleaning difficult.\nThere must be no irregular burr or edges in appearance.\nLabeling must be appropriate.', `${s16}`],
            ['17', 'Turn off the power.', 'Press the power switch of the CV-150.\n Confirm that the power of the CV-150 is turned off, and the power switch indicator goes out.', `${s17}`],
            ['18', 'Data Delete and Reset', 'Delete and Reset previous data, ie user setting, saved image, patient data etc.', `${s18}`],

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
      {text:'Issue date : 05 Sep 2022',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 05 Sep 2022',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CV-150_'+sno}`; // Custom file name
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
