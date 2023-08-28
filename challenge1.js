const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const hobby1 =  () => {
    console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
  }

const logTwice = () => {
  console.log(hobby1())
  console.log(hobby1())
}



logTwice()