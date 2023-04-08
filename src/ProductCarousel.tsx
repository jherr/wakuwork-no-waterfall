import { ServerComponent } from "./ComponentWrappers.js";
import AddToCart from "./AddToCart.js";

const fetchCombinations = (color: string): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`${color} hat`, `${color} shoes`, `${color} jacket`]);
    }, 1000);
  });
};

const ProductCarousel = async ({ color }: { color: string }) => {
  const combinations = await fetchCombinations(color);

  return (
    <ServerComponent>
      <h2>Here are some options if you like a {color} dress</h2>
      <div
        style={{
          display: "flex",
        }}
      >
        {combinations.map((combination) => (
          <div
            key={combination}
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem",
              flex: 0.25,
            }}
          >
            <h4>{combination}</h4>
            <AddToCart product={combination} />
          </div>
        ))}
      </div>
    </ServerComponent>
  );
};

export default ProductCarousel;
