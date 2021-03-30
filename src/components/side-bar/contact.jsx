import React from 'react';


const Contact = () => {
    return (
        <section>
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <p>
                We're trying to deliver best knowledge gathered from many Books, Articles, Public resources. If you have any query, wanted to get your Article written on this website, any
                sugestions, abuse, or anything you'd like to share. We are open to accept queries. You'll get response within 2 hours of time.
            </p>
            <ul className="contact">
                <li className="icon solid fa-envelope">
                    <a href="mailto:contact@techaware.in">contact@techaware.in</a>
                </li>
                <li className="icon solid fa-phone"><a href="call:+918800550044"> +91.88.0055.0044</a></li>
                <li className="icon solid fa-home">
                    Civil Lines, North Delhi<br />
                    India, PIN - 110054
                </li>
            </ul>
        </section>
    )
}

export default Contact;