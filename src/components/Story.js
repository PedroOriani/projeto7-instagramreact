import ReactDOM from "react-dom";

export default function Story(){
    const stories = [
        {image: "assets/img/9gag.svg", name: "9gag"},
        {image: "assets/img/meowed.svg", name:"meowed" },
        {image: "assets/img/barked.svg", name: "barked"},
        {image: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},
        {image: "assets/img/wawawicomics.svg", name: "wawawicomics"},
        {image: "assets/img/respondeai.svg", name: "respondeai"},
        {image: "assets/img/filomoderna.svg", name: "filomoderna"},
        {image: "assets/img/memeriagourmet.svg", name: "memeriagourmet"}
      ]
  
      function returnStory(story){
        return <StoryU image={story.image} name={story.name} />
      }
  
      return(
          <ul className="stories">
            {stories.map(story => <StoryU image={story.image} name={story.name} />)}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </ul>
      );
   }
  
   function StoryU(props){
    return (
        <li className="story">
            <div className="imagem">
              <img src={props.image} alt={props.name}/>
            </div>
            <div className="usuario">
              {props.name}
            </div>
          </li>
    );
  }