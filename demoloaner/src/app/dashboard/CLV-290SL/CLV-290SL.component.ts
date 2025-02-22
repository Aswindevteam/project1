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
  selector: 'app-CLV-290SL',
  templateUrl: './CLV-290SL.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Clv290slComponent{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CLV-290SL',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the CLV-290SL according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Power ON', 'Press the power switch and inspect the following items -\nThe power indicator lights up and no abnormal sounds.\nNo emergency lamp indicator on the front panel lights nor blink.', `${s2}`],
            ['3', 'Cooling Fan', 'Place the hand over the ventilation on the back of the CLV-290SL and verify that the air is exhausted from the ventilation for cooling.', `${s3}`],
            ['4', 'Lamp Life', 'Verify that lamp life is not expired.', `${s4}`],
            ['5', 'Endoscope Connection Check', 'Insert the endoscope connector into the output Monitor socket on the front panel of the light source until it Endoscope clicks. Video system center Visual CLV-290SL ', `${s5}`],
            ['6', 'Examination light on ', 'No emergency lamp indicator on the front panel lights nor blinks.The examination light is emitted from the endoscope distal end.', `${s6}`],
            ['7', 'Examination light off', 'The examination lamp extinguishes and the lamp indicator switches to "STBY"(standby)', `${s7}`],
            ['8', 'Brightness mode selection function', 'Verify that the brightness mode indicator switches between "AUTO" and "MANUAL".', `${s8}`],
            ['9','Auto-Brightness', 'With the examination lamp illuminated, press the brightness mode button to switch to "AUTO" point the endoscope distal end towards an object. Move the endoscope distal end closer to the object and then away from it at the distance between 5 to 60 mm. Verify that the brightness of the endoscope image on the monitor is consistent.\n\nPress the brightness adjustment buttons "- " and "+" inspect the following items:\nEach time either of the brightness buttons is pressed a beep sounds and the brightness increase & decrease by 1 accordingly.\nWhen either of the buttons is pressed continuously, a beep sound and the brightness indicator changes in a continuous manner.\nThe brightness of the light emitted from the endoscope distal end increase ordecrease according to the brightness setting.', `${s9}`],['10', 'Manual brightness ', 'With the examination lamp illuminated, press the brightness adjustment buttons "-" and "+" inspect the following items: \nEach time either of brightness buttons is pressed , a beep sounds and the brightness increase or decrease by 1 accordingly. \nWhen either of buttons is pressed continuously, a beep sounds and the brightness indicator changes in a continuous manner.\nThe brightness of light emitted from the endoscope distal end increase or decrease according to the brightness setting.', `${s10}`],
            ['11', 'Optical-Digital', 'Inspect the observation mode indicator for observation mode that is available for connected videoscope illuminates on the front panel.\nPress the optical digital observation mode button on the front panel. The observation mode indicator "ON" lights up. verify that display of the endoscope image switches to optical- digital observation mode indication with the observation mode indicator on the front panel.\nEach time the observation mode select button is pressed, optical-digital observation mode switches accordingly and the corresponding observation mode indicator lights up.', `${s11}`],
            ['12','Transillumination','The transiilumination indicator blinks. The examination light automatically changes to white light with the maximum light intensity for approximately 7 seconds.\nAfter 7 seconds transillumination function deactivated, the examination light returns to the original intensity. ',`${s12}`],
            ['13','Air/Water supply','The air flow indicator is "ON" lights up. Each time the air supply regulator button is pressed, the air supply regular indicator switches between L(low) ,M(medium) & H(high). ',`${s13}`],
            ['14','Exterior check','Inspect the CLV-290SL exterior for noticeable scratches, grim, and/or deformation that may affect the functionality.',`${s14}`],
            ['15','Ventilation ','Inspect that the ventilation on the side and back of the CLV-290SL is not clogged with dust and/or/ foreign objects.',`${s15}`],
            ['16','Power OFF ','Press the power switch and verify that the CLV-290SL is turned off and the power indicator extinguishes.',`${s16}`]

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
      {text:'Issue date : 01 June 2019',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 01 June 2019',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${' CLV-290SL_'+sno}`; // Custom file name
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
