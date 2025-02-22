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
  selector: 'app-OTV-S190',
  templateUrl: './OTV-S190.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Otvs190Component{
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
    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)&&(s16==p)&&(s17==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR OTV-S190',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the OTV-S190 according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Exterior of OTV-S190', 'Inspect the OTV-S190 exterior for noticeable scratches, grime, and/or deformation that may affect the functionality.', `${s2}`],
            ['3', 'Ventilation', 'Inspect that the ventilation on the OTV-S190 is not clogged with dusts and/or/foreign objects.', `${s3}`],
            ['4', 'Power lamp', 'Press the Power switch. Verify that the power indicator lights up', `${s4}`],
            ['5', 'Cooling fan', 'Place a hand over the ventilation on the OTV-S190 and verify that the air is exhausted from the ventilation for cooling.', `${s5}`],
            ['6', 'Examination light', 'Turn ON the light source. Verify that light is emitted from the endoscope distal end or camera head.', `${s6}`],
            ['7', 'Monitor screen', 'Verify that the endoscope image is displayed on the monitor.', `${s7}`],
            ['8', 'Auto-brightness', '1. Verify that the auto-brightness mode (Iris mode indicator) is “”AUTO” and the brightness level is “0” on the front panel of the light source.\n2. Point the endoscope distal end toward the gloved palm. Move the endoscope distal end closer to the palm and then away from it at the distance between 5 to 60 mm.Inspect the following items:\n・ The brightness of the palm image on the monitor is consistent.\n・ A light intensity of the light emitted from the distal end changes according to the level setting.\n3. Place a gloved palm over of the distal end at a distance of approximately 3 cm.Cover the distal end and palm with a cloth.Press the brightness adjustment button on the light source. Verify that the brightness of the palm image displayed on the monitor changes according to the brightness levelsetting.', `${s8}`],
            ['9','Monitor display', '1. Inspect that all the alphanumeric character information is displayed correctly.\n2. Inspect that the date is correct and time is displayed up to minutes correctly.\n3. Connect a portable memory, video printer, and video recorder to the OTV-S190.Inspect that information on a remaining memory capacity, CVP counter, and DF counter are displayed for each of the connected equipment.\n4. Display the palm on the monitor with thedistal end. Inspect that the endoscope image is displayed in a normal color without noise.', `${s9}`],
            ['10', 'Freeze', 'On the keyboard, press the FREEZE key or a custom switch assigned with the FREEZE function. Inspect the following items:\n・ The endoscope image freezes.\n・ When the FREEAE key or custom switch is pressed again, the frozen image returns to the live image.', `${s10}`],
            ['11', 'Release', '1. On the keyboard, press the RELEASE key or a custom switch assigned with the RELEASE function. Inspect that a beep sounds and the endoscope image freezes in a very short time, then returns to the live image.\n2. Inspect that the image recording device specified as the image recording destination functions normally.\n3. Inspect that a value on the image recording device counter increases each time the RELEASE function is activated.', `${s11}`],
            ['12','PIP, PIO','Press the PIP/POP ON button on the keyboard. Verify that the image is displayed in PIP mode. Press the PIP/POP mode button. Verify that the image display mode switches from PIP to POP.',`${s12}`],
            ['13','Orientation','Set Orientation to ON. Inspect that the image rotated by 180 degrees is displayed on the monitor.',`${s13}`],
            ['14','Remote switches','Inspect that custom switches (endoscope remote switch, footswitch, front panel custom button, keyboard custom key) function normally according to the assigned functions',`${s14}`],
            ['15','Optical-digital observation','1. Inspect that the observation mode indicators light up on the front panel of the connected light source according the settings.\n2. On the keyboard, press the NBI key or a custom switch assigned with NBI. Inspect that NBI mode is set with NBI displayed at the top right of the endoscope image on the monitor.',`${s15}`],
            ['16','Power OFF','Press the Power switch and verify that the OTV-S190 is turned off and the power indicator extinguishes.',`${s16}`],
            ['17','Data Delete and Reset','Delete and Reset previous data, ie user setting, saved image, patient data etc.',`${s17}`]

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
      const fileName = `${' OTV-S190_'+sno}`; // Custom file name
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
