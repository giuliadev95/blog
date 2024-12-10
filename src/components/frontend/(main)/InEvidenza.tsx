import { client } from '@/sanity/lib/client';
import { THREE_POSTS_QUERY } from '@/sanity/lib/queries';
import { ThreePosts } from '@/components/ThreePosts';
import Link from 'next/link';

const options = { next: { revalidate: 60 } }

export default async function InEvidenza() {
  const posts = await client.fetch(THREE_POSTS_QUERY, {}, options)

  return (
    <div className="flex flex-col justify-center items-center pb-20 px-6 mx-auto max-w-[1200px] border-t-lightGrey border-t pt-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen mb-8" id="in-evidenza">
        In Evidenza
        </h2>
      <div className="flex flex-col gap-24 py-12 max-w-[1200px] mx-auto">
        {posts.map((post) => (
          <ThreePosts key={post._id} {...post} />
        ))}
      </div>
      <Link className="group" href={`/posts/`}>          
        <button className="block bg-lightMintGreen rounded-[20px] text-darkGrey text-base px-4 py-2">
          Visita il blog
        </button>
        </Link>
    </div>
  )
}