import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'

const options = { next: { revalidate: 60 } }

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options)

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1>Blog</h1>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  )
}