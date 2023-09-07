// tamrin-1

// const jomle = prompt("ye chizi begoo: ");

// function removeVowels(inputJomle) {
//   const vowels = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"];
//   const charList = inputjomle.split("");
//   const result = charList.filter((char) => !vowels.includes(char)).join("");

//   return result;
// }
// console.log(removeVowels(string));

// ------------------------------------------------------------------------------
// tamrin-2

// const nameList = [];
// while (true) {
//   const name = prompt("enter your names (enter quit to exit): ");
//   if (name.toLowerCase().trim() === "quit") {
//     break;
//   }
//   nameList.push(name);
// }

// function action(arrayOfName) {
//   if (arrayOfName.length === 0) {
//     return "Nobody likes this.";
//   } else if (arrayOfName.length === 1) {
//     return `${arrayOfName[0]} likes this.`;
//   } else if (arrayOfName.length === 2) {
//     return `${arrayOfName[0]} and ${arrayOfName[1]} like this.`;
//   } else {
//     const nafarAkhar = arrayOfName.pop();
//     const baghie = arrayOfName.join(", ");
//     return `${baghie} and ${nafarAkhar} like this.`;
//   }
// }

// console.log(action(nameList));

// ------------------------------------------------------------------------------
// tanrin-3

// const list1 = [];
// const list2 = [];

// while (true) {
//   const number = prompt("enter your numbers (enter quit to exit): ");
//   if (number.toLowerCase().trim() === "quit") {
//     break;
//   }
//   list1.push(+number);
// }

// while (true) {
//   const number = prompt("enter your numbers (enter quit to exit): ");
//   if (number.toLowerCase().trim() === "quit") {
//     break;
//   }
//   list2.push(+number);
// }

// function differences(array1, array2) {
//   const differentNumbers = array1
//     .map((value) => {
//       if (!array2.includes(value)) {
//         return value;
//       }
//     })

//   return differentNumbers;
// }

// console.log(differences(list1, list2));

// ------------------------------------------------------------------------------
// tamrin-4

const jomle = prompt("enter your letters: ");

function counter(jomleStr) {
  letterStr = jomleStr.toLowerCase();
  const copiedJomleStr = [...jomleStr];
  const duplicateList = [];
  for (const word1 of jomleStr) {
    let duplicateCounter = 0;
    for (const word2 of copiedJomleStr) {
      if (word1 === word2) {
        duplicateCounter += 1;
      }
    }
    if (duplicateCounter > 1 && !duplicateList.includes(word1)) {
      duplicateList.push(word1, duplicateCounter);
    }
  }
  return duplicateList;
}

const result = counter(jomle);
if (result.length == 0) {
  console.log("0 # no characters repeats more than once");
} else {
  for (let repeat = 0; repeat < result.length; repeat++) {
    console.log(
      `'${result.at(repeat * 2)}' repeat: ${result.at(repeat * 2 + 1)}`
    );
  }
}
