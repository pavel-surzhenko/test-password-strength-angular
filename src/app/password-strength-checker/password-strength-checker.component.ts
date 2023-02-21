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

  getPasswordStrength() {
    if (this.password.length > 0 && this.password.length < 8) {
      return 'short';
    }
    if (this.isStrong(this.password)) {
      return 'strong';
    }
    if (this.isMedium(this.password)) {
      return 'medium';
    }
    if (this.isEasy(this.password)) {
      return 'easy';
    }

    return 'default';
  }

  onPasswordChange() {
    const passwordStrength = this.getPasswordStrength();

    switch (passwordStrength) {
      case 'short':
        this.easySectionColor = this.mediumSectionColor = this.strongSectionColor = 'red';
        break;
      case 'default':
        this.easySectionColor = this.mediumSectionColor = this.strongSectionColor = 'gray';
        break;
      case 'easy':
        this.easySectionColor = 'red';
        this.mediumSectionColor = this.strongSectionColor = 'gray';
        break;
      case 'medium':
        this.easySectionColor = this.mediumSectionColor = 'yellow';
        this.strongSectionColor = 'gray';
        break;
      case 'strong':
        this.easySectionColor = this.mediumSectionColor = this.strongSectionColor = 'green';
        break;
      default:
        break;
    }
  }
}
