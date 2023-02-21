import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss']
})
export class PasswordStrengthCheckerComponent {
  password = '';
  emptyColor = 'gray';
  section1Color = 'gray';
  section2Color = 'gray';

  onPasswordChange() {
    if (this.password.length > 0 && this.password.length < 8) {
      this.emptyColor = 'red';
      this.section1Color = 'red';
      this.section2Color = 'red';
    } else if (/^\d+$|^[a-z]+$|^[\W_]+$/i.test(this.password)) {
      this.emptyColor = 'red';
      this.section1Color = 'gray';
      this.section2Color = 'gray';
    } else if (/^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i.test(this.password) || /^(?=.*[a-z])(?=.*[\W_])[^\d]+$/i.test(this.password) || /^(?=.*[0-9])(?=.*[\W_])[\d\W_]+$/i.test(this.password)) {
      this.emptyColor = 'yellow';
      this.section1Color = 'yellow';
      this.section2Color = 'gray';
    } else if (/(?=.*\d)(?=.*[a-z])(?=.*[\W_]).+/i.test(this.password)) {
      this.emptyColor = 'green';
      this.section1Color = 'green';
      this.section2Color = 'green';
    }
  }
}
