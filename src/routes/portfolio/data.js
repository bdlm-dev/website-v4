import { writable } from 'svelte/store';

export const selected = writable('this'); // auto-selected option

// TODO: Write content for 'blog-style detail' for each post, framework is already in place so would just need to design page, then write content and allow navigation to each.

export const posts = [
	{
		ref: 'this',
		title: 'Personal Website',
        languages: ['html', 'css', 'js', 'svelte', 'tailwind'],
        brief: 'This very website designed with Figma, and built with various web technologies.',
        img: {src: 'webpagelanding.webp', width: 650, height: 344}, // within /static/images
	},
    {
        ref: 'winch',
        title: 'Winch: A DREDGE Mod Loader',
        languages: ['csharp', 'git', 'rust', 'html', 'css', 'js', 'react'],
        brief: 
        'Mod-loader for the game <strong>DREDGE</strong> using <strong>HarmonyX</strong> (plus mods for the game), \
         and a standalone application built in <strong>React</strong> with <strong>Tauri</strong> to manage and install mods for you from a central database.',
        img: {src: 'dredgemodman.webp', width: 802, height:632},
        links: {
            github: 'https://gist.github.com/bdlm-dev/ab30fb4a9072aa7d278c52b97b1cb677'
        }
    }
];

