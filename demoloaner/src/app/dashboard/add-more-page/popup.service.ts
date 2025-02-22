import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddMorePageComponent } from "./add-more-page.component";
import { Content } from "pdfmake/interfaces";

@Injectable({
 providedIn: "root"
})

export class PopUpService {
 constructor(
 public dialog: MatDialog
 ) { }

 async openDialog(): Promise<string> {
 const dialogRef = this.dialog.open(AddMorePageComponent, {
 width: '250px',
 data: { name: 'as', animal: 'this.animal' }
 });

 return new Promise<string>((resolve) => {
 dialogRef.afterClosed().subscribe(result => {
 if (result === 'true') {
 resolve(result);
 } else {
 resolve('false'); // Or any other default value if needed
 }
 });
 });
 }

 makePdf(){
 const d:any = sessionStorage.getItem('addmore')
 let content:Content[];
 if(d){
 const data = JSON.parse(d)
 const body = data.body
 const field = sessionStorage.getItem('data')
 if(field == 'sc1'){
 content = [
 { text: '', pageBreak: 'after' },
 { text:'Scope Channel Water Removal record EUS scopes',alignment:'center'},
 {
 table:{
 widths: [250,250],
 body: [
 [{ text: 'Air pressure (Pressure gauge/manometer)', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data.head.sn_01}`, fillColor: '', alignment:'center' },],
 [{ text: 'Air feeding time (Timer/stopwatch)', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data.head.sn_02}`, fillColor: '', alignment:'center' },],
 ]
 }
 },
 {text:'*Refer to ERW10001 in Inspection Manual',margin: [0, 20, 0, 0],italics: true},

 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'Water removal work (EUS)',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Parameter',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Actual set point',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Remark',fontSize:10,fillColor:'#CCCCCC',alignment:'center'}],
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(0).Preperation',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(Check) Air pressure',fontSize:10,fillColor:'',},{ text: '0.25 ' + String.fromCharCode(177) + ' 0.05 MPa',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s1}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Measurement while feeeding air',fontSize:10,fillColor:''}],
 [{text:'(Check) Set S rubber on air gun',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s2}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(1).Pre air feed: remove droplets(no sequential order)',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'AW Cylinder',fontSize:10,fillColor:'',},{ text: '-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s3}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}],
 [{text:'S Cylinder',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s4}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}],
 [{text:'Instrument chanel port',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s5}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}]
 ]},

 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(2).Main air feed: by specified sequence',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(A) AW Cylinder',fontSize:10,fillColor:'',alignment:'center'},{ text: '30 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s6}`,fontSize:10,fillColor:'',alignment:'center'},{text:' -',fontSize:10,fillColor:''}],
 [{text:'-Attach biopsy cap',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s7}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Accessory for water removal',fontSize:10,fillColor:''}],
 [{text:'(B) S Cylinder',fontSize:10,fillColor:'',alignment:'center'},{text:'30 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s8}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
 [{text:'Remove biopsy cap',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s9}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Accessory for water removal',fontSize:10,fillColor:''}],
 [{text:'(c) <if the scope has following CH>',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
 [{text:'-Elevator Wire Tube (K pipe)',fontSize:10,fillColor:'',alignment:'center'},{text:'60 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s10}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with elevator CH',fontSize:10,fillColor:''}],
 [{text:'-Aux water (jet)',alignment:'center',fontSize:10,fillColor:''},{text:'30 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s11}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with aux water CH',fontSize:10,fillColor:''}],
 [{text:'-Irigation Port',alignment:'center',fontSize:10,fillColor:''},{text:'30 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s12}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with irrigation port',fontSize:10,fillColor:''}],
 [{text:'(D)Instrument Channel port',alignment:'center',fontSize:10,fillColor:''},{text:'30 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s13}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(3).Final air feed: by specified sequence',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'AW Cylinder',fontSize:10,fillColor:'',},{ text: '3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s14}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}],
 [{text:'Aux water (jet)',fontSize:10,fillColor:''},{text:'3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s15}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with aux water CH',fontSize:10,fillColor:''}],
 [{text:'Instrument Channel port',fontSize:10,fillColor:'',},{ text: '3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s16}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(4).Check after work & checking',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(CL) Wipe cylinders and channel port',fontSize:10,fillColor:'',},{ text: '-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s17}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In case water droplet inside',fontSize:10,fillColor:''}],
 [{text:'(CL) Wipe overall exterior',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s18}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}]
 ]}
 },

 {
  table:{
  widths: [509],
  body:[
  [{text:'(5).Water sensitive paper check',fontSize:10,fillColor:'#CCCCCC'}],
  ]}
  },
  {
  table:{
  widths: [150,100,107,125],
  body:[
  [{text:'AW Cylinder',fontSize:10,fillColor:''},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s19 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'S Cylinder',fontSize:10,fillColor:''},{text:'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s20 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'Aux water / Elevator wire',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s21 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'Irrigation port',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s22 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'Instrument Channel port',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s23 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],

  ]}
  },
 ]
 }
 else if(field =='sc2'){
 content = [
 { text: '', pageBreak: 'after' },
 { text:'Scope Channel water Removal GI/SP except EUS scopes',alignment:'center'},
 {
 table:{
 widths: [250,250],
 body: [
 [{ text: 'Air pressure (Pressure gauge/manometer)', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data.head.sn_01}`, fillColor: '', alignment:'center' },],
 [{ text: 'Air feeding time (Timer/stopwatch)', fillColor: '#CCCCCC', alignment:'center' },{ text: `${data.head.sn_02}`, fillColor: '', alignment:'center' },],
 ]
 }
 },
 {text:'*Refer to ERW10001 in Inspection Manual',margin: [0, 20, 0, 0],italics: true},

 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'Water removal work (EUS)',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Parameter',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Actual set point',fontSize:10,fillColor:'#CCCCCC',alignment:'center'},{text:'Remark',fontSize:10,fillColor:'#CCCCCC',alignment:'center'}],
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(0).Preperation',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(Check) Air pressure',fontSize:10,fillColor:'',},{ text: '0.25 ' + String.fromCharCode(177) + ' 0.05 MPa',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s1}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Measurement while feeeding air',fontSize:10,fillColor:''}],
 [{text:'(Check) Set S rubber on air gun',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s2}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(1).Pre air feed: remove droplets(no sequential order)',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'AW Cylinder',fontSize:10,fillColor:'',},{ text: '-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s3}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}],
 [{text:'S Cylinder',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s4}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}],
 [{text:'Instrument chanel port',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s5}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Until droplets inside are removed',fontSize:10,fillColor:''}]
 ]},
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(2).Main air feed: by specified sequence',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(A) AW Cylinder',fontSize:10,fillColor:'',alignment:'center'},{ text: '20 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s6}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}],
 [{text:'-Attach biopsy cap',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s7}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Accessory for water removal',fontSize:10,fillColor:''}],
 [{text:'(B) S Cylinder',fontSize:10,fillColor:'',alignment:'center'},{text:'20 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s8}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}],
 [{text:'Remove biopsy cap',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s9}`,fontSize:10,fillColor:'',alignment:'center'},{text:'Accessory for water removal',fontSize:10,fillColor:''}],
 [{text:'(c) <if the scope has following CH>',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
 [{text:'-Aux water (jet)',alignment:'center',fontSize:10,fillColor:''},{text:'20 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s10}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with aux water CH',fontSize:10,fillColor:''}],
 [{text:'-Elevator Wire Tube (K pipe)',fontSize:10,fillColor:'',alignment:'center'},{text:'60 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s11}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with elevator CH',fontSize:10,fillColor:''}],
 [{text:'-Instrument Channel port',alignment:'center',fontSize:10,fillColor:''},{text:'20 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s12}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(3).Final air feed: by specified sequence',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'AW Cylinder',fontSize:10,fillColor:'',},{ text: '3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s13}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}],
 [{text:'Aux water (jet)',fontSize:10,fillColor:''},{text:'3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s14}`,fontSize:10,fillColor:'',alignment:'center'},{text:'(In Sec) - Only for scope with aux water CH',fontSize:10,fillColor:''}],
 [{text:'Instrument Channel port',fontSize:10,fillColor:'',},{ text: '3 sec or more',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s15}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In Sec',fontSize:10,fillColor:''}]
 ]}
 },
 {
 table:{
 widths: [509],
 body:[
 [{text:'(4).Check after work & checking',fontSize:10,fillColor:'#CCCCCC'}],
 ]}
 },
 {
 table:{
 widths: [150,100,107,125],
 body:[
 [{text:'(CL) Wipe cylinders and channel port',fontSize:10,fillColor:'',},{ text: '-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s16}`,fontSize:10,fillColor:'',alignment:'center'},{text:'In case water droplet inside',fontSize:10,fillColor:''}],
 [{text:'(CL) Wipe overall exterior',fontSize:10,fillColor:''},{text:'-',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s17}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}]
 ]}
 },

 {
  table:{
  widths: [509],
  body:[
  [{text:'(5).Water sensitive paper check',fontSize:10,fillColor:'#CCCCCC'}],
  ]}
  },
  {
  table:{
  widths: [150,100,107,125],
  body:[
  [{text:'AW Cylinder',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s18 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'S Cylinder',fontSize:10,fillColor:''},{text:'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s19 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'Aux water / Elevator wire',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s20 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],
  [{text:'Instrument Channel port',fontSize:10,fillColor:'',},{ text: 'Minimum 20 Sec',fontSize:10,fillColor:'',alignment:'center'},{text:`${body.s21 || '-'}`,fontSize:10,fillColor:'',alignment:'center'},{text:'-',fontSize:10,fillColor:''}],

  ]}
  },
 ]

 }
 else{
 return undefined
 }
 sessionStorage.clear()
 return content
 }else{
 return undefined
 }


 }
}
