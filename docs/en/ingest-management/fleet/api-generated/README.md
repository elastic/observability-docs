 OpenAPI (Experimental)

The process described here is a Fleet-specific instance of the process described for adding Kibana APIs in general. Refer to the OpenAPI [readme file](https://github.com/elastic/kibana/tree/main/docs/api-generated) for details.

Open API specifications (OAS) exist in JSON for the Fleet in Kibana, though they are experimental and may be incomplete or change later.

A preview of the API specifications can be added to the Fleet Guide by using the following process:

. Install [OpenAPI Generator](https://openapi-generator.tech/docs/installation),
or a similar tool that can generate HTML output from OAS.

. Optionally validate the specifications by using the commands listed in the appropriate readmes.

. Generate HTML output. For example:

  ```
  openapi-generator generate -g html -i $GIT_HOME/kibana/x-pack/plugins/fleet/common/openapi/bundled.json -o $GIT_HOME/observability-docs/docs/en/ingest-management/fleet/api-generated/rules $GIT_HOME/observability-docs/docs/en/ingest-management/fleet/api-generated/template
  ```

. Rename the output files. For example:
  ```
  mv $GIT_HOME/observability-docs/docs/en/ingest-management/fleet/api-generated/rules/index.html $GIT_HOME/observability-docs/docs/en/ingest-management/fleet/api-generated/rules/fleet-apis-passthru.asciidoc
  ```

. If you're creating a new set of API output, you will need to have a page that incorporates the output by using passthrough blocks. For more information, refer to [Asciidoctor docs](https://docs.asciidoctor.org/asciidoc/latest/pass/pass-block/)

. Verify the output by building the Kibana documentation. At this time, the output is added as a technical preview in the appendix.

## Known issues

- Some OAS 3.0 features such as `anyOf`, `oneOf`, and `allOf` might not display properly in the preview. These are on the [Short-term roadmap](https://openapi-generator.tech/docs/roadmap/) at this time.

