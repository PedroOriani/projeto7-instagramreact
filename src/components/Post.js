import { ReactDOM } from "react";
import { useState } from "react";



export default function Post(){
    const posts = [
        {icon: "assets/img/meowed.svg",username: "meowed", image: "assets/img/gato-telefone.svg", likeIcon: "assets/img/respondeai.svg", likesUsername: "respondeai", likes: "101523"},
        {icon: "assets/img/barked.svg",username: "barked", image: "assets/img/dog.svg", likeIcon: "assets/img/adorable_animals.svg", likesUsername: "adorable_animals", likes: "101523"},
        {icon: "assets/img/chibirdart.svg",username: "chibirdart", image: "assets/img/gato-telefone.svg", likeIcon: "assets/img/respondeai.svg", likesUsername: "respondeai", likes: "101523"}
    ]

    let [classHeart, setClassHeart] = useState('none');
    let [classSave, setClassSave] = useState('none');
    let [heartName, setHeartName] = useState('heart-outline');
    let [saveName, setSaveName] = useState('bookmark-outline');
    let [likeNumber, setLikeNumber] = useState('101523')

    function likeunlike(){
        if (classHeart === 'none'){
            setClassHeart('red')
            setHeartName('heart')
            moreLike();
        }else{
            setClassHeart('none')
            setHeartName('heart-outline')
            lessLike();
        }
    }

    function saveUnsave(){
        if (classSave === 'none'){
            setClassSave('black')
            setSaveName('bookmark')
        }else{
            setClassSave('none')
            setSaveName('bookmark-outline')
        }
    }

    function likeImage(){
        if (classHeart === 'none'){
            setClassHeart('red')
            setHeartName('heart')
            moreLike();
        }
    }

    function moreLike(){
        let numberLikeNumber = Number(likeNumber);
        let more = numberLikeNumber + 1
        setLikeNumber(more)
    }

    function lessLike(){
        let numberLikeNumber = Number(likeNumber);
        let less = numberLikeNumber - 1
        setLikeNumber(less)
    }

    return(
        <ul className="posts">
            {posts.map(post => 
            
            <li data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img data-test="post-image" src={post.icon} alt="" />
                    {post.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img onClick={likeImage} src={post.image} alt="" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={likeunlike} data-test="like-post" class={classHeart} name={heartName}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={saveUnsave} data-test="save-post" class={classSave} name={saveName}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={post.likeIcon} alt="" />
                    <div className="texto">
                        Curtido por <strong>{post.likesUsername}</strong> e <strong>outras <scan data-test="likes-number">{likeNumber}</scan> pessoas</strong>
                    </div>
                </div>
            </div>
        </li>)}
        </ul>
    );            
}