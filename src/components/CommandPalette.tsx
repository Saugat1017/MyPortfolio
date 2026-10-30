import { useEffect, useMemo, useRef, useState } from "react";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  LuBriefcase,
  LuCode,
  LuCompass,
  LuCopy,
  LuDownload,
  LuFileText,
  LuGithub,
  LuHouse,
  LuLayers,
  LuLinkedin,
  LuMail,
  LuSearch,
  LuUser,
} from "react-icons/lu";
import { profile } from "../data/profile";
import { scrollToSection } from "../hooks/useActiveSection";

type Command = {
  id: string;
  label: string;
  group: "Navigate" | "Actions" | "Links";
  icon: IconType;
  keywords?: string;
  hint?: string;
  run: () => void;
};

const openExternal = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const downloadResume = () => {
  const a = document.createElement("a");
  a.href = profile.resume.pdf;
  a.download = profile.resume.fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const CommandPalette = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const pending = useRef<(() => void) | null>(null);

  const commands = useMemo<Command[]>(
    () => [
      { id: "home", label: "Home", group: "Navigate", icon: LuHouse, run: () => scrollToSection("home") },
      { id: "about", label: "About", group: "Navigate", icon: LuUser, run: () => scrollToSection("about") },
      { id: "experience", label: "Experience", group: "Navigate", icon: LuBriefcase, keywords: "work state farm research job", run: () => scrollToSection("experience") },
      { id: "projects", label: "Projects", group: "Navigate", icon: LuLayers, keywords: "portfolio github built", run: () => scrollToSection("projects") },
      { id: "skills", label: "Skills", group: "Navigate", icon: LuCode, keywords: "tech stack tools", run: () => scrollToSection("skills") },
      { id: "goals", label: "Career goals & what's next", group: "Navigate", icon: LuCompass, keywords: "future plans roles", run: () => scrollToSection("goals") },
      { id: "resume", label: "Resume", group: "Navigate", icon: LuFileText, keywords: "cv", run: () => scrollToSection("resume") },
      { id: "contact", label: "Contact", group: "Navigate", icon: LuMail, run: () => scrollToSection("contact") },
      { id: "download", label: "Download resume (PDF)", group: "Actions", icon: LuDownload, keywords: "cv pdf", run: downloadResume },
      { id: "copy-email", label: "Copy email address", group: "Actions", icon: LuCopy, hint: profile.email, run: () => void navigator.clipboard?.writeText(profile.email) },
      { id: "email", label: "Send an email", group: "Actions", icon: LuMail, run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: "github", label: "GitHub", group: "Links", icon: LuGithub, hint: `@${profile.links.githubUser}`, run: () => openExternal(profile.links.github) },
      { id: "linkedin", label: "LinkedIn", group: "Links", icon: LuLinkedin, run: () => openExternal(profile.links.linkedin) },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.keywords ?? ""} ${c.group}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => setActiveIndex(0), [query]);
  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const select = (command: Command | undefined) => {
    if (!command) return;
    pending.current = command.run;
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      select(filtered[activeIndex]);
    }
  };

  const groups = ["Navigate", "Actions", "Links"] as const;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={inputRef}
      returnFocusOnClose={false}
      size="xl"
      onCloseComplete={() => {
        pending.current?.();
        pending.current = null;
      }}
    >
      <ModalOverlay bg="rgba(20, 18, 16,0.6)" backdropFilter="blur(6px)" />
      <ModalContent
        mt="12vh"
        mx={4}
        bg="rgba(40, 36, 32,0.96)"
        border="1px solid var(--border-strong)"
        borderRadius="18px"
        overflow="hidden"
        boxShadow="0 40px 100px -20px rgba(0,0,0,0.9)"
        onKeyDown={handleKeyDown}
      >
        <div className="cmd-input-row">
          <LuSearch aria-hidden="true" />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Search sections and actions…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-activedescendant={filtered[activeIndex] ? `cmd-${filtered[activeIndex].id}` : undefined}
            aria-label="Command menu"
          />
          <span className="kbd">esc</span>
        </div>
        <div className="cmd-list" id="cmd-list" role="listbox" ref={listRef}>
          {filtered.length === 0 && (
            <div className="cmd-group" style={{ padding: 16, textTransform: "none", letterSpacing: 0 }}>
              No results for “{query}”
            </div>
          )}
          {groups.map((group) => {
            const items = filtered.filter((c) => c.group === group);
            if (!items.length) return null;
            return (
              <div key={group} role="group" aria-label={group}>
                <div className="cmd-group">{group}</div>
                {items.map((command) => {
                  const index = filtered.indexOf(command);
                  const Icon = command.icon;
                  return (
                    <button
                      key={command.id}
                      id={`cmd-${command.id}`}
                      type="button"
                      role="option"
                      aria-selected={index === activeIndex}
                      data-index={index}
                      className="cmd-item"
                      onMouseMove={() => setActiveIndex(index)}
                      onClick={() => select(command)}
                      tabIndex={-1}
                    >
                      <Icon aria-hidden="true" />
                      {command.label}
                      {command.hint && <span className="cmd-hint">{command.hint}</span>}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="cmd-footer">
          <span>
            <span className="kbd">↑</span> <span className="kbd">↓</span> navigate
          </span>
          <span>
            <span className="kbd">↵</span> select
          </span>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default CommandPalette;
