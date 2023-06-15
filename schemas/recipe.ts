export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
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
  ],
}
