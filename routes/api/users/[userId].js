const handler = {
    GET(req, ctx) {
        const { params } = ctx

        return new Response(
            JSON.stringify({
                name: `get handler from api/users/[userId].js, the user id is ${params.userId}`
            }),
            {
                headers: {
                    "Content-Type": "application-json"
                }
            }
        )
    }
}

export { handler }