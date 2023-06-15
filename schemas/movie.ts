export default {
  name: 'movie',
  type: 'document',
  title: 'Movie',
  fields: [
    {
      name: 'short_title',
      type: 'string',
      title: 'Short Title',
    },
    {
      name: 'library',
      type: 'reference',
      to: {type: 'library'},
      title: 'Library',
    },
    {
      name: 'full_title',
      type: 'string',
      title: 'Full Title',
    },
    {
      name: 'owned',
      type: 'boolean',
      title: 'Owned',
    },
  ],
}
