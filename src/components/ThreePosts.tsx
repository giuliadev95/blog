import { Author } from '@/components/Author';
import { Categories } from '@/components/Categories'
import { THREE_POSTS_QUERYResult } from '@/sanity/types'
import { PublishedAt } from '@/components/PublishedAt'
import { urlFor } from '@/sanity/lib/image'
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from 'next/image'
import Link from 'next/link'

export function ThreePosts(props: THREE_POSTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories, body} = props

  return (
    <Link className="group" href={`/posts/${props.slug!.current}`}>
      <article className="flex flex-col items-center justify-center">
          {/* Author, Date */}
          <div className='flex flex-col justify-between gap-4'>
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
          {/* Image */}
          {mainImage ? (
            <Image
              src={urlFor(mainImage).url()}
              width={300}
              height={300}
              alt={mainImage.alt || title || ''}
            />
          ) : null}
          {/* Title */}
          <h2 className="text-2xl text-pretty font-semibold text-white group-hover:text-lightMintGreen transition-colors duration-500 ease-in-out relative">
            <span className="relative z-[1]">{title}</span>
          </h2>
          {/* Body */}
           {body ? (
        <div className="text-lightGrey"> 
          <PortableText value={body} components={components} />
        </div>
      ) : null}
       
      </article>
        <div className="">
          <Categories categories={categories} />
        </div>
    </Link>
  )
}