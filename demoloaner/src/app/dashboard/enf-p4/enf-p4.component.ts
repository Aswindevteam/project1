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
  selector: 'app-enf-p4',
  templateUrl: './enf-p4.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Enfp4Component{
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
      s3a_result: [,Validators.required],
      s3b_result:  [,Validators.required],
      s4_result:  [,Validators.required],

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
    let s3a=data['s3a_result'];
    let s3b=data['s3b_result'];
    let s4=data['s4_result'];

    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3a==p)&&(s3b==p) &&(s4==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR ENF-P4',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Endoscope water tightness condition','Perform the leakage test (Check for 30 seconds)', `${s1}`],
            ['2', 'Overall appearance', 'Inspection of the endoscope', `${s2}`],
            ['3.1', 'Control section;\nAngle section', 'Inspection of the bending mechanisms:\n1. Inspection for smooth operation', `${s3a}`],
            ['3.2', 'Control section;\nAngle section', 'Inspection of the bending mechanisms:\n2. Inspection of the UP/DOWN angulation mechanism', `${s3b}`],
            [
              '4',
              'Image system',
              {
                stack: [
                  'Inspection of the endoscopic image',
                  {
                    canvas: [
                      {
                        type: 'ellipse',
                        x: 0, // x-coordinate of the center of the circle
                        y: 0, // y-coordinate of the center of the circle
                        r1: 20, // horizontal radius of the circle
                        r2: 20, // vertical radius of the circle
                        lineWidth: 2, // width of the circle's outline
                        lineColor: 'black', // color of the circle's outline
                      },
                      {
                        type: 'rect',
                        x: 1, // x-coordinate of the top-left corner of the rectangle
                        y: -30, // y-coordinate of the top-left corner of the rectangle
                        w: 12, // width of the rectangle
                        h: 12, // height of the rectangle
                        color: 'white', // color of the rectangle (to fill the opening)
                        lineWidth: 1, // width of the rectangle's outline (0 for no outline)
                      },
                      {
                        type: 'line',
                        x1: 10, // x-coordinate of the starting point of the line
                        y1: -18, // y-coordinate of the starting point of the line
                        x2: 0, // x-coordinate of the ending point of the line
                        y2: -10, // y-coordinate of the ending point of the line
                        lineWidth: 2, // width of the line
                        lineColor: 'black', // color of the line
                      },
                      {
                        type: 'line',
                        x1: 0, // x-coordinate of the starting point of the line
                        y1: -20, // y-coordinate of the starting point of the line
                        x2: 0, // x-coordinate of the ending point of the line
                        y2: -10, // y-coordinate of the ending point of the line
                        lineWidth: 2, // width of the line
                        lineColor: 'black', // color of the line
                      },
                    ],
                    alignment: 'center', margin: [10, 40, 10, 40], // align the circle in the center of the cell
                  },
                ],
                alignment: 'center',
              },
              `${s4}`,
            ],




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
      const fileName = `${'ENF-P4_'+sno}`; // Custom file name
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
