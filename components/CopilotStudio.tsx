"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  User,
  Bot,
  BookOpen,
  Workflow,
  Database,
  Network,
  Plug,
  Building2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { copilotTopics } from "@/lib/data";

const flowNodes = [
  { Icon: User, label: "User" },
  { Icon: Bot, label: "Copilot Studio" },
  { Icon: BookOpen, label: "Knowledge Sources" },
  { Icon: Workflow, label: "Power Automate" },
  { Icon: Database, label: "Dataverse" },
  { Icon: Network, label: "Microsoft Graph" },
  { Icon: Plug, label: "Custom APIs" },
  { Icon: Building2, label: "Business Applications" },
];

/**
 * Signature element of the site: a living agent-orchestration diagram.
 * A pulse of light travels down the chain, tracing how a user question
 * becomes grounded, actioned, and answered.
 */
function AgentFlow() {
  const reduce = useReducedMotion();

  return (
    <div className="glass relative overflow-hidden p-6 md:p-10">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-violet/10 via-transparent to-cyan/10"
      />
      <ol className="relative mx-auto flex max-w-xs flex-col items-stretch">
        {flowNodes.map(({ Icon, label }, i) => (
          <li key={label} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`glass glass-hover flex w-full items-center justify-center gap-3 px-5 py-3.5 text-sm font-semibold text-bright ${
                label === "Copilot Studio"
                  ? "border-violet/60 shadow-[0_0_35px_rgba(139,92,246,0.3)]"
                  : ""
              }`}
            >
              <Icon size={18} className={label === "Copilot Studio" ? "text-violet" : "text-cyan"} />
              {label}
            </motion.div>

            {i < flowNodes.length - 1 ? (
              <div className="relative h-9 w-px overflow-hidden bg-gradient-to-b from-violet/40 to-cyan/40">
                {!reduce ? (
                  <motion.span
                    aria-hidden
                    className="absolute left-1/2 h-3 w-[3px] -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]"
                    animate={{ top: ["-20%", "120%"] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.35,
                      repeatDelay: flowNodes.length * 0.35 - 1.4 + 1,
                    }}
                  />
                ) : null}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function CopilotStudio() {
  return (
    <section id="copilot" className="relative py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(139,92,246,0.08),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured capability"
          title="Building intelligent business agents with Microsoft Copilot Studio"
          lead="Agents that answer from your organization's knowledge, act through your business systems, and keep humans in the approval loop, designed, governed, and shipped to production."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <AgentFlow />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {copilotTopics.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="glass glass-hover h-full p-5">
                  <h3 className="font-display text-base font-semibold text-bright">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
