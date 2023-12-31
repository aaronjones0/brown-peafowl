export default {
  name: 'library',
  type: 'document',
  title: 'Library',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'owner',
      type: 'reference',
      to: {type: 'user'},
      title: 'Owner'
    }
  ],
}
