function SmallestArray(array, returnType)
{
    let min = Math.min(...array);
    if (returnType == 'value'){ return min; }
    else if (returnType == 'index') { return array.indexOf(min); }
    else{ return 'Hiba';}
}
let array = [3, 1, 4, 2, 5];
console.log(SmallestArray(array, 'value')); //ÉRték: 1
console.log(SmallestArray(array, 'index')); //Érték: 1