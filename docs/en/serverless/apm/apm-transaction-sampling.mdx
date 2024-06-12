---
slug: /serverless/observability/apm-transaction-sampling
title: Transaction sampling
description: Reduce data storage, costs, and noise by ingesting only a percentage of all traces that you can extrapolate from in your analysis.
tags: [ 'serverless', 'observability', 'how-to' ]
---

<p><DocBadge template="technical preview" /></p>

import ConfigureHeadBasedSampling from './apm-transaction-sampling/configure-head-based-sampling.mdx'

<DocLink slug="/serverless/observability/apm-distributed-tracing">Distributed tracing</DocLink> can
generate a substantial amount of data. More data can mean higher costs and more noise.
Sampling aims to lower the amount of data ingested and the effort required to analyze that data &mdash;
all while still making it easy to find anomalous patterns in your applications, detect outages, track errors,
and lower mean time to recovery (MTTR).

## Head-based sampling

In head-based sampling, the sampling decision for each trace is made when the trace is initiated.
Each trace has a defined and equal probability of being sampled.

For example, a sampling value of `.2` indicates a transaction sample rate of `20%`.
This means that only `20%` of traces will send and retain all of their associated information.
The remaining traces will drop contextual information to reduce the transfer and storage size of the trace.

Head-based sampling is quick and easy to set up.
Its downside is that it's entirely random &mdash; interesting
data might be discarded purely due to chance.

### Distributed tracing with head-based sampling

In a _distributed_ trace, the sampling decision is still made when the trace is initiated.
Each subsequent service respects the initial service's sampling decision, regardless of its configured sample rate;
the result is a sampling percentage that matches the initiating service.

In this example, `Service A` initiates four transactions and has sample rate of `.5` (`50%`).
The sample rates of `Service B` and `Service C` are ignored.

![Distributed tracing and head based sampling example one](../images/apm-dt-sampling-example-1.png)

In this example, `Service A` initiates four transactions and has a sample rate of `1` (`100%`).
Again, the sample rates of `Service B` and `Service C` are ignored.

![Distributed tracing and head based sampling example two](../images/apm-dt-sampling-example-2.png)

### OpenTelemetry with head-based sampling

Head-based sampling is implemented directly in the APM agents and SDKs.
The sample rate must be propagated between services and the managed intake service in order to produce accurate metrics.

OpenTelemetry offers multiple samplers. However, most samplers do not propagate the sample rate.
This results in inaccurate span-based metrics, like APM throughput, latency, and error metrics.

For accurate span-based metrics when using head-based sampling with OpenTelemetry, you must use
a [consistent probability sampler](https://opentelemetry.io/docs/specs/otel/trace/tracestate-probability-sampling/).
These samplers propagate the sample rate between services and the managed intake service, resulting in accurate metrics.

<DocCallOut title="Note">
  OpenTelemetry does not offer consistent probability samplers in all languages. Refer to the documentation of your favorite OpenTelemetry agent or SDK for more information.
</DocCallOut>

## Sampled data and visualizations

A sampled trace retains all data associated with it.
A non-sampled trace drops all <DocLink slug="/serverless/observability/apm-data-types">span</DocLink> and <DocLink slug="/serverless/observability/apm-data-types">transaction</DocLink> data.
Regardless of the sampling decision, all traces retain <DocLink slug="/serverless/observability/apm-data-types">error</DocLink> data.

Some visualizations in the Applications UI, like latency, are powered by aggregated transaction and span <DocLink slug="/serverless/observability/apm-data-types">metrics</DocLink>.
Metrics are based on sampled traces and weighted by the inverse sampling rate.
For example, if you sample at 5%, each trace is counted as 20.
As a result, as the variance of latency increases, or the sampling rate decreases, your level of error will increase.

## Sample rates

What's the best sampling rate? Unfortunately, there isn't one.
Sampling is dependent on your data, the throughput of your application, data retention policies, and other factors.
A sampling rate from `.1%` to `100%` would all be considered normal.
You'll likely decide on a unique sample rate for different scenarios.
Here are some examples:

* Services with considerably more traffic than others might be safe to sample at lower rates
* Routes that are more important than others might be sampled at higher rates
* A production service environment might warrant a higher sampling rate than a development environment
* Failed trace outcomes might be more interesting than successful traces &mdash; thus requiring a higher sample rate

Regardless of the above, cost conscious customers are likely to be fine with a lower sample rate.

## Configure head-based sampling

<ConfigureHeadBasedSampling />
