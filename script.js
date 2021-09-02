var photo;
photo="<img src=";
photo +="'shrek.gif'>";

var sheet = document.createElement('style');
sheet.innerHTML = "body {background-image: url(rave.gif); background-size: cover;} p {font-size: 135%; color: rgb(88, 155, 0);} button {margin-bottom: 5mm; border-style: inset; border: lawngreen;}";



class Client {
    constructor(name,age,adr,mp){
        this.name = name;
        this.age = age;
        this.adr = adr;
        this.mp = mp;
    };
    showed(){
        return String(this.name)+" "+ String(this.age)+" "+String(this.adr)+" "+String(this.mp); 
    }
};



//var cliente = new.Client("Pedro",15,"Granada","999999999");
//function any()

//function Add(array,cliente){
  //  array;
//};

function TakeData(cs){
    let namei = document.getElementById('nameEntry').value;
    let agei = document.getElementById('ageEntry').value;
    let adri = document.getElementById('adrEntry').value;
    let mpi = document.getElementById('mpEntry').value;
    
    var cliente = new Client(namei,agei,adri,mpi);
    cs.push(cliente);
    
}
function Show(cs){
    var text="";
    for (i of cs) {
       text+=i.showed()+"<br>";
    }
    document.getElementById('text').innerHTML=text;
}
let cs = [];
class Operacion {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    aa(){
        return Number(this.x + this.y)
    }
}

var sum =new Operacion(5,6)
console.log(sum.aa()) 