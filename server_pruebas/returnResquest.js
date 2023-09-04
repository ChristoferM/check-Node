// Código de respuesta HTTP 200: OK
const successFun = (data={ }) => ({
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
  
  // Código de respuesta HTTP 400: Bad Request
  const badRequestFun = (message="Error 404") => ({
    statusCode: 400,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      message,
    },
  });
  
  // Código de respuesta HTTP 500: Internal Server Error
  const serverError = (message="Error 500") => ({
    statusCode: 500,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      message,
    },
  });

  
module.exports ={
    successFun,
    badRequestFun,
    serverError
}