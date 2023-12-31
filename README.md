# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## **Core**

- **[React (Version 18)](https://react.dev/learn)**
- **[Vite](https://vitejs.dev/guide/)**
- **[React Query (Version 4)](https://tanstack.com/query/v4/docs/react/overview)**
- [**React Hook Form (Version 7)**](https://react-hook-form.com/docs) + [**Zod**](https://zod.dev/)
- [**Zustand**](https://docs.pmnd.rs/zustand/getting-started/introduction)

## **UI & styling**

- [**Tailwindcss**](https://tailwindcss.com/docs/installation)
- [**Radix-UI**](https://www.radix-ui.com/themes/docs/overview/getting-started)
- [**Shadcn**](https://ui.shadcn.com/docs)
- [**Mantine Dates**](https://mantine.dev/dates/dates-provider/)

## **Static type checking & linting**

- [**Typescript**](https://www.typescriptlang.org/)
- [**Husky**](https://github.com/typicode/husky)
- [**Commitlint**](https://commitlint.js.org/#/)

## Testing Libraries

- [**Vitest**](https://vitest.dev/guide/)
- [**@testing-library/react**](https://testing-library.com/docs/react-testing-library/intro)
- [**@testing-library/dom**](https://www.npmjs.com/package/@testing-library/dom)
- [**@testing-library/jest-dom**](https://testing-library.com/docs/ecosystem-jest-dom/)
- [**@testing-library/user-event**](https://github.com/testing-library/user-event)

## **ESLint + Prettier**

- [**Eslint**](https://github.com/eslint/eslint)
- [**Prettier**](https://github.com/prettier/prettier)
- [**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier)
- [**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier)
- [**prettier-plugin-tailwindcss**](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [**@ianvs/prettier-plugin-sort-imports**](https://github.com/IanVS/prettier-plugin-sort-imports)

## Others

- [**class-variance-authority**](https://cva.style/docs/getting-started/installation)

1. Install the "Tailwind CSS IntelliSense" Visual Studio Code extension
2. Add the following to your settings.json(opens in a new tab):

```jsx
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

- [**Storybook**](https://storybook.js.org/docs/react/get-started/install/)

## **Repository setup**

1. `npm install` to install all dependencies
2. `npm run dev` to start development server
3. `npm run build` to compile for production
4. `npm run storybook` to open storybook on local
5. `npm run test` to run unit test

## **Source Version Control**

- [**Refer here**](https://github.com/dwarvesf/playbook/blob/master/engineering/git.md)

## Coding Convention

- [**Refer here**](https://github.com/dwarvesf/playbook/blob/master/engineering/frontend/code-style.md)

## Reference Material

- [**Common mistakes with React Testing Library**](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Folder Structure

<!-- prettier-ignore -->
```jsx
src
|-- assets
    |-- images
|-- components
    |-- button
        |-- index.tsx
        |-- Button.test.tsx
        |-- Button.stories.tsx
    |-- paragraph
        |-- index.tsx
        |-- Paragraph.test.tsx
        |-- Paragraph.stories.tsx
|-- features
    |-- authentication
        |-- components
            |-- login-form
                |-- index.tsx
        |-- login
            |-- index.tsx
    |-- misc
        |-- common-error
            |-- index.tsx
|-- hooks
|-- providers
    |-- layouts
        |-- BlankLayout.tsx
        |-- VerticalLayout.tsx
|-- lib
    |-- clsx-twmerge.ts
|-- router
    |-- routes
        |-- index.tsx
        |-- Authentication.tsx
        |-- Pages.tsx
    |-- Router.tsx
|-- styles
    |-- global.css
|-- types
    |-- icons.ts
    |-- login.ts
    |-- router.ts
|-- utils
```
