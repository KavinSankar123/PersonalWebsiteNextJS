export default function ViewResume() {
  return (
    <div className="flex items-center justify-center h-screen">
      <iframe
        src="/components/Kavin_Sankar_Resume.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
      />
    </div>
  );
}
