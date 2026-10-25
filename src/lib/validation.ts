const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return emailPattern.test(value.trim());
}

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Enter a subject.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Enter a message of at least 10 characters.";
  }
  return errors;
}

export type NewsletterErrors = {
  email?: string;
  consent?: string;
};

export function validateNewsletter(email: string, consent: boolean): NewsletterErrors {
  const errors: NewsletterErrors = {};
  if (!email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!consent) {
    errors.consent = "Confirm that you understand this is a demonstration.";
  }
  return errors;
}
