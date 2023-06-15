export default {
  name: 'exhibit',
  type: 'document',
  title: 'Exhibit',
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
  ],
}
