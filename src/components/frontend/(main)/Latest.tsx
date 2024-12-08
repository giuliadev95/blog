import { client } from '@/sanity/lib/client'
import { THREE_POSTS_QUERY } from '@/sanity/lib/queries'
import { ThreePosts } from '@/components/ThreePosts'

const options = { next: { revalidate: 60 } }

export default async function Latest() {
  const posts = await client.fetch(THREE_POSTS_QUERY, {}, options)

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen" id="in-evidenza">
        In Evidenza
        </h2>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <ThreePosts key={post._id} {...post} />
        ))}
      </div>
    </main>
  )
}