import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss']
})

export class PasswordStrengthCheckerComponent {
  password = '';
  easySectionColor = 'gray';
  mediumSectionColor = 'gray';
  strongSectionColor = 'gray';

  isEasy(password: string) {
    return /^\d+$|^[a-z]+$|^[\W_]+$/i.test(password)
  }

  isMedium(password: string) {
    const noSymbol = /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/i.test(password);
    const noDigits = /^(?=.*[a-z])(?=.*[\W_])[^\d]+$/i.test(password)
    const noLetters = /^(?=.*[0-9])(?=.*[\W_])[\d\W_]+$/i.test(password)

    return noSymbol || noDigits || noLetters
  }

  isStrong(password: string) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[\W_]).+/i.test(password)
  }

  onPasswordChange() {
    if (this.password.length > 0 && this.password.length < 8) {
      this.easySectionColor = this.mediumSectionColor = this.strongSectionColor = 'red';
    } else if (this.isEasy(this.password)) {
      this.easySectionColor = 'red';
      this.mediumSectionColor = this.strongSectionColor = 'gray';
    } else if (this.isMedium(this.password)) {
      this.easySectionColor = this.mediumSectionColor = 'yellow';
      this.strongSectionColor = 'gray';
    } else if (this.isStrong(this.password)) {
      this.easySectionColor = this.mediumSectionColor = this.strongSectionColor = 'green';
    }
  }
}
