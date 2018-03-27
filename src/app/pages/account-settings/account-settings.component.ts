import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck()
  }

  cambiarColor(tema: string, link: any){
    this.aplicarCheck(link)
    this._ajustes.aplicarTema(tema)
  }

  aplicarCheck(link: any) {
    let selectores:any = document.getElementsByClassName('selector')
    for(let selector of selectores) {
      selector.classList.remove('working')
    }
    link.classList.add('working')
  }

  colocarCheck() {
    let selectores:any = document.getElementsByClassName('selector')
    
    let tema = this._ajustes.ajustes.tema

    for(let selector of selectores) {
      if(tema == selector.getAttribute('data-theme')){
        selector.classList.add('working')
        break;
      }
      
    }
  }

}
