export default {
  name: 'podcastEpisode',
  type: 'document',
  title: 'Podcast Episode',
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
      name: 'podcast',
      type: 'reference',
      to: {type: 'podcast'},
      title: 'Podcast',
    },
  ],
}
