const initialState = {
    users: [
      { id: 1, firstName: 'Lara', lastName: 'Kroft' },
      { id: 2, firstName: 'Barry', lastName: 'White' },
      { id: 3, firstName: 'Nataly', lastName: 'Gomez' },
      { id: 4, firstName: 'Serena', lastName: 'Serenity' },
      { id: 5, firstName: 'Lord', lastName: 'OfSomething' },
      { id: 6, firstName: 'Off', lastName: 'Spring' }
    ],
    movies: [
      { id: 1, Title: 'Shark' },
      { id: 2, Title: 'Vampires' },
      { id: 3, Title: 'Valkirie' },
      { id: 4, Title: 'Wespa' }
    ],
    authError: null,
    movie: {}
  };
  export default initialState