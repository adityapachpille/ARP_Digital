import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Desktop Image (Full Width, Cropped for Cover Look) */}
      <div className="hidden sm:block mt-16">
        <Image
          src="/hero2.png"
          alt="Hero"
          width={1920}
          height={962}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Image (Show Full Image Without Cropping) */}
      <div className="sm:hidden relative h-[300px] mt-4">
        <Image
          src="/hero2.png"
          alt="Hero Mobile"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
