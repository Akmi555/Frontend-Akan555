// object method
const John_Konnor = {
    name: "John",
    surename: "Konnor",
    heihgt: 110,
    weight: 20,
    age: 30,
    // hobby: function(){
    //     console.log("I read boock")
    // }
    
}
// console.log(footballPlayerJohn.age);

// Проходимся циклом по ключам объекта
for (const key in John_Konnor) {
    if (John_Konnor.hasOwnProperty(key)) // hasOwnProperty(key) - это метод объекта, который проверяет, есть ли у объекта свойство с указанным ключом (key). 
                                        // Если свойство существует, метод возвращает true, иначе - false.
    {
        console.log(`Ключ: ${key}, Значение: ${John_Konnor[key]}`); //Внутри блока if выполняется следующее:
        //Если свойство с ключом key существует в объекте John_Konnor, то мы выводим сообщение в консоль, используя значения ключа и соответствующего свойства.
        //Таким образом, этот код проверяет, есть ли у объекта John_Konnor свойство с указанным ключом, и если есть, выводит его значение.
    }
}
// get array of values создание массива
console.log(Object.values(John_Konnor));
