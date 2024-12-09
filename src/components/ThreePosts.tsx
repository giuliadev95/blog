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
    <div>
      <article className="flex flex-col items-center justify-center">
          {/* Author, Date */}
          <div className='flex flex-col justify-between'>
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
          <Link className="group" href={`/posts/${props.slug!.current}`}>
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
            <h2 className="flex justify-center font-semibold text-white text-2xl mt-2 md:mt-6">
              <span className="relative z-[1]">{title}</span>
            </h2> 
            {/* Body */}
            {body ? (
            <div className="text-lightGrey font-light text-base md:text-lg mt-8"> 
              <PortableText value={body} components={components} />
            </div>
          ) : null}    
        </Link>
      </article>
        <div className="flex justify-center mt-2">
          <Categories categories={categories} />
        </div>
    </div>
  )
}