"use client";

import { brand } from "@/config/brand";
import { validateContact, type ContactErrors } from "@/lib/validation";
import { useState, type FormEvent } from "react";

const initial = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [done, setDone] = useState(false);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setDone(Object.keys(nextErrors).length === 0);
  }

  if (done) {
    return (
      <p role="status" className="font-serif text-3xl leading-tight">
        This demonstration did not send your message. If you need to reach the studio, call {brand.phoneDisplay}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field
        id="contact-name"
        label="Name"
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => update("name", value)}
      />
      <Field
        id="contact-email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => update("email", value)}
      />
      <Field
        id="contact-subject"
        label="Subject"
        value={values.subject}
        error={errors.subject}
        onChange={(value) => update("subject", value)}
      />
      <div>
        <label htmlFor="contact-message" className="text-[11px] uppercase tracking-[0.18em]">
          Message
        </label>
        <textarea
          id="contact-message"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="mt-2 w-full border border-stone bg-paper px-3 py-3 text-base outline-none"
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="mt-2 text-sm">
            {errors.message}
          </p>
        ) : null}
      </div>
      <p className="text-xs leading-5 text-charcoal">
        This form does not send a message to a real inbox. It only checks that the fields are complete.
      </p>
      <button type="submit" className="bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ivory">
        Submit
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.18em]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full border-b border-ink bg-transparent py-2 text-base outline-none"
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm">
          {error}
        </p>
      ) : null}
    </div>
  );
}
