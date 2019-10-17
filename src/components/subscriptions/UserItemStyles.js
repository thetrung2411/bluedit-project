export const UserItemStyles = theme => ({
    flex: {
        display: 'flex'
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#ccc',
    },
    container: {
        flex: 1,
        paddingLeft: 15,
    },
    name: {
       opcaity: 0.5,
       height: 14,
       lineHeight: '14px',
       marginBottom: 26
    },
    time: {
       fontSize: 10,
       height: 10,
       lineHeight: '10px',
       color: '#666'
    },
    subscribe: {
        marginLeft: 5,
        padding: 5,
        lineHeight: '50px',
        color: 'green'
    },
    unSubscribe: {
        marginLeft: 5,
        padding: 5,
        lineHeight: '50px',
        color: 'red'
    }
});
