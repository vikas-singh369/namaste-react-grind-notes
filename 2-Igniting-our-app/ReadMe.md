

## 1. What is NPM ?
NPM is a package manager for javascript and a default package manager for Node.js.

- Helps to install and manage Node.js packages.

- pre-installed with Node.js.

- used in both frontend and backend.

Although many people belives NPM stand for Node Package Manager, but NPM official docs says "NPM is a name, not a acronym"

## 2. What is `Parcel/Webpack/vite`? Why do we need it?

It is just a bundler. that do lots of work for us that makes our life easier and application faster.

### Why :- 
These bundlers handle everything behind the scenes—so you can focus on writing React, while they handle speed, compatibility, and optimization.

The core features they provided like

- HMR – Reloads only the changed part

- File Watcher –Tracks file changes efficiently (written in C++)

- Differential Bundling – Supports modern & older browsers separately

- Bundling – Combines all code/files into one or multiple optimized bundles

- Minify – Removes extra characters to reduce file size

-  Dev/Prod Build – Optimized builds for both development & production

-  Igniting App – Starts dev server instantly

- Fast Build – Super quick bundling & rebuilds 

- Image Optimization – Auto compresses images

- Caching –  Reuses unchanged files for faster rebuilds

- Compression –  Outputs smaller production files

- HTTPS Dev –  Supports HTTPS in local dev server

- Consistent Hashing – Generates cache-friendly file names

- Zero Config – No need to configure

- Tree Shaking - Removes unused code in builds Removes unused code from final bundle

- Code Splitting –  Loads only needed parts of the app on demand

- Port No. –  Automatically switches if port is already used



## 3. What is npx ?
npx is node package executor. It allows to run Node.js packages directly from the command line globaly.

Just like npm is used to install, npx is used to execute packages.

## 4. What is Hot Module Replacement?
Hot Module Replacement (HMR) is a feature that updates only the changed modules in the browser -  no refresh, no loss of state.


## 5. What is difference between `dependencies` vs `devDependencies`?

- `dependencies` that are required and neccessary to run our app.

eg. React, React-dom, Redux, etc.

- `devDependencies` that are not neccessary to run our app but make our development easier and faster.

eg. bundler etc.


## 6. What is Tree Shaking?
Tree shaking is a dead code elimination technique that optimizes code. It removes unwanted code that we do not use while deploying our app.

## 7. What is the difference between `package.json` and `package-lock.json`?

package.json and package-lock.json maintains note of all the dependencies that our app needs to run.

but package.lock.json that contains the exact lock version integrity, the hash whatever in my development local is same as in the production.

## 8. Why should I not modify `package-lock.json`?
- It contains the lock version integrity, the hash whatever in my development local is same as in the production that why we should not modify it.

## 9. What is `node_modules` ? Is it a good idea to push that on git?
node_modules contains all the dependencies that we fetch from npm and that our app needs to run.

Git should only store the essential source code — not bulky or rebuildable files.It contains OS-specific binaries — not meant to be shared across systems Clean repos are easier to maintain, clone, and deploy


## 10. What is the `dist` folder?
dist is a short of distribution. It contains the final version of our app. 

don't push dist folder on git we can re-generate it in staging or production.

## 11. what is .gitignore?
.gitignore is a file that tells git to which file and folder don't track to push on git.

## 12. What is Browserlist?
It is a config that defines which browsers and versions should be supported by app.

used by : 
- babel
- autoprefixer - to add necessary CSS vendor prefixes
- build tools


## 13. what is parcel cache ?
It is a directory where parcel stores all the cached files. It is used to speed up the build process.

## 14. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Zero config - no need to configuration
- HMR - reload only changed part.
- Tree shaking - traverse all files and remove unused code.
- Diffrencial bundling - Supports modern & older browsers separately
- Image optimizations - auto compress image to optimize it.

[Code files](../coding-basics/App.js)