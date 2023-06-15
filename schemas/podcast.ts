export default {
  name: 'podcast',
  type: 'document',
  title: 'Podcast',
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
  ],
}
