<script>
    import { navOpen } from '../stores.js'
    import { onMount } from 'svelte';

    var form;

    let sent = false;
    
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("contact-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                sent = true;
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "There was a problem submitting your message :("
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "There was a problem submitting your message :("
        });
    }

    onMount(() => {
        form = document.getElementById("contact-form");
        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        }
    });
</script>

<div class="w-screen grid place-items-center">
    {#if !sent}
    <form id="contact-form" action="https://formspree.io/f/mgejykav" method="POST"
    class="flex flex-col min-w-[300px] w-full sm:w-[600px] self-stretch border-transparent sm:border-stone-700  border-2 rounded-md px-4 sm:px-16 py-6 text-xl my-20  h-fit">
        <label class="flex flex-col text-center">
            <p>Email</p>
            <input tabindex={$navOpen ? -1 : 0} type="email" name="email" class="min-w-[250px] mx-auto bg-stone-700 text-base text-center rounded-sm" placeholder="example@gmail.com" required>
        </label>
        <label class="flex flex-col text-center">
            <p>Message</p>
            <textarea tabindex={$navOpen ? -1 : 0} name="message" class="bg-stone-700 min-h-[120px] sm:min-h-[100px] text-base px-2 py-1 rounded-sm" placeholder="hey april, i need help! i can't figure out how to center a div :(("required></textarea>
        </label>
        <button tabindex={$navOpen ? -1 : 0} class=" w-fit mx-auto px-5 py-1 text-lg rounded-lg bg-stone-300 text-stone-900 hover:bg-green-500 active:bg-green-700 active:translate-y-[2px] hover:text-stone-300 transition-all ease-in-out duration-200" type="submit">Submit</button>
        <span class="text-center text-lg text-red-700 font-bold mt-4" id="contact-form-status"></span>
    </form>
    {:else}
        <div class="h-screen grid place-items-center">
            <div class="text-xl text-center -mt-16">
                <p> Your message has been sent! </p>
                <p> I'll get back to you as soon as possible! </p>
                <button tabindex={$navOpen ? -1 : 0} class=" block my-4 w-fit mx-auto px-5 py-1 text-lg rounded-lg bg-stone-300 text-stone-900 hover:bg-green-500 active:bg-green-700 active:translate-y-[2px] hover:text-stone-300 transition-all ease-in-out duration-200" on:click={() => sent=false}>Send Another</button>
                <a tabindex={$navOpen ? -1 : 0} href="/" class="text-1xl inline-block mt-12 border-1 px-7 py-2 rounded-3xl border-stone-200 hover:bg-stone-200 text-stone-900  bg-stone-600  font-bold hover:scale-110 transition-all ease-in-out duration-75">Home</a>
            </div>
        </div>
    {/if}
</div>

<style>
    form label {
        gap: 8px;
    }
    form label + * {
        margin-top: 30px;
    }
    p, button {
        font-weight: bold;
    }

</style>