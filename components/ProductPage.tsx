"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {
  images: string[];
  name: string;
  desc: string;
  price: number;
};

const ProductPage = ({ images, name, desc, price }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-2 z-[20]">
      <div className="product-card">
        <div className={`card`}>
          <div className="card-face card-front flex flex-col gap-2 items-center">
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
