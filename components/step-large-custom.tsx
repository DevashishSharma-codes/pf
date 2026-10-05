// @ts-nocheck
export default function StepLarge({ number, title }) {
  return (
    <div className="step flex items-baseline md:items-center py-4">
      <div className="flex items-start md:items-center justify-center border border-[#c3f53b]/30 font-extrabold rounded-full h-8 w-8 text-[#c3f53b]">
        {number}
      </div>
      <h1
        className="ml-3 tracking-tight font-bold text-lg md:text-6xl dark:text-white"
        style={{ marginBottom: "0px" }}
      >
        {title}
      </h1>
    </div>
  );
}
