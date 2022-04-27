"use strict";

const url = "https://testeleonid.herokuapp.com/clientes";

const  createClient = async (client) => {
  const options = {
    method: "POST",
    body: JSON.stringify(client),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  console.log(response);
}; 
const readClients = async () => { 

  //response para pbter a resposta do servidor
  const response = await fetch(url);
  //todo fecth retorna um json, para assegurar colocamos .json
  const clients = await response.json();

  return clients; 
};

const deletarClient = async (codigo) =>{
  const options = {
    'method': 'DELETE',

  }
  const response = await fetch(`${url}/${codigo}`, options)
  console.log(response.ok);
}

export { readClients };
export { deletarClient };
export { createClient };

