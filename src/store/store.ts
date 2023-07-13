import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import type { State, Technology } from '@/types'
import { technologies } from '@/data/technologies'

const initialState: State = {
  technologies: technologies,
  filteredTechnologies: technologies,
  activeTechnology: {
    id: 0,
    name: '',
    image: '',
    description: '',
    category: '',
  },
}

export const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
    setActiveTechnology(state, action: PayloadAction<Technology>) {
      const technology = action.payload

      state.activeTechnology = technology
    },
    setSearch(state, action: PayloadAction<string>) {
      const searchValue = action.payload

      state.filteredTechnologies = state.technologies.filter(({ name }) =>
        name.toLowerCase().includes(searchValue.toLowerCase())
      )
    },
  },
})

const reducer = combineReducers({
  technologies: technologiesSlice.reducer,
})

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const filteredTechnologies = (state: RootState) =>
  state.technologies.filteredTechnologies
export const activeTechnology = (state: RootState) =>
  state.technologies.activeTechnology
export const { setSearch, setActiveTechnology } = technologiesSlice.actions
