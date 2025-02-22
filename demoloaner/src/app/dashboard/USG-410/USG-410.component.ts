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
  selector: 'app-USG-410',
  templateUrl: './USG-410.component.html',
  styleUrls: ['./USG-410.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Usg410Component {
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
      //s15_result:  [,Validators.required],



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
    //let s15=data['s15_result'];




    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p)&&(s4==p)&&(s5==p)&&(s6==p) &&(s7==p)&&(s8==p) &&(s9==p)&&(s10==p)
    &&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR USG-410',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Power verification(Check the illumination of power switch)','Power verification(Check the illumination of power switch)', `${s1}`],
            ['2', 'Power verification(Check the start screen and staet tone)', 'Power verification(Check the start screen and staet tone)', `${s2}`],
            ['3-1', 'Verification of THUNDERBEAT or SONICBEAT instrument connection(s)(Connection of the THUNDERBEAT or SONICBEAT instrument)\n\n-connection the THUNDERBEAT/SONICBEAT instrument to ultrasonic bipolar generator', 'Verification of THUNDERBEAT or SONICBEAT instrument connection(s)(Connection of the THUNDERBEAT or SONICBEAT instrument)\n-connection the THUNDERBEAT/SONICBEAT instrument to ultrasonic bipolar generator', `${s3}`],
            ['3-2', 'Verification of THUNDERBEAT or SONICBEAT instrument connection(s)(Connection of the THUNDERBEAT or SONICBEAT instrument)\n\n-Disconnecting the THUNDERBEAT and SONICBEAT instrument', 'Verification of THUNDERBEAT or SONICBEAT instrument connection(s) (Connection of the THUNDERBEAT or SONICBEAT instrument)\n\n-Disconnecting the THUNDERBEAT and SONICBEAT instrument ', `${s4}`],
            ['4', 'Verification of touchscreen (When either THUNDERBEAT or SONICBEAT instrument is connected )', 'Verification of touch screen (When either THUNDERBEAT or SONICBEAT instrument is connected )', `${s5}`],

            ['5', 'Verification of the foot switch connection(Check the illumination of footswitch indicator(s))', 'Verification of the foot switch connection(Check the illumination of footswitch indicator(s))', `${s6}`],
            ['6', 'Verification of the footswitch connection(Footswitch operation check)', 'Verification of the foot switch connection(Footswitch operation check)', `${s7}`],
            ['7-1', 'Verification of the footswitch connection (Verification of the ultrasonic output)', 'Verification of the foot switch connection (Verification of the ultrasonic output)', `${s8}`],
            ['7-2', 'Verification of the foot switch connection (Verification of the ultrasonic output)', 'Verification of the foot switch connection (Verification of the ultrasonic output)', `${s9}`],
            ['8-1', 'Verification of the hifgfrequency(RF-bipolar)output(when using the THUNDERBEAT instrument)( verify the output level)','Verification of the hifg-frequency(RF-bipolar) output(when using the THUNDERBEAT instrument)( verify the output level)', `${s10}`],
            ['8-2', 'Verification of the high frequency(RF-bipolar) output(when using the THUNDERBEAT instrument)( verify the output level)', 'Verification of the hifg-frequency(RF-bipolar) output(when using the THUNDERBEAT instrument)( verify the output level)', `${s11}`],
            ['9', 'Verification of the high flow insuffalation unit', 'Verification of the high flow insuffalation unit', `${s12}`],
            ['10', 'Verification of the alarm system', 'Verification of the alarm system', `${s13}`],
            ['11', 'Procedure after verification', 'Procedure after verification', `${s14}`],


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
      {text:'Issue date : 24 May 2021',alignment:'right',fontSize:5,},{text:'REV NO : 01',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 24 May 2021',alignment:'right',fontSize:5,},{text:'REV NO : 0',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'USG-410_'+sno}`; // Custom file name
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
