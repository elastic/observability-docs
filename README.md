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

<<<<<<< HEAD
=======
## Contributing

If you find any bugs in our documentation, or want to request an enhancement, then you can open an issue using our template. We also welcome contributions in the form of PRs. Before you submit a PR, make sure that you have signed our [Contributor License Agreement](https://www.elastic.co/contributor-agreement/).

Contributing directly to the docs works differently across the doc sets in this repo.

### Observability Guide

The source files for the Observability Guide are written in [AsciiDoc](https://docs.asciidoctor.org/asciidoc/latest/) and are built using [elastic/docs](https://github.com/elastic/docs).

To build the docs locally:

1. Check out the `elastic/docs` repository, along with any repositories that contain source files.
2. Run the `build_docs` script, passing in the path to the `index.asciidoc` and resource paths to other repos that contain source files. For example, to build the Observability Guide and open it in the browser, run:
    ```
    ../docs/build_docs --doc ./docs/en/observability/index.asciidoc --chunk 3 --resource ../apm-server --resource ../ingest-docs/docs --open
    ```

The above command assumes that this repo, [elastic/docs](https://github.com/elastic/docs), [elastic/ingest-docs](https://github.com/elastic/ingest-docs), and [elastic/apm-server](https://github.com/elastic/apm-server) are checked out into the same parent directory.

If you prefer to use aliases, you can load the [elastic/docs/doc_build_aliases.sh file](https://github.com/elastic/docs/blob/master/doc_build_aliases.sh), which has the resources defined for you.

### Elastic Observability Serverless docs

The Elastic Observability Serverless docs use a custom syntax written in [MDX](https://mdxjs.com/). In many cases, you only need to know plain Markdown to contribute. We'll add a public component reference and additional contribution guidelines in future. Elasticians can refer to our [internal syntax reference](https://docs.elastic.dev/docsmobile/syntax).

### Integrations Developer Guide

The source files for the Integrations Developer Guide are written in [AsciiDoc](https://docs.asciidoctor.org/asciidoc/latest/) and are built using [elastic/docs](https://github.com/elastic/docs).

To build the docs locally:

1. Check out the `elastic/docs` repository, along with any repositories that contain source files.
2. Run the `build_docs` script, passing in the path to the `index.asciidoc` and resource paths to other repos that contain source files. For example, to build the Observability Guide and open it in the browser, run:
    ```
    ../docs/build_docs --doc ./docs/en/integrations/index.asciidoc --resource=../package-spec/versions --chunk 1 --open
    ```

The above command assumes that this repo, [elastic/docs](https://github.com/elastic/docs), and [elastic/package-spec](https://github.com/elastic/package-spec), are checked out into the same parent directory.

If you prefer to use aliases, you can load the [elastic/docs/doc_build_aliases.sh file](https://github.com/elastic/docs/blob/master/doc_build_aliases.sh), which has the resources defined for you.

## Backporting

Backporting works differently across the doc sets in this repo.

### Observability Guide

Pull requests should be tagged with the target version of the Elastic Stack along with any relevant backport labels. In general, we only backport documentation changes to [live stack versions](https://github.com/elastic/docs/blob/master/conf.yaml#L74). For manual backports, we recommend using the [backport tool](https://github.com/sqren/backport) to easily open backport PRs. If you need help, ping **[@obs-docs](https://github.com/orgs/elastic/teams/obs-docs)** and we'd be happy to handle the backport process for you.

### Elastic Observability Serverless docs

Serverless docs are not versioned, and should never be backported. All changes should be made to the `main` branch.
If you're backporting Serverless and Stateful content in the same PR, an automation will run that deletes the `docs/en/serverless` dir from your PR.

### Integrations Developer Guide

The Integrations Developer Guide is not versioned, and should never be backported.  All changes should be made to the `main` branch.

>>>>>>> 4a57e394 (Delete serverless directory on backport PRs (#3916))
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
