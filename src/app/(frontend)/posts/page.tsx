import Link from 'next/link'
import { getAllPosts } from '@/types/posts'

export default function PostsPage() {
  const posts = getAllPosts()
  return (
    <div className="flex flex-col justify-center items-center py-20 px-6 max-w-[1500px] mx-auto">
      <main className="">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-lightMintGreen">
          Blog
        </h1>
        <ul className="space-y-3">
          {posts.map(p => (      
            <li key={p.slug}>
              <Link 
                href={`/posts/${p.slug}`}
                className="text-3xl text-pretty font-semibold transition-colors relative text-white"
                >
                <h2 className="">
                  {p.title}
                </h2>
              </Link>
              <div className="text-sm text-gray-500">{p.date}</div>
              <Link 
              href={`/posts/${p.slug}`}
              className="block bg-red rounded-[20px] text-white text-base px-4 py-2 mt-4 lg:col-span-2 lg:col-start-6 text-center w-fit"
              >
                Leggi
              </Link>
            </li>         
          ))}
        </ul>
      </main>
    </div>
  )
}