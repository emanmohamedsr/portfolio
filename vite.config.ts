import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return undefined;

					if (id.includes("framer-motion") || id.includes("/motion/")) {
						return "motion";
					}
					if (id.includes("radix")) {
						return "radix";
					}
					if (id.includes("react") || id.includes("scheduler")) {
						return "react";
					}
					if (id.includes("lucide-react")) {
						return "icons";
					}
					return "vendor";
				},
			},
		},
	},
});
