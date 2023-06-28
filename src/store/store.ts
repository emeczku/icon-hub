import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import type { State } from '@/types'
import { technologies } from '@/data/technologies'

const initialState: State = {
  technologies: technologies,
  filteredTechnologies: technologies,
}

export const technologiesSlice = createSlice({
  name: 'technologies',
  initialState,
  reducers: {
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
export const { setSearch } = technologiesSlice.actions
