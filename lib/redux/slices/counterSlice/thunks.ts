/* Instruments */
import { selectCount } from './selectors'
import { counterSlice } from './counterSlice'
import type { ReduxThunkAction } from '@/lib/redux'


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 1) {
      dispatch(counterSlice.actions.incrementByAmount(amount))
    }
  }
