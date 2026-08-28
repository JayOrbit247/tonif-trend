import { useState } from "react";
import { Search, ShoppingBag, Instagram, Phone, Mail } from "lucide-react";
import { PHONE_PRIMARY } from "@/data/products";
import logoAsset from "@/assets/tonif-logo.png.asset.json";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop Collection", href: "#collection" },
  { label: "Atelier", href: "#atelier" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader({ bagCount }: { bagCount: number }) {
  const [query, setQuery] = useState("");

  return (
    <header id="home">
      <div className="bg-ink text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6 py-2.5 text-center sm:flex-row sm:justify-between">
          <p className="eyebrow text-[0.625rem] text-gold">
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

      <div className="border-b border-gold/30 bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="flex flex-col items-center gap-5">
            <a href="#home" className="flex flex-col items-center text-center">
              <img
                src={logoAsset.url}
                alt="Tonif-trend.ng gold Tt monogram logo"
                width={96}
                height={96}
                className="size-20 object-contain sm:size-24"
              />
              <span className="mt-3 block font-display text-3xl leading-none tracking-[0.12em] text-primary-foreground sm:text-4xl">
                TONIF-TREND.NG
              </span>
              <span className="eyebrow mt-2 block text-gold">
                Setting up trending standard
              </span>
            </a>

            <div className="flex w-full flex-col items-center gap-5 lg:flex-row lg:justify-between">
              <nav className="order-2 lg:order-1">
                <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="eyebrow text-primary-foreground/70 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="order-1 flex items-center gap-3 lg:order-2">
                <label className="flex items-center gap-2 border border-primary-foreground/25 px-3 py-2">
                  <Search className="size-3.5 text-gold" strokeWidth={1.25} />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search the maison"
                    aria-label="Search the maison"
                    className="w-40 bg-transparent text-xs uppercase tracking-[0.12em] text-primary-foreground outline-none placeholder:text-primary-foreground/45"
                  />
                </label>
                <button
                  type="button"
                  className="flex items-center gap-2 border border-gold px-4 py-2.5 text-gold transition-colors hover:bg-gold hover:text-accent-foreground"
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
