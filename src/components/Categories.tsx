import { POST_QUERYResult } from '@/sanity/types'

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>['categories']
}

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <p
      key={category._id}
     className="text-red text-xs md:text-sm"
    >
      {`# `}
      {category.title}
   
    </p>
  ))
}