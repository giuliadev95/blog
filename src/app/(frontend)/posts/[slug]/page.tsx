// Posts listing page
import { getAllPosts, getPostBySlug } from '@/types/posts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return <p>Post not found</p>
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold leading-tight mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  )
}
