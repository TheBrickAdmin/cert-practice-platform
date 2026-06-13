// PCA - Prometheus Certified Associate v1.0
// AI-generated content - verify against official Prometheus documentation (https://prometheus.io/docs/introduction/overview/)
// Created: 2026-06-13

const pcaExamInfo = {
    id: 'pca-v1.0',
    name: 'PCA - Prometheus Certified Associate',
    description: 'Practice exam for the Prometheus Certified Associate (PCA) certification covering observability concepts, Prometheus fundamentals, PromQL, instrumentation and exporters, and alerting and dashboarding.',
    version: '1.0',
    totalQuestions: 100,
    passingScore: 75,
    topics: [
        'Observability Concepts',
        'Prometheus Fundamentals',
        'PromQL',
        'Instrumentation and Exporters',
        'Alerting & Dashboarding'
    ],
    difficulty: 'Beginner to Intermediate',
    lastUpdated: '2026-06-13'
};

// Topic mappings for detailed scoring (question numbers per topic, aligned to official exam weights)
const pcaTopicMappings = {
    'Observability Concepts': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    'Prometheus Fundamentals': [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],
    'PromQL': [39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66],
    'Instrumentation and Exporters': [67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
    'Alerting & Dashboarding': [83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
};

const pcaQuestions = [
    // ===== Observability Concepts =====
    {
        id: 1,
        question: "In monitoring terminology, what is a metric?",
        options: [
            "A free-form text line emitted by an application during execution",
            "A request traced as it flows through several services",
            "A numeric measurement of a system or application captured over time",
            "A discrete record stating that a specific thing happened at a point in time"
        ],
        answer: "A numeric measurement of a system or application captured over time",
        explanation: "Metrics are numeric measurements sampled over time, such as request counts, latencies, or memory usage. Free-form text records are logs, request flows across services are traces, and discrete 'something happened' records are events."
    },
    {
        id: 2,
        question: "Which characteristic best distinguishes logs from metrics?",
        options: [
            "Logs are discrete, timestamped, often textual records of events, while metrics are numeric values sampled over time",
            "Logs are always numeric aggregates while metrics are always textual",
            "Logs cannot contain timestamps whereas metrics always do",
            "Logs are stored only in memory while metrics are always written to disk"
        ],
        answer: "Logs are discrete, timestamped, often textual records of events, while metrics are numeric values sampled over time",
        explanation: "Logs are typically discrete event records that are often textual and timestamped, whereas metrics are numeric measurements sampled at regular intervals. Both can carry timestamps, and storage location is an implementation detail, not a defining difference."
    },
    {
        id: 3,
        question: "What is an 'event' in observability terms?",
        options: [
            "A continuously increasing counter exposed by an exporter",
            "A pre-aggregated rollup of metric data over a time window",
            "A sampled gauge value representing current resource usage",
            "A record indicating that something notable occurred at a specific point in time"
        ],
        answer: "A record indicating that something notable occurred at a specific point in time",
        explanation: "An event captures the fact that something discrete happened at a moment in time (for example, a deployment or a login). Counters, gauges, and aggregated rollups are forms of metric data, not events."
    },
    {
        id: 4,
        question: "In distributed tracing, what is a span?",
        options: [
            "The total time a request spends queued before processing begins",
            "A single named, timed unit of work within a trace",
            "The complete end-to-end journey of a request across all services",
            "A label attached to a metric to add a dimension"
        ],
        answer: "A single named, timed unit of work within a trace",
        explanation: "A span represents one unit of work (such as a function call or a service hop) with a name, start time, and duration. A collection of related spans forms a trace, which is the full end-to-end path of a request."
    },
    {
        id: 5,
        question: "What does a trace represent in distributed tracing?",
        options: [
            "The end-to-end path of a request as it propagates through multiple services",
            "A single numeric sample taken at a regular interval",
            "A configuration file describing scrape targets",
            "An alert that fires when a threshold is crossed"
        ],
        answer: "The end-to-end path of a request as it propagates through multiple services",
        explanation: "A trace ties together the spans produced as a single request moves through a distributed system, giving an end-to-end view. Numeric samples are metrics, and scrape configuration and alerts are unrelated concepts."
    },
    {
        id: 6,
        question: "Which model does Prometheus primarily use to collect metrics?",
        options: [
            "A push model where applications send metrics to a central gateway",
            "A streaming model based on persistent gRPC connections",
            "A pull model where Prometheus scrapes metrics from targets over HTTP",
            "A polling model that queries a relational database"
        ],
        answer: "A pull model where Prometheus scrapes metrics from targets over HTTP",
        explanation: "Prometheus pulls (scrapes) metrics from instrumented targets over HTTP at configured intervals. Pushing is supported only through the Pushgateway for special cases such as short-lived batch jobs."
    },
    {
        id: 7,
        question: "Which is an advantage of the pull-based model used by Prometheus?",
        options: [
            "It guarantees that no metrics are ever lost during a network partition",
            "Prometheus can detect whether a target is up based on whether the scrape succeeds",
            "It removes any need for service discovery",
            "It lets short-lived batch jobs report without any additional component"
        ],
        answer: "Prometheus can detect whether a target is up based on whether the scrape succeeds",
        explanation: "Because Prometheus initiates each scrape, a failed scrape is itself a useful signal exposed as the synthetic `up` metric. Pull does not eliminate service discovery, does not guarantee delivery, and short-lived jobs still need the Pushgateway."
    },
    {
        id: 8,
        question: "For short-lived or batch jobs that may not exist when Prometheus scrapes, which component is recommended?",
        options: [
            "The Alertmanager",
            "A remote write endpoint",
            "The node_exporter",
            "The Pushgateway"
        ],
        answer: "The Pushgateway",
        explanation: "The Pushgateway lets ephemeral and batch jobs push their metrics to an intermediary that Prometheus then scrapes. It is intended specifically for jobs too short-lived to be reliably scraped directly."
    },
    {
        id: 9,
        question: "What is the purpose of service discovery in Prometheus?",
        options: [
            "To deduplicate metrics received from multiple replicas",
            "To automatically find and keep an up-to-date list of scrape targets",
            "To render dashboards from query results",
            "To forward alerts to receivers such as email or Slack"
        ],
        answer: "To automatically find and keep an up-to-date list of scrape targets",
        explanation: "Service discovery integrates with systems such as Kubernetes, Consul, and cloud providers to dynamically maintain the set of targets Prometheus should scrape, avoiding manual target lists in dynamic environments."
    },
    {
        id: 10,
        question: "Which of the following is a service discovery mechanism supported by Prometheus?",
        options: [
            "SNMP polling",
            "JMX beans",
            "syslog",
            "Kubernetes"
        ],
        answer: "Kubernetes",
        explanation: "Prometheus supports many service discovery integrations, including Kubernetes, Consul, EC2, and file-based discovery. SNMP, JMX, and syslog are data sources or protocols, not service discovery mechanisms."
    },
    {
        id: 11,
        question: "What does a Service Level Indicator (SLI) represent?",
        options: [
            "A quantitative measure of some aspect of the level of service provided",
            "A legal contract with financial penalties for downtime",
            "The internal target a team commits to for reliability",
            "A list of scrape configurations for a job"
        ],
        answer: "A quantitative measure of some aspect of the level of service provided",
        explanation: "An SLI is the actual measurement, such as request latency or the ratio of successful requests. The target for that measurement is the SLO, and a contractual agreement is the SLA."
    },
    {
        id: 12,
        question: "What is a Service Level Objective (SLO)?",
        options: [
            "An external agreement with customers that includes penalties",
            "The raw metric used to measure latency",
            "A target value or range for an SLI over a period of time",
            "The maximum number of time series a server can store"
        ],
        answer: "A target value or range for an SLI over a period of time",
        explanation: "An SLO is the goal set for an SLI over a window, for example '99.9% of requests succeed over 30 days'. The measurement itself is the SLI, and a customer-facing commitment with consequences is the SLA."
    },
    {
        id: 13,
        question: "How does an SLA differ from an SLO?",
        options: [
            "An SLA is always numerically stricter than the corresponding SLO",
            "An SLA is measured in latency while an SLO is measured in availability",
            "There is no difference; the terms are interchangeable",
            "An SLA is an agreement with consequences (often contractual), while an SLO is an internal objective"
        ],
        answer: "An SLA is an agreement with consequences (often contractual), while an SLO is an internal objective",
        explanation: "An SLA is a formal agreement, often with financial or contractual consequences if breached, while an SLO is the internal reliability target. Teams commonly set SLOs stricter than the SLA to leave headroom."
    },
    {
        id: 14,
        question: "An 'error budget' is most directly derived from which of the following?",
        options: [
            "The number of exporters deployed in the environment",
            "The SLO — it is the allowed amount of unreliability (100% minus the objective)",
            "The configured scrape interval",
            "The retention period of the local TSDB"
        ],
        answer: "The SLO — it is the allowed amount of unreliability (100% minus the objective)",
        explanation: "The error budget is the difference between perfect reliability and the SLO. For a 99.9% availability objective, the error budget is 0.1% of unavailability, which teams can 'spend' on risk such as releases."
    },
    {
        id: 15,
        question: "Which statement about the storage cost of logs versus metrics is generally true?",
        options: [
            "Metrics are always more expensive to store than logs",
            "Logs and metrics have identical storage characteristics",
            "High-cardinality logs can be far more expensive to store than aggregated metrics",
            "Metrics cannot be aggregated, so they always cost more"
        ],
        answer: "High-cardinality logs can be far more expensive to store than aggregated metrics",
        explanation: "Verbose, high-cardinality logs can grow very large, while metrics are numeric and aggregated, making them comparatively cheap to store and query. The right choice depends on the diagnostic need."
    },
    {
        id: 16,
        question: "The three commonly cited 'pillars of observability' are:",
        options: [
            "Metrics, logs, and traces",
            "Counters, gauges, and histograms",
            "Alerts, dashboards, and reports",
            "Push, pull, and scrape"
        ],
        answer: "Metrics, logs, and traces",
        explanation: "Metrics, logs, and traces are the three classic telemetry signals used to understand a system's behavior. Counters and gauges are metric types, and the other options describe Prometheus features rather than observability pillars."
    },
    {
        id: 17,
        question: "Why might tracing be preferred over metrics for diagnosing a slow request across microservices?",
        options: [
            "Traces always use less storage than metrics",
            "Metrics are incapable of recording latency",
            "A trace shows where time is spent across individual services for a specific request",
            "Traces are always sampled at 100% so they are complete"
        ],
        answer: "A trace shows where time is spent across individual services for a specific request",
        explanation: "A trace breaks a single request into spans across services, revealing exactly which hop is slow. Metrics can record latency in aggregate but cannot follow one specific request through the system."
    },
    {
        id: 18,
        question: "Which best describes the relationship between an SLI, an SLO, and an SLA?",
        options: [
            "They are unrelated concepts used by entirely different teams",
            "An SLA defines the metric, an SLO collects it, and an SLI agrees on it",
            "An SLO is the contract, an SLA is the measurement, and an SLI is the target",
            "An SLI is the measurement, an SLO is the target for that measurement, and an SLA is the agreement built on the objective"
        ],
        answer: "An SLI is the measurement, an SLO is the target for that measurement, and an SLA is the agreement built on the objective",
        explanation: "The SLI measures service quality, the SLO sets a target for that SLI, and the SLA is the external agreement (with consequences) layered on top of those objectives."
    },

    // ===== Prometheus Fundamentals =====
    {
        id: 19,
        question: "Which component is responsible for sending notifications when alerts fire?",
        options: [
            "Alertmanager",
            "Pushgateway",
            "node_exporter",
            "Grafana"
        ],
        answer: "Alertmanager",
        explanation: "Prometheus evaluates alerting rules and sends firing alerts to Alertmanager, which handles deduplication, grouping, silencing, inhibition, and routing to receivers such as email or Slack."
    },
    {
        id: 20,
        question: "In the Prometheus data model, every time series is uniquely identified by:",
        options: [
            "Its scrape interval and retention setting",
            "Its metric name together with a set of key-value label pairs",
            "A globally unique numeric ID assigned at ingestion",
            "The IP address of the target that produced it"
        ],
        answer: "Its metric name together with a set of key-value label pairs",
        explanation: "A time series is uniquely defined by its metric name and the combination of its label key-value pairs. Changing any label value produces a different, distinct series."
    },
    {
        id: 21,
        question: "What is the primary job of the Prometheus server itself?",
        options: [
            "To render dashboards and host a Grafana instance",
            "To scrape and store time series data and evaluate rules",
            "To forward all metrics to a relational database",
            "To push metrics to remote agents on a schedule"
        ],
        answer: "To scrape and store time series data and evaluate rules",
        explanation: "The Prometheus server scrapes targets, stores the samples in its local time series database, and evaluates recording and alerting rules. Dashboarding is typically delegated to Grafana."
    },
    {
        id: 22,
        question: "What is the default protocol and format Prometheus uses to scrape targets?",
        options: [
            "HTTP requests to an endpoint exposing a text-based exposition format",
            "gRPC streaming of protobuf messages",
            "UDP packets in StatsD format",
            "AMQP messages pulled from a queue"
        ],
        answer: "HTTP requests to an endpoint exposing a text-based exposition format",
        explanation: "Prometheus scrapes targets by issuing HTTP GET requests, typically to /metrics, where the target exposes current metric values in the text-based exposition format."
    },
    {
        id: 23,
        question: "Which file is primarily used to configure scrape jobs and global settings?",
        options: [
            "rules.yml",
            "alertmanager.yml",
            "targets.json",
            "prometheus.yml"
        ],
        answer: "prometheus.yml",
        explanation: "prometheus.yml is the main configuration file, containing global settings, scrape_configs, rule_files, and alerting configuration. rules.yml holds rules and alertmanager.yml configures Alertmanager."
    },
    {
        id: 24,
        question: "What does the `scrape_interval` setting control?",
        options: [
            "How long metrics are retained on disk",
            "How often recording and alerting rules are evaluated",
            "How frequently Prometheus scrapes its targets",
            "The timeout applied to a single scrape request"
        ],
        answer: "How frequently Prometheus scrapes its targets",
        explanation: "scrape_interval defines how often Prometheus collects metrics from targets. Rule evaluation frequency is controlled by evaluation_interval, and the per-scrape timeout is scrape_timeout."
    },
    {
        id: 25,
        question: "Which of the following is a known limitation of Prometheus?",
        options: [
            "It is not designed to be a durable, 100% accurate long-term event or billing store",
            "It cannot store numeric data of any kind",
            "It cannot evaluate alerting rules",
            "It requires a relational database backend to run"
        ],
        answer: "It is not designed to be a durable, 100% accurate long-term event or billing store",
        explanation: "Prometheus prioritizes operational reliability over perfect accuracy and is not intended for billing or use cases requiring per-event precision. It stores numeric data natively, evaluates rules, and needs no external database."
    },
    {
        id: 26,
        question: "Which of the following is NOT one of the four core Prometheus metric types?",
        options: [
            "Counter",
            "Gauge",
            "Histogram",
            "Logarithm"
        ],
        answer: "Logarithm",
        explanation: "The four core metric types are counter, gauge, histogram, and summary. 'Logarithm' is not a metric type."
    },
    {
        id: 27,
        question: "A counter is best described as a metric that:",
        options: [
            "Can increase and decrease arbitrarily over time",
            "Stores text labels rather than numeric values",
            "Only increases, except for resetting to zero on restart",
            "Represents a distribution of values via buckets"
        ],
        answer: "Only increases, except for resetting to zero on restart",
        explanation: "A counter is a cumulative metric that only goes up (or resets to zero when the process restarts). It is suited to counts such as total requests served; values that go up and down should be gauges."
    },
    {
        id: 28,
        question: "A gauge is appropriate for which kind of value?",
        options: [
            "The total number of HTTP requests handled since start",
            "A value that can go up and down, such as current memory usage or temperature",
            "A cumulative count of errors that never decreases",
            "A static configuration string"
        ],
        answer: "A value that can go up and down, such as current memory usage or temperature",
        explanation: "A gauge represents a value that can rise or fall, such as current memory in use, queue depth, or temperature. Monotonically increasing totals should be counters."
    },
    {
        id: 29,
        question: "What does a histogram metric expose in the exposition format?",
        options: [
            "A single value representing the average of observations",
            "Only a `_count` series and nothing else",
            "A separate gauge for each individual observed value",
            "Cumulative `_bucket` counts (with `le` labels), plus `_sum` and `_count`"
        ],
        answer: "Cumulative `_bucket` counts (with `le` labels), plus `_sum` and `_count`",
        explanation: "A histogram exposes a set of cumulative bucket counters labeled with `le` (less-than-or-equal upper bounds), a `_sum` of observed values, and a `_count` of observations, enabling server-side quantile estimation."
    },
    {
        id: 30,
        question: "In the text exposition format, what does a `# TYPE` line do?",
        options: [
            "Declares the retention period for the metric",
            "Sets a label value on the metric",
            "Specifies the metric's type (counter, gauge, histogram, or summary)",
            "Defines an alerting threshold for the metric"
        ],
        answer: "Specifies the metric's type (counter, gauge, histogram, or summary)",
        explanation: "A `# TYPE` comment line tells Prometheus how to interpret the following metric (counter, gauge, histogram, or summary). It does not configure retention, labels, or alerts."
    },
    {
        id: 31,
        question: "What does a `# HELP` line provide in the exposition format?",
        options: [
            "The current numeric value of the metric",
            "A human-readable description of the metric",
            "The scrape interval to use for the metric",
            "A list of permitted label values"
        ],
        answer: "A human-readable description of the metric",
        explanation: "The `# HELP` line gives a short, human-readable description of what the metric measures. It is informational and does not affect collection or values."
    },
    {
        id: 32,
        question: "Reserved label names intended for internal use in Prometheus begin with which characters?",
        options: [
            "Double underscores (`__`)",
            "A leading dollar sign (`$`)",
            "A trailing colon (`:`)",
            "A leading hash (`#`)"
        ],
        answer: "Double underscores (`__`)",
        explanation: "Labels beginning with `__` (double underscore), such as `__name__` and `__address__`, are reserved for Prometheus internal use and are generally stripped or special-purpose."
    },
    {
        id: 33,
        question: "Which special label stores the metric name internally?",
        options: [
            "`__address__`",
            "`instance`",
            "`__name__`",
            "`job`"
        ],
        answer: "`__name__`",
        explanation: "Prometheus represents the metric name internally as the reserved label `__name__`. `__address__` holds the discovered target address, while `job` and `instance` describe the scrape source."
    },
    {
        id: 34,
        question: "Which two labels does Prometheus attach automatically to scraped samples?",
        options: [
            "`__name__` and `le`",
            "`job` and `instance`",
            "`severity` and `team`",
            "`quantile` and `bucket`"
        ],
        answer: "`job` and `instance`",
        explanation: "When scraping, Prometheus automatically adds the `job` label (from the scrape job name) and the `instance` label (the target's host:port). The other labels are user-defined or specific to certain metric types."
    },
    {
        id: 35,
        question: "What does 'cardinality' refer to in the context of Prometheus?",
        options: [
            "The number of unique time series, driven by label-value combinations",
            "The number of dashboards configured in Grafana",
            "The CPU usage of the Prometheus server process",
            "The number of configured alert receivers"
        ],
        answer: "The number of unique time series, driven by label-value combinations",
        explanation: "Cardinality is the count of distinct time series. Because each unique combination of label values creates a new series, labels with many possible values multiply cardinality quickly."
    },
    {
        id: 36,
        question: "Why is using high-cardinality labels (for example user IDs or full URLs) discouraged?",
        options: [
            "They are forbidden by the exposition format specification",
            "They cause PromQL queries to return mathematically wrong results",
            "They prevent alerting rules from being evaluated at all",
            "They can cause an explosion in the number of time series, straining memory and storage"
        ],
        answer: "They can cause an explosion in the number of time series, straining memory and storage",
        explanation: "Unbounded label values create huge numbers of series (a 'cardinality explosion'), consuming memory and disk and slowing queries. Labels should hold a bounded, low-cardinality set of values."
    },
    {
        id: 37,
        question: "What does the `/metrics` endpoint of an instrumented target return?",
        options: [
            "The current metric values in the Prometheus exposition format",
            "A JSON list of currently active alerts",
            "The Prometheus server configuration file",
            "A fully rendered HTML dashboard"
        ],
        answer: "The current metric values in the Prometheus exposition format",
        explanation: "By convention, instrumented applications and exporters expose their current metrics at /metrics in the text exposition format, which Prometheus scrapes over HTTP."
    },
    {
        id: 38,
        question: "Which statement about Prometheus storage is correct?",
        options: [
            "It writes every sample to a remote SQL database by default",
            "It stores time series data locally in its own time series database (TSDB) on disk",
            "It keeps all data only in memory and loses everything on restart",
            "It requires HDFS to be installed to function"
        ],
        answer: "It stores time series data locally in its own time series database (TSDB) on disk",
        explanation: "Prometheus persists samples in a local on-disk TSDB. Remote storage via remote_write is optional for long-term retention, but local storage is the default and does not require any external database."
    },

    // ===== PromQL =====
    {
        id: 39,
        question: "In PromQL, evaluating a bare metric name such as `http_requests_total` returns:",
        options: [
            "A single scalar number",
            "A range vector covering the last minute",
            "A string value",
            "An instant vector — one sample per matching series at the evaluation time"
        ],
        answer: "An instant vector — one sample per matching series at the evaluation time",
        explanation: "A metric selector returns an instant vector: a set containing the single most recent sample for each matching series at the query's evaluation timestamp."
    },
    {
        id: 40,
        question: "What does `http_requests_total{job=\"api\"}` do?",
        options: [
            "Returns a range vector over the last minute",
            "Computes the per-second rate of requests",
            "Selects the instant vector filtered to series with label `job=\"api\"`",
            "Returns the average value across all jobs"
        ],
        answer: "Selects the instant vector filtered to series with label `job=\"api\"`",
        explanation: "The label matcher in braces filters the selected series to those whose `job` label equals `api`. It does not aggregate, compute rates, or define a time range."
    },
    {
        id: 41,
        question: "Which selector matches series where the `status` label does NOT equal `200`?",
        options: [
            "`{status==\"200\"}`",
            "`{status~=\"200\"}`",
            "`{status=~\"200\"}`",
            "`{status!=\"200\"}`"
        ],
        answer: "`{status!=\"200\"}`",
        explanation: "PromQL uses `!=` for negative exact matching. `=` is exact equality, `=~` is regex match, and `!~` is negative regex match; `==` and `~=` are not valid label matchers."
    },
    {
        id: 42,
        question: "The label matcher `=~` performs what kind of match?",
        options: [
            "A regular-expression match on the label value",
            "An exact string inequality test",
            "A numeric greater-than comparison",
            "A negated regular-expression match"
        ],
        answer: "A regular-expression match on the label value",
        explanation: "`=~` matches label values against a regular expression. The negated regex matcher is `!~`, while `=` and `!=` perform exact equality and inequality."
    },
    {
        id: 43,
        question: "What is a range vector in PromQL?",
        options: [
            "A single scalar value with no labels",
            "One sample per series at a single instant",
            "A set of samples over a time range for each series, e.g. `metric[5m]`",
            "A bare string literal"
        ],
        answer: "A set of samples over a time range for each series, e.g. `metric[5m]`",
        explanation: "A range vector contains multiple samples spanning a duration (selected with `[5m]`-style syntax) for each series. Functions like rate() and increase() require a range vector as input."
    },
    {
        id: 44,
        question: "Why must `rate()` be applied to a range vector rather than an instant vector?",
        options: [
            "Because instant vectors contain only strings",
            "Because it needs multiple samples over a window to compute a per-second average",
            "Because range vectors are simply faster to query",
            "Because instant vectors cannot contain counter values"
        ],
        answer: "Because it needs multiple samples over a window to compute a per-second average",
        explanation: "rate() calculates the average per-second increase of a counter using all samples in the supplied time window, so it requires a range vector (e.g. `[5m]`) rather than a single instant value."
    },
    {
        id: 45,
        question: "What does `rate(http_requests_total[5m])` compute?",
        options: [
            "The total number of requests received in the last 5 minutes",
            "The per-second average rate of increase of the counter over the last 5 minutes",
            "The instantaneous current value of the counter",
            "The maximum value observed during the 5-minute window"
        ],
        answer: "The per-second average rate of increase of the counter over the last 5 minutes",
        explanation: "rate() returns the per-second average rate of increase of a counter over the range, automatically accounting for counter resets. For a raw total over the window you would use increase()."
    },
    {
        id: 46,
        question: "How does `irate()` differ from `rate()`?",
        options: [
            "`irate()` works only on gauges, not counters",
            "`irate()` returns a range vector instead of an instant vector",
            "`irate()` uses the last two data points for an instantaneous rate, while `rate()` averages over the whole range",
            "`irate()` is identical to `rate()` but only valid for summaries"
        ],
        answer: "`irate()` uses the last two data points for an instantaneous rate, while `rate()` averages over the whole range",
        explanation: "irate() computes an instantaneous rate from the two most recent samples in the range, making it responsive but spiky. rate() averages across the entire window and is better for alerting and smoother graphs."
    },
    {
        id: 47,
        question: "Which function calculates the per-second derivative of a gauge that can rise and fall?",
        options: [
            "`deriv()`",
            "`rate()`",
            "`increase()`",
            "`histogram_quantile()`"
        ],
        answer: "`deriv()`",
        explanation: "deriv() estimates the per-second derivative of a gauge range vector using simple linear regression. rate() and increase() assume monotonically increasing counters and are not appropriate for arbitrary gauges."
    },
    {
        id: 48,
        question: "What does `increase(http_requests_total[1h])` return?",
        options: [
            "The per-second rate of the counter over one hour",
            "The current instantaneous value of the counter",
            "The instantaneous rate using only the last two samples",
            "The total increase in the counter's value over the last hour"
        ],
        answer: "The total increase in the counter's value over the last hour",
        explanation: "increase() returns the total amount a counter grew over the time window, equivalent to rate() multiplied by the range duration, with counter resets handled automatically."
    },
    {
        id: 49,
        question: "The `_over_time` family of functions (e.g. `avg_over_time`, `max_over_time`) operates on:",
        options: [
            "An instant vector",
            "A scalar value",
            "A range vector, aggregating each series over the time window",
            "A string literal"
        ],
        answer: "A range vector, aggregating each series over the time window",
        explanation: "Functions such as avg_over_time and max_over_time take a range vector and reduce each series's samples within the window to a single value (average, maximum, and so on)."
    },
    {
        id: 50,
        question: "Which expression gives the average value of a gauge over the last 10 minutes, per series?",
        options: [
            "`avg_over_time(temperature[10m])`",
            "`avg(temperature[10m])`",
            "`rate(temperature[10m])`",
            "`avg_over_time(temperature)`"
        ],
        answer: "`avg_over_time(temperature[10m])`",
        explanation: "avg_over_time aggregates the samples of each series across the supplied range. avg() aggregates across series at an instant (and cannot take a range vector), and rate() is for counters."
    },
    {
        id: 51,
        question: "The `sum()` aggregation operator in PromQL aggregates:",
        options: [
            "Over time within each individual series",
            "Across dimensions (series), collapsing the matched series into fewer results",
            "Only counters, never gauges",
            "Two range vectors element by element"
        ],
        answer: "Across dimensions (series), collapsing the matched series into fewer results",
        explanation: "Aggregation operators such as sum(), avg(), and max() combine multiple series at a single instant across label dimensions. Aggregating over time instead uses the *_over_time functions."
    },
    {
        id: 52,
        question: "What does `sum by (job) (rate(http_requests_total[5m]))` produce?",
        options: [
            "A single grand total across every job combined",
            "The rate for every individual series, unchanged",
            "The average rate per instance",
            "The summed per-second rate grouped by the `job` label"
        ],
        answer: "The summed per-second rate grouped by the `job` label",
        explanation: "The `by (job)` clause groups the result by the `job` label, so the rates of all series sharing a job value are summed, yielding one total rate per job."
    },
    {
        id: 53,
        question: "How does the `without` clause differ from `by` in aggregations?",
        options: [
            "`without` is not valid PromQL syntax",
            "They behave identically in every case",
            "`without` keeps only the labels listed in it",
            "`without` aggregates away the listed labels and keeps all others, whereas `by` keeps only the listed labels"
        ],
        answer: "`without` aggregates away the listed labels and keeps all others, whereas `by` keeps only the listed labels",
        explanation: "`by (labels)` retains only the named labels in the output, while `without (labels)` drops the named labels and preserves the rest. They are complementary ways to control grouping."
    },
    {
        id: 54,
        question: "Which of the following is a valid PromQL aggregation operator?",
        options: [
            "`mean`",
            "`topk`",
            "`median`",
            "`rate`"
        ],
        answer: "`topk`",
        explanation: "topk is a built-in aggregation operator returning the k largest elements. There is no `mean` or `median` operator (use avg and quantile), and rate is a function, not an aggregation operator."
    },
    {
        id: 55,
        question: "What does `topk(3, node_memory_used_bytes)` return?",
        options: [
            "The 3 series with the largest values",
            "The sum of the top 3 series",
            "The 3 oldest series by timestamp",
            "The 3 series with the smallest values"
        ],
        answer: "The 3 series with the largest values",
        explanation: "topk(k, v) returns the k series with the highest sample values, preserving their labels. The smallest values would be returned by bottomk()."
    },
    {
        id: 56,
        question: "When a binary operator is applied between two instant vectors, default matching occurs:",
        options: [
            "By position in the result set",
            "By metric name only",
            "On series that have identical label sets (one-to-one matching)",
            "Randomly between the two sides"
        ],
        answer: "On series that have identical label sets (one-to-one matching)",
        explanation: "By default, vector-to-vector operations match elements that have exactly the same set of labels, performing one-to-one matching. on()/ignoring() and group_left/group_right modify this behavior."
    },
    {
        id: 57,
        question: "The `on()` and `ignoring()` modifiers are used to:",
        options: [
            "Control which labels are considered when matching series in vector binary operations",
            "Filter out NaN values from a result",
            "Change the scrape interval for a job",
            "Define the labels attached to an alert"
        ],
        answer: "Control which labels are considered when matching series in vector binary operations",
        explanation: "on(...) restricts matching to the listed labels, while ignoring(...) excludes the listed labels from matching. They let two vectors with differing label sets be joined sensibly."
    },
    {
        id: 58,
        question: "For many-to-one (or one-to-many) vector matching, which keywords are used?",
        options: [
            "`by` and `without`",
            "`and` / `or`",
            "`group_left` and `group_right`",
            "`offset` and `@`"
        ],
        answer: "`group_left` and `group_right`",
        explanation: "group_left and group_right specify the 'many' side in many-to-one and one-to-many matches, allowing labels from the one side to be carried over. by/without are for aggregation grouping."
    },
    {
        id: 59,
        question: "With matching labels, what does `node_filesystem_avail_bytes / node_filesystem_size_bytes` typically compute?",
        options: [
            "The absolute free space in bytes",
            "The total filesystem size only",
            "A per-second counter rate",
            "The fraction of filesystem space available, per matching series"
        ],
        answer: "The fraction of filesystem space available, per matching series",
        explanation: "Dividing available bytes by total size yields a ratio between 0 and 1 representing the proportion of free space, computed for each pair of matching series (same labels)."
    },
    {
        id: 60,
        question: "By default, comparison binary operators such as `>` in PromQL:",
        options: [
            "Return a boolean 1 or 0 for every series",
            "Filter the vector, returning only the series that satisfy the comparison",
            "Aggregate values across all series",
            "Convert the vector into a scalar"
        ],
        answer: "Filter the vector, returning only the series that satisfy the comparison",
        explanation: "By default a comparison operator acts as a filter, dropping series that do not satisfy the condition and keeping the original values of those that do. Adding `bool` switches to 0/1 output."
    },
    {
        id: 61,
        question: "To make a comparison operator return 0/1 instead of filtering, you append:",
        options: [
            "`by`",
            "`bool`",
            "`on`",
            "`offset`"
        ],
        answer: "`bool`",
        explanation: "The `bool` modifier (e.g. `x > bool 5`) changes a comparison from a filter into one that returns 1 where the comparison holds and 0 where it does not, for every series."
    },
    {
        id: 62,
        question: "For a histogram metric `http_request_duration_seconds`, how do you estimate the 95th percentile latency?",
        options: [
            "`avg(http_request_duration_seconds)`",
            "`quantile(0.95, http_request_duration_seconds)`",
            "`topk(0.95, http_request_duration_seconds_bucket)`",
            "`histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))`"
        ],
        answer: "`histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))`",
        explanation: "histogram_quantile() estimates a quantile from the cumulative `_bucket` series. Applying rate() first gives the per-second bucket counts over the window so the percentile reflects recent traffic."
    },
    {
        id: 63,
        question: "For `histogram_quantile()`, the input bucket series must carry which label?",
        options: [
            "`quantile`",
            "`job`",
            "`le` (the less-than-or-equal bucket upper bound)",
            "`instance`"
        ],
        answer: "`le` (the less-than-or-equal bucket upper bound)",
        explanation: "histogram_quantile() relies on the `le` label, which marks the inclusive upper bound of each cumulative bucket, to interpolate the requested quantile. The `quantile` label belongs to summaries."
    },
    {
        id: 64,
        question: "Why is `rate()` typically applied to histogram `_bucket` series before `histogram_quantile()`?",
        options: [
            "To get per-second bucket counts over a window so the quantile reflects recent traffic",
            "Because `histogram_quantile()` can only accept range vectors",
            "Because the bucket series are gauges that must be smoothed",
            "To convert the histogram into a summary metric"
        ],
        answer: "To get per-second bucket counts over a window so the quantile reflects recent traffic",
        explanation: "The `_bucket` series are cumulative counters. Wrapping them in rate() over a window yields recent per-second bucket rates, so the resulting quantile describes current behavior rather than all-time totals."
    },
    {
        id: 65,
        question: "What is a key difference between a Prometheus histogram and a summary regarding quantiles?",
        options: [
            "Summaries are incapable of exposing quantiles at all",
            "Histograms compute exact quantiles entirely on the client side",
            "Histograms let you aggregate buckets across instances and compute quantiles server-side, while summaries compute quantiles client-side and are not aggregatable",
            "There is no meaningful difference between them"
        ],
        answer: "Histograms let you aggregate buckets across instances and compute quantiles server-side, while summaries compute quantiles client-side and are not aggregatable",
        explanation: "Histogram buckets can be summed across instances and quantiles estimated with histogram_quantile() in PromQL. Summary quantiles are computed in the client and cannot be meaningfully aggregated across series."
    },
    {
        id: 66,
        question: "What does the `timestamp()` function return?",
        options: [
            "The current wall-clock time as a formatted string",
            "The configured scrape interval",
            "The metric name of each input series",
            "The timestamp (seconds since epoch) of each sample in the instant vector"
        ],
        answer: "The timestamp (seconds since epoch) of each sample in the instant vector",
        explanation: "timestamp() returns, for each sample in the input instant vector, the Unix timestamp in seconds of that sample. It is useful for reasoning about data freshness and staleness."
    },

    // ===== Instrumentation and Exporters =====
    {
        id: 67,
        question: "What is a Prometheus client library used for?",
        options: [
            "Querying the Prometheus server from dashboards",
            "Instrumenting application code to define and expose metrics",
            "Routing fired alerts to receivers",
            "Discovering scrape targets dynamically"
        ],
        answer: "Instrumenting application code to define and expose metrics",
        explanation: "Client libraries (for Go, Python, Java, and others) let developers create counters, gauges, histograms, and summaries in their own code and expose them, typically on a /metrics endpoint, for scraping."
    },
    {
        id: 68,
        question: "Which of the following is an officially supported Prometheus client library language?",
        options: [
            "Go",
            "COBOL",
            "Fortran",
            "Assembly"
        ],
        answer: "Go",
        explanation: "Prometheus offers official client libraries for languages including Go, Java/Scala, Python, and Ruby. COBOL, Fortran, and assembly are not among the officially supported client libraries."
    },
    {
        id: 69,
        question: "What is an exporter in the Prometheus ecosystem?",
        options: [
            "A bridge that fetches metrics from a third-party system and exposes them in Prometheus format",
            "A service that renders dashboards from query results",
            "A long-term storage backend for time series",
            "A component that delivers alert notifications"
        ],
        answer: "A bridge that fetches metrics from a third-party system and exposes them in Prometheus format",
        explanation: "Exporters translate metrics from systems you cannot directly instrument (databases, hardware, the OS) into the Prometheus exposition format so they can be scraped, for example node_exporter or mysqld_exporter."
    },
    {
        id: 70,
        question: "The `node_exporter` is used to expose:",
        options: [
            "Application-level business metrics",
            "Hardware and OS-level metrics from *nix hosts (CPU, memory, disk, and so on)",
            "Kubernetes API server internal metrics",
            "Database query latency statistics"
        ],
        answer: "Hardware and OS-level metrics from *nix hosts (CPU, memory, disk, and so on)",
        explanation: "node_exporter exposes machine-level metrics such as CPU, memory, filesystem, and network statistics for Unix-like systems. Application or database metrics come from instrumentation or dedicated exporters."
    },
    {
        id: 71,
        question: "When should you use an exporter rather than directly instrumenting code?",
        options: [
            "Always, even for applications you fully own",
            "Never, because exporters are deprecated",
            "When you cannot modify the source of the system you want to monitor",
            "Only for short-lived batch jobs"
        ],
        answer: "When you cannot modify the source of the system you want to monitor",
        explanation: "Direct instrumentation is preferred for code you control. Exporters are the right choice for third-party or closed systems you cannot modify, such as databases, message brokers, or hardware."
    },
    {
        id: 72,
        question: "According to Prometheus naming best practices, a counter metric name should generally:",
        options: [
            "Be as short as possible with no unit information",
            "Include the target's instance IP address",
            "Begin with an underscore character",
            "Use a unit-describing suffix and `_total` for counters (e.g. `http_requests_total`)"
        ],
        answer: "Use a unit-describing suffix and `_total` for counters (e.g. `http_requests_total`)",
        explanation: "Prometheus conventions recommend descriptive names with a unit suffix and a `_total` suffix for counters. Instance identity belongs in labels, and metric names should not start with an underscore."
    },
    {
        id: 73,
        question: "Prometheus metric names should express values using which base units?",
        options: [
            "Whatever is convenient, such as milliseconds and kilobytes",
            "Only whole integers",
            "Imperial units where appropriate",
            "Base units such as seconds and bytes (not milliseconds or megabytes)"
        ],
        answer: "Base units such as seconds and bytes (not milliseconds or megabytes)",
        explanation: "Best practice is to use unprefixed base units like seconds and bytes, so that values are consistent and easy to combine. Scaling for display is left to the dashboarding layer."
    },
    {
        id: 74,
        question: "A metric named `myapp_requests_total` with a `code` label is an example of:",
        options: [
            "A gauge designed to have high cardinality",
            "A summary metric exposing quantiles",
            "A counter using a label to break requests down by status code",
            "An invalid metric name"
        ],
        answer: "A counter using a label to break requests down by status code",
        explanation: "The `_total` suffix indicates a counter, and the `code` label adds a bounded dimension (HTTP status codes) so requests can be analyzed per status. Status codes are a low-cardinality, appropriate label."
    },
    {
        id: 75,
        question: "What is the recommended way to expose metrics from a short-lived batch job?",
        options: [
            "Push the metrics to a Pushgateway, which Prometheus then scrapes",
            "Have Prometheus scrape the job directly as it exits",
            "Write the metrics to a local log file for later parsing",
            "Email the metrics to Alertmanager"
        ],
        answer: "Push the metrics to a Pushgateway, which Prometheus then scrapes",
        explanation: "Because a batch job may finish before Prometheus can scrape it, it should push its final metrics to a Pushgateway. Prometheus then scrapes those persisted values from the gateway."
    },
    {
        id: 76,
        question: "Which of the following is a labeling best practice when instrumenting code?",
        options: [
            "Put unbounded values such as full request paths or user IDs into labels",
            "Keep label values bounded and low-cardinality",
            "Use a distinct label value for every individual event",
            "Avoid using labels entirely"
        ],
        answer: "Keep label values bounded and low-cardinality",
        explanation: "Labels should take values from a small, bounded set to control cardinality. Putting unbounded data such as user IDs or full URLs into labels causes a series explosion and resource problems."
    },
    {
        id: 77,
        question: "The convention for a metric's namespace or prefix is typically:",
        options: [
            "A single-word application or library name prefix, such as `process_` or `http_`",
            "The current timestamp value",
            "A randomly generated UUID",
            "The hostname of the server emitting it"
        ],
        answer: "A single-word application or library name prefix, such as `process_` or `http_`",
        explanation: "Metric names usually begin with a namespace identifying the application, library, or subsystem (for example `process_`, `http_`, or `node_`), which groups related metrics and avoids collisions."
    },
    {
        id: 78,
        question: "Which metric is a good candidate to be modeled as a gauge?",
        options: [
            "Total HTTP requests served since startup",
            "Current number of items in a queue",
            "Total bytes transmitted since boot",
            "Cumulative number of errors encountered"
        ],
        answer: "Current number of items in a queue",
        explanation: "Queue depth fluctuates up and down, which is exactly what a gauge models. The other options are monotonically increasing totals that should be represented as counters."
    },
    {
        id: 79,
        question: "The `blackbox_exporter` is primarily used for:",
        options: [
            "Exporting host CPU and memory metrics",
            "Providing long-term storage of time series",
            "Probing endpoints over HTTP, HTTPS, DNS, TCP, and ICMP from the outside",
            "Sending alert notifications to receivers"
        ],
        answer: "Probing endpoints over HTTP, HTTPS, DNS, TCP, and ICMP from the outside",
        explanation: "The blackbox_exporter performs black-box probing of endpoints over protocols such as HTTP, HTTPS, DNS, TCP, and ICMP, exposing results (like availability and latency) for Prometheus to scrape."
    },
    {
        id: 80,
        question: "When instrumenting latency, which metric type lets you later compute aggregatable percentiles across instances?",
        options: [
            "Counter",
            "Gauge",
            "Summary",
            "Histogram"
        ],
        answer: "Histogram",
        explanation: "Histograms record observations into buckets that can be summed across instances and fed to histogram_quantile() server-side. Summary quantiles are computed per client and cannot be aggregated."
    },
    {
        id: 81,
        question: "What does the `_sum` time series of a histogram represent?",
        options: [
            "The total number of observations made",
            "The single largest observed value",
            "The sum of all observed values",
            "The estimated 50th percentile"
        ],
        answer: "The sum of all observed values",
        explanation: "The `_sum` series accumulates the total of every observed value (for example, total request seconds). Combined with `_count`, it can be used to compute an average over time."
    },
    {
        id: 82,
        question: "What does the `_count` time series of a histogram or summary represent?",
        options: [
            "The sum of all observed values",
            "The total number of observations recorded",
            "The number of configured buckets",
            "The configured quantile target"
        ],
        answer: "The total number of observations recorded",
        explanation: "The `_count` series is a counter of how many observations have been made. Dividing `_sum` by `_count` over a window (via rate) yields the average observed value."
    },

    // ===== Alerting & Dashboarding =====
    {
        id: 83,
        question: "Where are Prometheus alerting rules defined?",
        options: [
            "Inside the Alertmanager configuration file",
            "Within Grafana dashboard panels",
            "In the exposition format on the target",
            "In rule files loaded by the Prometheus server, using `alert` rules"
        ],
        answer: "In rule files loaded by the Prometheus server, using `alert` rules",
        explanation: "Alerting rules live in rule files referenced from prometheus.yml and are evaluated by the Prometheus server. Alertmanager only handles the alerts once they fire; it does not define them."
    },
    {
        id: 84,
        question: "What does the `for` clause in an alerting rule do?",
        options: [
            "Requires the condition to remain true for a sustained duration before the alert fires",
            "Sets the receiver that should handle the alert",
            "Defines the scrape interval for the rule",
            "Silences the alert for a fixed period"
        ],
        answer: "Requires the condition to remain true for a sustained duration before the alert fires",
        explanation: "The `for` clause makes an alert wait in the 'pending' state until its expression has been continuously true for the specified duration, reducing noise from brief, transient spikes."
    },
    {
        id: 85,
        question: "What is the role of Alertmanager?",
        options: [
            "To receive alerts from Prometheus and handle grouping, deduplication, silencing, and routing to receivers",
            "To scrape targets and store the resulting metrics",
            "To render graphical dashboards",
            "To define the alerting rule expressions"
        ],
        answer: "To receive alerts from Prometheus and handle grouping, deduplication, silencing, and routing to receivers",
        explanation: "Alertmanager takes alerts pushed from Prometheus and manages deduplication, grouping, inhibition, silencing, and routing to receivers like email, PagerDuty, or Slack. It does not scrape or define rules."
    },
    {
        id: 86,
        question: "In Alertmanager, 'grouping' refers to:",
        options: [
            "Combining multiple Prometheus servers into a high-availability cluster",
            "Aggregating metric samples into histogram buckets",
            "Merging several Grafana dashboards into one",
            "Combining alerts of a similar nature into a single notification"
        ],
        answer: "Combining alerts of a similar nature into a single notification",
        explanation: "Grouping batches related alerts (for example, all alerts for one cluster or alertname) into a single notification, so that a large incident does not produce a flood of separate messages."
    },
    {
        id: 87,
        question: "What is an Alertmanager 'silence'?",
        options: [
            "A rule preventing an alert from ever being defined",
            "A mechanism to mute notifications for matching alerts during a time window",
            "A way to permanently delete stored metrics",
            "A specific type of notification receiver"
        ],
        answer: "A mechanism to mute notifications for matching alerts during a time window",
        explanation: "A silence temporarily suppresses notifications for alerts matching a set of label matchers, for a defined time window. It is useful during planned maintenance and does not stop rule evaluation."
    },
    {
        id: 88,
        question: "Which of the following is a valid Alertmanager receiver type?",
        options: [
            "node_exporter",
            "histogram",
            "Slack",
            "Pushgateway"
        ],
        answer: "Slack",
        explanation: "Alertmanager supports receivers such as email, Slack, PagerDuty, Opsgenie, and generic webhooks. node_exporter, histogram, and the Pushgateway are unrelated Prometheus components."
    },
    {
        id: 89,
        question: "What does 'inhibition' mean in Alertmanager?",
        options: [
            "Preventing a metric from being scraped",
            "Reducing the frequency of target scrapes",
            "Dropping high-cardinality labels from alerts",
            "Suppressing notifications for certain alerts while another, more severe alert is already firing"
        ],
        answer: "Suppressing notifications for certain alerts while another, more severe alert is already firing",
        explanation: "Inhibition mutes lower-priority alerts when a related higher-priority alert is active, for example suppressing per-instance alerts when a whole-cluster-down alert is firing, to reduce noise."
    },
    {
        id: 90,
        question: "Labels on an alert are typically used to:",
        options: [
            "Route the alert and determine grouping (for example severity or team)",
            "Store the metric's numeric value",
            "Configure the scrape interval",
            "Render the alert as a dashboard panel"
        ],
        answer: "Route the alert and determine grouping (for example severity or team)",
        explanation: "Alert labels (such as severity or team) identify the alert and drive Alertmanager routing, grouping, and inhibition. Human-readable detail belongs in annotations instead."
    },
    {
        id: 91,
        question: "Annotations on an alert are typically used to:",
        options: [
            "Identify and route the alert through Alertmanager",
            "Provide human-readable descriptive information such as a summary or runbook link",
            "Define the numeric alerting threshold",
            "Set the data retention period"
        ],
        answer: "Provide human-readable descriptive information such as a summary or runbook link",
        explanation: "Annotations carry descriptive, human-oriented content like a summary, a longer description, or a runbook URL. Routing and grouping decisions are driven by labels, not annotations."
    },
    {
        id: 92,
        question: "A recording rule is used to:",
        options: [
            "Send notifications directly to receivers",
            "Silence noisy alerts during maintenance",
            "Precompute frequently used or expensive expressions and save the result as a new series",
            "Discover and register scrape targets"
        ],
        answer: "Precompute frequently used or expensive expressions and save the result as a new series",
        explanation: "Recording rules evaluate an expression on a schedule and store the result as a new time series, speeding up dashboards and alerts that repeatedly use costly queries. They do not send notifications."
    },
    {
        id: 93,
        question: "Which is a good practice when writing alerts?",
        options: [
            "Alert on every possible metric to maximize coverage",
            "Alert on symptoms that affect users rather than on every internal cause",
            "Avoid the `for` clause so alerts fire instantly on any blip",
            "Send all alerts to a single email address with no labels"
        ],
        answer: "Alert on symptoms that affect users rather than on every internal cause",
        explanation: "Effective alerting focuses on user-visible symptoms (high error rates, latency) that are actionable, rather than alerting on every internal cause, which produces noise and alert fatigue."
    },
    {
        id: 94,
        question: "Which tool is most commonly used alongside Prometheus for rich dashboards?",
        options: [
            "Alertmanager",
            "Pushgateway",
            "Grafana",
            "node_exporter"
        ],
        answer: "Grafana",
        explanation: "Grafana is the de facto dashboarding tool paired with Prometheus, querying it via PromQL to build graphs and panels. Prometheus also has a built-in expression browser for ad-hoc queries."
    },
    {
        id: 95,
        question: "The Prometheus expression browser is useful for:",
        options: [
            "Providing long-term storage of metrics",
            "Routing alerts to external receivers",
            "Installing and managing exporters",
            "Running ad-hoc PromQL queries and viewing results as a table or graph"
        ],
        answer: "Running ad-hoc PromQL queries and viewing results as a table or graph",
        explanation: "The built-in expression browser in the Prometheus web UI lets you run PromQL interactively and inspect results in tabular or simple graph form, which is handy for debugging and exploration."
    },
    {
        id: 96,
        question: "When designing alerts, the 'why' of a good alert generally means:",
        options: [
            "Every alert should be actionable and signal a real problem that needs human attention",
            "Alerts should fire as often as possible for maximum visibility",
            "Alerts should never include annotations",
            "Alerts must be defined exclusively in Grafana"
        ],
        answer: "Every alert should be actionable and signal a real problem that needs human attention",
        explanation: "A good alert is actionable: when it pages someone, there should be a real, important problem requiring a human response. Non-actionable or constant alerts cause fatigue and get ignored."
    },
    {
        id: 97,
        question: "What is the state of an alert in Prometheus before its `for` duration has elapsed?",
        options: [
            "It is sent to Alertmanager immediately",
            "It is silently discarded",
            "It is in the 'pending' state and not yet 'firing'",
            "It is converted into a recording rule"
        ],
        answer: "It is in the 'pending' state and not yet 'firing'",
        explanation: "While the alert expression is true but the `for` duration has not yet been satisfied, the alert is 'pending'. Once the condition holds for the full duration, it transitions to 'firing' and is sent to Alertmanager."
    },
    {
        id: 98,
        question: "How does Prometheus send alerts to Alertmanager?",
        options: [
            "Prometheus pushes firing alerts to Alertmanager's API over HTTP",
            "Alertmanager scrapes the alerts from Prometheus",
            "Alerts are passed through the Pushgateway",
            "Alerts are exposed via the exposition format on /metrics"
        ],
        answer: "Prometheus pushes firing alerts to Alertmanager's API over HTTP",
        explanation: "Although Prometheus pulls metrics from targets, it pushes firing alerts to Alertmanager over HTTP. Alertmanager then deduplicates, groups, and routes them to the configured receivers."
    },
    {
        id: 99,
        question: "A 'runbook' link in an alert annotation helps responders by:",
        options: [
            "Automatically resolving the alert without intervention",
            "Increasing the scrape interval during incidents",
            "Silencing the alert after a delay",
            "Pointing to documented steps for diagnosing and remediating the issue"
        ],
        answer: "Pointing to documented steps for diagnosing and remediating the issue",
        explanation: "A runbook URL in an annotation gives the on-call responder a direct link to documented diagnosis and remediation steps, speeding up incident response. It does not change Prometheus behavior."
    },
    {
        id: 100,
        question: "Which best describes a good dashboard design practice?",
        options: [
            "Put every available metric onto a single panel",
            "Focus on the most relevant signals (for example the USE or RED method) so dashboards aid quick diagnosis",
            "Avoid using any labels in the queries",
            "Display only raw counters without computing rates"
        ],
        answer: "Focus on the most relevant signals (for example the USE or RED method) so dashboards aid quick diagnosis",
        explanation: "Good dashboards highlight the signals that matter, such as the USE method (Utilization, Saturation, Errors) for resources or RED (Rate, Errors, Duration) for services, rather than overwhelming viewers with every metric."
    }
];

const pcaCorrectAnswers = {
    1:  'C',    2: 'A',     3: 'D',     4: 'B',     5: 'A',     6: 'C',     7: 'B',     8: 'D',     9: 'B',    10: 'D',
    11: 'A',    12: 'C',    13: 'D',    14: 'B',    15: 'C',    16: 'A',    17: 'C',    18: 'D',    19: 'A',    20: 'B',
    21: 'B',    22: 'A',    23: 'D',    24: 'C',    25: 'A',    26: 'D',    27: 'C',    28: 'B',    29: 'D',    30: 'C',
    31: 'B',    32: 'A',    33: 'C',    34: 'B',    35: 'A',    36: 'D',    37: 'A',    38: 'B',    39: 'D',    40: 'C',
    41: 'D',    42: 'A',    43: 'C',    44: 'B',    45: 'B',    46: 'C',    47: 'A',    48: 'D',    49: 'C',    50: 'A',
    51: 'B',    52: 'D',    53: 'D',    54: 'B',    55: 'A',    56: 'C',    57: 'A',    58: 'C',    59: 'D',    60: 'B',
    61: 'B',    62: 'D',    63: 'C',    64: 'A',    65: 'C',    66: 'D',    67: 'B',    68: 'A',    69: 'A',    70: 'B',
    71: 'C',    72: 'D',    73: 'D',    74: 'C',    75: 'A',    76: 'B',    77: 'A',    78: 'B',    79: 'C',    80: 'D',
    81: 'C',    82: 'B',    83: 'D',    84: 'A',    85: 'A',    86: 'D',    87: 'B',    88: 'C',    89: 'D',    90: 'A',
    91: 'B',    92: 'C',    93: 'B',    94: 'C',    95: 'D',    96: 'A',    97: 'C',    98: 'A',    99: 'D',    100: 'B'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examInfo: pcaExamInfo, questions: pcaQuestions, correctAnswers: pcaCorrectAnswers, topicMappings: pcaTopicMappings };
}

// Make all variables globally accessible for dynamic loading
window.examInfo = pcaExamInfo;
window.questions = pcaQuestions;
window.correctAnswers = pcaCorrectAnswers;
window.topicMappings = pcaTopicMappings;

// AI Generation Metadata
window.aiGenerated = {
    platform: 'cert-practice-platform',
    generated: '2026-06-13',
    disclaimer: 'This content was generated using AI and should be verified against official Prometheus documentation at https://prometheus.io/docs/introduction/overview/'
};
