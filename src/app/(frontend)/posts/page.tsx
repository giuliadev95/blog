import Link from 'next/link'
import { getAllPosts } from '@/types/posts'

export default function PostsPage() {
  const posts = getAllPosts()
  return (
    <main>
      <h1 className="text-3xl font-extrabold mb-6">Posts</h1>
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p.slug}>
            <Link 
                href={`/posts/${p.slug}`}
                className="text-lg font-semibold text-sky-600 hover:underline"
                >
                    {p.title}
            </Link>
            <div className="text-sm text-gray-500">{p.date}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}