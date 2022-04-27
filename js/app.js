"use strict";

import { openModal, closeModal  } from "./modal.js";
import { readClients, createClient, deletarClient } from "./client.js";


const createRow = (client) => {
  const row = document.createElement('tr')
  row.innerHTML = `
        <tr>
            <td>${client.nome}</td>
            <td>${client.email}</td>
            <td>${client.celular}</td>
            <td>${client.cidade}</td>
            <td>
              <button type="button" class="button green" id="editar -${client.id}" >editar</button>
              <button type="button id="excluir-${client.id}"  class="button red">excluir</button>
            </td>
        </tr>
  `
  return row;
}


const updateTable = async () => {

  const clientsContainer = document.getElementById('clients-container')
  //ler a api para armazenar o resultado em uma varivael
  const clients = await readClients();
  //preencher a taela com as informações
  const rows = clients.map(createRow);
  clientsContainer.replaceChildren(...rows);
};

const saveClient = async function  () {
  //Crirar um json com as infrmações do cliente
  const client = {
    "id": "",
    "nome": document.getElementById("nome").value,
    "email": document.getElementById("email").value,
    "celular": document.getElementById("celular").value,
    "cidade": document.getElementById("cidade").value
    
  }
  //Enviar o jason para o serviodor da api
  await createClient(client)
  //Fechar a modal
  closeModal();
  //atualizar a tabela
  updateTable();
}

const actionClient = async (event) => {

  if (event.target.type == "button") {



    const [action, codigo] = event.target.id.split('-')
    if (action == 'excluir') {
      
    }else if(action == 'excluir'){
      await deletarClient(codigo);
      updateTable()
    }
    
  }

}



updateTable();

document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);
document.getElementById('salvar').addEventListener('click', saveClient);
document.getElementById('clients-container').addEventListener('click', actionClient); 

