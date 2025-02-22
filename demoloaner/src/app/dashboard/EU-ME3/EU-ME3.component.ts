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
  selector: 'app-EU-ME3',
  templateUrl: './EU-ME3.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Eume3Component{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR EU-ME3',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning/disinfection','Clean and disinfect the EU-ME3 according to the instructions described in the corresponding Instructions Manual.', `${s1}`],
            ['2', 'Connection with the ultrasound endoscope/ultrasound cable or the probe driving unit', 'a. Check that the ACTIVE lamp is off.\nb. Follow the instructions in the ultrasound endoscopes instruction manual, and align the ultrasound endoscope or the ultrasound connector of the ultrasound connectioncable with the icon on the Ultrasound Center, and push it in until it contacts SOCKET2.\nc. Turn the lever in the clockwise direction. Once the lever cannot move any further, the connection is complete.', `${s2}`],
            ['3', 'Connection with the ultrasound endoscope/ultrasound cable or the probe driving unit (Connection with the probe driving unit)', 'a. Check that the ACTIVE lamp is off.\nb. Align the ultrasound connector of the probe driving unit with the icon on the Ultrasound Center, and push it in until it contacts SOCKET1.\nc. Turn the lever in the clockwise direction. Once the lever cannot move any further, the connection is complete.', `${s3}`],
            ['4', 'Inspection of the power supply', 'a. Check that the ventilation grills on the rear panel and sides of the Ultrasound Center are not blocked by dust or other foreign objects.\nb. Connect the ultrasound endoscope or probe driving unit to the Ultrasound Center.\nc. Press the power switch of the Ultrasound Center.\nd. Confirm that the power indicator is lit.\ne. After about one minute, check that the buzzer sounds twice.\nf. From the front panel side, hold your hand over the left ventilation grills to check that air is being discharged.', `${s4}`],
            ['5', 'Connection with portable memory', 'a. With the “OLYMPUS” logo on the portable memory facing up, push the portable memory into the portable memory port until it cannot go any further.\nb. The Ultrasound Center recognizes the portable memory, and the access indicator turns on. The access indicator and LED on the portable memory indicate the following states.', `${s5}`],
            ['6', 'Inspection of the monitor', 'Confirm that the endoscopic image or ultrasound endoscopic image is displayed on the monitor.', `${s6}`],
            ['7', 'Check of displayed information on monitor', 'a. When the power of the Ultrasound Center is turned on, a monitor display appears on the monitor.\nb. Check that the date and time are displayed correctly.\nc. If an endoscopic image file device is connected by passing through the video system center, check that “DF” is being displayed.\nd. If images will be stored in the internal memory of the Ultrasound Center, check that there is enough available space in the MEDIA indicator.\ne. Check that displayed user settings are same as those the operator uses.', `${s7}`],
            ['8', 'Inspection of the ultrasound images (Inspection of the B mode image) ', 'a. Press the FREEZE key to make the ultrasound image live, and make sure that the ultrasound image is displayed on the monitor display.\nb. Pressing the FREEZE key again will freeze the ultrasound image. Check that the frame number appears at the bottom right.', `${s8}`],
            ['9','Inspection of the FLOW mode image', 'a. Perform Step 1 in “Inspection of the B mode B14image” on page 10.\nb. Press the F key.\nc. Press the COLOR button in the FLOW MODE section on the touch panel to set to COLOR FLOW mode.\nd. Press the [+] key for adjust key 1 to maximize the FLOW again.\ne. Check that the interior of the ROI appears blue and red.', `${s9}`],
            ['10', 'Inspection of the POWER FLOW mode image', 'a. Perform Step 1 and 2 in “Inspection of the COLOR FLOW mode image.\nb. Press the POWER button in the FLOW MODE section on the touch panel to set to POWER FLOW mode.\nc. Press the [+] key for adjust key 1 to maximize the FLOW gain.\nd. Check that the interior of the ROI appears red.', `${s10}`],
            ['11', 'Inspection of the H-FLOW mode image ', 'a. Perform Step 1 and 2 in “Inspection of the COLOR FLOW mode image.\nb. Press the H-FLOW button in the FLOW MODE section on the touch panel to set to HFLOW mode.\nc. Press the [+] key for adjust key 1 to maximize the FLOW gain.\nd. Check that the interior of the ROI appears bright blue and bright red.', `${s11}`],
            ['12','Inspection of the PW mode image','a. Perform Step 1 in “Inspection of the B mode image.\nb. Press the PW key on the keyboard.\nC. Make sure that the PW cursor and sample volume are displayed on the left half of the monitor.',`${s12}`],
            ['13','Inspection of the CHE mode image','a. Perform Step 1 in “Inspection of the B mode image.\nb. Press the CHE key\nc. Check that the CHE MAIN tab appears on the touch panel.\nd. Check that the mode name (CHE-P, CHE-R, or C THE) for the CHE mode button that is lit on the touch panel appears on the monitor display',`${s13}`],
            ['14','Inspection of the ELST mode image','a. Perform Step 1 in “Inspection of the B mode image.\nb. Press the ELST key on the keyboard.\nc. Check that the ELST MAIN tab appears on the touch panel of the keyboard.\nd. Check that the mode name appears on the monitor display.',`${s14}`],
            ['15','Inspection of release','a. Perform Step 1 in “Inspection of the B mode image.\nb. Press the RELEASE key to output the still image on the monitor display to ancillary equipment (video printer, video system center).\nc. When you hear a beeping sound, check that the ultrasound image temporarily freezes and then returns to live.\nd. Check that the storage count for the video system center and the counters displayed on the endoscopic image file device and other equipment on the monitor increase.',`${s15}`],
            ['16','Inspection of the video system center','When combining with the video system center for use, conduct the following inspection.\na. Turn on the power for the Ultrasound Center and the video system center.\nb. Press the VIDEO SOURCE key to set to EVIS mode. Check that the product code of the connected video system center appears on the touch panel on the keyboard.',`${s16}`],
            ['17','Power off','a. If the Ultrasound Center will not be used for a while, press the power switch on the front panel to turn it off.\nb. Confirm that the Ultrasound Center is turned off and the power indicator is off.',`${s17}`]

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
      {text:'Issue date : 25 September 2023',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 25 September 2023',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${' EU-ME3_'+sno}`; // Custom file name
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
