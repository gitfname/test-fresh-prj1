import { useState, useCallback } from "preact/hooks"

function Button({title = "default title"}) {
    const [count, seetCount] = useState(0)
    const increment = useCallback( () => seetCount(c => c+1), [] )

    return (
        <button onclick={increment} class="py-3 px-5 rounded-3xl text-white mt-7 bg-blue-500 text-center capitalize border-none outline-none focus:outline-none active:scale-95 transition-transform duration-200">
            {title} : {count}
        </button>
    );
}

export default Button;