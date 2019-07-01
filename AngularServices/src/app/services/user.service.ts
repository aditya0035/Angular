export class UserService{
    constructor(){

    }
    GetUsers(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                return resolve(["Aditya","Ashish","Anuj"]);
            }, 4000);
        }); 
    }

}