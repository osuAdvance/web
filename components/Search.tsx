function Search() {
    return (<>
        <button id="search_button" class="relative btn btn-block bg-base-300 flex flex-row items-center justify-center">
            <i class="fa-solid fa-magnifying-glass" />
            <span class="text-nowrap">Search</span>
        </button>
        <dialog id="search_modal" class="modal">
            <div class="modal-box bg-neutral">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg mb-4">Search</h3>
                <form id="search_form" class="flex flex-col gap-4">
                    <input type="text" name="q" id="search_input"
                        class="input input-bordered"
                        hx-post="/search"
                        hx-trigger="keyup changed delay:500ms"
                        hx-target="#search_results"
                        hx-sync="closest form:abort"
                        placeholder={"Search Someone..."}
                    />
                    <div id="search_results" class="flex flex-col gap-4" />
                </form>
            </div>
        </dialog>
    </>);
}

export default Search;
