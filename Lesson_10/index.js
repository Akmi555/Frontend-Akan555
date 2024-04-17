console.log("----------------------------------------Задание 1 -----------------------------------------------------");
const originalArray = [1, 2,3]
 const cloneArray = [...originalArray]; // копирование массива
cloneArray.reverse();
console.log(cloneArray);


console.log("----------------------------------------Задание 2 -----------------------------------------------------");
// Задание на урок. Создать функцию которая принимает массив, и возвращает новый массив,
// где каждый элемент массива увеличен на 10  

function add10(arr) {
    return arr.map((element) => element + 10); //  с помощью метода map()
  }
  
  const original_2Array = [1, 2, 3, 4, 5];
  const modifiedArray = add10(original_2Array);
  console.log(modifiedArray); // output: [11, 12, 13, 14, 15]