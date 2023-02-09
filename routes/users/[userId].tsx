import Button from "../../islands/Button.tsx"

const NAMES = [
    "ali", "mamad", "ahmad", "hassan", "reza", "oop", "JavaScript", "Python", "Car", "Alice"
] 

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve(true)
    }, ms))
}

export const handler = {
    async GET(req, ctx) {
        const url = new URL(req.url)
        const query = url.searchParams.get("q") || ""
        const matchall = url.searchParams.get("matchall")==="on"?true:false
        let suggestions : String[] = []
        if(matchall) {
            suggestions = NAMES.filter(name => name.toLowerCase().startsWith(query.toLowerCase()))
        }
        else {
            suggestions = NAMES.filter(name => name.startsWith(query))
        }
        return ctx.render({suggestions, query, matchall})
    }
}


function UserPage(props) {
    const { userId } = props.params

    const { suggestions, query, matchall } = props.data

    return (
        <main class="bg-gray-300 w-screnn h-screen p-10 flex flex-col items-center justify-center gapy-y-10">
            <form class="flex flex-col gap-y-4 items-center">
                <input type="text" value={query} name="q" placeholder="enter name" class="w-72 py-2 px-3 rounded-lg outline-none focus:outline-none border border-gray-400 ring ring-transparent focus:ring-blue-400" />
                <div class="flex items-center justify-center w-full gap-x-4">
                    <div class="flex gap-x-2 items-center">
                        <input class="w-5 h-5" id="matchall" type="checkbox" name="matchall" checked={matchall} />
                        <label for="matchall" class="text-lg text-gray-700 cursor-pointer select-none">match all</label>
                    </div>
                </div>
                <button type="submit" class="w-max py-3 px-5 rounded-xl text-lg text-white bg-blue-500 borde-none outline-none focus:outline-none active:scale-95 transition:transform duration-200">Search</button>
            </form>

            <div class="mt-20 w-96 h-72 border border-gray-400 rounded-lg p-4 overflow-y-auto flex flex-col gap-y-3">
                {
                    suggestions.map(suggestion => (
                        <p class="text-lg text-blakc font-bold">{suggestion}</p>
                    ))
                }
            </div>

            <Button title="hello world" />
        </main>
    );
}

export default UserPage;