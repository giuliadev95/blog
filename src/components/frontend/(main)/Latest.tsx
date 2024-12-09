import { client } from '@/sanity/lib/client'
import { THREE_POSTS_QUERY } from '@/sanity/lib/queries'
import { ThreePosts } from '@/components/ThreePosts'

const options = { next: { revalidate: 60 } }

export default async function Latest() {
  const posts = await client.fetch(THREE_POSTS_QUERY, {}, options)

  return (
    <div className="flex flex-col justify-center items-center py-4 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen mb-8" id="in-evidenza">
        In Evidenza
        </h2>
      <div className="flex flex-col gap-24 py-12 max-w-[1500px] mx-auto">
        {posts.map((post) => (
          <ThreePosts key={post._id} {...post} />
        ))}
      </div>
    </div>
  )
}