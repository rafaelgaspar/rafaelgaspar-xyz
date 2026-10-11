export function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

export function htmlPage(opts: {
	lang: string;
	title: string;
	description: string;
	body: string;
	script?: string;
}): string {
	return `<!DOCTYPE html>
<html lang="${opts.lang}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>${escapeHtml(opts.title)}</title>
	<meta name="description" content="${escapeHtml(opts.description)}">
	<style>${css()}</style>
</head>
<body>
	<div class="frame">
		${opts.body}
	</div>${opts.script ? `\n	<script type="module">${opts.script}</script>` : ""}
</body>
</html>`;
}

export function siteFooter(): string {
	return `<footer>
		<p>Rafael Antunes · <a href="mailto:me@rafaelgaspar.xyz">me@rafaelgaspar.xyz</a></p>
		<p class="legal-nav"><a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a></p>
	</footer>`;
}

export function css(): string {
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
	font: 17px/1.55 system-ui, "Segoe UI", Roboto, sans-serif;
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
.place a { color: inherit; text-decoration: none; }
.place a:hover { color: var(--ink); }
h1 {
	font: 600 clamp(2.8rem, 8vw, 5.2rem)/0.98 Georgia, "Iowan Old Style", "Palatino Linotype", serif;
	margin: 0 0 .85rem;
	letter-spacing: -0.03em;
}
.tag {
	margin: 0 0 1.5rem;
	font: italic 500 1.28rem/1.35 Georgia, "Iowan Old Style", Palatino, serif;
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
	font: 600 1.7rem/1.15 Georgia, "Iowan Old Style", Palatino, serif;
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
	font: 600 1.35rem/1.2 Georgia, "Iowan Old Style", Palatino, serif;
	letter-spacing: -0.02em;
	text-wrap: balance;
}
.slug {
	margin: 0 0 .9rem;
	font: 400 .78rem/1.3 ui-monospace, "SF Mono", Menlo, Consolas, monospace;
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
	font: 400 .78rem/1 ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
.stars { color: var(--accent); }
.about { max-width: 38rem; margin-bottom: 2.75rem; }
.about p { margin: 0 0 1rem; }
.about p:last-child { margin-bottom: 0; color: var(--mute); }
.legal { max-width: 40rem; margin-bottom: 2.75rem; }
.legal h2 {
	margin: 2rem 0 .7rem;
	font-size: 1.2rem;
}
.legal p, .legal li { margin: 0 0 .85rem; color: var(--mute); }
.legal ul { margin: 0 0 1rem; padding-left: 1.15rem; }
.legal address { font-style: normal; color: var(--ink); margin: 0 0 1rem; line-height: 1.5; }
.masthead.compact { margin-bottom: 2rem; }
.masthead.compact h1 { font-size: clamp(2rem, 6vw, 3.2rem); }
footer {
	margin-top: 1rem;
	padding-top: 1.25rem;
	border-top: 1px solid var(--line);
	color: var(--mute);
	font-size: .9rem;
}
footer p { margin: 0 0 .45rem; }
footer p:last-child { margin-bottom: 0; }
.legal-nav { font-size: .85rem; }
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
