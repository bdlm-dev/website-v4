<script>
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    let loaded = false;

    const paragraphs = [
        {label: "UX Design", full: "I love talking about <strong>UI</strong> & <strong>UX</strong> design, getting that right <em>feel</em> to a product is <strong><em>critical</em></strong>."},
        {label: "Web Development", full: "Front-End Development! <em>(duh)</em> I built this website, and its predecessors, with a new technology each time. <strong>React</strong>, <strong>Gatsby</strong>, <strong>Astro</strong>, <strong>11ty</strong>, now <strong>SvelteKit</strong>. <em>(hosted with <strong>Netlify</strong>)</em>"},
        {label: "Game Development", full: "My brief but fruitful experience with game development includes making a game in <strong>Unity</strong> using <strong>C#</strong>, reverse-engineering a mod-loader for <strong>DREDGE</strong> with <strong>HarmonyX</strong>, and collaborating with friends on a further tool to manage and install such mods, using <strong>Tauri</strong>."},
        {label: "Rock Climbing", full: "CompSci starter pack essential, I love some good bouldering and the occasional lead climb for my annual dose of pure terror."}
    ];

    onMount(() => {
        loaded = true;
    });
</script>

<div class="w-screen flex flex-col pt-16 place-items-center">
    <h1 class="text-5xl text-center inline-block w-fit">Hey!</h1>
    <p class="text-xl sm:text-3xl text-center">I'm <span class="name-gradient">April</span>, a code wrangler from London</p>
    <p class="text-xl sm:text-3xl mb-10">but what's <span class="font-bold italic">my thing?</span></p>
    <span class="italic text-stone-600 mb-10 text-center mx-8">Wading through swathes of documentation to fix the most insignificant bug.</span>
    {#if loaded}
        {#each paragraphs as option, i}
        <div class="flex flex-row gap-2 sm:gap-8 mb-8 text-base sm:text-large pb-8" in:slide|global={{duration:300, delay:(300 * i), axis: 'y'}}>
            <span class=" w-0 sm:w-[100px] overflow-hidden font-bold text-center">{option.label}</span>
            <span class="w-0.5 bg-stone-500 block">&nbsp;</span>
            <span class="max-w-[400px] md:w-[500px] mr-4">{@html option.full}</span>
        </div>
        {/each}
    {/if}
    <hr class="w-[200px] box-content justify-self-center bg-stone-500 opacity-50 mb-6">
</div>