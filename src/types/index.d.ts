export interface Technology {
  id: number
  name: string
  image: string
  description: string
  category: string
}

export type State = {
  technologies: Technology[]
  filteredTechnologies: Technology[]
  activeTechnology: Technology
}
