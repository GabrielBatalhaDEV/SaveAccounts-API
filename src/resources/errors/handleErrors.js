function handleError({message, status}, resquest, response, next){

  console.log(message);
  return response.status(status).json({message});

}

module.exports = {handleError}