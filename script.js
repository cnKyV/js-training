/*


if(true)
    {
        console.log(a);
        var a = 500;
        console.log(a);
    }*/

/*function sendCars(a,...carIds)
{
    carIds.forEach(id=>console.log(id));
}gi

sendCars("Monday",3,4,5,6,7); */

/*let carIds = [1,2,5];
let car1, remainingCars;
[car1,...remainingCars] = carIds;
console.log(remainingCars);


let carIds = [100,200,500];
let [car1,car2] =carIds;
console.log(car1,car2);



let car ={id:5000, style:"convertible"};
let car2 = car;
console.log(car2);
let wallnut = {id:500000, style:"lol",type:"c"};
let id, style, type;
({id,style,type} = wallnut);

console.log(id, style, type);
*/

/*function startCars(car1,car2,car3)
{
    console.log(car1,car2,car3);
}
let carIds = [1,2,3,4,5,6];
startCars(...carIds);
*/
//convert to string
/*
let foo = 55;
console.log(typeof(foo.toString()));
console.log(typeof(Number.parseInt("653aa")));
console.log(typeof(Number.parseFloat("4433.22bb")));
*/

for(let i = 0; i<4; i++)
{
    if(i===2)
    {
        continue;
    }
    console.log(i);
} // output: 0 1 3

let i = 0;

for (; i <12 ; i++) 
{
if(i === 8)
{
    break;
}
}
console.log(i); // 8