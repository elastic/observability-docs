# observability-docs
Elastic Observability documentation

### Reviews

When you open a pull request, please tag **@obs-docs** as a reviewer.

### Backporting

Pull requests should be tagged with the target version(s) of the Elastic Stack.
In general, we only backport documenation changes to [live stack versions](https://github.com/elastic/docs/blob/25bfa6722e52b0e7e1a18e5c12d1ec9f7c84c0c7/conf.yaml#L59).
After your PR is merged, we recommend using the [backport tool](https://github.com/sqren/backport) to easily open backport PRs:
`npx backport`.
