<script>
    import "../app.css";

    import { trapFocus } from '../actions.js';

    import { slide, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    import { navOpen } from './stores.js';
    import { navigating } from '$app/stores';
    import { beforeNavigate, goto } from '$app/navigation';

    // Thanks https://stackblitz.com/edit/delay-navigation-sveltekit?file=src%2Froutes%2Fpage.svelte for navigation transitions :))

    let onOutroEnd;
    let transitioningOut = false;

    beforeNavigate(async navigation => {

        if (!transitioningOut) {
            transitioningOut = true;

            navigation.cancel();

            onOutroEnd = async () => {
                await goto(navigation.to.url);

                transitioningOut = false;
            }
        }
    })

    const navOptions = [
        {name: "Home", href:"/"},
        {name: "About", href:"/about"},
        {name: "Portfolio", href:"/portfolio"},
        //{name: "Resources", href:"/resources"},
        {name: "Contact", href:"/contact"},
    ];

    // can't find good way to disable scroll while in nav
</script>


{#if !transitioningOut}
<div transition:fade on:outroend={onOutroEnd} use:trapFocus>
    <nav class="menu fixed h-[1px] w-[1px] z-[9]" >
        <input 
        type="checkbox" 
        class=" w-[1px] h-[1px] absolute -left-10" 
        id="menu" 
        bind:checked={$navOpen}
        on:keypress={(e) => {
            if (e.key === "Enter") { $navOpen = !$navOpen}
            }
        }
        aria-label="Navigation Menu Toggle" 
        tabindex=0/>

        <label class="hamburger w-[50px] h-[49px] ml-[25px] mt-[25px] absolute z-10" for="menu">
            <span />
            <span />
            <span />
        </label>
        
        {#if $navOpen}
            <div 
            in:slide={{duration: 400, easing: cubicOut, axis: 'x'}} 
            out:slide={{delay: 100, duration: 400, easing: cubicOut, axis: 'x'}} 
            class="h-screen w-screen bg-zinc-100 absolute z-5">
                <div 
                in:slide={{delay: 50, duration: 500, easing: cubicOut, axis: 'x'}}
                out:slide={{duration: 500, easing: cubicOut, axis: 'x'}} 
                class="bg-blue-500 h-screen w-screen overflow-hidden">
                    <div class="menu-interacts flex flex-col align-middle justify-center items-center text-4xl mg:text-5xl lg:text-6xl font-bold gap-2 md:gap-8 lg:gap-12 my-auto h-screen max-h-fit transition-[gap] ease-linear duration-200">
                        {#each navOptions as option}
                            <a 
                            href={option.href} 
                            on:click={() => navOpen.set(false)}
                            tabindex=0
                            >{option.name}</a>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    </nav>

    <main class={`w-screen min-h-screen`}>
        <slot />
    </main>

    <footer class="w-screen min-h-[70px] bg-stone-800 text-center text-stone-400 text-sm">
        <span class=" mt-4 inline-block ">Built with <span class="text-orange-600 font-bold">SvelteKit</span> and <span class="text-sky-500 font-bold">Tailwind</span>,</span>
        <span class="block">by <span class="name-gradient">April Miller</span></span>
    </footer>
</div>
{/if}

<style lang="postcss">
    .hamburger {
        cursor: pointer;
        border: 2px solid rgba(0,0,0,0);
        padding-left: 3px;
        padding-top: 6px;
    }
    .hamburger span {
        display: block;
        width: 40px;
        height: 5px;
        margin-bottom: 9px;
        
        position: relative;
        background: rgb(231 229 228);
        
        border-radius: 4px;
        border-color: rgb(28 25 23);
        
        z-index: 1;
        transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 200ms ease,
            background 0.4s cubic-bezier(0.77,0.2,0.05,1.0),
            box-shadow 200ms ease;
    }

    input:hover ~ .hamburger span {
        box-shadow: 0px 0px 5px rgb(231 229 228);
    }

    input:checked ~ .hamburger span:nth-last-child(1) {
        transform: rotate(-45deg) translate(10px, -10px);
    }

    input:checked ~ .hamburger span:nth-last-child(2) {
        transform: scaleX(0);
        opacity: 0.6;
    }
    input:checked ~ .hamburger span:nth-last-child(3) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    input:focus-visible ~ .hamburger {
        border: 2px solid rgba(255, 255, 255, 0.8);
        border-radius: 6px;
    }

    .menu-interacts a {
        background-image: linear-gradient(to right, rgb(28 25 23) 0% 50%, rgb(231 229 228) 50%);
        background-size: 250% 250%;
        background-position: 100%;
        transition: all 300ms ease;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .menu-interacts a:hover {
        background-position: 0%;
    }
</style>