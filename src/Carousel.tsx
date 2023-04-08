"use client";

import { ClientComponent } from "./ComponentWrappers.js";
import { useState, useEffect } from "react";
import { useDress } from "./store.js";
import { serve } from "wakuwork/client";

const ProductCarousel = serve<{ color: string }>("ProductCarousel");

export const Carousel = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [dress] = useDress();

  return (
    <ClientComponent>
      {mounted && <ProductCarousel color={dress} />}
    </ClientComponent>
  );
};
