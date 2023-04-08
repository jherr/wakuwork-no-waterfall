import { ServerComponent, ClientComponent } from "./ComponentWrappers.js";
import DressSelector from "./DressSelector.js";
import { Carousel } from "./Carousel.js";

const App = ({ name = "Customer" }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 800,
        padding: "1em",
        fontFamily: "arial, verdana, sans-serif",
      }}
    >
      <ServerComponent>
        <h1>Hello {name}</h1>
        <DressSelector />
        <Carousel />
      </ServerComponent>

      <h5
        style={{
          marginTop: "1rem",
        }}
      >
        Key
      </h5>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <ServerComponent>Server Component</ServerComponent>
        <ClientComponent>Client Component</ClientComponent>
      </div>
    </div>
  );
};

export default App;
