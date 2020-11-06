const names: Array<string> = ['Max', 'Manu'];
// OR
// const names: string[] = ['Max', 'Manu']
names[0].split('');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done')
  }, 2000)
});