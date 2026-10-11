import { escapeHtml, htmlPage, siteFooter } from "./layout.ts";

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
	return htmlPage({
		lang: "en",
		title: "Rafael Antunes",
		description: "Infrastructure engineer in Berlin. Kubernetes, GitOps, and the tools I actually run.",
		body: `
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

		${siteFooter()}`,
		script: clientJs(),
	});
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
