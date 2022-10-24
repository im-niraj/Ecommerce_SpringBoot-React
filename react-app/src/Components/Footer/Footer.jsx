import React from 'react'

const Footer = () => {
    return (
        <div className="bg-primary fw-bold text-white p-3 position-absolute bottom-0 start-0 end-0" >
            &copy;
            <span> {new Date().getFullYear()}</span>
            <span> Niraj Kumar</span>
        </div >
    )
}

export default Footer;