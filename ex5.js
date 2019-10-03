const array1 = [1,2,3,4];
const array2 = [... array1,5,6,7];

const name = {
    name1: 'Hoang Nam',
    name2: 'Hoang Kim',

};
const dsLop = {
    ... name,
    name3: 'Hoang Kieu',
    name4: 'Hoang Tu',
    name5: 'Hoang De'
}
console.log(dsLop);


//Toan Tu Rest

const f1 =(...danhsach) => {
    console.log(danhsach);
}

f1(1,2,3,4,5,6,7,8,9);