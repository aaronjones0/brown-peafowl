export default {
  name: 'album',
  type: 'document',
  title: 'Album',
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
  ]
}