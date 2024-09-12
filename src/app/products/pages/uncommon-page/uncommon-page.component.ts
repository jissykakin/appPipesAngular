import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

//il8n Select

  public name: string = 'Jissy';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  changeClient ():void {
    this.name = 'Mauricio';
    this.gender = 'male';
  }

//il8n plural

  public clients: string[] = ['Maria', 'Jissy', 'Pedro', 'Mauricio', 'Carolina', 'Carlos'];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Jissy',
    age: 36,
    address: 'Colombia, Cartagena'
  }


  //Async Pipe
  public myObservableTimer : Observable<number> = interval(1000)
  .pipe(
    tap(value => console.log('tap', value)
    )
  )

  public promiseValue: Promise<string> = new Promise(( resolve, reject ) => {
    setTimeout(()=>{
      resolve( 'Tenemos Data en la promesa')
    }, 3500);
  })
}
