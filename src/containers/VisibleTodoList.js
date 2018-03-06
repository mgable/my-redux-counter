import { connect } from 'react-redux'
import { incrementCounter, deIncrementCounter } from '../actions'
import Counter from '../components/Counter.js'

const getVisibleTodos = (state) => {
  return state.counter;
}

const getWord = (state) => {
  return state.answers;
}

const mapStateToProps = state => {
  console.info("the state");
  console.info(state);
  return {
    count: getVisibleTodos(state),
    word: getWord(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCounterInc: () => {
      dispatch(incrementCounter())
    },
    onCounterDeInc: () => {
      dispatch(deIncrementCounter())
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default VisibleTodoList