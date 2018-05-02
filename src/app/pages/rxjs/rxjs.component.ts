import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import swal from 'sweetalert'

import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription : Subscription

  constructor() {

    this.subscription = this.regresaObservable()
      .subscribe(
        num => console.log('Subs', num), 
        error => console.error('Error en el obs', error),
        () => console.log('El observador terminó')
      )
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  regresaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 0
      let intervalo = setInterval(() =>{
        contador += 1
        
        let salida = {
          valor: contador
        }

        observer.next(salida)

        // if(contador === 3){
        //   clearInterval(intervalo)
        //   observer.complete()
        // }

        // if(contador === 2){
        //   observer.error('Error!!')
        // }
      }, 500)
    })
    .retry(2)
    .map((res:any) => res.valor)
    .filter((num,index) => {
      if((num %2) == 1){
        return true
      }else{
        return false
      }
    })
  }

}
