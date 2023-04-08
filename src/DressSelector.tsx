"use client";

import { ClientComponent } from "./ComponentWrappers.js";
import { useDress, useCart } from "./store.js";
import { useState, useEffect } from "react";
import { serve } from "wakuwork/client";

const ProductCarousel = serve<{ color: string }>("ProductCarousel");

export default function () {
  const [dress, setDress] = useDress();
  const [cart] = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ClientComponent>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 0.3,
          }}
        >
          You selected a <strong>{dress}</strong> dress.
        </div>
        <div
          style={{
            flex: 0.3,
          }}
        >
          <h4>Select your dress</h4>
          <select onChange={(evt) => setDress(evt.target.value)}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div
          style={{
            flex: 0.3,
          }}
        >
          <h4>Cart</h4>
          <ul>
            {cart.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
      </div>
      {mounted && <ProductCarousel color={dress} />}
    </ClientComponent>
  );
}
