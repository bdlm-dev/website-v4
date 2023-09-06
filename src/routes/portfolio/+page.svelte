<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { selected } from './data.js'
    import { navOpen } from '../stores.js'

    import { lang_dict } from '../../components/icons.js';
    
    export let data;
</script>

<h1 class="text-center pt-16 text-4xl font-bold">Portfolio</h1>
<p class="text-center text-stone-400">A collection of my work and details of each.</p>

<hr class="w-[300px] mx-auto mt-4 mb-8">

<ul class="justify-center">
    <!-- Iterate through posts in loaded data, generate post from each. -->
    {#each data.summaries as { ref, title, languages, brief, img, links }}
		<li class="mx-auto min-w-[320px] max-w-[600px] mb-4 pl-4 pr-6" for={`id-${ref}`} in:slide|global={{duration: 1000}}>
            <label class="flex flex-col w-full bg-stone-700 hover:bg-stone-600 rounded-lg items-center cursor-pointer transition-all ease-linear duration-200 px-2 py-1" for={`id-${ref}`}>
                <div class="case-nav w-full flex flex-row items-center h-[50px]">
                    <input type="radio" id={`id-${ref}`} name="select" class="opacity-0 w-1 peer cursor-pointer" checked={$selected === ref} on:change={() => {selected.set(ref)}}>
                    <span class="font-bold text-xl ml-2">{title}</span>
                    <div class="link-container ml-auto">
                        {#if links}
                            <a href={links.github} class="w-7 grid place-items-center fill-stone-500 hover:fill-stone-200" target=_blank>
                                <svelte:component this={lang_dict["github"]} />
                            </a>
                        {/if}
                    </div>
                    <div class="w-12 h-full grid place-items-center border-stone-300 border-r-[12px] border-b-[12px] -rotate-45 peer-checked:rotate-45 scale-[30%] transition-transform ease-linear duration-75"></div>
                </div>
                
                <!-- If is the selected option (from radio buttons), display further information -->
                {#if $selected === ref}
                    <hr class={`max-w-[500px] w-[80%] my-2 ${ $selected === ref ? 'visible' : 'hidden'}`} transition:slide>
                    <div class="block w-full overflow-hidden mb-6 box-border mt-2" transition:slide>
                        <div class="flex flex-row mx-4 gap-4 p-1 flex-wrap justify-stretch">
                            {#each languages as language}
                                <div class="w-8 h-8 grid place-items-center "><svelte:component this={lang_dict[language]}/></div>
                            {/each}
                        </div>
                        {#if img}
                            <img src={`/images/${img.src}`} width={img.width} height={img.height} alt={`Picture of ${title}`} class="px-2 sm:px-8 pt-4"/>
                        {/if}
                        <p class="mx-3 mt-4">{@html brief || "<p class='text-center w-full font-bold text-xl text-red-700'>Looks like this area is still W.I.P...</p>"}</p>
                    </div>
                {/if}
            </label>
        </li>
	{/each}
</ul>

<style>
</style>