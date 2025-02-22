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
import { PopUpService } from '../add-more-page/popup.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-gif-h180',
  templateUrl: './gif-h180.component.html',
  styleUrls: ['./gif-h180.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Gifh180Component {
  formGroup: any;
  startTime:any;
  endTime:any;
  cdsDate:any;
  startDate = formatDate(new Date(), 'dd/MM/yyyy', 'en-US')
  de_lo:any;
  remarks:any;

  constructor(private fb: FormBuilder,
    private popupservice:PopUpService,private router:Router,private renderer :Renderer2,private location:Location) {
    this.formGroup = this.fb.group({
      delo:[,Validators.required],
      sn_o:[,Validators.required],
      cds_date:[,Validators.required],
      cds_by:[,Validators.required],
      insBy:[,Validators.required],

      s1_result: [,Validators.required],
      s2_result:  [,Validators.required],
      s3_result:  [,Validators.required],
      s4_result: [,Validators.required],
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
      s15_result: [,Validators.required],
      s16_result: [,Validators.required],
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

  async download() {
    if(this.remarks==undefined){
      this.remarks=''
    }
    const data=this.formGroup.value;
  if(this.formGroup.status=='INVALID'){
    alert('fill the all field')
  }else{

const proceed = await this.popupservice.openDialog()
if(proceed == 'true'){
const addMore:any = this.popupservice.makePdf();
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
let image_data_url=localStorage.getItem('image_data_url');
console.log(this.cdsDate)
if((s1==p) && (s2==p) && (s3==p) &&(s4==p) &&(s5==p)&&(s6==p)&&(s7==p)&&(s8==p)&&(s9==p)&&(s10==p)&&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)&&(s16==p)){
  // console.log('Pass')
  overRes='Pass'
  document.getElementById('fr_d')?.append('Pass')
}else{
  // console.log('Fail')
  overRes='Fail'
  document.getElementById('fr_d')?.append('Fail')
}
var content:Content[] = [
  {text: 'DEMO-LOANER INSPECTION SHEET FOR GIF-H180',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
   {
   table: {
       widths: [125, 125, 125, 125],
       body: [
           [ { text: 'DEMO/LOANER', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data['delo']}`,alignment:'center'},{ text: 'S.No', fillColor: '#CCCCCC' ,alignment:'center'},{ text: `${sno}`,alignment:'center' }],
           [ { text: 'CDS DATE', fillColor: '#CCCCCC',alignment:'center' },{ text: `${this.cdsDate}`,alignment:'center' }, { text: 'CDS BY', fillColor: '#CCCCCC',alignment:'center' },{ text: `${data['cds_by']}`, alignment:'center'}]
       ]
   }
},{
table: {
    widths: [25, 125, 275, 75],
    body: [
        [ { text: 'S.N', fillColor: '#CCCCCC', alignment:'center' },{ text: 'INSPECTION ITEM ',fillColor: '#CCCCCC' ,alignment:'center'},{ text: 'INSPECTION STANDARD', fillColor: '#CCCCCC' ,alignment:'center'},{ text: 'INSEPECTION RESULT',alignment:'center',fillColor: '#CCCCCC'  }],
        ['1', 'Endoscope water tightness condition','Perform the leakage test (Check for 30 seconds)', `${s1}`],
        ['2', 'Brush Passage', 'Channel cleaning brush passage', `${s2}`],
        ['3', 'Overall appearance', 'Inspection of the endoscope', `${s3}`],
        ['4', 'Control section;\nAngle section', 'Inspection of the bending mechanisms:\n1. Inspection for smooth operation\n2. Inspection of the UP/DOWN/RIGHT/LEFT angulation mechanism', `${s4}`],
        ['5', 'Control section;\nSuction valve mounting section', 'Attaching the suction valve', `${s5}`],
        ['6', 'Control section;\nAir/water valve mounting section', 'Attaching the air/water valve', `${s6}`],
        ['7', 'Control section;\nBiopsy valve mounting section', 'Attaching the biopsy valve', `${s7}`],
        ['8', 'Endoscope connector', 'Connection to the light source', `${s8}`],
        ['9', 'Endoscope connector', 'Connection of the water container', `${s9}`],
        ['10', 'Endoscope connector', 'Connection to the videoscope cable', `${s10}`],
        ['11', 'Image system', 'Inspection of the endoscopic image', `${s11}`],
        ['12', 'Control section;\nSwitch system', 'Inspection of the remote switches', `${s12}`],
        ['13', 'Air supply system', 'Inspection of the air-feeding function', `${s13}`],
        ['14', 'Water supply system', 'Inspection of the objective lens cleaning function:\n1. Inspection of the water feeding function\n2. Inspection of removing the remaining water from the objective lens', `${s14}`],
        ['15', 'Suction System', 'Inspection of the suction function', `${s15}`],
        ['16', 'Instrument channel system', 'Inspection of the instrument channel', `${s16}`],


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
    width: 150,
    height:150,
    alignment:'right',
    margin:[0,20,0,0]
  })
}else{
content.unshift(
  {text:'Issue date : 05 Sep 2022',alignment:'right',fontSize:5,},{text:'REV NO : 03',alignment:'right',fontSize:5},)
}

if(addMore){
content.push(addMore)
}
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

// Get the PDF as a Blob
pdfDocGenerator.getBlob((blob) => {
  const fileName = `${'GIF-H180_'+sno}`; // Custom file name
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

    }
    ngOnDestroy(){
      sessionStorage.removeItem('image_data_url')
      localStorage.removeItem('image_data_url')
     }
     setAllPass(){
      const fc = this.formGroup.controls;
      const controls = Object.keys(fc);
      controls.filter((key)=>{
        if((key.charAt(0) == 's') && (key != 'sn_o')){
          this.formGroup.controls[key].setValue('Pass')
        }
      })
     }
}
