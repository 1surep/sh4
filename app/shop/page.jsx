import Shop from "@/components/Shop/Shop";
import React from "react";

export const metadata = {
  title: "Shop",
  description: "Shop Sierra H4 merchandise and Hash House Harriers gear. Get official Sierra H4 apparel, accessories, and memorabilia. Show your hashing spirit with quality Sierra H4 products.",
  keywords: [
    "Sierra H4 shop",
    "Hash House Harriers merchandise",
    "Sierra H4 gear",
    "Hashing apparel",
    "Sierra H4 store"
  ],
  openGraph: {
    title: "Shop - Sierra H4 Hash House Harriers & Harriettes",
    description: "Shop official Sierra H4 merchandise and Hash House Harriers gear. Get quality hashing apparel and accessories.",
    url: "https://sierrah4.com/shop",
    images: [
      {
        url: "/shop.png",
        width: 1200,
        height: 630,
        alt: "Sierra H4 Shop",
      },
    ],
  },
  alternates: {
    canonical: "https://sierrah4.com/shop",
  },
};

const ShopPage=()=>{
    return (
        <div>
            <Shop/>
        </div>
    )


};
export default ShopPage;