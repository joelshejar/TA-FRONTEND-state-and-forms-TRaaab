import '../styles/index.css'

const Modal =(props)=>{
    let modalClassName = props.show?'show':'hide'
    console.log(props.sent)
    return(
        <div className={modalClassName}>
            <h5>{props.sent.movie.Title}</h5>
            <h5>close</h5>
        </div>
    )
}

export default Modal