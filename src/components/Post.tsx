import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <h1 className="text-white font-semibold text-3xl text-pretty">{title}</h1>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
      <Link 
      href="/posts/"
      className="block bg-red rounded-[20px] text-white text-base px-4 py-2 lg:col-span-2 lg:col-start-6 text-center w-fit"
      >
        Back to blog
      </Link>
    </article>
  );
}
