# observability-docs

Visit [Elastic.co](https://www.elastic.co/guide/en/observability/current/index.html) for the full Elastic Observability documentation.

## Directories

Within this repo the `/doc/en/` directory is structured as follows:

| Directory             | Description |
| --------------------- | ----------- |
| __observability__     | Contains the source files for the [Observability Guide](https://www.elastic.co/guide/en/observability/master/index.html), which includes content for the Logs, Metrics, and Uptime apps.|
| __ingest-management__ | Contains the source files for the [Ingest Management Guide](https://www.elastic.co/guide/en/ingest-management/master/index.html).|

## Reviews

When you open a pull request, please tag **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** as a reviewer.

## Backporting

Pull requests should be tagged with the target version(s) of the Elastic Stack.
In general, we only back port documentation changes to [live stack versions](https://github.com/elastic/docs/blob/25bfa6722e52b0e7e1a18e5c12d1ec9f7c84c0c7/conf.yaml#L59).
After your PR is merged, we recommend using the [backport tool](https://github.com/sqren/backport) to easily open back port PRs:
`npx backport`.
