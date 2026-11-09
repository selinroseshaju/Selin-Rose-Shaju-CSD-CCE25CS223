import { useState } from 'react';
import '../styles/Contact.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const validatePhone = (value) => {
  const normalized = value.replace(/[\s-]/g, '');
  return /^(?:\+91)?(?:0)?[6789]\d{9}$/.test(normalized);
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setStatusMessage('');
  };

  const validateForm = () => {
    const nextErrors = { ...initialErrors };

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!validatePhone(formData.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a meaningful message.';
    }

    setErrors(nextErrors);
    return Object.values(nextErrors).every((value) => !value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatusMessage('');
      return;
    }

    setStatusMessage('Message submitted successfully.');
  };

  const errorProps = (field) => ({
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
    required: true,
  });

  return (
    <div className="page-shell section-spacing">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h1>Start a Conversation</h1>
          <p>
            For project enquiries, collaborations, or general questions, please use the form below.
            I look forward to hearing from you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-grid">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                {...errorProps('name')}
                className={errors.name ? 'error-input' : ''}
              />
              {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                {...errorProps('email')}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                {...errorProps('phone')}
                className={errors.phone ? 'error-input' : ''}
              />
              {errors.phone && <span id="phone-error" className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                value={formData.subject}
                onChange={handleChange}
                {...errorProps('subject')}
                className={errors.subject ? 'error-input' : ''}
              />
              {errors.subject && <span id="subject-error" className="error-message">{errors.subject}</span>}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              {...errorProps('message')}
              className={errors.message ? 'error-input' : ''}
            />
            {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="primary-btn submit-btn">
            Submit Message
          </button>

          <p className="form-note">Enter your details and submit the form. This demo does not send or store messages.</p>
          {statusMessage && <div className="success-message" role="status">{statusMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
