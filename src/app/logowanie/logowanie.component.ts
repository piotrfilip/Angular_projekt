import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LogowanieComponent {
  formData = {
    username: '',
    password: ''
  };
  logowanie() {


    // Tutaj można zaimplementować logikę logowania
    if (this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie');
    }
    else {
      console.log('Błąd logowania. Sprawdź dane.');
    }
  }
}
