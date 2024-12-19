import { Categories } from '@/components/Categories'
import { THREE_POSTS_QUERYResult } from '@/sanity/types'
import { PublishedAt } from '@/components/PublishedAt'
import { urlFor } from '@/sanity/lib/image'
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from 'next/image';
import Link from 'next/link';

export function ThreePosts(props: THREE_POSTS_QUERYResult[0]) {
  const { title, //author,
          mainImage, publishedAt, categories, body
        } = props

  return (
    <div>
      <article>  
      <Link className="group" href={`/posts/${props.slug!.current}`}>            
            <div className="flex flex-col md:flex-row gap-8 lg:gap-4">
              {/** Image */}
              <div className="basis-[40%]">
                {mainImage ? (
                  <Image
                  src={urlFor(mainImage).url()}
                  width={300}
                  height={300}
                  alt={mainImage.alt || title || ''}
                  className="rounded-lg w-fill md:w-fit"
                  />
                ) : null}
              </div>
              <div className='basis-[40%]'>
                {/* Categories + PublishedAt */}
                <div className='flex items-center gap-4'>
                  <span>
                    <Categories categories={categories} />
                  </span>
                  <span>
                    <PublishedAt publishedAt={publishedAt} />
                  </span>
                </div>
                {/* Title + Body */}    
                {/* Title */}
                <h2 className="flex items-center justify-start md:block font-semibold text-white text-2xl mt-6">
                  <span className="relative z-[1]">{title}</span>
                </h2> 
                {/* Body */}
                {body ? (
                <div className="text-lightGrey font-light text-base md:text-lg mt-6 md:mt-8 flex justify-center w-300"> 
                  <PortableText value={body} components={components} />
              </div>
              ) : null}  
              </div>                   
            </div>
            <hr className='w-[20%] mx-auto mt-12 md:hidden'/>
          </Link>
        </article>
    </div>
  )
}