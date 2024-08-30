export interface IUser { 
    fullName:string ; 
    email : string ; 
    phoneNO:string[]; 
    address :{
      city: string,
      postCode:string ,
      street:string
    }
    password : string;
    confirmPassword :string;
}
