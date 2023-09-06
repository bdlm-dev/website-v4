<script>
    import { navOpen } from './stores.js';
	import { page } from '$app/stores';
</script>

<div class="error text-center pt-10 h-screen grid place-items-center">
    <div>
        <h1 class="text-6xl">Error {$page.status}</h1>
        {#if $page.status == 404}
            <p>Page not found :(</p>
        {:else}
            <p>{$page.error.message}</p>
        {/if}
        <a tabindex={$navOpen ? -1 : 0} href="/"
        class="text-1xl inline-block mt-12 border-1 px-7 py-2 rounded-3xl border-stone-200 hover:bg-stone-200 text-stone-900  bg-stone-600  font-bold hover:scale-110 transition-all ease-in-out duration-75">Home</a>
    </div>
</div>

<!--
    w-fit mx-auto px-5 py-1 text-lg rounded-lg bg-stone-300 
    text-stone-900 hover:bg-green-500 active:bg-green-700 
    active:translate-y-[2px] hover:text-stone-300 transition-all ease-in-out duration-200

vs

    text-1xl inline-block mt-12 border-1 px-7 py-2 rounded-3xl
     border-stone-200 hover:bg-stone-200 text-stone-900 
      bg-stone-600  font-bold hover:scale-110 transition-all ease-in-out duration-75
-->