//HACK-10 
//agregar después del item 500

let arr_final = [100,200,300,400,500,600,700];

arr_final.splice(5,0,"qux");

arr_final.splice(6,0,"thud");

console.log(arr_final)