import React from 'react'
import { connect } from 'react-redux'
import styles from './Tictactoe.module.css'

import { useAppSelector, useAppDispatch } from '../../app/hooks'

export const Tictactoe = (props) => {
  const dispatch = useAppDispatch()
  const count = useAppSelector()

  return <div></div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Tictactoe)
