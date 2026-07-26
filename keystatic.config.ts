import { config, fields, collection } from '@keystatic/core';

function createContentSchema(collectionName: 'writings' | 'works') {
  const contentDir = `src/content/${collectionName}`;

  return {
    title: fields.slug({ name: { label: 'Title' } }),
    publishDate: fields.date({ label: 'Publish Date' }),
    description: fields.text({
      label: 'Description',
      multiline: true,
    }),
    volume: fields.text({
      label: 'Volume',
      description: 'Optional volume label, e.g. "Volume IV"',
    }),
    draft: fields.checkbox({
      label: 'Draft',
      defaultValue: false,
    }),
    content: fields.markdoc({
      label: 'Content',
      extension: 'md',
      options: {
        image: {
          directory: contentDir,
          publicPath: `/src/content/${collectionName}/`,
        },
      },
    }),
  };
}

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    writings: collection({
      label: 'Writings',
      slugField: 'title',
      path: 'src/content/writings/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: createContentSchema('writings'),
    }),
    works: collection({
      label: 'Works',
      slugField: 'title',
      path: 'src/content/works/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: createContentSchema('works'),
    }),
  },
});
