"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  firstName: string;
  lastName: string;
  organization: string;
  email: string;
  intent: string;
}

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  organization?: string;
  email?: string;
  intent?: string;
}

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const EMPTY_FORM: FormState = { firstName: "", lastName: "", organization: "", email: "", intent: "" };
const NAME_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]{1,50}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (!form.firstName.trim()) e.firstName = "First name is required.";
  else if (!NAME_RE.test(form.firstName.trim())) e.firstName = "Letters only, up to 50 characters.";

  if (!form.lastName.trim()) e.lastName = "Last name is required.";
  else if (!NAME_RE.test(form.lastName.trim())) e.lastName = "Letters only, up to 50 characters.";

  if (!form.organization.trim()) e.organization = "Organization is required.";
  else if (form.organization.trim().length < 2) e.organization = "Please enter a valid organization name.";

  if (!form.email.trim()) e.email = "Email address is required.";
  else if (!EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address.";

  if (!form.intent.trim()) e.intent = "Please describe your intent.";
  else if (form.intent.trim().length < 10) e.intent = "Please provide a bit more detail (at least 10 characters).";

  return e;
}

export default function RequestResumeButton({ className = "btn-primary", children }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  function close() {
    if (status === "loading") return;
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      setStatus("idle");
      setSubmitError("");
      setForm(EMPTY_FORM);
      setErrors({});
      setTouched({});
    }, 300);
  }

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
      if (touched[field]) {
        const next = { ...form, [field]: value };
        setErrors(validate(next));
      }
    };
  }

  function blur(field: keyof FormState) {
    return () => {
      setTouched((t) => ({ ...t, [field]: true }));
      setErrors(validate(form));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = { firstName: true, lastName: true, organization: true, email: true, intent: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    setSubmitError("");
    try {
      const res = await fetch("/api/request-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${form.firstName.trim()} ${form.lastName.trim()}`,
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          organization: form.organization.trim(),
          email: form.email.trim(),
          intent: form.intent.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send. Please try again later.");
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-bright placeholder-body/40 outline-none transition-colors bg-white/[0.04] ${
      touched[field] && errors[field]
        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
        : "border-line focus:border-violet/60 focus:ring-1 focus:ring-violet/30"
    }`;

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children ?? (
          <>
            <FileText size={16} /> Request Resume
          </>
        )}
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              style={{ backgroundColor: "rgba(6,8,16,0.85)" }}
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <motion.div
                key="panel"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glass w-full max-w-md rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2 className="font-display text-xl font-bold text-bright">Request My Resume</h2>
                    <p className="mt-1 text-sm text-body">
                      Fill in your details and I&apos;ll send it directly to your inbox.
                    </p>
                  </div>
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="cursor-pointer rounded-lg p-1 text-body transition-colors hover:text-bright"
                  >
                    <X size={20} />
                  </button>
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-6 text-center">
                    <CheckCircle size={48} className="text-emerald-400" />
                    <p className="font-display text-lg font-semibold text-bright">Request sent!</p>
                    <p className="text-sm text-body">
                      Thanks for reaching out. I&apos;ll review your request and send my resume to your email shortly.
                    </p>
                    <button onClick={close} className="btn-primary mt-2">
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* First / Last name row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                          First Name <span className="text-violet">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Jane"
                          value={form.firstName}
                          onChange={set("firstName")}
                          onBlur={blur("firstName")}
                          className={inputClass("firstName")}
                          autoComplete="given-name"
                        />
                        {touched.firstName && errors.firstName && (
                          <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                          Last Name <span className="text-violet">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Smith"
                          value={form.lastName}
                          onChange={set("lastName")}
                          onBlur={blur("lastName")}
                          className={inputClass("lastName")}
                          autoComplete="family-name"
                        />
                        {touched.lastName && errors.lastName && (
                          <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                        Organization <span className="text-violet">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={form.organization}
                        onChange={set("organization")}
                        onBlur={blur("organization")}
                        className={inputClass("organization")}
                        autoComplete="organization"
                      />
                      {touched.organization && errors.organization && (
                        <p className="mt-1 text-xs text-red-400">{errors.organization}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                        Email Address <span className="text-violet">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="jane@acme.com"
                        value={form.email}
                        onChange={set("email")}
                        onBlur={blur("email")}
                        className={inputClass("email")}
                        autoComplete="email"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                        Intent / Purpose <span className="text-violet">*</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. We have a senior Power Platform consultant opening and would like to review your background..."
                        value={form.intent}
                        onChange={set("intent")}
                        onBlur={blur("intent")}
                        className={`resize-none ${inputClass("intent")}`}
                      />
                      {touched.intent && errors.intent && (
                        <p className="mt-1 text-xs text-red-400">{errors.intent}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        <AlertCircle size={16} className="shrink-0" />
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary mt-1 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
