type Fn = (input: string, fieldName: string) => string | null;

export class InputValidator {
  validations = new Map<string, Fn | undefined>();

  constructor(builder: InputValidatorBuilder) {
    this.validations.set("notEmpty", builder.notEmpty);
    this.validations.set("length", builder.length);
    this.validations.set("isEmail", builder.isEmail);
    this.validations.set("isAplhaNumeric", builder.isAplhaNumeric);
    this.validations.set("passwordsMatch", builder.passwordsMatch);
  }

  validate(input: string, fieldName: string) {
    const errMessages: Array<string> = [];
    this.validations.forEach((val) => {
      const res = val?.(input, fieldName);
      res ? errMessages.push(res) : null;
    });

    return errMessages;
  }
}

export class InputValidatorBuilder {
  notEmpty?: Fn;
  length?: Fn;
  isEmail?: Fn;
  isAplhaNumeric?: Fn;
  passwordsMatch?: Fn;

  setNotEmpty() {
    this.notEmpty = (input: string, fieldName: string) => {
      if (!input) {
        return `${fieldName} is required`;
      }
      return null;
    };
    return this;
  }

  setLength(min: number, max: number) {
    this.length = (input: string, fieldName: string) => {
      if (input.length < min) {
        return `${fieldName} length should be at least ${min} characters`;
      }

      if (input.length > max) {
        return `${fieldName} length should be at most ${max} characters`;
      }
      return null;
    };
    return this;
  }

  setIsEmail() {
    this.isEmail = (input: string, fieldName: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input)) {
        return `${fieldName} should be a valid email`;
      }
      return null;
    };
    return this;
  }

  setIsAlphaNumeric() {
    this.isAplhaNumeric = (input: string, fieldName: string) => {
      const alphaRegex = /^[a-zA-Z0-9]+$/;
      if (!alphaRegex.test(input)) {
        return `${fieldName} should only have alphanumeric characters`;
      }
      return null;
    };
    return this;
  }

  setPasswordsMatch() {
    this.passwordsMatch = (input: string, pwd: string) => {
      if (input !== pwd) {
        return `Passwords do not match`;
      }
      return null;
    };
    return this;
  }

  build() {
    return new InputValidator(this);
  }
}
