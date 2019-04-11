import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1200ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'scale(1)', opacity: 1}),
          animate('1200ms', style({transform: 'scale(0)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'enterAnimation2', [
        transition(':enter', [
          style({transform: 'scale(0)', opacity: 0}),
          animate('1200ms', style({transform: 'scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({position : 'relative' , left : '0', transform: 'scale(1)'}),
          animate('1200ms', style({ position : 'relative' , left : '150%' , 'z-index': 99999 , transform: 'scale(0)'}))
        ])
      ]
    ),
    trigger(
      'showText', [
        transition(':enter', [
          style({top: '35%' , opacity: 0}),
          animate('500ms', style({top: '40%', opacity: 1}))
        ]),
        transition(':leave', [
          style({ top: '40%', opacity: 1}),
          animate('500ms', style({top: '45%' , opacity: 0}))
        ])
      ]
    ),
    trigger(
      'headerText', [
        transition(':enter', [
          style({opacity: 0, 'margin-top': '-10px'}),
          animate('500ms', style({opacity: 1, 'margin-top': '0px'}))
        ])
      ]
    ),
    trigger(
      'divtag', [
        transition(':leave', [
          style({opacity: 1 , transform: 'scale(1)'}),
          animate('1000ms', style({opacity: 0, margin: 0, transform: 'scale(0)', height: '400px' , width: '400px'}))
        ])
      ]
    ),
    trigger(
      'ParagraphText', [
        transition(':enter', [
          style({opacity: 0, 'margin-top': '-30px'}),
          animate('500ms', style({opacity: 1, 'margin-top': '0px'}))
        ]),
        transition(':leave', [
          style({opacity: 1, 'margin-top': '0px'}),
          animate('500ms', style({opacity: 0, 'margin-top': '30px'}))
        ])
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  show = false;
  textshow: boolean;
  headerText: boolean;
  model: boolean;
  showsecondDiv: boolean;
  showsecondDivImage: boolean;
  pragraph: boolean;
  constructor(public element: ElementRef) {
    const vid = this.element.nativeElement;
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
  }
  ngOnInit() {
    this.model = true;
      setTimeout(() => {    //<<<---    using ()=> syntax
        this.show = true;
   }, 500);
   setTimeout(() => {    //<<<---    using ()=> syntax
    this.textshow = true;
    this.headerText = true;
   }, 1700);
  }
  HomeClick() {
    setTimeout(() => {
    this.model = false;
    }, 500);
    this.textshow = false;
    setTimeout(() => {
      this.showsecondDiv = true;
      this.showsecondDivImage = true;
      }, 1500);
      setTimeout(() => {
        this.pragraph = true;
        }, 2800);
  }
  aboutClick() {
    this.pragraph = false;
    setTimeout(() => {
      this.showsecondDivImage = false;
    }, 500);
  }
}
