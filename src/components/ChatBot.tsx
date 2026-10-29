import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuDownload, LuMessageCircle, LuSend, LuX } from "react-icons/lu";
import {
  about,
  careerGoals,
  experience,
  featuredProjects,
  moreProjects,
  profile,
  skillGroups,
} from "../data/profile";

type Message = {
  text: string;
  isBot: boolean;
  action?: { label: string; href: string; download?: string };
};

const strip = (s: string) => s.replace(/\*\*/g, "");
const job = (id: string) => experience.find((j) => j.id === id) ?? experience[0];

const intents: { keywords: string[]; reply: () => Omit<Message, "isBot"> }[] = [
  {
    keywords: ["hire", "hiring", "available", "looking", "open to", "job search", "opportunit"],
    reply: () => ({
      text: `${profile.firstName} has accepted a full-time Software Engineer offer at State Farm and starts after graduating in Dec 2026, so he's not actively job searching — but he's happy to connect. Email ${profile.email} or find him on LinkedIn.`,
    }),
  },
  {
    keywords: ["state farm", "statefarm", "intern", "offer", "full-time", "full time", "current"],
    reply: () => {
      const sf = job("state-farm");
      return {
        text: `${sf.role} at ${sf.org} (${sf.team}), ${sf.period} — and he has accepted a full-time offer to stay on after graduating in Dec 2026.\n\n${sf.bullets
          .slice(0, 4)
          .map((b) => `• ${strip(b)}`)
          .join("\n")}`,
      };
    },
  },
  {
    keywords: ["research", "paper", "jetson", "edge", "tensorrt", "vision transformer", "vit", "deit", "lab"],
    reply: () => {
      const r = job("edge-ai-research");
      return { text: `${r.role}, ${r.org} — ${r.team} (${r.note}).\n\n${r.bullets.map((b) => `• ${strip(b)}`).join("\n")}` };
    },
  },
  {
    keywords: ["goal", "next", "future", "plan", "career", "aspir", "role", "industr"],
    reply: () => ({
      text: `Target roles: ${careerGoals.targetRoles.map((r) => r.title).join("; ")}.\n\nNext steps:\n${careerGoals.roadmap
        .map((s) => `• ${s.phase} (${s.when}): ${s.title}`)
        .join("\n")}`,
    }),
  },
  {
    keywords: ["experience", "work", "worked", "jobs"],
    reply: () => ({
      text: `Experience:\n${experience.map((j) => `• ${j.role} — ${j.org} (${j.period})`).join("\n")}`,
    }),
  },
  {
    keywords: ["project", "built", "build", "github", "repo"],
    reply: () => ({
      text: `Featured projects:\n${featuredProjects
        .map((p) => `• ${p.title} — ${p.tagline}`)
        .join("\n")}\n\nAlso: ${moreProjects.map((p) => p.title).join(", ")}.`,
    }),
  },
  {
    keywords: ["skill", "tech", "stack", "language", "framework", "tool", "know"],
    reply: () => ({
      text: skillGroups.map((g) => `• ${g.title}: ${g.items.join(", ")}`).join("\n"),
    }),
  },
  {
    keywords: ["education", "school", "university", "degree", "gpa", "graduat", "uta", "college", "course"],
    reply: () => {
      const e = about.education;
      return {
        text: `${e.degree} at ${e.school} (${e.period}), GPA ${e.gpa}. Honors: ${e.honors.join(", ")}.\n\nCoursework includes ${e.coursework.slice(0, 6).join(", ")} and more.`,
      };
    },
  },
  {
    keywords: ["lead", "tutor", "leadership", "mvp", "lrc"],
    reply: () => ({ text: job("lrc-lead").bullets.map((b) => `• ${strip(b)}`).join("\n") }),
  },
  {
    keywords: ["resume", "cv", "pdf", "download"],
    reply: () => ({
      text: "Here's Saugat's one-page resume — experience, research, projects and skills.",
      action: { label: "Download resume", href: profile.resume.pdf, download: profile.resume.fileName },
    }),
  },
  {
    keywords: ["contact", "email", "reach", "linkedin", "connect", "message", "talk"],
    reply: () => ({
      text: `• Email: ${profile.email}\n• LinkedIn: linkedin.com/in/saugat-bhatta-01a595217\n• GitHub: github.com/${profile.links.githubUser}\n• Based in ${profile.location}`,
    }),
  },
  {
    keywords: ["hi", "hello", "hey", "yo", "sup"],
    reply: () => ({ text: "Hey! Ask me about Saugat's work at State Farm, his research, projects, skills or what's next." }),
  },
];

const getReply = (question: string): Omit<Message, "isBot"> => {
  const q = ` ${question.toLowerCase()} `;
  const match = intents.find((intent) =>
    intent.keywords.some((k) => (k.length <= 3 ? new RegExp(`\\b${k}\\b`).test(q) : q.includes(k)))
  );
  return (
    match?.reply() ?? {
      text: "I can answer questions about Saugat's experience, State Farm role, research, projects, skills, education, career goals, resume or contact info.",
    }
  );
};

const suggestions = ["State Farm", "Research", "Projects", "Skills", "Career goals", "Resume", "Contact"];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: `Hi! I'm ${profile.firstName}'s assistant. Ask about his work at State Farm, his edge AI research, projects or what's next.`,
      isBot: true,
    },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const send = (text: string) => {
    const question = text.trim();
    if (!question || typing) return;
    setMessages((prev) => [...prev, { text: question, isBot: false }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { ...getReply(question), isBot: true }]);
      setTyping(false);
    }, 650);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-panel"
            role="dialog"
            aria-label={`Chat with ${profile.firstName}'s assistant`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="chat-header">
              <span className="logo-mark" aria-hidden="true">
                {profile.initials}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>Ask about {profile.firstName}</div>
                <div className="muted-sm" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="pulse-dot" style={{ width: 6, height: 6 }} /> Instant answers
                </div>
              </div>
              <button type="button" className="icon-btn" style={{ width: 34, height: 34 }} onClick={() => setIsOpen(false)} aria-label="Close chat">
                <LuX />
              </button>
            </div>

            <div className="chat-body" ref={bodyRef} aria-live="polite">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`chat-msg ${msg.isBot ? "bot" : "user"}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {msg.text}
                  {msg.action && (
                    <div>
                      <a className="chat-action" href={msg.action.href} download={msg.action.download}>
                        <LuDownload aria-hidden="true" /> {msg.action.label}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
              {typing && (
                <div className="chat-typing" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <div className="chat-suggestions">
              {suggestions.map((s) => (
                <button type="button" key={s} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>

            <form
              className="chat-input-row"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                ref={inputRef}
                className="chat-input"
                placeholder="Ask a question…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="Your question"
              />
              <button type="submit" className="chat-send" disabled={!input.trim() || typing} aria-label="Send">
                <LuSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="chat-fab"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : `Ask about ${profile.firstName}`}
        aria-expanded={isOpen}
      >
        {isOpen ? <LuX /> : <LuMessageCircle />}
      </button>
    </>
  );
};

export default ChatBot;
