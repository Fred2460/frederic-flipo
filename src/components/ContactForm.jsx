import '../styles/contactForm.scss';
import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rgpd, setRgpd] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = "Demande de contact";
    const fullMessage = `${message}\n\nNom du contact : ${name}\nEmail de contact : ${email}\nFormulaire de contact soumis avec consentement RGPD.`;
    const mailtoLink = `mailto:contact@frederic-flipo.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
    const newWindow = window.open(mailtoLink, '_blank');
    if (!newWindow) {
      alert("Veuillez autoriser les pop-ups pour ouvrir le lien de messagerie.");
    } else {
      setName('');
      setEmail('');
      setMessage('');
      setRgpd(false);
    }
  };

  return (
    <form className="formContact" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Nom"
          className="formContact__field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Adresse email"
          className="formContact__field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="body"
          placeholder="Votre message"
          className="formContact__field"
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="rgpd" className="formContact__field--check">
          <p><strong>Accord RGPD :</strong></p>
          <input
            id="rgpd"
            type="checkbox"
            name="rgpd"
            checked={rgpd}
            onChange={(e) => setRgpd(e.target.value)}
            required
            aria-required="true"
          />
          J’accepte que le site stocke les informations envoyées pour me répondre &#40;promis, je ne les revends pas et je n’enverrai pas 3 newsletters par jour&nbsp;!&#41;
        </label>
      </div>
      <input type="hidden" name="subject" value="Demande de contact" />
      <input className="formContact__field--submit" type="submit" value="Envoyer votre message" />
    </form>
  );
}

export default ContactForm;
