const axios = require('axios');

async function llamarEndPoint(apiUrl = '') {
    return await axios.get(apiUrl)
        .then(response => {
            const responseData = {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
            };

            if (response.status === 200) {
                responseData.message = 'La solicitud fue exitosa';
            } else if (response.status === 400) {
                responseData.message = 'Error de solicitud: Bad Request';
            } else if (response.status === 500) {
                responseData.message = 'Error interno del servidor';
            } else {
                responseData.message = 'Código de estado no reconocido';
            }

            return responseData;
        })
        .catch(error => {
            const responseData = {
                error: error.message,
                status: error.response ? error.response.status : null,
                statusText: error.response ? error.response.statusText : null,
            };
            return responseData;
        });
}

module.exports = {
    llamarEndPoint
};
