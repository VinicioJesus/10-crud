"use strict";

export const openModal = () =>
  document.getElementById("modal").classList.add("active");

export const closeModal = () =>{
  document.getElementById("modal").classList.remove("active");
  document.getElementById("modal-form").reset()
  document.getElementById("nome").removeAttribute('data-id')
}

export{
  openModal,
  closeModal

}

