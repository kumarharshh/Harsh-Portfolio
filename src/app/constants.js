import HomeGrid from "./components/HomeGrid"
import ProjectsGrid from "./components/ProjectsGrid"
import WorkGrid from './components/WorkGrid'
import EducationsGrid from './components/EducationsGrid'

export const GRIDS = [
  { label: "home", Component: HomeGrid },
  { label: "projects", Component: ProjectsGrid },
  { label: "work", Component: WorkGrid },
  { label: "education", Component: EducationsGrid },
]
