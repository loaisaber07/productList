import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const IsPasswordMatching:ValidatorFn = (control:AbstractControl):ValidationErrors |null=>{
let password = control.get('password')  ; 
let confirmPassword = control.get('confirmPassword') ;  
let valErr = {'UnMatchingError': {'pass':password?.value ,'confirm':confirmPassword?.value}}
return (password?.value == confirmPassword?.value)?null :valErr;
}