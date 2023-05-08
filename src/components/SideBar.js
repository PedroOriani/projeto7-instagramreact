import { ReactDOM } from "react";

import Suggestions from "./Suggestions";
import User from "./User";

export default function SideBar(){
    return(
        <div class="sidebar">
            <User />
            <div className="sugestoes">
                <div class="titulo">
                    <div class="title1">Sugestões para você</div>
                    <div class="title2">Ver tudo</div>
                </div>
                <Suggestions />
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}