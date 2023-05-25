import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'mi app angular';
  public counter:number = 10;


  public IncreaseBy(valor:number):void{
    this.counter += valor;
  }

  public Reset():void{
    this.counter = 10;
  }
}

