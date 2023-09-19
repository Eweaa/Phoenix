import FriendRequestCSS from './FriendRequest.module.css';

interface Props {
    Img?:string,
    name:string
}

const FriendRequest:React.FC<Props> = ({ Img, name }) => {
  return (
    <div className={[FriendRequestCSS.FriendRequest,'mb-2'].join(' ')}>
        <div className='mx-2'>
            <img src={Img}/>
        </div>
        <div className={FriendRequestCSS.data}>
            {name}
            <div>
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </div>
    </div>
  )
}

export default FriendRequest