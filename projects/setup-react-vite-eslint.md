# 🚀 Guía para configurar un proyecto de React con Vite y ESLint (Standard)

Esta guía te ayudará a crear y configurar un proyecto **React con JavaScript**, asegurando un código limpio con **ESLint y Standard**.

## 📌 1️⃣ Crear un nuevo proyecto con Vite
Ejecuta el siguiente comando en la terminal:
```sh
npm create vite@latest nombre-del-proyecto
```
Elige:

- Framework: React
- Lenguaje: JavaScript + SWC

Luego, entra en la carpeta del proyecto:
```sh
cd nombre-del-proyecto
```
Instala las dependencias:
```sh
npm install
```

## 📌 2️⃣ Instalar ESLint con Standard
Antes de instalar ESLint, verifica si ya está instalado con:
```sh
eslint -v
```
Si no está instalado, instálalo con:
```sh
npm install --save-dev eslint eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-n eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

## 📌 3️⃣ Configurar ESLint
Si tu proyecto usa un archivo `.eslint.config.js`, agrégale:
```js
import js from '@eslint/js'
import globals from 'globals'
import standard from 'eslint-config-standard'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import promisePlugin from 'eslint-plugin-promise'
import nPlugin from 'eslint-plugin-n'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      promise: promisePlugin,
      n: nPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...standard.rules,
      'import/no-absolute-path': 'off', // Ensure this is set to "off"
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
]
```

## 📌 4️⃣ Configurar ESLint en VS Code
Instala la extensión de ESLint en VS Code.

Agrega esto en `settings.json` para ver errores en línea:(>settings)
```json
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

## 📌 5️⃣ Verificar que ESLint funciona correctamente
Ejecuta:
```sh
npx eslint . --fix
```
Si ves errores en la terminal, pero no en el código en línea en VS Code, prueba recargar la ventana (`Ctrl + Shift + P → "Reload Window"`).

## 📌 6️⃣ Solucionar problemas comunes
Si obtienes un error con "context.getScope is not a function":

Actualiza `eslint-plugin-n` con:
```sh
npm install eslint eslint-plugin-n --save-dev
```
Si el error persiste, desactiva la regla en `eslint.config.js`:
```js
"n/no-deprecated-api": "off"
```
