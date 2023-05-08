import { ReactDOM } from "react";

export default function Suggestion(){
    const suggestions = [
        {icon: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", stats: "Segue você"},
        {icon: "assets/img/chibirdart.svg", name: "chibirdart", stats: "Segue você"},
        {icon: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", stats: "Novo no Instagram"},
        {icon: "assets/img/adorable_animals.svg", name: "adorable_animals", stats: "Segue você"},
        {icon: "assets/img/smallcutecats.svg", name: "smallcutecats", stats: "Segue você"}
    ]

    function returnSuggestion(suggestion){
        return <SuggestionU icon={suggestion.icon} name={suggestion.name} stats={suggestion.stats}/>
    }
    

    return(
        <>
            {suggestions.map(suggestion => <SuggestionU icon={suggestion.icon} name={suggestion.name} stats={suggestion.stats} />)}
        </>
    );
}
    
function SuggestionU(props){
    <div className="sugestao">
        <div className="usuario">
            <img src={props.icon} alt="" />
            <div className="texto">
                <div className="nome">{props.name}</div>
                <div className="razao">{props.stats}</div>
            </div>
        </div>

        <div className="seguir">Seguir</div>
    </div>
}