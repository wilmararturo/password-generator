# JavaScript: Password Generator

This application generates a random password based on user-selected criteria.


---

## Use Case

If an employee with access to sensitive data wants to randomly generate a password that meet length and complexity criteria, this application may be used.

---

## Instructions

1. Go to [password-generator](https://wilmararturo.github.io/password-generator/)
2. Enter a number for the password length.
3. Select at least one of owercase, uppercase, numeric, and/or special characters.
4. Clink "Generate Password"

---

## Acceptance Criteria
 
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

- - -
