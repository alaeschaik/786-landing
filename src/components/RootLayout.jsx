"use client";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import {
  HiOutlineCalendarDays,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlinePhone,
  HiChevronRight,
} from "react-icons/hi2";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import Footer from "./Footer";

const BMD_LOGIN_URL = "https://banoz.786.at/bmdcom/bmdcom.dll";

const navLinks = [
  { title: "Leistungen", href: "/services" },
  { title: "Ablauf", href: "/#ablauf" },
  { title: "Über uns", href: "/about" },
  { title: "FAQ", href: "/#faq" },
  { title: "Kontakt", href: "/contact" },
];

// Always-visible call and booking actions on phones.
const MobileActionBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:+436767056207"
          className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-inset ring-neutral-300"
        >
          <HiOutlinePhone className="h-5 w-5" />
          Anrufen
        </a>
        <Link
          href="/appointment"
          className="flex items-center justify-center gap-2 rounded-full bg-accent-400 px-4 py-3 text-sm font-semibold text-neutral-900"
        >
          <HiOutlineCalendarDays className="h-5 w-5" />
          Termin buchen
        </Link>
      </div>
    </div>
  );
};

// Light dropdown panel for phones and tablets.
const MobileMenu = ({ id, onClose }) => {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        className="fixed inset-0 top-[var(--header-h)] z-30 bg-neutral-900/20 backdrop-blur-sm lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        id={id}
        className="absolute inset-x-0 top-full z-40 lg:hidden"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <Container>
          <nav className="mt-2 max-h-[calc(100dvh-var(--header-h)-1rem)] overflow-y-auto rounded-3xl border border-neutral-200 bg-white p-3 shadow-xl shadow-neutral-900/10 md:ml-auto md:max-w-md">
            <ul role="list">
              {navLinks.map((link) => {
                const active = link.href === pathname;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={clsx(
                        "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition",
                        active
                          ? "bg-accent-100 text-neutral-900"
                          : "text-neutral-800 hover:bg-neutral-50"
                      )}
                    >
                      {link.title}
                      <HiChevronRight className="h-5 w-5 text-neutral-400" />
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={BMD_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-neutral-800 transition hover:bg-neutral-50"
                >
                  <span className="flex items-center gap-2">
                    <HiOutlineLockClosed className="h-5 w-5 text-neutral-500" />
                    BMD Com Login
                  </span>
                  <HiChevronRight className="h-5 w-5 text-neutral-400" />
                </a>
              </li>
            </ul>
            <div className="mt-3 grid gap-2 border-t border-neutral-100 px-1 pt-4">
              <Button href="/appointment" size="lg" onClick={onClose}>
                <HiOutlineCalendarDays className="h-5 w-5" />
                Termin buchen
              </Button>
              <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                <Button href="tel:+436767056207" variant="outline" size="lg">
                  <HiOutlinePhone className="h-5 w-5" />
                  Anrufen
                </Button>
                <Button href="mailto:office@786.at" variant="outline" size="lg">
                  <HiOutlineEnvelope className="h-5 w-5" />
                  E-Mail
                </Button>
              </div>
            </div>
            <p className="px-4 pb-2 pt-4 text-xs text-neutral-500">
              Kalvarienberggasse 17/1, 1170 Wien · Mo–Fr 08:00–17:00
            </p>
          </nav>
        </Container>
      </motion.div>
    </>
  );
};

const Header = () => {
  const panelId = useId();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      style={{ "--header-h": "4.5rem" }}
      className={clsx(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-200",
        open
          ? "border-b border-neutral-200 bg-white"
          : scrolled
            ? "border-b border-neutral-200 bg-white/90 backdrop-blur"
            : "border-b border-transparent bg-white"
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Startseite" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-x-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  link.href === pathname
                    ? "bg-accent-100 text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-x-3 sm:gap-x-4">
            <a
              href={BMD_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="BMD Com Login"
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-neutral-600 ring-1 ring-inset ring-neutral-200 transition hover:bg-neutral-50 hover:text-neutral-900 lg:flex"
            >
              <HiOutlineLockClosed className="h-4 w-4" />
              Login
            </a>
            <a
              href="tel:+436767056207"
              className="hidden items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900 xl:flex"
            >
              <HiOutlinePhone className="h-5 w-5" />
              +43 676 7056207
            </a>
            <Button href="/appointment" className="hidden sm:inline-flex">
              Termin buchen
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition hover:bg-neutral-50 lg:hidden"
            >
              {open ? (
                <IoMdClose className="h-5 w-5" />
              ) : (
                <HiMenuAlt4 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>
      <AnimatePresence>
        {open && <MobileMenu id={panelId} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header key={pathname} />
      <div className="flex w-full flex-auto flex-col bg-white pb-20 sm:pb-0">
        <main className="w-full flex-auto">{children}</main>
        <Footer />
      </div>
      <MobileActionBar />
    </MotionConfig>
  );
};

export default RootLayout;
