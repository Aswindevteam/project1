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
  selector: 'app-CV-1500',
  templateUrl: './CV-1500.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Cv1500Component{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CV-1500',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Inspection of Power Supply','1. Confirm that the ventillation grilles are not covered with dust or other material.\n2. Press the Power switch of the video system center. The power indicator lights up.\n3. Confirm that the air is exhausted by holding your hand in front of the ventillation grilles', `${s1}`],
            ['2', 'Inserting the portable memory', '1. Confirm that the portable memory is inserted into the portable memory port until it stops.\n2. The portable memory access indicator on the front panel is blinking.', `${s2}`],
            ['3', 'All reset operation', 'In this operation, delete all setting and images and put the video system center in the state at the time of delivery.STEPS:\n1. Tap the "Reset all" button on Maintenance page 2/2.\n2. Tap the "Yes" button.\n3. Turn OFF this instrument. ', `${s3}`],
            ['4', 'Inspection of the monitor display', '1. Confirm that the necessary information are displayed on the monitor.\n2. Confirm that the data and time are correct.\n3. Confirm that the counter of connected devices such as digital filing system are displayed', `${s4}`],
            ['5', 'Inspection of the endoscopic image', 'Check and confirm endoscopic image as per inspection manual.\nConfirm that the endoscopic image is free from noise, blur, fog, or other irregularities.', `${s5}`],
            ['6', 'Inspection of the brightness adjustment function', '1. If the examination light is not emitted, tap the "Lamp" button on Home > Basic functions.Confirm that the examination light is emitted from the distal end of endoscope.\n2. Changing the distance between 5 to 60 mm, and confirm that the brightness of the endoscopic image which displayed on the monitor is constant.\n3. After fixed the distance between the distal end of the endoscope and object, tap the plus/minus button of the "Brightness [Auto]" on Home > Function list > Bright/Color >Brightness 1 tab, and adjust the brightness of the endoscopic image which displayed on monitor will change correspond to this instruction. ', `${s6}`],
            ['7', 'Inspection of the freeze function', '1. Tap either "Freeze" button on Home > Function list > Observ. > Observation1 tab to switch the status of the "Freeze".\n2. Confirm that the beep is heard, and the live endoscopic image freezes.\n3. Tap the "Freeze" button while freezing the live endoscopic image.\n4. Confirm that the image returns to the live image.', `${s7}`],
            ['8','Inspection of release fucntion', '1. Tap either "Release1" or "Release2" button on Home > Function list > Record > Still image tab.\n2. A beep will be heard, and the endoscopic image freezes for a short time. After that confirm the image will return to the live image.\n3. Confirm that the counter of recording destination which displayed on the monitor is increased. ', `${s8}`],
            ['9', 'Inspection of the PIP,POP function', 'PIP Fuction:-\n1. Tap the "PIP" button on Home > Function list > Info > PIP/POP tab.\n2. Confirm that the PIP sub screen is displayed on the monitor.\n\nPOP Fuction:-\n1. Tap the "POP" button on Home > Function list > Info > PIP/POP tab.\n2. Confirm that the POP image is displayed on the monitor.', `${s9}`],
            ['10', 'Inspection of the Switch information', '1. Tap the "Switch information" button on Home > Function list > Info. > Information1 tab to switch the status of the " Switch information".\n2. Confirm the assigned function of custom switches.\n3. With switch infirmation shown on the monitor, press one of the remote switches (SW1 to SW5). Confirm that the assignment information in the switch information is highlighted.', `${s10}`],
            ['11','Inspection of the Optical -digital observation function','1. Tap the available observation mode button on Home > Function list > Observ. >Observation1 tab.\n2. Upper-right of monitor is displayed icon of each observation mode. Confirm that the endoscopic image is change to selected observation mode. ',`${s11}`],
            ['12','Inspection of the air/water feeding function','1. Tap the "Air flow" button on Home > Function list > Pump/peripheral > Pump tab to switch the status of the "Air flow".\n2. The status of the "Air flow" is switched and displayed on the "Air flow" button. ',`${s12}`]

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
      {text:'Issue date : 22 Oct 2020',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 22 Oct 2020',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CV-1500_'+sno}`; // Custom file name
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
