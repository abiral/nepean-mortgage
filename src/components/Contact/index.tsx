import React, { useState, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Modal from "./../Shared/Modal";
import { useContactForm } from "../../hooks/useContactForm";
import type { IContactFormData as IServiceContactFormData } from "../../services";
import styles from "./index.module.css";

interface IContactFormData extends IServiceContactFormData {
  message: string;
}

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact = ({ isOpen, onClose }: ContactProps) => {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmissionAllowed, allowSubmission] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const { isSubmitting, isSuccess, error, submitForm, resetForm } =
    useContactForm();

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      allowSubmission(false);
      setToken(null);
      resetForm();
    }
  }, [isOpen, resetForm]);

  useEffect(() => {
    if (token) {
      allowSubmission(true);
    }
  }, [token]);

  const handleVerificationSuccess = (hToken: string) => {
    setToken(hToken);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSubmitting) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    await submitForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      hToken: token || undefined,
    });

    if (isSuccess) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  if (isSuccess) {
    return (
      <Modal open={isOpen} onClose={onClose} title="Message Sent!" width={500}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✓</div>
          <h3>Thank you for contacting us!</h3>
          <p>
            We've received your message and will get back to you within 24
            hours.
          </p>
        </div>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal open={isOpen} onClose={onClose} title="Error" width={500}>
        <div className={styles.errorMessage}>
          <div className={styles.errorIcon}>✕</div>
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <div className={styles.formActions}>
            <button
              type="button"
              onClick={resetForm}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Try Again
            </button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal open={isOpen} onClose={onClose} title="Contact Us" width={500}>
      <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your full name"
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Tell us how we can help you..."
            disabled={isSubmitting}
          />
        </div>
        <div>
          <HCaptcha
            sitekey={import.meta.env.VITE_HSITE_KEY}
            onVerify={(token) => handleVerificationSuccess(token)}
          />
        </div>
        <div className={styles.formActions}>
          <button
            type="button"
            onClick={onClose}
            className={`${styles.btn} ${styles.btnSecondary}`}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnPrimary}`}
            disabled={isSubmitting || !isSubmissionAllowed}
          >
            {isSubmitting ? (
              <span className={styles.loadingContent}>
                <span className={styles.spinner}></span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Contact;
