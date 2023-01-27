import './Circles.css'


export default function Circles({circle}) {

    return (
        <div className='Circles'>
            <div className={circle == 1 ? 'selected' : null}>1</div>
            <div className={circle == 2 ? 'selected' : null}>2</div>
            <div className={circle == 3 ? 'selected' : null}>3</div>
            <div className={circle == 4 ? 'selected' : null}>4</div>
        </div>
    )
}