let userInput: unknown; // number | string -> will be better
let userName: string;

userInput = 2002;
userInput = 'Jari';
if (typeof userInput === 'string') userName = userInput;

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
