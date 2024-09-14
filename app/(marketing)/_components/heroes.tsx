import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex max-w-5xl items-center justify-center">
      <div className="flex items-center">
        <div className="relative size-[300px] sm:size-[350px] md:size-[400px]">
          <Image
            src="/documents.png"
            alt="Documents"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src="/documents-dark.png"
            alt="Documents"
            className="hidden object-contain dark:block"
            fill
          />
        </div>
        <div className="relative hidden size-[400px] md:block">
          <Image
            src="/reading.png"
            alt="Reading"
            className="object-contain dark:hidden"
            fill
          />
          <Image
            src="/reading-dark.png"
            alt="Reading"
            className="hidden object-contain dark:block"
            fill
          />
        </div>
      </div>
    </div>
  );
};
