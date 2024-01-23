import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import skill from './schemas/skill'
import experience from  './schemas/experience'
import social from './schemas/social'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, experience, social, project],
}
