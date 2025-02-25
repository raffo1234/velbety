import { useState } from "react";
import { Icon } from "@iconify/react";
import { firstSliderImage } from "../stores/states";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="animate-pulse w-full h-full bg-[#EAE8E4]"></div>
      )}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`object-cover w-full h-full object-top opacity-0 transition-opacity duration-700 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}
      />
    </>
  );
};

export default function TabNavigationImages({
  bigImages,
  smallImages,
  hrefs,
  title,
  description,
}: {
  smallImages: string[][];
  bigImages: string[][];
  hrefs: string[];
  title: string;
  description: string;
}) {
  return (
    <div className="flex space-x-2 -ml-2 lg:ml-0 mb-10">
      <article className="hidden lg:w-1/4 lg:block rounded-[50px] h-[332px] overflow-hidden">
        <a
          href={hrefs[0]}
          onClick={() => firstSliderImage.set("0")}
          title="Ver todas Las Imágenes"
        >
          <Image src={smallImages[0][0]} alt="Velbety" />
        </a>
      </article>
      <article className="hidden md:w-1/3 lg:w-1/4 md:block rounded-[50px] h-[332px] overflow-hidden">
        <a
          href={hrefs[1]}
          onClick={() => firstSliderImage.set("1")}
          title="Ver todas Las Imágenes"
        >
          <Image src={smallImages[1][0]} alt="Velbety" />
        </a>
      </article>
      <article className="w-1/2 lg:w-1/4 md:w-1/3 rounded-[50px] h-[332px] overflow-hidden">
        <a
          href={hrefs[2]}
          onClick={() => firstSliderImage.set("2")}
          title="Ver todas Las Imágenes"
        >
          <Image src={smallImages[2][0]} alt="Velbety" />
        </a>
      </article>
      <article className="w-1/2 md:w-1/3 lg:w-1/4">
        <div className="rounded-[50px] px-4 sm:px-8 py-10 sm:py-11 border border-gray-200 h-[332px] overflow-hidden relative">
          <h3 className="text-lg sm:text-2xl mb-5 font-bold">{title}</h3>
          <p>{description}</p>
          <a
            href={hrefs[0]}
            onClick={() => firstSliderImage.set("0")}
            title="Ver todas Las Imágenes"
            className="w-16 flex items-center justify-center h-16 rounded-full
           bg-gray-800 absolute right-5 bottom-5"
          >
            <Icon
              icon="material-symbols-light:arrow-outward-rounded"
              className="text-white"
              width={40}
              height={40}
            />
          </a>
        </div>
      </article>
    </div>
  );
}
