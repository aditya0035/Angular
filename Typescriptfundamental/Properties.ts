class Dog{
    constructor(private name:string){
    }
    get Name():string{
        return this.name;   
    }
    set Name(value){
        this.name=value;
    }

}

let lms:Dog=new Dog("Jimmy");
console.log(lms.Name)
lms.Name="Jack"
console.log(lms.Name)