import { Link } from "react-router-dom";
import WhyCyber from "../components/why_cyber";
import LatestProducts from "../Sections/LatestProducts";
import Categories, { ShopCategory } from "../Sections/Categories";
import Hero from "../components/Hero";
import HeroSplit from "../Sections/split_hero";
import ShopByInterest from "../Sections/shop_interest";
import MostPurchased from "../components/best_seller";
import FeatureHero from "../components/feature_hero";
import Newsletter from "../components/news_letter";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SHOP BY CATEGORY ================= */}
      <Categories />

      {/* ================= LATEST PRODUCTS ================= */}
      <LatestProducts />

      {/* ================= Best Seller ================= */}
      <MostPurchased />

      {/* ================= SECOND HERO ================= */}
      <HeroSplit />
      {/* ================= CATEGORY SCROLL ================= */}

      <ShopCategory />

      {/* ================= SHOP BY INTEREST ================= */}
      <ShopByInterest />

      {/* ================= THIRD HERO ================= */}
      <FeatureHero />

      {/* ================= WHY CHOOSE ================= */}

      <WhyCyber />

      {/* ================= NEWSLETTER ================= */}
      <Newsletter />
    </>
  );
}
