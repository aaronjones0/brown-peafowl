export default {
  name: 'figure',
  type: 'document',
  title: 'Figure',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
