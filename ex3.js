//Khoi tao mot class

class SinhVien{
    constructor(){
        this.name = 'Nguyen Van Teo';
    }
    printSV = () =>{
        console.log(this.name);
    }
}
const sinhVien = new SinhVien();

console.log(sinhVien.name);

sinhVien.printSV();
