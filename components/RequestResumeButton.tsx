"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function RequestResumeButton({ className = "btn-primary", children }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    organization: "",
    email: "",
    intent: "",
  });

  function close() {
    if (status === "loading") return;
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      setStatus("idle");
      setErrorMsg("");
      setForm({ fullName: "", organization: "", email: "", intent: "" });
    }, 300);
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/request-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children ?? (
          <>
            <FileText size={16} /> Request Resume
          </>
        )}
      </button>

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
              className="glass w-full max-w-md rounded-2xl p-8"
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                      Full Name <span className="text-violet">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Smith"
                      value={form.fullName}
                      onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                      className="w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-bright placeholder-body/40 outline-none transition-colors focus:border-violet/60 focus:ring-1 focus:ring-violet/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                      Organization <span className="text-violet">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Acme Corp"
                      value={form.organization}
                      onChange={(e) => setForm((f) => ({ ...f, organization: e.target.value }))}
                      className="w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-bright placeholder-body/40 outline-none transition-colors focus:border-violet/60 focus:ring-1 focus:ring-violet/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                      Email Address <span className="text-violet">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="jane@acme.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-bright placeholder-body/40 outline-none transition-colors focus:border-violet/60 focus:ring-1 focus:ring-violet/30"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-body">
                      Intent / Purpose <span className="text-violet">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. We have a senior Power Platform consultant opening and would like to review your background..."
                      value={form.intent}
                      onChange={(e) => setForm((f) => ({ ...f, intent: e.target.value }))}
                      className="w-full resize-none rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-bright placeholder-body/40 outline-none transition-colors focus:border-violet/60 focus:ring-1 focus:ring-violet/30"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <AlertCircle size={16} className="shrink-0" />
                      {errorMsg}
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
      </AnimatePresence>
    </>
  );
}
