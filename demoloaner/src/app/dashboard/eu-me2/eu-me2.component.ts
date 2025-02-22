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
  selector: 'app-eu-me2',
  templateUrl: './eu-me2.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Eume2component{
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
    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)&&(s12==p)&&(s13==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR EU-ME2',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the EU-ME2  according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power ON', 'Verify that the air vents on the left and right sides of the EU-ME2  are not clogged with dusts and/or foreign substances.\n- Connect an ultrasound endoscope (*) to the EU-ME2 .\n- Press the power switch on the EU-ME2 .\nInspect the following items:\n・ The power indicator lights up.\n・ One minute after power-on, a beep sounds twice.\n- Place a hand in front of the air vents on the left side of the EU-ME2 .\n- Verify by feeling that the air is exhausted from the air vent on the left side', `${s2}`],
            ['3', 'Display contents', 'With the EU-ME2  powered ON,inspect the following items of the monitor display:\nThe date and time displayed on the monitor are correct.', `${s3}`],
            ['4', 'Monitor screen', 'Press the FREEZE key on the keyboard.\n- Verify that the US indicator to the left of the FREEZE key remains off.\n- Verify that the ultrasound image displayed on the monitor is normal.', `${s4}`],
            ['5', 'Ultrasound image display (B-mode image)', 'Press the FREEZE key \nInspect the following items:\n・ The ultrasound image freezes on the monitor.\n・ The frame number is indicted at the lower right of the monitor.\n・ The US indicator to the left of the FREEZE key on the keyboard lights up.', `${s5}`],
           //...(image_data_url === null ? [['', '', '', { text: '', pageBreak: 'before' }]] : []),
            //...(image_data_url !== null ? [['', '', '', { text: '', pageBreak: 'after' }]] : []),
            ['6', 'Display (FLOW/COLOR FLOW mode images)', 'Press the FREEZE key .\n- Verify that the ultrasound image appears on the monitor.\n- Press the FLOW key on the keyboard.\n- Press the COLOR button for FLOW MODE on the touch panel.\n- Press the “+” button of FLOW GAIN on the touch panel to set the flow gain to the maximum.\n- Place the distal end into the water.\n- While moving the distal end in the water by hand, verify that a moving image of ROI area appears on the monitor in red.', `${s6}`],
            ...(image_data_url === null ? [['', '', '', { text: '', pageBreak: 'before' }]] : []),
            ...(image_data_url !== null ? [['', '', '', { text: '', pageBreak: 'after' }]] : []),
            ['7', 'Ultrasound image display (FLOW/POWER FLOW mode images)', 'Press the FLOW key on the keyboard.\n- Press the POWER button for FLOW MODE on the touch panel.\n- Press the “+” button of FLOW GAIN on the touch panel to set the flow gain to the maximum.\n- While moving the distal end in the water by hand, verify that a moving image of ROI area appears on the monitor in red.', `${s7}`],
            ['8','Ultrasound image display (FLOW/H-FLOW mode images)', 'Press the H-FLOW button for FLOW MODE on the touch panel.\n- Press the “+” button of FLOW GAIN on the touch panel to set the flow gain to the maximum.\n- While moving the distal end in the water by hand, verify that a moving image of ROI area appears on the monitor in blue or red.\n- Remove the distal end from the water', `${s8}`],
            ['9', 'Ultrasound image display (PW mode image)', 'Press the PW key on the keyboard.\n- Verify that the B-mode image is displayed on the left side of the observation window with indication of the PW cursor and sample volume.', `${s9}`],
            ['10', 'Ultrasound image display (CH-EUS mode image)', 'Press the CH-EUS button on the touch panel.\n- Verify that mode “FI” appears on the lower left side of the observation window and mode “CH-P” appears on the lower right', `${s10}`],
            ['11','Video system center ','Connect the video system center to EU-ME2 .\n- Turn the video system center and EU-ME2  on.\n- Verify the correct model name of the video system center is indicated on upper left of the keyboard touch panel.',`${s11}`],
            ['12','Power OFF ','Press the power switch on the EU-ME2 .\n- Verify that the EU-ME2  is turned off and the power indicator for the Power switch extinguishes.',`${s12}`],['13','Data Delete and Reset','Delete and Reset previous data, ie user setting, saved image, patient data etc.',`${s13}`],

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
      const fileName = `${'EU-ME2_'+sno}`; // Custom file name
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
