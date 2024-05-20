
import React from 'react';
import "./Contact.css";

const About = () => {
  return (
    <>
      <section className='contact_main'>
      <div className="container">
            <h2 className='contact_tit'>Вы можете связаться с нами</h2>
      </div>
    </section>

    <section>
      <div className="container">

        <p className="contact_phon">Контактный тел: +996 505 505 400</p>
        <p className="contact_phon">Соц. сети</p>
        <p className="contact_phon"> <span>Whatsapp:</span> +996 505 505 400</p>
        <p className="contact_phon"> <span>Telegram:</span> +996 505 505 400  </p>
        <p className="contact_phon"> <span>Instagram:</span> gprva_</p>
        
      </div>
    </section>
    </>
  )
}

export default About
