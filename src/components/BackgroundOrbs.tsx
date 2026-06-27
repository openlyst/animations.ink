export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden max-md:hidden">
      <div
        className="absolute -left-[20%] -top-[10%] h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{ backgroundColor: "var(--color-orb-1)" }}
      />
      <div
        className="absolute -bottom-[10%] -right-[20%] h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ backgroundColor: "var(--color-orb-2)" }}
      />
    </div>
  );
}
