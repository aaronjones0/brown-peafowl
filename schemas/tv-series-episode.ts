export default {
  name: 'tvSeriesEpisode',
  type: 'document',
  title: 'TV Series Episode',
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
      name: 'number',
      type: 'number',
      title: 'Number',
    },
    {
      name: 'plot_summary',
      type: 'string',
      title: 'Plot Summary',
    },
    {
      name: 'notes',
      type: 'string',
      title: 'Notes',
    },
    {
      name: 'content_rating',
      type: 'string',
      title: 'Rating',
    },
    {
      name: 'owned',
      type: 'boolean',
      title: 'Owned',
      description: 'Whether or not you own this episode.',
    },
  ],
}
