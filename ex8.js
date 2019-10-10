const number = [1, 3, 5, 7, 9];

const num1s = number.map( (n) =>{
     return n *2;
    
 });

 const num2s = number.filter( n => n === 3);

 const locSanPham = (...dssanpham) => {
     return dssanpham.filter(n => n ===1);
 }

 console.log(number);
 console.log(num1s);

 console.log(locSanPham(1, 3, 5, 1));
 console.log(locSanPham(3, 5, 7, 8, 9, 1, 2, 3, 4, 5))
