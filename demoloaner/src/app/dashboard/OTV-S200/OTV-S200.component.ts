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
  selector: 'app-OTV-S200',
  templateUrl: './OTV-S200.component.html',
  styleUrls: ['./OTV-S200.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Otvs200Component {
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR OTV-S200',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','Clean and disinfect the OTV-S200 according to the instructions in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Checking the Connection of the Video Connector', 'There must be a clicking feel when CH-S200-XZ-EB is connected.\nCH-S200-XZ-EB must be able to be removed smoothly by pressing the locking lever. The open/close lid must be automatically closed when CH-S200-XZ-EB is removed.', `${s2}`],
            ['3', 'Checking the Connection of the Light Guide', 'There must be no irregularity in installing/removing the light guide', `${s3}`],
            ['4', 'Checking the Power Indicator and the Video Signal Output', 'Power cable can be connected. Power indicator lights up.\nThe color bar signals are output from all video signal output terminals of OTV-S200 with no scope connected.\nThe power indicator is turned OFF when the power switch is turned OFF', `${s4}`],
            ['5', 'Checking Portable Memory Recognition, Examination Light, and Touch Pane', 'The portable memory can be installed/removed without much effort. Light is emitted from the scope distal end.\nDisplay area in the touch panel should be all visible.\nThe internal memory access indicator and portable memory access indicator light up in green, blink in orange, and then light up in green again.\nE310 (Clock error) does not appear on the monitor 3D monitor.', `${s5}`],

            ['6', 'Checking Endoscopic Images', 'White balance can work normally.\nWhen the distance from the object changes between five to 60 mm, there is not irregularity in brightness/brightness control.\nThere is no irregularity in endoscopic image resolution.\nThere is no irregularity in endoscopic image color reproduction. There is no abnormal noise in endoscopic image.\nThere is no irregularity in character display.', `${s6}`],
            ['7', 'Check of Switching to NBI Mode', 'Switching between the normal light and NBI is possible.', `${s7}`],
            ['8', 'Checking the Switch Function', 'The switch indications on the touch panel and monitor 3D monitor turn blue.', `${s8}`],
            ['9', 'Check of Communication with CLV-S200-IR', 'When the distance from the object changes between five to 60 mm in normal light observation, the automatic brightness adjustment works.\nLight source cable can be connected securely.', `${s9}`],
            ['10', 'Checking the Release Function', 'The internal memory access indicator and portable memory access indicator blink in orange during image saving, and then light up in green. \nImages saved in a portable memory can be displayed on the 3D monitor', `${s10}`],
            ['11', 'Custom switch', 'Confirm that the preset switches (the remote switches and the foot switches of the endoscope) work properly as assigned.', `${s11}`],
            ['12', 'Checking the Operation Sound', 'After the power switch is turned ON and any button on the touch panel is pressed, an operation sound is heard.', `${s12}`],
            ['13', 'Appearance check', 'There must be no excessive scratches, dirt, or discolored appearance.\nThe step and gap between the front panel and the top cover must be 1 mm or below. The external surfaces must be free of convex/ concave that physically makes cleaning difficult.\nThere must be no irregular burr or edges in appearance. Labeling must be appropriate.', `${s13}`],
            ['14', 'Turn off the power', 'Press the power switch of the OTV-S200.\nConfirm that the power of the OTV-S200 is turned off, and the power switch indicator goes out.', `${s14}`],
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
      const fileName = `${'OTV-S200_'+sno}`; // Custom file name
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
