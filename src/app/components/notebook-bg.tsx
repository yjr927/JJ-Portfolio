export function NotebookBackground() {
  const holes = Array.from({ length: 100 }, (_, i) => 80 + i * 60);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Horizontal rule lines every 40px */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(29,26,22,0.07) 1px, transparent 1px)",
          backgroundSize: "100% 40px",
          backgroundPosition: "0 40px",
        }}
      />
      {/* Margin line */}
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{ left: "56px", backgroundColor: "rgba(192,128,119,0.28)" }}
      />
      {/* Binder holes */}
      {holes.map((top) => (
        <div
          key={top}
          className="absolute rounded-full"
          style={{
            left: "18px",
            top: `${top}px`,
            width: "10px",
            height: "10px",
            backgroundColor: "rgba(29,26,22,0.09)",
          }}
        />
      ))}
    </div>
  );
}
