import { pageHtml } from "./page.ts";

export default {
	fetch(request: Request): Response {
		const url = new URL(request.url);
		if (url.hostname === "www.rafaelgaspar.xyz") {
			url.hostname = "rafaelgaspar.xyz";
			return Response.redirect(url.toString(), 301);
		}
		if (url.pathname !== "/" && url.pathname !== "/index.html") {
			return new Response("Not found", { status: 404 });
		}
		return new Response(pageHtml(), {
			headers: {
				"content-type": "text/html; charset=utf-8",
				"cache-control": "public, max-age=60",
			},
		});
	},
} satisfies ExportedHandler;
