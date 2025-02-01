import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {markdownSchema} from 'sanity-plugin-markdown'
import { embeddingsIndexDashboard, embeddingsIndexReferenceInput } from '@sanity/embeddings-index-ui'
export default defineConfig({
  name: 'default',
  title: 'hackathon',

  projectId: 'jpt8guat',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure
    }),
    markdownSchema(),
    visionTool(),
    embeddingsIndexDashboard(),
    embeddingsIndexReferenceInput({
      indexName: 'hackathon-index',
      maxResults: 10,
      searchMode: 'embeddings',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
