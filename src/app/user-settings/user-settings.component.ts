import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  detailView: { name: string | null, age: number | null } = { name: "No seteado", age: 0 };
  cadenaDeTexto: string = "Cadena de texto"
}
