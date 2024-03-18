/*Задание 2. Объект Warehouse
Pears and apples are accepted to the warehouse, write a function that returns the
result of adding the number of accepted pears and apples. 
*/ 

let wareHouse = {
    pears: 100,
    apples: 160,
    ShowRes(){
        console.log(this.pears+this.apples);
    }
}

wareHouse.ShowRes();