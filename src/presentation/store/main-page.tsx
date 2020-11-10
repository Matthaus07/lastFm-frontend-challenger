
export const initialState = { arr: [], isLoading: true, mainError: '' }

export const MainListReducer = (state, action) => {
  switch (action.type) {
    case 'ARTIST_LIST':
      return { ...state, arr: action.arr, isLoading: action.isLoading, mainError: action.mainError }
    case 'ALBUM_LIST':
      return { ...state, arr: action.arr,isLoading: action.isLoading, mainError: action.mainError }

    case 'UNEXPECTED_ACTION':
      return { ...state, mainError: action.error }
    default:
      return state
  }
}
