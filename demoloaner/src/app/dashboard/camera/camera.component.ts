import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  standalone:true
})
export class CameraComponent {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('photo') photo!: ElementRef<HTMLImageElement>;
  verify=''
  isPictureTaken = false;
  pictureDataUrl = '';

  constructor(private router:Router) {}

  startCamera() {

      navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        this.verify='verified1'
      })
      .catch((err) => {
        console.error(err);
      });

  }

  takePicture() {
    if(this.verify=='verified1' || this.verify=='verified'){
    const context = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = this.video.nativeElement.videoWidth;
    this.canvas.nativeElement.height = this.video.nativeElement.videoHeight;
    context?.drawImage(this.video.nativeElement, 0, 0);
    this.pictureDataUrl = this.canvas.nativeElement.toDataURL('image/jpeg');
    this.isPictureTaken = true;
    this.verify='verified'
  }else{
    alert('Open Camera before to took Picture')
  }
  }

 confirmPicture() {
  if(this.verify=='verified'){
    localStorage.setItem('image_data_url', this.pictureDataUrl);
    sessionStorage.setItem('image_data_url', this.pictureDataUrl);
   let previousPath=sessionStorage.getItem('path')
   let encodedString1 = "/de_lo/ENF-VT2%28PAL%29";
   let decodedString1 = decodeURIComponent(encodedString1);
   //let encodedString2 = "/de_lo/EU-ME2%20PREMIER%20PLUS";
   //let decodedString2 = decodeURIComponent(encodedString2);
      if(previousPath==encodedString1){
        previousPath=decodedString1
        this.router.navigate([previousPath]);
      }
     // else if(previousPath==encodedString2){
        //previousPath=decodedString2
        this.router.navigate([previousPath]);
     // }

  }else{
    alert('Took a Picture before Confirm Picture')
  }
 }
 ngOnDestroy(){
   try{
    const stream = this.video.nativeElement.srcObject as MediaStream;
   const tracks = stream.getTracks();
   tracks.forEach(track => track.stop());
   }catch(e){
    console.log('ngOnDestroy')
   }
 }
}
