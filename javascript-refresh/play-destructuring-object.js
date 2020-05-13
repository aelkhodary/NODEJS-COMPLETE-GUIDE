const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const printName = ({ name }) => {
    console.log(name);
  };
  
  printName(person);

  const printObjectAttribute = ({ name ,age}) => {
    console.log(name +" "+ age );
  };
  
  printObjectAttribute(person);

  const { name, age } = person;
  console.log(name, age);
  
  // const copiedPerson = { ...person };
  // console.log(copiedPerson);
  
  const hobbies = ['Sports', 'Cooking'];
  const [hobby1, hobby2] = hobbies;
  console.log(hobby1, hobby2);
