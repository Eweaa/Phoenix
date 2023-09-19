import MotivationCardCSS from './MotivationCard.module.css';

interface Props {
    name:string,
    img:string,
    text:string
}

const MotivationCard:React.FC<Props> = ({ name, img, text }) => {
  return (
    <div className={[MotivationCardCSS.MotivationCard, 'p-4 mb-3'].join(' ')}>
        <h2 className='mb-4'>{name}</h2>
        <div className={MotivationCardCSS.Container}>
            <div className={MotivationCardCSS.imgContainer}>
                <img src={(img)} alt='test'/>
            </div>
            <div className={[MotivationCardCSS.Txt, 'p-2'].join(' ')}>
                {text}
            </div>
        </div>
    </div>
  )
}

export default MotivationCard