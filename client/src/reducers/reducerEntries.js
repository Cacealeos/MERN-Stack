export default (Entries = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return Entries;
        default:
            return Entries;
    }
}