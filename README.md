# Password Generator

## Description

This webpage is a password generator.  The page will generate a random password for the user, with the character types that the user selects (upper case letters, lower case letters, numeric, and special characters) included, of the length that they request (in a range from 8 to 128 characters).  To generate the password, the user must select which type of characters they want included, select the length of the password desired, and click the "Generate Password" button.  If they want to copy the password to their clipboard, they can click the "Copy to Clipboard" button.

The logic of generating the password is executed in Javascript.  The page is styled with some basic Bootstrap to make it responsive.  The program does basic input checking, and also makes sure that each type of character selected is included in the generated password.

## Credits

This site provided the code to copy the generated password to the clipboard: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

This resource explained how to parse strings to integers: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

This resource gave information about how to make a button call a function on a click: https://www.w3schools.com/jsref/event_onclick.asp

W3Schools had a good example of how to create and style a Range Slider: https://www.w3schools.com/howto/howto_js_rangeslider.asp

## License

MIT License

Copyright (c) 2019 Maria Francis-Moullier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.