import { cwd } from "process";
import { loadEnvConfig } from "@next/env";
import data from "../data";
import Product from "./models/product.model";
import { connectToDB } from ".";

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { products } = data;

    await connectToDB();
    await Product.deleteMany();

    const createdProducts = await Product.insertMany(products);

    console.log({
      createdProducts,
      message: "Seeded database successfully",
    });
    process.exit(0);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed database");
  }
};

main();
