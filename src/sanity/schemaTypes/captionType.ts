import {AddCommentIcon} from '@sanity/icons';
import {defineField, defineType} from 'sanity';

export const captionType = defineType({
  name: 'caption',
  title: 'Caaption',
  type: 'document',
  icon: AddCommentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
