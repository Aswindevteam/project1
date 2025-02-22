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
  selector: 'app-OTV-S700',
  templateUrl: './OTV-S700.component.html',
  styleUrls: ['./OTV-S700.component.css'],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  standalone:true
})
export class Otvs700Component {
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




    let sno=data['sn_o'];
    let cdsDate1=data['cds_date']
    this.cdsDate=new Date(cdsDate1).toLocaleDateString('en-GB')
    let p='Pass'
    let overRes=''
    let image_data_url=sessionStorage.getItem('image_data_url');
    console.log(this.cdsDate)
    if((s1==p) && (s2==p) && (s3==p)&&(s4==p)&&(s5==p)&&(s6==p) &&(s7==p)&&(s8==p) &&(s9==p)&&(s10==p)
    &&(s11==p)&&(s12==p)&&(s13==p)&&(s14==p)&&(s15==p)){
      console.log('Pass')
      overRes='Pass'
      document.getElementById('fr_d')?.append('Pass')
    }else{
      overRes='Fail'
      document.getElementById('fr_d')?.append('Fail')
    }
    var content:Content[] = [

      {text: 'DEMO-LOANER INSPECTION SHEET FOR OTV-S700',alignment: 'center',margin:[0,10,0,5] ,bold:true,fontSize:16   },
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
            ['1', 'Inspection of the power supply','1. Confirm that the ventilation grilles on the right side and rear side panels of the video system center are not covered with dust or other materials.\n2. Press the power switch of the video system center. The power indicator lights up.Confirm that the Olympus-logo is displayed on the touch panel.\n3. Confirm that air is exhausted by holding your hand in front of the ventilation grilles', `${s1}`],
            ['2', 'Inserting the portable memory', '1. Confirm that the “OLYMPUS” mark on the portable memory faces upward and insert it into the portable memory port until it stops.\n2. Confirm the portable memory access indicator on the front panel is blinking', `${s2}`],
            ['3', 'Resetting all', 'T1.Tap the “Settings” on the front panel > “Maintenance” button.\n2.The Maintenance Settings screen is displayed.\n3. Tap the “All reset” button.\n4. Tap the “Yes” button on the popup screen.\n5. All reset is completed. On the pop-up screen, the message “All reset completed” and “Power cycle” is displayed. Tap the power button', `${s3}`],
            ['4', 'Connection of an endoscope (Videoscope)', '1.Confirm that the video system center and all connected devices are turned OFF.\n2. Confirm that the electrical contacts inside the video connector socket of the video system center are not damaged.\n3. Connect the light guide connector of the videoscope to the output socket of the video system center.\n4.Push the video connector of the videoscope into the video connector socket of thevideo system center all the way until it clicks. Confirm that the “UP” mark faces upwards.', `${s4}`],
            ['5', 'Inspection of the monitor display', '1.Confirm that the necessary information are displayed on the monitor. If not, tap the “Data display” button on Home > Function list > Info > Information tab, and switch to “On” or “ Custom”.\n2.Confirm that the data and time are displayed correctly.\n3.Confirm that available storage is enough on portable memory, when storing endoscopic images.', `${s5}`],

            ['6', 'Inspection of the endoscopic image', '1. Before inspection, wipe the lens of endoscope with clean lint-free cloths that moistened with ethanol for disinfection, saline solution or sterilized water.\n2. If the examination light is not emitted, tap the “Lamp” button on Home > Basic functions. Confirm that the examination light is emitted from the distal end of endoscope.\n3. Confirm that the illumination is coming from the tip of the endoscope.\n4. Observe the WLI observation mode on palm.\n5. Tap the plus/minus button of the Home > Function list > Bright /Color > Brightness 1 tab, and adjust the brightness approximately.\n6.Confirm that the WLI endoscopic image is displayed without any irregularities such as noise, blur or fog.\n7. When using an endoscope with bent part, bend the bent part by operating endoscope. Confirm that the WLI endoscopic image is displayed without any irregularities such as momentary disappear.\n8. Make sure that up, down, right and left of distal end of endoscope and displayed endoscope image on observation monitor are same direction.', `${s6}`],
            ['7', 'Inspection of the brightness adjustment Function (Automatic brightness adjustment) ', '1. If the examination lamp is turned OFF, ignite the lamp.\n2. Set the brightness mode to “Auto”.\n3. Point the distal end of the endoscope at a suitable object and vary the distance between 5 and 60 mm. Confirm that brightness of the endoscopic image on the monitor is stable.\n4. Operate the brightness. Confirm that the brightness of the light emitted from the distal end of the endoscope increases or decreases.', `${s7}`],
            ['8', 'Inspection of the brightness adjustment Function (Manual brightness adjustment)', '1. If the examination lamp is turned OFF, ignite the lamp.\n2. Set the iris mode to “Manual”.\n3. Tap the minus button or plus button on the touch panel, or the custom switch to which “Brightness up” or “Brightness down” is assigned.\n4. Depending on which button you tap, the “Brightness” status changes and the brightness changes.\n5. Confirm that the brightness of the light emitted from the distal end of the endoscope increases or decreases.', `${s8}`],
            ['9', 'Inspection of the freeze function ', '1. Tap the “Freeze” button on Home > Function list > Record. > Still image tab to switch the status of the “Freeze”.\n2. Confirm that a beep is heard, and the live endoscopic image freezes.\n3. Tap the “Freeze” button while freezing the live endoscopic image.\n4. Confirm that the image returns to the live image.', `${s9}`],
            ['10', 'Inspection of the release function', '1. Turn on the peripheral devices.\n2. Tap either “Release 1” or “Release 2” button on Home > Function list > Record > Still image tab.\n3. A beep will be heard, and the endoscopic image freezes for a short time. After that confirm the image will return to the live image.\n4. Confirm that the counter of recording destination which displayed on the monitor is increased.', `${s10}`],
            ['11', 'Inspection of the recording function', '1. Turn the peripheral device ON.\n2. Tap the “Rec” button on Home > Function list > Record > DVR tab.\n3. Confirm that the recording icon is displayed on the touch panel.\n4. Confirm that the video recorder is in the recording state.\n5. Tap the “Pause” button.\n6. Confirm that the pause icon is displayed on the touch panel.\n7. Confirm that the video recorder is in the paused state.\n8. Tap the “Stop” button.\n9. Confirm that the stop icon is displayed on the touch panel.\n10. Confirm that the video recorder is in the stopped state.', `${s11}`],
            ['12', 'Inspection of the endoscopic image rotation function', '1.Tap the “Rotate” button on Home > Function list >Image effect tab.\n2. Confirm that the endoscope image on the observation monitor has been rotated 180°.\n3. Confirm the displaying “Image rotation ” icon on the monitor,throughout rotating 180.', `${s12}`],
            ['13', 'Inspection of the custom switches ', '1. Tap the “Switch information” on Home > Function list > Info. > Information tab.\n2. The functions assigned to the custom switch will be listed on monitor.\n3. Confirm the assigned function of custom switches.', `${s13}`],
            ['14', 'Inspection of the optical-digital observation function', '1.Confirm the available observation mode on upper part of touch panel. The icons of available observation mode is displayed in gray.\n2.Tap the available observation mode button on Home > Function list > Observ >Observation tab.\n3.Upper-right of monitor is display icon of each observation mode. Confirm that the endoscopic image is change to the selected observation mode.', `${s14}`],
            ['15', 'Inspection of power off', 'Press the power switch on the front panel of the video system center to turn it OFF.', `${s15}`],

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
      {text:'Issue date : 12 January 2023',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},
      {
        image:`${image_data_url}`,
        width: 100,
        height:100,
        alignment:'right',
        margin:[0,20,0,0]
      })
   }else{
    content.unshift(
      {text:'Issue date : 12 January 2023',alignment:'right',fontSize:5,},{text:'REV NO : 00',alignment:'right',fontSize:5},)
   }
var dd={
content:content
}
const pdfDocGenerator = pdfMake.createPdf(dd);

    // Get the PDF as a Blob
    pdfDocGenerator.getBlob((blob) => {
      const fileName = `${'OTV-S700_'+sno}`; // Custom file name
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
