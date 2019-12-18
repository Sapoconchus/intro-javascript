class PasswordChecker {
  constructor() {
    this.SPECIAL_CHARACTERS = ['.', '/', '%', '$'];
  }
  isStrong(password) {
    return this.strength(password) >= 5;
  }
  isMedium(password) {
    const strength = this.strength(password);
    return strength > 3 && strength < 5;
  }
  isWeak(password) {
    return this.strength(password) <= 3;
  }
  strength(password) {
    let strength = 0;
    if (this.hasLowerCases(password)) strength++;
    if (this.hasUpperCases(password)) strength++;
    if (this.hasSpecialCharacters(password)) strength += 2;
    if (this.hasBlanks(password)) strength++;
    return strength;
  }
  hasLowerCases(password) {
    return password.split('').some(char => char.toLowerCase() === char);
  }
  hasUpperCases(password) {
    return password.split('').some(char => char.toUpperCase() === char);
  }
  hasSpecialCharacters(password) {
    return password
      .split('')
      .some(char => this.SPECIAL_CHARACTERS.includes(char));
  }
  hasBlanks(password) {
    return password.split('').some(char => char === ' ');
  }
}
const checker = new PasswordChecker();
console.log(checker.isStrong('PruebaConcepto'));
console.log(checker.isStrong('Prueba.Concepto'));
console.log(checker.isStrong('PruebaC% oncepto'));
console.log(checker.isStrong('Prueb4.% Concepto'));