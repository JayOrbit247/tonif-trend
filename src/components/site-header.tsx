import { useState } from "react";
import { Search, ShoppingBag, Instagram, Phone, Mail } from "lucide-react";
import { PHONE_PRIMARY } from "@/data/products";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop Collection", href: "#collection" },
  { label: "Dye Lab / Atelier", href: "#atelier" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader({ bagCount }: { bagCount: number }) {
  const [query, setQuery] = useState("");

  return (
    <header id="home">
      <div className="bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6 py-2.5 text-center sm:flex-row sm:justify-between">
          <p className="eyebrow text-[0.625rem] opacity-90">
            Worldwide Shipping Available • Bespoke High Fashion
          </p>
          <div className="flex items-center gap-5 text-[0.625rem] uppercase tracking-[0.2em] opacity-90">
            <a href={`tel:${PHONE_PRIMARY}`} className="flex items-center gap-1.5 hover:text-gold">
              <Phone className="size-3" strokeWidth={1.25} />
              {PHONE_PRIMARY}
            </a>
            <a href="#contact" className="hidden items-center gap-1.5 hover:text-gold sm:flex">
              <Mail className="size-3" strokeWidth={1.25} />
              Atelier Enquiries
            </a>
            <a href="#collection" className="flex items-center gap-1.5 hover:text-gold">
              <Instagram className="size-3" strokeWidth={1.25} />
              Lookbook
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="flex flex-col items-center gap-5">
            <a href="#home" className="text-center">
              <span className="block font-display text-3xl leading-none tracking-[0.12em] text-foreground sm:text-4xl">
                MAISON DE L'ÉLÉGANCE
              </span>
              <span className="eyebrow mt-2 block text-gold-deep">High Fashion Atelier</span>
            </a>

            <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-between">
              <nav className="order-2 lg:order-1">
                <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="order-1 flex items-center gap-3 lg:order-2">
                <label className="flex items-center gap-2 border border-input px-3 py-2">
                  <Search className="size-3.5 text-muted-foreground" strokeWidth={1.25} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search the maison"
                    aria-label="Search the maison"
                    className="w-40 bg-transparent text-xs tracking-[0.12em] uppercase outline-none placeholder:text-muted-foreground"
                  />
                </label>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gold px-4 py-2.5 text-gold-deep transition-colors hover:bg-gold hover:text-accent-foreground"
                >
                  <ShoppingBag className="size-3.5" strokeWidth={1.25} />
                  <span className="eyebrow">Bag ({bagCount})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sand">
        <p className="mx-auto max-w-7xl px-6 py-3 text-center font-display text-base italic text-secondary-foreground sm:text-lg">
          Explore our luxury bespoke collections crafted in Lagos State.
        </p>
      </div>
    </header>
  );
}
