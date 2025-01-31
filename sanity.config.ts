import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {markdownSchema} from 'sanity-plugin-markdown'
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
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
