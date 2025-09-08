import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = event.currentTarget;
    const formData = {
      name: (form.name as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/send-chat-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');
      setSuccess('Your message was sent successfully!');
      form.reset();
    } catch (e: any) {
      setError(e.message || 'An unknown error occurred');
    }
    setLoading(false);
  }

  return (
    <form className="max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          required
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white rounded px-4 py-2"
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
      {success && <p className="text-green-700">{success}</p>}
      {error && <p className="text-red-700">{error}</p>}
    </form>
  );
}
