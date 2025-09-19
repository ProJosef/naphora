"use server";

import { connectToDB } from "../db";
import Product from "../db/models/product.model";

export async function fetchAllCategories() {
  await connectToDB();
  const categories = await Product.distinct("category", { isPublished: true });

  return categories;
}

export async function getItemsByTag(tag: string, limit?: number) {
  await connectToDB();
  const items = await Product.find({ isPublished: true, tags: { $in: [tag] } })
    .limit(limit ?? 0)
    .select("name slug images");

  return items.map((item) => ({
    name: item.name,
    image: item.images[0],
    href: `/product/${item.slug}`,
  }));
}

export async function getNewProducts(limit?: number) {
  await connectToDB();
  const products = await Product.find({ isPublished: true })
    .sort({ createdAt: -1 })
    .limit(limit ?? 0)
  
  return products
}
