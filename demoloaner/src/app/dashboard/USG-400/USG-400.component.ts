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
  selector: 'app-USG-400',
  templateUrl: './USG-400.component.html',
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class  Usg400Component{
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

      {text: 'DEMO-LOANER INSPECTION SHEET FOR USG-400',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Cleaning & Disinfection','The USG-400 must be cleaned and disinfected according to instruction described in the instruction manual.', `${s1}`],
            ['2', 'Exterior of USG-400', 'Inspect the USG-400 exterior for noticeable scratches, grime and/or deformation that may affect the functionality.', `${s2}`],
            ['3', 'Power On', 'Turn on the main unit and inspect the following items:\n-LED around the power switch lights up in green.\n-The touch-screen lights up.\n-The push buttons light up.\n-The start screen is displayed for 3 seconds on the touch-screen.\n-When the start screen appears, a start tone sounds simultaneously.\n-Following the start screen, the set screen or main screen appears', `${s3}`],
            ['4', 'Connection with the ESG400 with communication cable.', '1- Connect the USG-400 and ESG-400 with a communication cable. turn on the ESG-400 verify that the communication indicator on the USG-400 is illuminated and connection with ESG-400 is successful.\n2- Connect both ends of the communication cable to the LINK-IN and LINK-OUT on the USG-400 rear panel, respectively.Verify that error code U503 ( System connection error) appears', `${s4}`],
            ['5', 'Touch Panel ', '1- When THUNDERBEAT or SONICBEAT is connected, inspect the following items with displayed screen: set screen:\n-Press the plus button, verify that the output level increases.\n-Press the minus button, verify that the output level decreases.\n-Press and hold the plus or minus button, verify that the output level changes subsequently.\n-Press the return button, Verify that the display changes from set screen to main screen.\n2- When both THUNDERBEAT or SONICBEAT are connected, inspect the following items with displayed screen:\nMain screen:\n-Press the THUNDERBEAT or SONICBEAT button. Verify that the display changes from main screen to set screen.\n-Press the plus button. Verify that the output level increases.\n-Press the minus button. Verify that the output level decreases.\n-Press the return button. Verify that the display changes from set screen to main screen.', `${s5}`],
            ['6', 'Push Buttons Operation', 'Press the probe check push button.\nVerify that the main screen displays the confirmation window (probe check). \nPress the cancel button on the left bottom of the screen. Verify that the confirmation window (probe check) disappears and display returns to the main screen.', `${s6}`],
            ['7', 'High Frequency ( RF BIPOLAR ) Output', 'Preparation\n- Prepare a container (such as a bowl) with saline.\n- Open the THUNDERBEAT grasping section. Submerge only the half end of the grasping section ( different color area) and the probe tip in saline.\n- Press and hold the seal button (blue) of the hand switch or seal pedal ( right padel:blue) of the footswitch.\n- Verify that high-frequency ( RF bipolar) output is activated.\n- Verify that the activation in set screen or all screen is displayed on the touchscreen.\n- Verify that output tone sounds from ESG-400.', `${s7}`],
            ['8','Footswitch Connection', 'Connect the footswitches verify that the two footswitch indicators illuminate on the USG-400 touch screen.', `${s8}`],
            ['9', 'Alarm System', 'Prior to inspection of the alarm system, verify that the transducer is unplugged from the USG-400. \nPress and hold the THUNDERBEAT or SONICBEAT handswitch and connect the transducer to the usg-400 :\nVerify that the error window (U501:Handswitch error screen) appears on the touch screen and an alarm tone sounds. Release the THUNDERBEAT or SONICBEAT handswitch, verify that the error tone stops and a message"error has been resolved"appears on the handswitch error window press the OK switch. Verify that the error is cleared and the error window disappears.', `${s9}`],
            ['10', 'Exterior/Labeling', 'Inspect following items:\n-After pressing the "MENU" push button, tap the "NEXT" button at the button of the "SELECT MENU" screen.\n-Tap the "software version" button on the screen and check the "software version".\n-By visual inspection, ensure that are no problems on exterior/labeling.\n-Check the apparent condition stuck ITM label by visual inspection.(In case of software version is 2.00 or later)\n-Visually check that label and marking on the main body can be clearly read.', `${s10}`],
            ['11','Power Off','Turn off The usg-400\nIf ESG-400 is also connected, turn off the ESG-400 as well.\nInspect the following items:\n-LEDs around switches extinguish.\n-The touch-screen extinguishes.\n-The push buttons extinguish.',`${s11}`],
            ['12','Data Delete and Reset','Delete and Reset previous data, ie user setting, patient data etc.',`${s12}`]

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
      const fileName = `${'USG-400_'+sno}`; // Custom file name
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
