import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

// Style images, h1, h2, p for every Post.
export const components: PortableTextComponents = { 
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
  },

  // block: {
  //   h1: ({ children }) => <h1 className="text-3xl font-bold text-lightMintGreen">{children}</h1>,
  //   h2: ({ children }) => <h2 className="text-2xl font-semibold text-lightMintGreen">{children}</h2>,
  //   h3: ({ children }) => <h3 className="text-xl font-medium text-lightMintGreen">{children}</h3>,
  //   h4: ({ children }) => <h4 className="text-lg font-medium text-lightMintGreen">{children}</h4>,
  //   normal: ({ children }) => <p className="text-zinc-400">{children}</p>,
  //   blockquote: ({ children }) => (
  //     <blockquote className="border-l-4 border-lightMintGreen pl-4 italic text-zinc-400">
  //       {children}
  //     </blockquote>
  //   ),
  // },

  block: {
    h1: ({children}) => <h1 className="text-xl font-bold text-lightMintGreen">{children}</h1>,
    h2: ({children}) => <h2 className=" text-3xl font-semibold text-lightMintGreen">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl lg:text-lg font-semibold text-lightMintGreen">{children}</h3>,
    normal: ({children}) => <p className="text-zinc-400">{children}</p>
  },

    // Links' styling - only if needed
    // marks: {
    //   link: ({ children, value }) => (
    //     <a
    //       href={value.href}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-blue-500 hover:underline"
    //     >
    //       {children}
    //     </a>
    //   ),
    // },

};