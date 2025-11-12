import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
    root: true,
    rules: {
        // 允许被禁止类型
        '@typescript-eslint/ban-types': 'off',
        // 允许any
        '@typescript-eslint/no-explicit-any': 'off',
        // 允许@ts-xxx
        '@typescript-eslint/ban-ts-comment': 'off',
        // 允许空函数
        '@typescript-eslint/no-empty-function': 'off',
        // 允许下划线开头的不使用变量
        'no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        // 关掉，不然一个错误会变俩
        '@typescript-eslint/no-unused-vars': ['off'],
    },
}, {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
