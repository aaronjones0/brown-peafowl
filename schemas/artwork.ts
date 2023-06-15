export default {
  name: 'artwork',
  type: 'document',
  title: 'Artwork',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'library',
      type: 'reference',
      to: {type: 'library'},
      title: 'Library',
    },
    {
      name: 'owned',
      type: 'boolean',
      title: 'Owned',
    },
  ],
}
