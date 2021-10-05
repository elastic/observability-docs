# observability-docs

The home of Elastic Observability documentation.

## Directories

Within this repo, the `/docs/en/` directory is structured as follows:

| Directory             | Description |
| --------------------- | ----------- |
| __observability__     | Contains the source files for the [Observability Guide](https://www.elastic.co/guide/en/observability/master/index.html), which includes content for APM, Logs, Metrics, Synthetics, User experience, and Uptime.|
| __ingest-management__ | Contains the source files for the [Fleet and Elastic Agent Guide](https://www.elastic.co/guide/en/ingest-management/master/index.html).|
| __shared__ | Contains the source files for shared Observability content.|
| __templates__ | Contains content templates.|

## Reviews

All documentation pull requests automatically add the **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** team as a reviewer.

## Backporting

Pull requests should be tagged with the target version of the Elastic Stack.
In general, we only backport documentation changes to [live stack versions](https://github.com/elastic/docs/blob/25bfa6722e52b0e7e1a18e5c12d1ec9f7c84c0c7/conf.yaml#L59).

After your PR is merged, we recommend using the [backport tool](https://github.com/sqren/backport) to easily open backport PRs:
`backport`. Alternatively, ping **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** and we'd be happy to handle the backport process for you.


## Build

To build the docs:

. Check out the `elastic/docs` repository, along with any repositories that contain source files.
. Run the `build_docs` script, passing in the path to the `index.asciidoc` and resource paths to other repos that contain source files. For example, to build the Observability Guide and open it in the browser, run:

```
../docs/build_docs --doc ./docs/en/observability/index.asciidoc --chunk 1 --resource ../beats/libbeat/docs --resource ../apm-server/docs/guide --open
```

The above command assumes that [elastic/docs](https://github.com/elastic/docs), [elastic/beats](https://github.com/elastic/beats) and [elastic/apm-server](https://github.com/elastic/apm-server) are checked out into the same parent directory.
