export function validarEmail (email) {
    if(email.includes('@') && email.includes('.com')){
        return true;
    } else{
        return false;
    }
}