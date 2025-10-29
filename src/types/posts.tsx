// ...existing code...
export type Post = { slug: string; title: string; date: string; html: string }

export const posts: Post[] = [
  { 
    slug: 'hello-world', 
    title: 'Hello World', 
    date: '2025-10-29', 
    html: `
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu condimentum metus. Sed euismod mattis tempor. Suspendisse euismod et quam non bibendum. Nulla finibus eu eros et pellentesque. Suspendisse potenti. Proin sed libero sed leo tristique rhoncus nec quis nisl. In eget tortor sodales, viverra risus non, placerat tellus. Sed nec orci eu eros pulvinar volutpat at in augue.

Duis ac ligula id purus auctor dignissim. Integer consectetur iaculis volutpat. Donec nisi dui, pulvinar in magna ac, malesuada eleifend sapien. Donec sollicitudin luctus magna non venenatis. Pellentesque gravida orci in imperdiet gravida. Nunc sagittis lorem vitae aliquam imperdiet. Proin ac nisi congue libero hendrerit suscipit. Aenean faucibus nibh nec dui consequat, ac feugiat sem ornare.

Duis sollicitudin quam sagittis, finibus quam sit amet, vehicula mauris. Etiam in interdum velit. Mauris congue massa sit amet felis interdum, id placerat nulla semper. Aenean ut risus nisi. Etiam interdum nibh interdum enim tristique mollis. Nam dignissim congue magna nec dapibus. Nunc sapien nisi, egestas id egestas et, sodales ut ex. Donec ac lectus dictum, condimentum nisi vel, fringilla mauris. Aliquam leo ligula, tincidunt eget vestibulum in, convallis vitae felis.

Phasellus eu lectus auctor, pharetra magna nec, aliquet nisl. Aliquam volutpat est quis lacus laoreet placerat. Cras lobortis accumsan scelerisque. Etiam nunc nibh, hendrerit eu egestas vel, tincidunt eget ligula. Nunc placerat tellus quis nibh consectetur viverra. Nulla dignissim nec elit ac imperdiet. Nulla ac dictum nulla. Cras accumsan velit cursus, facilisis nibh ac, condimentum tellus. Nam vel arcu quam. Aenean sodales tortor in urna fringilla, at tristique erat vehicula. Nulla a velit mi. Nunc quis urna a libero posuere consequat in ac nunc. Phasellus magna erat, faucibus non libero eget, tempor congue odio. Nullam nec semper neque. Nam porttitor mi iaculis eros pulvinar pretium.

In imperdiet dolor eu rhoncus mattis. Nam sed magna id purus consequat volutpat. Phasellus luctus egestas purus, quis tempor dui aliquet vel. Aliquam elementum enim ut eleifend mollis. Fusce in fringilla lacus. Pellentesque ac semper neque. Duis eget velit tortor. Fusce faucibus tincidunt ex sit amet vehicula. Mauris euismod orci eget turpis vehicula tempus non nec turpis. Duis non leo tortor.
        </p>
    `},
]

export function getAllPosts() { return posts }
export function getPostBySlug(slug: string) { return posts.find(p => p.slug === slug) ?? null }
// ...existing code...