console.log("---------------------------------------------Задание 2---------------------------------------------------------------------") 
// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. 
// Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//     [ 'height', 170 ],
//     [ 'weight', 80 ],
//     [ 'sport', 'regbi' ],
//     [ 'full name', 'John Doe' ],
//     [ 'sing', 'love' ],
//     [ 'speed', 90 ]
//   ]


function arrayToObject(arr){
    const result ={};
    for (const[key,value] of arr){
        result[key]= value;
    }
    return result;
}

const inputArray =
[
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
  ]
  
  const outputObject = arrayToObject(inputArray);
console.log(outputObject);

