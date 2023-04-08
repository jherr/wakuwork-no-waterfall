export default ({
  style,
  children,
}: {
  style?: React.StyleHTMLAttributes<HTMLDivElement>["style"];
  children: React.ReactNode;
}) => (
  <div
    style={{
      ...style,
      border: "2px dashed green",
      padding: "0.5rem",
    }}
  >
    {children}
  </div>
);
