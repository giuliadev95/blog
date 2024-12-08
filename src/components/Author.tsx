//import { POST_QUERYResult } from '@/sanity/types'
/*
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
*/
/*
type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author']
}

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">

      
      {author?.name ? (
        <p className="text-sm text-lightGrey">{author.name}</p>
      ) : null}
    </div>
  ) : null
} */

import { POST_QUERYResult } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link';

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>['author']
}

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-start gap-2">

      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ''}
          className="bg-pink-50 size-10 shadow-inner rounded-full"
        />
      ) : null}

      <div>
        <span className='flex gap-4 mt-2 content-center items-center'>
          {author?.name ? (
            <p className="text-sm text-white">{author.name}</p>
          ) : null}
              <Link
                href="https://www.instagram.com/giulia_moukouyou/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram className=' text-red font-light' />
              </Link>

              <Link
                href="https://www.linkedin.com/in/giuliamoukouyou"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedinIn className=' text-red font-light' />
              </Link>
        </span>
    </div>
    </div>
  ) : null
}