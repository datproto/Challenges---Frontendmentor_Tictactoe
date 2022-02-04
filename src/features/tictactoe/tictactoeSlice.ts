import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'

export interface TictactoeState {
    move: {
        step: number[]
        player: 'x' | 'o'
    }[]
    winner: string
    winCount: {
        wins: number
        player: 'x' | 'o'
    }[]
}

const initialState: TictactoeState = {
    move: [
        {
            step: null,
            player: 'x'
        },
        {
            step: null,
            player: 'o'
        }
    ],
    winner: null,
    winCount: null
}

const titactoeSlice = createSlice({
    name: 'tictactoe',
    initialState,
    reducers: {
        addStep(state = initialState, action: PayloadAction<{step: number, player: 'x' | 'o'}>) {
            if (action.payload.player == 'x') {
                state.move[0] = {
                    ...state.move[0],
                    step: state.move[0].step == null
                        ? [action.payload.step]
                        : state.move[0].step.concat([action.payload.step])
                }
            } else {
                state.move[1] = {
                    ...state.move[1],
                    step: state.move[1].step == null
                        ? [action.payload.step]
                        : state.move[1].step.concat([action.payload.step])
                }
            }
        }
    }
})

export const selectMove = (state: AppState) => state.tictactoe.move
export const selectWinCount = (state: AppState) => state.tictactoe.winCount

// Export each reducers function defined in createSlice
export const { addStep } = titactoeSlice.actions

// Export default the slice reducer
export default titactoeSlice.reducer