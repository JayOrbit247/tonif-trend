import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import dyeLabImage from "@/assets/dye-lab.jpg";
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  WHATSAPP_PRIMARY,
  WHATSAPP_SECONDARY,
  products,
} from "@/data/products";

const title = "Tonif-trend.ng — Setting Up Trending Standard | Lagos Atelier";
const description =
  "Luxury bespoke couture, hand-dyed adire and tailored agbada crafted in Agbelekale, Abule-Egba, Lagos. Order any design via WhatsApp with worldwide shipping.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [bagCount, setBagCount] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader bagCount={bagCount} />

      <main>
        <section className="relative">
          <img
            src={heroImage}
            alt="Two models in ivory and gold couture gowns from the Tonif-trend.ng atelier"
            width={1920}
            height={1088}
            className="h-[62vh] min-h-[420px] w-full object-cover object-top md:h-[78vh]"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="eyebrow text-primary-foreground/85">
              Setting up trending standard — Lagos, Nigeria
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.16em] text-primary-foreground sm:text-6xl md:text-7xl">
              EXPLORE YOUR STYLE
            </h1>
            <div className="rule-gold mt-7 h-px w-48" />
            <a
              href="#collection"
              className="mt-8 border border-primary-foreground/70 px-8 py-3.5 text-primary-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <span className="eyebrow">View the Collection</span>
            </a>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display text-3xl uppercase tracking-[0.3em] text-foreground sm:text-4xl">
              Featured Designs
            </h2>
            <div className="rule-gold mt-5 h-px w-32" />
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Each piece is cut, dyed and finished by hand in our Lagos atelier.
              Select a design and we will confirm your measurements on WhatsApp.
            </p>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={() => setBagCount((count) => count + 1)}
              />
            ))}
          </div>
        </section>

        <section id="atelier" className="bg-sand">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <img
              src={dyeLabImage}
              alt="Artisan hand-dyeing indigo silk in the Tonif-trend.ng dye lab"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <p className="eyebrow text-gold-deep">The Dye Lab</p>
              <h2 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
                Indigo, ochre and gold — mixed by hand
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-secondary-foreground/80">
                Our dye lab works in small batches with natural indigo and
                traditional adire resist techniques, so no two lengths of cloth
                ever repeat. Fabric is dried in the Lagos sun before it moves to
                the cutting table.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/80">
                Bespoke commissions take three to five weeks and are fitted twice
                before finishing.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_SECONDARY}?text=${encodeURIComponent(
                  "Hello Tonif-trend.ng, I would like to discuss a bespoke commission from the Dye Lab.",
                )}`}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-block border border-primary px-8 py-3.5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span className="eyebrow">Book a Bespoke Fitting</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-gold-deep">About the Brand</p>
          <h2 className="mt-4 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
            A Lagos atelier dressing a global clientele
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Tonif-trend.ng was founded on a simple belief: couture made in
            Nigeria belongs on the world's most demanding stages. From our
            workroom in Abule-Egba, our cutters, beaders and dyers build garments
            to measure, then ship them worldwide in bespoke garment cases.
          </p>
        </section>
      </main>

      <footer id="contact" className="bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl tracking-[0.12em]">
              TONIF-TREND.NG
            </h2>
            <p className="eyebrow mt-3 text-gold">Setting up trending standard</p>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70">
              Bespoke couture, hand-dyed textiles and tailored ceremonial wear.
              Worldwide shipping available.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Visit the Atelier</h3>
            <p className="mt-5 flex gap-3 text-sm leading-relaxed text-primary-foreground/80">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.25} />
              Agbelekale, Abule-Egba, Lagos State, Nigeria
            </p>
            <p className="mt-4 flex gap-3 text-sm text-primary-foreground/80">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.25} />
              Monday – Saturday, 9am – 7pm WAT
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Contact & Orders</h3>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_PRIMARY}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold" strokeWidth={1.25} />
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_SECONDARY}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold" strokeWidth={1.25} />
                  {PHONE_SECONDARY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-7xl px-6 py-6 text-center text-[0.625rem] uppercase tracking-[0.2em] text-primary-foreground/50">
            © {new Date().getFullYear()} Tonif-trend.ng — Lagos State, Nigeria
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
