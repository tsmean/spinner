# Development

Run `ng build spinner-library --watch` from the repository root, then run npm start. That way you can test the behaviour of your library easily.

# Build and Publish

1. Update the package version of the **library's** package.json (projects/tsmean/spinner/package.json).
2. Publish a beta version first: `x.x.x-beta.x` and `npm run build-and-publish-spinner-beta`
3. Test if your beta is working as expected with a small user group. They can install the changes with `npm install @tsmean/spinner@beta`
4. If everything works as expected, release the regular version: change the version name in package.json and run `npm run build-and-publish-spinner`
