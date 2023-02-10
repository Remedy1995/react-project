

class Car {

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    describe = () => {
        return "The name of my car is" + this.name + "and the model is"
            + this.model
    }
}



class Motor extends Car {
    constructor(name, model) {
        super(name, model)
        this.motorname = name;
        this.motormodel = model;

    }
motorDescription = () =>{
 return "The name of the motor is"+ this.motorname +"and the model is"
 +this.motormodel;
 
}
}
//const newCar = new Car("opel", "2017");
//const oldcar = new Car("pegeout", "2002");
// console.log(newCar.name)
// console.log(oldcar.name)
// console.log(newCar.describe())
const newMotor = new Motor("yakamoko","2020");
console.log(newMotor.name)
console.log(newMotor.motorDescription())

let name = "japhet";
console.log(name)
{
    let name = "john";
    console.log(name)
}



const Homepage = () => {
    return (<div>This is myhomepage</div>)
}









export default Homepage;