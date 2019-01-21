import { combineReducers } from 'redux';

function todos() {
  return [
    { list: 1 },
  ];
}

const module = combineReducers({
  todos,
});

export default module;
