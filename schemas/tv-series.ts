export default {
  name: 'tvSeries',
  type: 'document',
  title: 'TV Series',
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
      name: 'tag_line',
      type: 'string',
      title: 'Tag Line',
    },
    {
      name: 'owned',
      type: 'boolean',
      title: 'Owned',
      description: 'Whether or not you own this Series.',
    },
    {
      name: 'image_primary',
      type: 'image',
      title: 'Primary Image'
    }
  ],
}
