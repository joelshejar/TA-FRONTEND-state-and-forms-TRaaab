import '../styles/index.css'

const Modal =({show,close,sent})=>{
    let modalClassName = show?'show':'hide'
    return(
        <div className={modalClassName}>
            <h3>{sent.Plot}</h3>
        </div>
    )
}

export default Modal