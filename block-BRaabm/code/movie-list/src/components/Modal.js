import '../styles/index.css'

const Modal =({show,sent})=>{
    let modalClassName = show?'show':'hide'
    return(
        <div className={modalClassName}>
            <h5>{sent.Plot}</h5>
            <h5>close</h5>
        </div>
    )
}

export default Modal