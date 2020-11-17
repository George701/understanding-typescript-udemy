function Logger(logTarget: string){
  console.log('Logger factory');
  return function(constructor: Function) {
    console.log('Logging: ', logTarget);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string){
  console.log('Template factory');
  return function(constructor: any) {
    console.log('Rendering template')
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@Logger('Person')
@WithTemplate('<h1>Person<h1>', 'root')
class Person {
  name = 'Max';

  constructor(){
    console.log('Creating person object...');
  }
};

const pers = new Person();
console.log(pers);