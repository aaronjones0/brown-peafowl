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
  ],
}
