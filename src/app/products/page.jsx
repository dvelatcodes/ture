// 'use client'
import React from "react";
import "./styles.scss";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Card from "../components/card/Card";

const page = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);

  // console.log(products)

  return (
    <div className="product-container">
      <div className="product-text-cover">
        <h1>Total Products</h1>
        <button type="button">Sort By</button>
      </div>
      <div className="product-cover">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
