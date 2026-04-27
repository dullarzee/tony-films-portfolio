import { eagleLake } from "@/lib/fonts";

export default function Logo({
  className,
  xl,
}: {
  className?: string;
  xl?: boolean;
}) {
  return (
    <>
      <div
        className={`flex items-center justify-center gap-2 text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2 ${eagleLake.className} ${className} ${xl && "w-30 h-30 gap-4 text-[3.5rem] min-w-100"}`}
      >
        <h3>
          <span>Filmby </span>
          <span
            className={`inline-flex justify-center items-center rounded-full text-[17px] w-13 h-13 text-black -ml-1 bg-white ${xl && "text-[50px] w-36 h-36"}`}
          >
            Tony
          </span>
        </h3>
      </div>
    </>
  );
}
