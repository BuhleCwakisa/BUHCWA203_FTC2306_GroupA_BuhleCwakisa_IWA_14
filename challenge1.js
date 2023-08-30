const firstName = 'John';
const age = 35;
const hobby = 'Coding';

function hobby1 ()  {
     return (`Hello, ${firstName} (${age}). I love ${hobby}!`)
  }

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}



logTwice(hobby1())