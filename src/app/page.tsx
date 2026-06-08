"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "./types/types";
import Link from "next/link";

export default function CSRProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=20");
      const data = await res.json();
      setProducts(data.products);
    };

    getData();
  }, []);

//sample commit to test release.io pushes 
  //test - 13
  return (
    <div>
      <h1>CSR Example</h1>
      <ul>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <b>{product.title}</b>
            <p>{product.description}</p>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}
