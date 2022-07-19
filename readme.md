# blog-semver-monorepo

A repo to demonstrate how to do semantic versioning in a monorepo with the help of [GitVersion](https://gitversion.net/)

## code organization

- Deployables are put in `apps` and `common` folder. The services with can be deployed to run the app are in `apps` folder.
- Libraries which are reusable within and outside this repo are placed in the `common` folder.

## versioning

- Active development happens on `develop` branch.
- Merging Pull Requests on `develop` kicks of versioning with `alpha` suffixed tags, which can be used to deploy to Dev.
- To create stable releases, a release strategy is used.

## release strategy

- Create a `release/X.Y.Z` branch from develop branch.
- Raise a Pull Request to `main` branch.
- The Pull Request body will be updated with the expected version bumps.
- Upon Pull Request merge, the stable releases are created and can be used to deploy to Dev and promoted to QA, and Prod.

