import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export const WHATSAPP_PRIMARY = "2348117926084";
export const WHATSAPP_SECONDARY = "2348101581209";

export const PHONE_PRIMARY = "08117926084";
export const PHONE_SECONDARY = "08101581209";

export type Product = {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "ivory-drape",
    name: "Ìfẹ́ Ivory Drape Gown",
    collection: "Atelier Couture · No. 01",
    price: 485000,
    image: product1,
  },
  {
    id: "noir-agbada",
    name: "Noir Gilt Agbada",
    collection: "Heritage Tailoring · No. 02",
    price: 620000,
    image: product2,
  },
  {
    id: "indigo-adire",
    name: "Indigo Adire Kaftan",
    collection: "Dye Lab Edition · No. 03",
    price: 310000,
    image: product3,
  },
  {
    id: "champagne-suit",
    name: "Champagne Satin Suiting",
    collection: "Atelier Couture · No. 04",
    price: 540000,
    image: product4,
  },
  {
    id: "noir-cape",
    name: "Sculpted Noir Cape Gown",
    collection: "Runway Archive · No. 05",
    price: 780000,
    image: product5,
  },
  {
    id: "terracotta-kaftan",
    name: "Terracotta Beaded Kaftan",
    collection: "Dye Lab Edition · No. 06",
    price: 395000,
    image: product6,
  },
];

export const formatNaira = (value: number) =>
  `₦${value.toLocaleString("en-NG")}`;

export const orderLink = (product: Product, phone = WHATSAPP_PRIMARY) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Hello Maison de L'Élégance, I would like to order the ${product.name} (${product.collection}) — ${formatNaira(product.price)}. Please share availability and bespoke sizing details.`,
  )}`;
