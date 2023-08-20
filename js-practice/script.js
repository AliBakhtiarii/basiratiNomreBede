// const gettingHeight = prompt ( "ghaded chande?" , 150);
// const gettingWeight = prompt ( "vaznet chande?" , 100);
// const bmi = gettingWeight / ((gettingHeight /100) ** 2);
// alert ( 'your bmi is'+ bmi);
// if (bmi < 25){
//     alert('eyvalla')
// } else if (bmi >25 && bmi <30){
//     alert('chaghi')
// } else {
//     alert('kheyyyli chaghi')
// }
// const numberOfGeusts = prompt('chan nafaran?');
// let nameOfGeusts;
// while (i<numberOfGeusts){
//    nameOfGeusts prompt('')
// }

const numberOfGuests = prompt('chan nafarin?');
let nameOfGuests = "";

for(let i =0; i<numberOfGuests;i++){
    const name = prompt('esmesh chie');
    nameOfGuests = nameOfGuests + name;


}
alert( nameOfGuests)