export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  description: 'Anyone who participated in the creation of something in your library.',
  fields: [
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
    },
    {
      name: 'major_update',
      type: 'string',
      title: 'Major Update',
    },
    {
      name: 'library',
      type: 'reference',
      to: {type: 'library'},
      title: 'Library',
    },
    {
      name: 'photos',
      type: 'array',
      title: 'Photos',
      of: [{type: 'image'}],
    },
    {
      name: 'works',
      type: 'array',
      title: 'Works',
      of: [
        {
          type: 'reference',
          to: [{type: 'book'}, {type: 'tvSeries'}, {type: 'tvSeriesEpisode'}, {type: 'manga'}],
        },
      ],
    },
  ],
}
