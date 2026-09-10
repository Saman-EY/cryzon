import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

export default defineConfig([
    ...nextVitals,
    ...nextTs,

    // Global ignores
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),

    // Custom rules
    {
        rules: {
            'react-hooks/set-state-in-effect': 'off',
        },
    },
])
