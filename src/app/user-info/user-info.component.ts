import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements DoCheck, OnChanges {
  @Input() cadenaDeTexto: string = "Cadena de texto";
  @Input() userInfo: { name: string | null, age: number | null } = { name: "No seteado", age: 0 }; 
  private oldUserInfo: { name: string | null, age: number | null } = { name: "No seteado", age: 0 }; 

  ngDoCheck(): void {
    if(this.userInfo.name != this.oldUserInfo.name || this.userInfo.age != this.oldUserInfo.age) this.funcionDeCambios();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["cadenaDeTexto"]) this.funcionDeCambios();
  }

  funcionDeCambios() {
    console.log("Se detectó un cambio en el componente padre.");
  }
}
