export default {
  name: 'videoGame',
  type: 'document',
  title: 'Video Game',
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
