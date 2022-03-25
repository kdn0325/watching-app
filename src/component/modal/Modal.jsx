import PropTypes from 'prop-types';
import "./modal.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Modal = props => {
    const [active,setActive] = useState(false);
    useEffect(()=>{
        setActive(props.active);
    },[props.active])
    return (
        <div id={props.id} className={`modal ${active ? "active" : ""}`}>
            {props.children}
        </div>
    );
};

Modal.propTypes = {
    active:PropTypes.bool,
    id:PropTypes.string,
};

export const ModalContent = props =>{

    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose)props.onClose();
    }
    return (
        <div className="modal_content" ref={contentRef}>
            {props.children}
            <div className="modal_content_close" onClick={closeModal}>
                <img src={require(`../../assets/bx-x.svg`).default}/>
            </div>
        </div>
    )
}

ModalContent.propTypes = {
    onClose : PropTypes.func
}
export default Modal;