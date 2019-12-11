const Index = ({ username }) => {
    return (
    <h1>{username}</h1>
    )
}

Index.getInitialProps = async ({ query }) => {
    return {
        username: query.username
    }
}

export default Index