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
  selector: 'app-CH-S400-XZ-EB',
  templateUrl: './CH-S400-XZ-EB.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Chs400xzebComponent{
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

    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p) &&(s4==p)&&(s5==p)&&(s6==p)&&(s7==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR CH-S400-XZ-EB',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Inspection of the camera head','1 Confirm that the camera head does not have the following damages.\n• Surface of the camera head’s main body is free from cracks, burrs, or other damages.\n• Camera cable is free from sagging, swelling, scratches, or holes.\n• Electrical contacts of the video connector are free from bends or rust.\n2 Make sure that the equipment is completely dry before use. Wipe the video connector,including the electrical contacts using clean lint-free cloths. Also confirm that the electrical contacts are completely dry and clean.', `${s1}`],
            ['2', 'Connection to the camera control unit', '1 If any ancillary equipment is ON, turn it OFF.\n2 Confirm that the video connector, including electrical contacts and optical connecting part, is dry and clean.\n3 Make sure that the UP mark on the video connector is facing up.\n4 Hold the camera control unit stationary with one hand. With the other hand, push the video connector into the video connector socket until it clicks.\n5 Confirm that the video connector is securely attached by pulling it gently.', `${s2}`],
            ['3', 'Connection to the endoscope', '1 Hold the camera head.\n2 Attach the endoscope’s eyepiece to the endoscope mount while rotating the endoscope lock ring in the direction of the arrow.\n3 Release the endoscope lock ring to secure the eyepiece in the specified position.', `${s3}`],
            ['4', 'Inspection of the remote switches', '1 Turn ON the camera control unit, the light source,and the monitor.\n2 Observe the palm of your hand in the WLI and NBI endoscopic images.\n3 Confirm that the illumination light is emitted and that the WLI and NBI endoscopic images are free from noise, blur, fog, or other irregularities.\n4 Shake the camera cable and confirm that the endoscopic image does not momentarily disappear, flicker, or display any other irregularities.', `${s4}`],
            ['5', 'Inspection of the remote switches', ' Depress every remote switch and confirm that the specified functions work normally', `${s5}`],
            ['6', ' Inspection of the one touch auto focus', '1 Observe the palm of your hand.\n2 Move the distal end of the endoscope nearer to your palm and press the one touch auto focus switch. Confirm that the endoscopic image on the monitor is automatically adjusted so that the image may become sharpest.\n3 Move the distal end of the endoscope away from your palm and press the one touch auto focus switch. Confirm that the endoscopic image on the monitor is automatically adjusted so that the image may become sharpest.', `${s6}`],
            ['7','Inspection of the manual focus','1 Observe the palm of your hand.\n2 Confirm that the endoscopic image on the monitor is adjusted so that the image may become sharpest by rotating the focus ring to the proper position.',`${s7}`]




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
      {text:'Issue date : 03 Aug 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 03 Aug 2018',alignment:'right',fontSize:5,},{text:'REV NO : 02',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'CH-S400-XZ-EB_'+sno}`; // Custom file name
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
