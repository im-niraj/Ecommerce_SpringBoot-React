import React from 'react'

const Footer = () => {
    return (
        <>
            {/* <div class="card mt-5 rounded-0">
                <div class="card-header">
                    nirajkumar.in
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div> */}
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