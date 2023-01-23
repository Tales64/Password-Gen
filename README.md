# Password-Gen
New password generator

This project was to create a password Generator that would ask a couple of perameters from the user to determine what the password would contain.

These questions where 
    Would you like 
                    numbers
                    lowercase letters
                    uppercase letters
                    symboles
                                        in your password?
    How many characters would you like in your password?

Then it should creat the password and present the finished password in the box for the users to copy.


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page