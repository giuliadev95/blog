// Page displaying a list of blog posts as cards

import Link from 'next/link';
import { getAllPosts } from '@/types/posts';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col justify-center items-center py-20 px-6 max-w-[1500px] mx-auto">
      <main className="w-full">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-lightMintGreen mb-10">
          Blog
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="group bg-[#0B0C10] border border-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">{p.date}</p>
                  <p className="text-gray-300 line-clamp-3">
                    {p.excerpt || 'Come preparare il primo incontro con il tuo studente per essere professionale e affidabile.'}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/posts/${p.slug}`}
                    className="inline-block bg-lightMintGreen text-black font-medium rounded-xl px-5 py-2 transition-all hover:bg-white hover:text-black"
                  >
                    Leggi
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
