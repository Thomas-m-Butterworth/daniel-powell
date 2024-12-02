import { useState } from 'react';
import { ContactForm, CopyContainer, PageContainer } from '@components';
import { copy, meta } from '@lang';

export default function Contact() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending Message');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error Sending Message');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
    setTimeout(setStatus, 3000, '')
  };

  return (
    <PageContainer head={meta.pages.contact.head}>
      <CopyContainer title={copy.contact.title} copy={copy.contact.copy} />
      <ContactForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        status={status}
        formData={formData}
      />
    </PageContainer>
  );
}
