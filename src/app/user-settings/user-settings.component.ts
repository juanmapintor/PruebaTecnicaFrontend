import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  detailView: { name: string, age: number } = { name: "No seteado", age: 0 };

  logNuevaEdad(event: { name: string, age: number }) {
    console.log(`Nueva edad ${event.age}`)
  }
}
