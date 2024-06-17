# observability-docs

The home of Elastic Observability documentation.

## Directories

Within this repo, the `/docs/en/` directory is structured as follows:

| Directory             | Description |
| --------------------- | ----------- |
| __integrations__      | Contains the source files for the [Integrations Developer Guide](https://www.elastic.co/guide/en/integrations-developer/current/index.html)
| __observability__     | Contains the source files for the [Observability Guide](https://www.elastic.co/guide/en/observability/current/index.html), which includes content for APM, Logs, Metrics, Synthetics, User experience, and Uptime.|
| __shared__ | Contains the source files for shared Observability content.|
| __templates__ | Contains content templates.|

## Reviews

All documentation pull requests automatically add the **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** team as a reviewer.

## Backporting

Pull requests should be tagged with the target version of the Elastic Stack along with any relevant backport labels. In general, we only backport documentation changes to [live stack versions](https://github.com/elastic/docs/blob/master/conf.yaml#L74). For manual backports, we recommend using the [backport tool](https://github.com/sqren/backport) to easily open backport PRs. If you need help, ping **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** and we'd be happy to handle the backport process for you.


## Build

To build the docs:

1. Check out the `elastic/docs` repository, along with any repositories that contain source files.

2. Run the `build_docs` script, passing in the path to the `index.asciidoc` and resource paths to other repos that contain source files. For example, to build the Observability Guide and open it in the browser, run:

```
../docs/build_docs --doc ./docs/en/observability/index.asciidoc --chunk 3 --resource ../apm-server --resource ../ingest-docs/docs --open
```

The above command assumes that [elastic/docs](https://github.com/elastic/docs), [elastic/ingest-docs](https://github.com/elastic/ingest-docs), and [elastic/apm-server](https://github.com/elastic/apm-server) are checked out into the same parent directory.

If you prefer to use aliases, you can load the [elastic/docs/doc_build_aliases.sh file](https://github.com/elastic/docs/blob/master/doc_build_aliases.sh), which has the resources defined for you.

## License

Shield: [![CC BY-NC-ND 4.0][cc-by-nc-nd-shield]][cc-by-nc-nd]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International License][cc-by-nc-nd].

[![CC BY-NC-ND 4.0][cc-by-nc-nd-image]][cc-by-nc-nd]

[cc-by-nc-nd]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[cc-by-nc-nd-image]: https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png
[cc-by-nc-nd-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg
