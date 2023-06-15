import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   console.log(index)
  //   this.onDelete.emit(index);
  // }

  onDeleteCharacter(id: string): void {
    //console.log(uid)
    this.onDelete.emit(id);
  }

}
