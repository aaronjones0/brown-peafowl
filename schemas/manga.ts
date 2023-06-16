export default {
  name: 'manga',
  type: 'document',
  title: 'Manga',
  fields: [
    {
      name: 'title_english',
      type: 'string',
      title: 'Title (English)',
    },
    {
      name: 'title_japanese',
      type: 'string',
      title: 'Title (Japanese)',
    },
    {
      name: 'library',
      type: 'reference',
      to: {type: 'library'},
      title: 'Libary',
    },
    {
      name: 'owned',
      type: 'boolean',
      title: 'Owned',
    },
    {
      name: 'front_cover_english',
      type: 'image',
      title: 'Front Cover (English)',
    },
    {
      name: 'front_cover_japanese',
      type: 'image',
      title: 'Front Cover (Japanese)',
    },
    {
      name: 'back_cover_english',
      type: 'image',
      title: 'Back Cover (English)',
    },
    {
      name: 'back_cover_japanese',
      type: 'image',
      title: 'Back Cover (Japanese)',
    },
    {
      name: 'mangaka',
      type: 'reference',
      to: {type: 'artist'},
      title: 'Mangaka',
    },
    {
      name: 'author',
      type: 'reference',
      to: {type: 'artist'},
      title: 'Author',
    },
    {
      name: 'publisher',
      type: 'reference',
      to: {type: 'publisher'},
      title: 'Publisher',
    },
    {
      name: 'volume',
      type: 'number',
      title: 'Volume',
    },
    {
      name: 'total_volumes',
      type: 'number',
      title: 'Total Volumes',
    },
    {
      name: 'is_omnibus',
      type: 'boolean',
      title: 'Omnibus',
    },
    {
      name: 'have_read',
      type: 'boolean',
      title: 'Have Read',
    },
  ],
}
