import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnChanges {
  @Input() userInfo!: { name: string, age: number }; 

  //Emisor de cambios
  @Output() userInfoChange = new EventEmitter< { name: string, age: number }>(); 

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["userInfo"]) this.funcionDeCambios();
  }

  funcionDeCambios() {
    console.log("Se detectó un cambio en el componente padre.");
  }

  //Método que modifica la edad y emite el cambio
  modificarEdad(delta: number) {
    this.userInfo.age = this.userInfo.age + delta;
    this.userInfoChange.emit(this.userInfo);
  }

}
