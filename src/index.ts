import { impressumHtml, privacyHtml } from "./legal.ts";
import { pageHtml } from "./page.ts";

const pages: Record<string, () => string> = {
	"/": pageHtml,
	"/index.html": pageHtml,
	"/impressum": impressumHtml,
	"/datenschutz": privacyHtml,
};

const aliases: Record<string, string> = {
	"/imprint": "/impressum",
	"/privacy": "/datenschutz",
};

function html(body: string, status = 200): Response {
	return new Response(body, {
		status,
		headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "public, max-age=60",
		},
	});
}

export default {
	fetch(request: Request): Response {
		const url = new URL(request.url);
		if (url.hostname === "www.rafaelgaspar.xyz") {
			url.hostname = "rafaelgaspar.xyz";
			return Response.redirect(url.toString(), 301);
		}
		let path = url.pathname;
		if (path.length > 1 && path.endsWith("/")) {
			path = path.slice(0, -1);
		}
		const alias = aliases[path];
		if (alias) {
			url.pathname = alias;
			return Response.redirect(url.toString(), 301);
		}
		const render = pages[path];
		if (!render) {
			return html("Not found", 404);
		}
		return html(render());
	},
} satisfies ExportedHandler;
