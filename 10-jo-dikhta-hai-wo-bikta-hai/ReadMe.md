# Ep-10: Jo Dikhta hai wo Bikta hai

## 1. Explore all the ways of writing css.
there is major three ways to link css
- Inline - style={{ color: "red" }} directly used as attributes.
- internal - tag inside HTML head tag
```<style>
 body {background-color: powderblue;}
 h1 {color: blue;}
 p {color: red;}
 </style>
```

- external - Global Stylesheet: import `.css` file directly

**Modern Methods (preferred)**
- Tailwind CSS - Utility-first CSS framework using pre-built classes.

- CSS Modules - Scoped CSS per Component (`.module.css`) files.

- Styled Components - CSS-in-js approach for React, in component using js litrals


- Sass/SCSS - CSS preprocessor with with variabes and nesting etc.

## 2. How do we configure tailwind?

Current we not neet to create a `tailwind.config.js` file at all.

- Tailwind automatically detects your source files , scans them for classes, and purges unused CSS without any manual config.

- only need in css file that link to our html head file

```
@import "tailwindcss";
```

- Customizations are dome via **CSS-first syntax** using CSS variables and `@theme` at rules directly inside imported CSS file insteda of js Configuration.

**[More](https://tailwindcss.com/blog/tailwindcss-v4)**


In older way we do that manually in `tailwind.config.js` file.
```
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

## 3. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

We don’t need to manually create `tailwind.config.js` unless you want to customize the default setup.

But when customization is needed , here is the setup: 

```
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Paths to scan for class names
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom color
      },
    },
  },
  plugins: [],
}

```

- **content:** - Tells Tailwind where to look for class names to generate styles.

- **theme:** - Holds the design system (fonts, colors, spacing, etc.).

- **extend:** - Used to add custom styles without removing defaults.

- **plugins:** -  Enables extra utilities like typography, forms, etc.


## 4. Why do we have .postcssrc file?
PostCSS is a tool for
transforming styles with JavaScript plugins.

Earlier, Tailwind run as a PostCSS plugin. `.postcssrc` or `postcss.config.js` loaded tailwindcss and autoprefixer.

Now, PostCSS config is depend which bunddler you are using— some bunddler cofig it internally and some says do manually. like in vite not need but in parcel its need to manually `.postcssrc`.

 To know more [Read here](https://tailwindcss.com/docs/installation/framework-guides)

primary reasons why you might have a .postcssrc file

- **Plugin Configuration**: The main purpose of the .postcssrc file is to configure the plugins that PostCSS should use during the CSS transformation process.

- **Custom Configuration:** - we have need a `.postcssrc` file if you want to customize the behavior of PostCSS beyond the default settings provided by the build tool ex parcel and others bunddler.

- **Presets and Options:** - PostCSS plugins often come with various options and presets that you can
configure based on your project's needs.

- **Maintainability:** - Separating the PostCSS configuration into its own file makes the build
configuration more maintainable and organized.

- **Sharing Configurations:** - Having a dedicated configuration file makes it easier to share and reuse PostCSS configurations across different projects.


**By Vikas singh**