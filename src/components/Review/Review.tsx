import React from 'react'
import ReviewCSS from './Review.module.css';
import img from '../../assets/GenericUser.jpg';

interface Props {
    name:string,
    content:string
}

const Review:React.FC<Props> = ({ name, content }) => {
  return (
    <div className={[ReviewCSS.Review, 'p-4'].join(' ')}>
        <div className={ReviewCSS.content}>
            <div className='mx-1'>
                <img src={img}/>
            </div>
            <div className='mx-1' style={{width:"100%"}}>
                <p>{name}</p>
                <p>{content}</p>
            </div>
        </div>
        <div>
            ⭐⭐⭐⭐⭐
        </div>
    </div>
  )
}

export default Review