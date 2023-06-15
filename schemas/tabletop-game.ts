export default {
  name: 'tabletopGame',
  type: 'document',
  title: 'Tabletop Game',
  fields: [
    {
      name: 'short_name',
      type: 'string',
      title: 'Short Name',
    },
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
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
