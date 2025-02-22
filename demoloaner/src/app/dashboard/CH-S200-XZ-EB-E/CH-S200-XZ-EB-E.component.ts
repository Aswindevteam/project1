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
  selector: 'app-CH-S200-XZ-EB-E',
  templateUrl: './CH-S200-XZ-EB-E.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Chs200xzebeComponent{
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


    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CH-S200-XZ-EB-E',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','Clean and disinfect the CH-S200-XZ-EB-E according to the instructions in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Inspection of the camera head ', 'Confirm that the camera head does not have the following damages.\nSurface of the camera head’s main body is free from cracks, burrs, or other damages.\nCamera cable is free from sagging, swelling, scratches, or holes.\nElectrical contacts of the video connector are free from bends or rust.\nMake sure that the equipment is completely dry before use. \nWipe the video connector,including the electrical contacts using clean lint-free cloths. Also confirm that the electrical contacts are completely dry and clean.', `${s2}`],
            ['3', 'Connection to thecamera control unit', 'If any ancillary equipment is ON, turn it OFF.\nConfirm that the video connector, including electrical contacts and optical connectingpart, is dry and clean.\nMake sure that the UP mark on the video connector is facing up.\nHold the camera control unit stationary with one hand. With the other hand, push the video connector into the video connector socket until it clicks.Confirm that the video connector is securely attached by pulling it gently', `${s3}`],
            ['4', 'Connection to the endoscope', 'Hold the camera head.\nAttach the endoscope’s eyepiece to the endoscope mount while rotating the endoscope lock ring in the direction of the arrow.\nRelease the endoscope lock ring to secure the eyepiece in the specified position.', `${s4}`],
            ['5', 'Inspection of the endoscopic image', 'Turn ON the camera control unit, the light source,and the monitor.\nObserve the palm of your hand in the WLI and NBI endoscopic images.\nConfirm that the illumination light is emitted and that the WLI and NBI endoscopic images are free from noise, blur, fog, or other irregularities.\nShake the camera cable and confirm that the endoscopic image does not momentarily disappear, flicker, or display any other irregularities.', `${s5}`],
            ['6', 'Inspection of the remote switches', 'Depress every remote switch and confirm that the specified functions work normally', `${s6}`],
            ['7', 'Focus switch/Zoom switch check', 'The focus and zoom can be adjusted.', `${s7}`],
            ['8', 'Endoscopic image check', 'When you observe your palm in the normal light observation image and NBI observation image, the brightness adjustment should function properly, and colors should be rendered correctly. Also, there should be no abnormalities such as noise, blurriness, fogginess, dust, brightness, or defective pixels that may adversely affect endoscopic observation. There should occur no abnormalities such as a momentary disappearance of normal light observation image or the NBI observation image, or noise occurrence when you shake the camera cable while viewing a normal light observation image. There should occur no noise on the monitor that may adversely affect the actual use when you conduct visual inspection by operating the remote switches (1, 2, 3) with a normal light observation image. There should occur no noise on the monitor that may adversely affect the actual use when you conduct visual inspection by rotating the focus ring while viewing a normal light observation image.', `${s8}`],
            ['9', 'Appearance check', 'No significant damages, deformations, smudges, burrs, or edges are observed on the appearance.\nNo rust or corrosion should be observed on the electrical contacts of the video connector. Labeling should be properly provided.\n* Repair of damages, deformations, and smudges is recommended if the specimen passes other inspection items.', `${s9}`],


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
      {text:'Issue date :  30 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date :  30 Nov 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CH-S200-XZ-EB-E_'+sno}`; // Custom file name
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
