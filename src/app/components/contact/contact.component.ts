import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
  declare var jQuery:any;
  declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit { 

  @ViewChild('textos', {static: true}) textos;

  constructor() { }

  ngOnInit(){
    var manera_clasica = document.querySelector("#textos");
    // console.log(this.textos.nativeElement.textContent);
    


    // $(function(){
    //   $('.bxslider').bxSlider({
    //     mode: 'fade',
    //     captions: false,
    //     auto: true,
    //     speed: 400,
    //     randomStart: true,
    //     slideWidth: 400
    //   });
    // });

    // $("#logo").click(function(e){
    //   e.preventDefault();
    //   $("header").css("background","#FF0195");
    // });
  }

}
