export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'short_title',
      type: 'string',
      title: 'Short Title',
    },
    {
      name: 'full_title',
      type: 'string',
      title: 'Full Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'volume',
      type: 'number',
      title: 'Volume',
    },
    {
      name: 'edition',
      type: 'string',
      title: 'Edition',
    },
    {
      name: 'isbn',
      type: 'string',
      title: 'ISBN',
    },
    {
      name: 'publisher',
      type: 'string',
      title: 'Publisher',
    },
    {
      name: 'notes',
      type: 'string',
      title: 'Notes',
    },
    {
      name: 'authors',
      type: 'array',
      title: 'Authors',
      of: [
        {
          type: 'reference',
          to: {type: 'artist'},
        },
      ],
    },
    {
      name: 'cover_image',
      type: 'image',
      title: 'Cover'
    }
  ],
}
