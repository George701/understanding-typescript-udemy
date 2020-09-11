
let num: number;
num = 5;

const btn = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log(`Clicked! ${message}`);
}

if (!!btn) {
  btn.addEventListener('click', clickHandler.bind(null, 'Message'));
}