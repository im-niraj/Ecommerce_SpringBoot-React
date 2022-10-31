import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-primary d-flex justify-content-between fw-bold text-white p-3 mt-5" >
                <div>
                    &copy;
                    <span> {new Date().getFullYear()}</span>
                    <span> Niraj Kumar</span>

                </div>
                <div>

                    <a href="http://www.nirajkumar.in" target={'_blank'} className='list-group-item list-group-item-action'>www.nirajkumar.in</a>
                </div>
            </div>

        </>
    )
}

export default Footer;