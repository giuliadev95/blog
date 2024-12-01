import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { Post } from '@/components/Post';
import { notFound } from 'next/navigation';

// Definizione del tipo PostIndexProps aggiornato
type PostIndexProps = { params: Promise<{ slug: string }> };

// Configurazione per la revalidazione
export const revalidate = 60;

export default async function Page({ params }: PostIndexProps) {
  // Risolvi la Promise per ottenere il valore di slug
  const { slug } = await params;

  // Recupera il post con il client di Sanity
  const post = await client.fetch(POST_QUERY, { slug });

  // Mostra un errore 404 se il post non esiste
  if (!post) {
    notFound();
  }

  // Renderizza il contenuto del post
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
 