type SpotlightRepo = {
	owner: string;
	name: string;
	title: string;
	blurb: string;
	language: string;
};

export const SPOTLIGHT: readonly SpotlightRepo[] = [
	{
		owner: "rafaelgaspar",
		name: "unifi-thread-route-updater",
		title: "Thread routes on UniFi",
		blurb: "A Go daemon that watches mDNS for Matter devices and Thread border routers, then keeps UniFi routing in sync with what is actually on the LAN.",
		language: "Go",
	},
	{
		owner: "rafaelgaspar",
		name: "homebridge-philipstv-hue-2020",
		title: "Philips TV in HomeKit",
		blurb: "Homebridge plugin for Philips TVs — power, volume, Ambilight, and inputs. Forked for Saphi sets that only expose Ambilight on/off.",
		language: "JavaScript",
	},
	{
		owner: "rafaelgaspar",
		name: "longhorn-mcp",
		title: "Longhorn for agents",
		blurb: "MCP server over the Longhorn API — volumes, snapshots, backups, nodes — so agents can operate cluster storage without kubectl folklore.",
		language: "TypeScript",
	},
	{
		owner: "rafaelgaspar",
		name: "cursor-memory-manager",
		title: "Memory across chats",
		blurb: "A portable Cursor skill and session hook that persist the facts you want every conversation to start with, instead of re-teaching the same context.",
		language: "Shell",
	},
] as const;

export function pageHtml(): string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Rafael Antunes</title>
	<meta name="description" content="Infrastructure engineer in Berlin. Kubernetes, GitOps, and the tools I actually run.">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
	<style>${css()}</style>
</head>
<body>
	<div class="frame">
		<header class="masthead">
			<p class="place">Berlin</p>
			<h1>Rafael Antunes</h1>
			<p class="tag">I build the platforms other software runs on.</p>
			<nav>
				<a href="mailto:me@rafaelgaspar.xyz">Email</a>
				<a href="https://github.com/rafaelgaspar">GitHub</a>
			</nav>
		</header>

		<section class="spotlight" aria-labelledby="spot">
			<div class="section-head">
				<p class="kicker">In public</p>
				<h2 id="spot">Work I actually run</h2>
			</div>
			<div id="repos" class="grid">
				${SPOTLIGHT.map(repoCard).join("")}
			</div>
		</section>

		<section class="about" aria-labelledby="about">
			<h2 id="about" class="visually-hidden">About</h2>
			<p>Senior II backend engineer at Wooga, mostly infrastructure: Kubernetes on EKS, Flux GitOps, and keeping game backends boring in production.</p>
			<p>Same discipline at home: a Flux-managed k3s cluster, Cilium, and MCP servers I actually use. GitHub is the living record; this page is just the door.</p>
		</section>

		<footer>
			<p>Rafael Antunes · <a href="mailto:me@rafaelgaspar.xyz">me@rafaelgaspar.xyz</a></p>
		</footer>
	</div>
	<script type="module">${clientJs()}</script>
