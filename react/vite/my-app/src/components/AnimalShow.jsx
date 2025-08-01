import { useState } from "react"
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'

const animalsImage = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}

function AnimalShow({type}){
    const [click, setClick] = useState(0)
    console.log(type)
    const handleClick = () => {
        setClick(click + 1)
    }

    return <div className="animal-show">
        <img className="animal" alt="animal" src ={animalsImage[type]} />
        <img className="heart" alt="heart"
        src={heart}
        onClick={handleClick}
        style={{width:10+10*click+'px'}} />
    </div>
}
export default AnimalShow