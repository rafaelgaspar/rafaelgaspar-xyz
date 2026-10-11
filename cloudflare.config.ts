import { defineConfig } from "cf/config";
import * as entrypoint from "./src/index.ts" with { type: "cf-worker" };

export default defineConfig({
	accountId: "c3e3ef70896ca1085cafedc4f8349972",
	worker: {
		name: "rafaelgaspar-xyz",
		compatibilityDate: "2026-10-11",
		entrypoint,
		domains: ["rafaelgaspar.xyz", "www.rafaelgaspar.xyz"],
		observability: {
			enabled: true,
			traces: { enabled: true },
		},
	},
});
