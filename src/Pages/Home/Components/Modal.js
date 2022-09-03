import {FaTimes} from "react-icons/fa";

const Modal = ({handleClick}) => {
  return (
    <div className='overlay'>
        <div className='modal'>
         <div className="cross">
         <FaTimes style={{color:"white"}} size={25} onClick={handleClick}/>
         </div>
            <h2>The ‘lorem ipsum’ text is from a famous passage by Cicero of Ancient Rome and words are added, altered and removed to make it nonsensical in improper Latin. It has been used as placeholder
            </h2>
        </div>
      
    </div>
  )
}

export default Modal
