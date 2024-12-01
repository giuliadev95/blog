import { Title } from '@/components/Title'

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>
        <div>Consigli pratici</div>
        <div className='ml-20'>e risorse per</div>
        <div>insegnare online</div>     
      </Title>
    </section>
  )
}