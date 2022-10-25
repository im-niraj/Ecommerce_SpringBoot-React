import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="card mt-5 rounded-0">
                <div class="card-header">
                    nirajkumar.in
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
            <div className="bg-primary fw-bold text-white p-3" >
                &copy;
                <span> {new Date().getFullYear()}</span>
                <span> Niraj Kumar</span>
            </div>
        </>
    )
}

export default Footer;