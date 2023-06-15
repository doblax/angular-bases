import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public Character: Character = {
    name: '',
    power: 0
  };


  emitCharacter():void{
    //debugger;
    console.log(this.Character);
    if(this.Character.name.length === 0) return;

    this.onNewCharacter.emit(this.Character); //aqui creo que pasa una referencia y no un nuevo objeto.

    this.Character.name = '';
    this.Character.power = 0;

    return;
  }



}
