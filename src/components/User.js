import { setupIonicReact } from "@ionic/react";
import { ReactDOM } from "react"
import { useState } from "react";

export default function User(){

  let[userIcon, setUserIcon] = useState ("assets/img/catanacomics.svg")
  let[userName, setUserName] = useState ('catanacomics')

  function newIcon(){
    let newIcon = prompt('Novo Icone de Usuário')
    if(newIcon){
      setUserIcon(newIcon)
    }
  }

  function newName(){
    let newName = prompt('Novo nome')
    if(newName){
      setUserName(newName)
    }
  }

  return(
    <div class="usuario">
      <img onClick={newIcon} data-test="profile-image" src={userIcon} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong data-test="name" >{userName}</strong>
          <ion-icon onClick={newName} data-test="edit-name" name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}