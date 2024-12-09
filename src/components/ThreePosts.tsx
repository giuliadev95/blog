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
      <article>          
          <Link className="flex flex-col md:flex-row" href={`/posts/${props.slug!.current}`}>
            {/* 1° child Image */}
          <div className="basis-[40%]">
            {mainImage ? (
            <Image
              src={urlFor(mainImage).url()}
              width={500}
              height={500}
              alt={mainImage.alt || title || ''}
              className="rounded-lg"
            />
            ) : null}
          </div>

          {/* 2° child: AUTHOR + DATE, TITLE, BODY */}
          <div className='basis-[60%] items-start justify-start'>

            {/* Author + Date in a div container displayed as flex-row */} 
            <div className='flex flex-row items-center justify-center md:justify-start gap-4 md:gap-8 mt-6'>
              <Author author={author} />
              <p className='block text-lightGrey'>|</p>
              <PublishedAt publishedAt={publishedAt} />
            </div>  
          
            {/* Title + Body */}    
            {/* Title */}
            <h2 className="flex items-center justify-center md:block font-semibold text-white text-2xl mt-6">
              <span className="relative z-[1]">{title}</span>
            </h2> 
              {/* Body */}
              {body ? (
              <div className="text-lightGrey font-light text-base md:text-lg mt-8"> 
                <PortableText value={body} components={components} />
              </div>
              ) : null}  
          </div>         
          </Link>
          <hr className='w-[20%] mx-auto mt-12 md:hidden'></hr>
        </article>

        {/** COMMENT OUT THE CATEGORY COMPONENT, AS IT'S NOT INTERACTIVE YET.
          <div className="flex justify-center mt-2">
            <Categories categories={categories} />
          </div>
        */}
    </div>
  )
}