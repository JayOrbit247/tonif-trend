import { formatNaira, orderLink, type Product } from "@/data/products";

export function ProductCard({
  product,
  onOrder,
}: {
  product: Product;
  onOrder: () => void;
}) {
  return (
    <article className="group flex flex-col">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          width={912}
          height={1200}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col items-center px-2 pt-6 text-center">
        <p className="eyebrow text-muted-foreground">{product.collection}</p>
        <h3 className="mt-3 font-display text-xl tracking-wide text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 font-display text-lg text-gold-deep">
          {formatNaira(product.price)}
        </p>

        <a
          href={orderLink(product)}
          target="_blank"
          rel="noreferrer noopener"
          onClick={onOrder}
          className="mt-5 w-full bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-gold-deep"
        >
          <span className="eyebrow">Order via WhatsApp</span>
        </a>
      </div>
    </article>
  );
}
