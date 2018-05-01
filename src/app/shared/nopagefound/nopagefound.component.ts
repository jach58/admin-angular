import { Component, OnInit } from '@angular/core';

declare function init_plugins()

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: [`
  .error-box {
    height: 100%;
    position: fixed;
    background: url(../../../assets/images/background/error-bg.jpg) no-repeat center center #fff;
    background-size: cover;
    width: 100%; }
    .error-box .footer {
      width: 100%;
      left: 0px;
      right: 0px; }
  
  .error-body {
    padding-top: 1%; }
    .error-body h1 {
      font-size: 150px;
      font-weight: 900;
      text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;
      line-height: 150px; }
  
  `]
})
export class NopagefoundComponent implements OnInit {

  anio: number = new Date().getFullYear()

  constructor() { }

  ngOnInit() {
    init_plugins()
  }

}
