export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
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
          to: [{type: 'book'}, {type: 'tvSeries'}, {type: 'tvSeriesEpisode'}],
        },
      ],
    },
  ],
}
