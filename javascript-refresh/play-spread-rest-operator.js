const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  //spread operator
  const copiedPerson = { ...person };
  console.log(copiedPerson);
  
  const hobbies = ['Sports', 'Cooking'];
  // for (let hobby of hobbies) {
  //     console.log(hobby);
  // }
  // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
  // console.log(hobbies);
  //spread operator
  const copiedArray = [...hobbies];
  console.log(copiedArray);
  //rest operator
  const toArray = (...args) => {
    return args;
  };
  
  console.log(toArray(1, 2, 3, 4));