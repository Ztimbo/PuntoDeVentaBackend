const errorMessage = {
    500: {
        INCOMPLETE_FIELDS: "Campos incompletos",
        SERVER_ERROR: "Error en el servidor",
        USER: {
            PASSWORD_NOT_PROVIDED: "Introduce una contraseña"
        }
    },
    404: {
        USER: {
            NOT_SAVED: "Usuario no guardado"
        }
    }
}

module.exports = errorMessage;