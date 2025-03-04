/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig({
	build: {
		outDir: 'build/vite',
		rollupOptions: {
			external: [/@clayui\/*/, 'react', 'react-dom'],
			output: {
				assetFileNames: 'assets/[name][extname]',
				chunkFileNames: '[name]-[hash].js',
				entryFileNames: '[name]-[hash].js',
			},
		},
		target: 'esnext',
	},
	plugins: [react({jsxRuntime: 'classic'})],
	server: {
		origin: 'http://localhost:5173',
	},
});
