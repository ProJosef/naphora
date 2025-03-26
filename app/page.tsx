import HeroCarousel from "@/components/shared/home/HeroCarousel";
import HomeCard from "@/components/shared/home/HomeCard";
import {
  fetchAllCategories,
  getItemsByTag,
} from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";

export default async function Home() {
  const categories = (await fetchAllCategories()).slice(0, 4);
  const newArrivals = await getItemsByTag("new-arrival", 4);
  const bestSellers = await getItemsByTag("best-seller", 4);
  const featuredProducts = await getItemsByTag("featured", 4);

  const cards = [
    {
      title: "Categories to explore",
      button: {
        caption: "See More",
        link: "/search",
      },
      items: categories.map((item) => ({
        name: item,
        image: `/images/${toSlug(item)}.jpg`,
        href: `/search?category=${toSlug(item)}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      button: {
        caption: "View All",
        link: "/search?tag=new-arrival",
      },
      items: newArrivals,
    },
    {
      title: "Discover Best Sellers",
      button: {
        caption: "View All",
        link: "/search?tag=best-seller",
      },
      items: bestSellers,
    },
    {
      title: "Featured Products",
      button: {
        caption: "Shop Now",
        link: "/search?tag=featured",
      },
      items: featuredProducts,
    },
  ];
  return (
    <>
      <HeroCarousel />
      <HomeCard cards={cards} />
    </>
  );
}