</body>
</html>`;
}

function repoCard(repo: SpotlightRepo): string {
	const href = `https://github.com/${repo.owner}/${repo.name}`;
	const slug = repo.owner === "rafaelgaspar" ? repo.name : `${repo.owner}/${repo.name}`;
	return `<article data-owner="${escapeHtml(repo.owner)}" data-repo="${escapeHtml(repo.name)}">
		<a href="${href}">
			<h3>${escapeHtml(repo.title)}</h3>
			<p class="slug">${escapeHtml(slug)}</p>
			<p class="desc">${escapeHtml(repo.blurb)}</p>
			<p class="meta"><span class="lang">${escapeHtml(repo.language)}</span><span class="stars" hidden></span></p>
		</a>
	</article>`;
}

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function css(): string {
	return `
:root {
	--bg: #12110e;
	--paper: #1c1a16;
	--ink: #f4efe4;
	--mute: #9a9486;
	--line: #2f2c26;
	--accent: #d8267d;
	--focus: #8ec0ff;
}
* { box-sizing: border-box; }
html { color-scheme: dark; }
body {
	margin: 0;
	min-height: 100vh;
	background:
		radial-gradient(900px 480px at 8% -10%, #3a1024, transparent 55%),
		radial-gradient(700px 400px at 100% 0%, #1a2430, transparent 50%),
		var(--bg);
	color: var(--ink);
	font: 17px/1.55 "IBM Plex Sans", system-ui, sans-serif;
}
.frame { margin: 0 auto; max-width: 68rem; padding: 3.5rem 1.5rem 4.5rem; }
.masthead { margin-bottom: 3.75rem; max-width: 42rem; }
.place {
	margin: 0 0 .65rem;
	color: var(--accent);
	letter-spacing: .18em;
	text-transform: uppercase;
	font-size: .72rem;
	font-weight: 500;
}
h1 {
	font: 600 clamp(2.8rem, 8vw, 5.2rem)/0.98 "Fraunces", Georgia, serif;
	font-variation-settings: "opsz" 96;
	margin: 0 0 .85rem;
	letter-spacing: -0.03em;
}
.tag {
	margin: 0 0 1.5rem;
	font: italic 500 1.28rem/1.35 "Fraunces", Georgia, serif;
	font-variation-settings: "opsz" 18;
	color: var(--ink);
	max-width: 28rem;
}
nav { display: flex; gap: 1.35rem; }
nav a, footer a { color: var(--accent); text-underline-offset: .2em; }
nav a:hover, footer a:hover, article a:hover h3 { color: var(--ink); }
a:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
.section-head { margin-bottom: 1.25rem; }
.kicker {
	margin: 0 0 .35rem;
	color: var(--accent);
	letter-spacing: .16em;
	text-transform: uppercase;
	font-size: .68rem;
	font-weight: 500;
}
h2 {
	font: 600 1.7rem/1.15 "Fraunces", Georgia, serif;
	margin: 0;
	letter-spacing: -0.02em;
}
.spotlight { margin-bottom: 3.5rem; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (max-width: 720px) { .grid { grid-template-columns: 1fr; } }
article {
	background: color-mix(in srgb, var(--paper) 88%, transparent);
	border: 1px solid var(--line);
	border-radius: 16px;
	min-height: 14.5rem;
	transition: border-color .15s ease, transform .15s ease, background .15s ease;
}
article:hover {
	border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
	transform: translateY(-3px);
	background: var(--paper);
}
article a {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1.35rem 1.35rem 1.2rem;
	color: inherit;
	text-decoration: none;
}
article h3 {
	margin: 0 0 .4rem;
	font: 600 1.35rem/1.2 "Fraunces", Georgia, serif;
	font-variation-settings: "opsz" 20;
	letter-spacing: -0.02em;
	text-wrap: balance;
}
.slug {
	margin: 0 0 .9rem;
	font: 400 .78rem/1.3 "IBM Plex Mono", ui-monospace, monospace;
	color: var(--mute);
	word-break: break-word;
}
.desc { color: var(--mute); margin: 0 0 auto; padding-bottom: 1.2rem; }
.meta {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	margin: 0;
	padding-top: .9rem;
	border-top: 1px solid var(--line);
	color: var(--mute);
	font: 400 .78rem/1 "IBM Plex Mono", ui-monospace, monospace;
}
.stars { color: var(--accent); }
.about { max-width: 38rem; margin-bottom: 2.75rem; }
.about p { margin: 0 0 1rem; }
.about p:last-child { margin-bottom: 0; color: var(--mute); }
footer {
	margin-top: 1rem;
	padding-top: 1.25rem;
	border-top: 1px solid var(--line);
	color: var(--mute);
	font-size: .9rem;
}
.visually-hidden {
	position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
	overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
@media (prefers-reduced-motion: reduce) {
	article { transition: none; }
	article:hover { transform: none; }
}
`;
}

function clientJs(): string {
	return `
const root = document.getElementById("repos");
const cards = [...root.querySelectorAll("[data-repo]")];
await Promise.all(cards.map(async (el) => {
	const owner = el.dataset.owner;
	const name = el.dataset.repo;
	try {
		const res = await fetch("https://api.github.com/repos/" + owner + "/" + name, {
			headers: { Accept: "application/vnd.github+json" },
		});
		if (!res.ok) return;
		const data = await res.json();
		el.querySelector("a").href = data.html_url;
		if (data.language) el.querySelector(".lang").textContent = data.language;
		const stars = el.querySelector(".stars");
		if (typeof data.stargazers_count === "number" && data.stargazers_count > 0) {
			stars.hidden = false;
			stars.textContent = data.stargazers_count + (data.stargazers_count === 1 ? " star" : " stars");
		}
	} catch {}
}));
`;
}
