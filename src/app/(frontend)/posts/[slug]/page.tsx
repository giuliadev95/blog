// Posts listing page
import { getAllPosts, getPostBySlug } from '@/types/posts';
import Link from 'next/link';

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return <p>Post non trovato</p>
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold text-lightMintGreen">{post.title}</h1>
      <p className="text-sm text-gray-500 font-bold mt-6 mb-6">{post.date}</p>
      <article
        className="prose prose-lg dark:prose-invert max-w-none text-zinc-400"
        
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Link 
      href="/posts/"
      className="block bg-red rounded-[20px] text-white text-base px-4 py-2 mt-4 lg:col-span-2 lg:col-start-6 text-center w-fit"
      >
        Indietro
      </Link>
    </main>
  )
}
