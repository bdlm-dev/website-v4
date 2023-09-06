<script>
    import { navOpen } from './stores.js';
    import Tooltip from '../components/Tooltip.svelte';

    const handleNamePress = (e) => {
        if (e.key == "Tab") return;
        window.location.assign("/about");
    }

    const navOptions = [
        //{name: "resources", href:"/resources"}, todo later, prio is deploy
        {name: "portfolio", href:"/portfolio"},
        {name: "contact", href:"/contact"}
    ];

    // landing page :)
</script>

<div>
    <div class="container h-screen w-screen text-center grid place-items-center overflow-x-hidden mx-auto">
        <div>
            <h1 class="h-min text-6xl lg:text-8xl ">itisapril<span class="text-neutral-500">.dev</span></h1>
            <a class="mx-auto mt-8 w-fit block z-5 fill-neutral-500 hover:fill-neutral-200" href="#tag" tabindex={$navOpen ? -1 : 0}>
                <svg class="cursor-pointer pointer-events-auto  animate-bounce " xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 29">
                    <path d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 28.0607C11.5251 28.6464 12.4749 28.6464 13.0607 28.0607L22.6066 18.5147C23.1924 17.9289 23.1924 16.9792 22.6066 16.3934C22.0208 15.8076 21.0711 15.8076 20.4853 16.3934L12 24.8787L3.51472 16.3934C2.92893 15.8076 1.97918 15.8076 1.3934 16.3934C0.807611 16.9792 0.807611 17.9289 1.3934 18.5147L10.9393 28.0607ZM10.5 2L10.5 27L13.5 27L13.5 2L10.5 2Z"/>
                </svg>
            </a>
        </div>
    </div>
    <div class="h-[500px] w-screen text-center grid grid-rows-2 mb-40">
        <div class="flex flex-col justify-center items-center text-2xl lg:text-4xl" id="tag">
            <span>a <Tooltip tooltip="Computer Science @ Brunel University">student</Tooltip> interested in anything tech,</span>
            <span>finding delight in solving new problems</span>
        </div>
        <div class="flex flex-col justify-center items-center ">
            <span class=" text-2xl lg:text-4xl -mb-6">i'm</span>
            <a 
            class="name-large font-bold text-8xl cursor-pointer " 
            href="/about"
            tabindex={$navOpen ? -1 : 0}>april</a> 
            <span class="inline-block text-stone-600 font-bold ml-20 opacity-30"> click me :)</span>
        </div>
    </div>
    <div class=" w-screen grid grid-cols-1 lg:grid-cols-2 place-items-center mb-8">
        {#each navOptions as option}
            <div class="resource-option h-[100px] md:h-[150px] lg:h-[300px] pointer-events-auto font-bold text-center grid grid-rows-1 place-items-center ">
                <a
                class={`text-neutral-300 text-5xl hover:text-6xl md:text-7xl md:hover:text-8xl transition-all ease-in-out duration-100`}
                href={option.href}
                tabindex={$navOpen ? -1 : 0}>{option.name}</a>
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .name-large {
        text-shadow: 5px 5px 0px #67C8E7, 10px 10px 0px #F999E4;
        transition: text-shadow 200ms ease,
                    transform 100ms ease;
    }

    .name-large:hover {
        text-shadow: none;
        transform: translateY(5px);
        color: #f999e4;
    }

    span, h1 {
        pointer-events: all;
    }

    .resource-option:nth-last-child(1):nth-child(odd) {
        grid-column: span 2 / span 2;
    }

    .resource-option:nth-child(1) a:hover {
        color: #F999E4
    }

    .resource-option:nth-child(2) a:hover {
        color: #67C8E7
    }
    
    .resource-option:nth-child(3) a:hover {
        color: #90E767
    }
</style>