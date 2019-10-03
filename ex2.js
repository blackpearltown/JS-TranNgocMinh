//ham

//Cach viet thong thuong: 

function hello(name){
    console.log(name);
}

hello('Hoang Nam');

//Cach viet khac:

const hello1 = function(name){
    console.log(name + ' den tu hello1');
}

hello1('Ngoc Nu');

//Cach viet ham trong js hien dai:

const hello2 = (name) => {
    console.log(name + ' den tu hello hien dai');
}

hello2('Hoang BD');

//Neu chi co mot tham so va mot gia tri tra ve:

const binhPhuong = so => so*so;

console.log(binhPhuong(2));