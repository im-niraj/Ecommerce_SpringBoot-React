import React from 'react'

const Footer = () => {
    return (
        <div className="bg-primary fw-bold text-white p-3 mt-5 fixed-bottom" >
            &copy;
            <span> {new Date().getFullYear()}</span>
            <span> Niraj Kumar</span>
        </div>
    )
}

export default Footer;