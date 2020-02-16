const initialState = {
  users:[
      {id: 1, firstName: "Lara", lastName:"Kroft"},
      {id: 2, firstName: "Barry", lastName:"White"},
      {id: 3, firstName: "Nataly", lastName:"Gomez"},
      {id: 4, firstName: "Serena", lastName:"Serenity"},
      {id: 5, firstName: "Lord", lastName:"OfSomething"},
      {id: 6, firstName: "Off", lastName:"Spring"},
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userCount: state.userCount + 1
      };
    default:
      return state;
  }
};
export default reducer
