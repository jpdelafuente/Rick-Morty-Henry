const validation = (data)  => {
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/)

    const passwordRegexp = new RegExp (/^[a-z0-9_-]{6,10}$/)
    
    let errors = {}

    if(!emailRegexp.test(data.email)) {
        errors.email = 'Debe ingresar un email valido'
    }

    if(!data.email) {
        errors.emailVacio = "Debes ingresar un email"
    }
    if(data.email !== "meli@soyhenry.com") {
        errors.validEmail = "Email incorrecto"
    }

    if(data.email.length > 35) {
        errors.caracteres = "Debe ser un email menor a 35 caracteres"
    }

    if(!passwordRegexp.test(data.password)) {
        errors.password = "Debe contener letras y numeros, ademas tiene que tener una longitud entre 6 y 10 caracteres"
    }
    if(data.password !== "1234meli") {
        errors.incorrectPass = "Contraseña incorrecta"
    }

    return errors;

}

export default validation