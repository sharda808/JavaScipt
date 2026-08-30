let student = {
  firstName: 'Raju',
  lastName:'kumar',
  age:20,
  address:{
    houseNo:10,
    road:'MG Road',
    city:'Bangalore',
    state:'Karnataka',
  },
  subjects:['Maths','Science','English'],
  feesPaid:true,
};
function printName(agrStudent) {
  // let firstName = agrStudent.firstName;
  // let lastName = agrStudent.lastName;
  let {firstName, lastName} = agrStudent;
  // console.log('Name:', firstName, lastName);
  // let result = {firstName:firstName, lastName: lastName};
  let result = {firstName, lastName};
  return result;

}
console.log(printName(student));