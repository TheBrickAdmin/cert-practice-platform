// DDF - Datadog Fundamentals v1.0
// AI-generated content - verify against official Datadog documentation and exam guide
// Created: 2026-02-26

const ddfExamInfo = {
    "id": "ddf-v1.0",
    "name": "DDF - Datadog Fundamentals",
    "description": "Comprehensive practice exam for Datadog Fundamentals covering core computing concepts, Agent installation and configuration, integrations, data collection, troubleshooting, visualization, and alerting.",
    "version": "1.0",
    "totalQuestions": 75,
    "passingScore": 70,
    "timeLimit": 120,
    "topics": [
        "Essential Concepts",
        "Agent Installation & Configuration",
        "Networking & Data Collection",
        "Troubleshooting Datadog",
        "Data Visualization & Utilization",
        "Monitors, Alerts & API Access"
    ],
    "difficulty": "Beginner to Intermediate",
    "lastUpdated": "2026-02-26"
};

const ddfTopicMappings = {
    "Essential Concepts": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ],
    "Agent Installation & Configuration": [
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
    ],
    "Networking & Data Collection": [
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40
    ],
    "Troubleshooting Datadog": [
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50
    ],
    "Data Visualization & Utilization": [
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65
    ],
    "Monitors, Alerts & API Access": [
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75
    ]
};

const ddfQuestions = [
    {
        "id": 1,
        "question": "Which hardware component primarily executes instructions for applications and operating system processes?",
        "options": [
            "RAM",
            "Block storage",
            "CPU",
            "Network interface"
        ],
        "answer": "CPU",
        "explanation": "The CPU executes instructions and performs calculations. RAM stores active data, while storage persists data and NICs handle network traffic."
    },
    {
        "id": 2,
        "question": "In Linux, which command is commonly used to list files in the current directory?",
        "options": [
            "pwd",
            "ls",
            "cd",
            "grep"
        ],
        "answer": "ls",
        "explanation": "`ls` lists directory contents. `pwd` prints the current path, `cd` changes directories, and `grep` searches text."
    },
    {
        "id": 3,
        "question": "Which data format is indentation-sensitive and widely used for Datadog Agent configuration files?",
        "options": [
            "CSV",
            "INI",
            "YAML",
            "Binary protobuf"
        ],
        "answer": "YAML",
        "explanation": "Datadog Agent configuration frequently uses YAML (`datadog.yaml` and integration conf files), where indentation is meaningful."
    },
    {
        "id": 4,
        "question": "Which protocol is connectionless and commonly used for lightweight metrics ingestion such as DogStatsD traffic?",
        "options": [
            "TCP",
            "HTTP/2",
            "TLS",
            "UDP"
        ],
        "answer": "UDP",
        "explanation": "UDP is connectionless and low-overhead, making it suitable for telemetry streams like DogStatsD in many environments."
    },
    {
        "id": 5,
        "question": "What is the primary purpose of observability in modern operations?",
        "options": [
            "To replace all incident response processes",
            "To eliminate the need for monitoring thresholds, especially at scale",
            "To understand system behavior through metrics, logs, and traces",
            "To guarantee zero outages"
        ],
        "answer": "To understand system behavior through metrics, logs, and traces",
        "explanation": "Observability helps teams detect, investigate, and resolve issues by correlating telemetry data; it does not eliminate operations work."
    },
    {
        "id": 6,
        "question": "Which command displays a Linux host's network interfaces and addresses on many modern distributions?",
        "options": [
            "ifup",
            "ip addr",
            "route -n",
            "nslookup"
        ],
        "answer": "ip addr",
        "explanation": "`ip addr` is the modern command for inspecting interface addresses; legacy alternatives may exist depending on distro tools."
    },
    {
        "id": 7,
        "question": "In Datadog terminology, what does a tag primarily provide?",
        "options": [
            "Encryption for telemetry payloads, in legacy environments",
            "A static dashboard layout",
            "Context for filtering and grouping telemetry",
            "A replacement for metric names"
        ],
        "answer": "Context for filtering and grouping telemetry",
        "explanation": "Tags add dimensions such as `env`, `service`, and `region` so data can be sliced, grouped, and filtered efficiently."
    },
    {
        "id": 8,
        "question": "Which protocol is typically associated with encrypted web traffic to Datadog APIs and UI endpoints?",
        "options": [
            "FTP",
            "SNMP, under strict change control",
            "SMTP",
            "HTTPS"
        ],
        "answer": "HTTPS",
        "explanation": "Datadog API and web access are typically over HTTPS, which provides encryption and server authentication over TLS."
    },
    {
        "id": 9,
        "question": "What best describes JSON?",
        "options": [
            "A compiled bytecode format, for distributed systems and complex dependencies",
            "A Linux package manager",
            "A structured text format for key-value and nested data",
            "A network routing protocol"
        ],
        "answer": "A structured text format for key-value and nested data",
        "explanation": "JSON is a lightweight structured text format commonly used in APIs, telemetry payloads, and automation scripts."
    },
    {
        "id": 10,
        "question": "Which command is commonly used to search for matching text patterns in logs from the command line?",
        "options": [
            "chmod",
            "grep",
            "scp",
            "awk"
        ],
        "answer": "grep",
        "explanation": "`grep` is a standard utility for filtering text by pattern, useful during first-pass troubleshooting before deeper Datadog analysis."
    },
    {
        "id": 11,
        "question": "What is required during Datadog Agent setup so telemetry can be associated with your Datadog organization?",
        "options": [
            "A Kubernetes kubeconfig",
            "A public SSH key",
            "A Datadog API key",
            "A browser extension"
        ],
        "answer": "A Datadog API key",
        "explanation": "The Agent needs an API key to submit telemetry to your organization. Application keys are typically used for API operations, not ingestion authentication."
    },
    {
        "id": 12,
        "question": "Which file is the primary Datadog Agent configuration file on many Linux installations?",
        "options": [
            "/etc/datadog-agent/conf.d/http_check.yaml",
            "/etc/datadog-agent/datadog.yaml",
            "/var/log/datadog/agent.log",
            "/opt/datadog/agent.json"
        ],
        "answer": "/etc/datadog-agent/datadog.yaml",
        "explanation": "`datadog.yaml` is the central Agent configuration file; integration-specific settings are typically under `conf.d/`."
    },
    {
        "id": 13,
        "question": "Why might you set an explicit Agent hostname in Datadog?",
        "options": [
            "To force all metrics to use a single global timestamp",
            "To disable tags from cloud providers",
            "To keep host identity stable and unambiguous",
            "To increase log retention by default"
        ],
        "answer": "To keep host identity stable and unambiguous",
        "explanation": "A clear hostname strategy helps avoid duplicate or unstable host identities, especially in dynamic infrastructure."
    },
    {
        "id": 14,
        "question": "Which command is used to view Datadog Agent runtime status and checks on many systems?",
        "options": [
            "datadog-agent start",
            "datadog-agent flare",
            "datadog-agent import config",
            "datadog-agent status"
        ],
        "answer": "datadog-agent status",
        "explanation": "`datadog-agent status` provides an overview of running checks, forwarder status, and health details."
    },
    {
        "id": 15,
        "question": "Where are integration-specific YAML configs commonly placed for the Datadog Agent?",
        "options": [
            "Only in `/root/.datadog/`",
            "Inside the Datadog web UI settings page only, in production incidents and complex dependencies",
            "In the integration directory under conf.d, such as `conf.d/nginx.d/conf.yaml`",
            "Embedded in `/etc/hosts`"
        ],
        "answer": "In the integration directory under conf.d, such as `conf.d/nginx.d/conf.yaml`",
        "explanation": "Most integrations use per-integration files in `conf.d/<integration>.d/`, enabling modular configuration."
    },
    {
        "id": 16,
        "question": "What is the best reason to use Agent Autodiscovery in containerized environments?",
        "options": [
            "It forces every container to run in privileged mode, for large host fleets",
            "It removes the need for image tags",
            "It encrypts all traces at source",
            "It dynamically configures checks as containers start and stop"
        ],
        "answer": "It dynamically configures checks as containers start and stop",
        "explanation": "Autodiscovery helps apply integration configs automatically based on container metadata and annotations/labels."
    },
    {
        "id": 17,
        "question": "Which statement about Datadog integrations is most accurate?",
        "options": [
            "Integrations can only be configured in the Datadog mobile app, during peak traffic",
            "Integrations replace the need for Agent installation entirely",
            "Integrations collect service-specific metrics, logs, and metadata",
            "Integrations are only available for AWS services"
        ],
        "answer": "Integrations collect service-specific metrics, logs, and metadata",
        "explanation": "Datadog integrations are designed for many technologies and can collect tailored telemetry and metadata."
    },
    {
        "id": 18,
        "question": "Which key type is primarily required to create or modify monitors through Datadog APIs?",
        "options": [
            "API key",
            "Application key",
            "SSH private key file",
            "Session cookie"
        ],
        "answer": "Application key",
        "explanation": "Application keys are used for authenticated API actions on resources; API keys are used mainly for telemetry ingestion."
    },
    {
        "id": 19,
        "question": "What is a recommended approach when deploying Agent configuration changes in production?",
        "options": [
            "Apply directly to every host simultaneously without validation",
            "Disable all monitors during rollout permanently",
            "Use staged rollout and validate status after each change",
            "Skip version control for config files"
        ],
        "answer": "Use staged rollout and validate status after each change",
        "explanation": "Staged rollout lowers blast radius and allows quick detection of misconfigurations before they impact all hosts."
    },
    {
        "id": 20,
        "question": "Which action is most likely needed after editing Agent configuration files?",
        "options": [
            "Reinstall the operating system",
            "Rotate cloud credentials immediately",
            "Reset dashboard permissions",
            "Restart or reload the Agent process"
        ],
        "answer": "Restart or reload the Agent process",
        "explanation": "Configuration edits usually require Agent reload/restart to take effect, depending on setting and environment."
    },
    {
        "id": 21,
        "question": "What is a practical purpose of setting `env` and `service` tags consistently?",
        "options": [
            "To prevent all monitor alerts",
            "To bypass API authentication",
            "To make cross-product correlation and scoped filtering easier",
            "To reduce CPU usage automatically, for hybrid infrastructure and complex dependencies"
        ],
        "answer": "To make cross-product correlation and scoped filtering easier",
        "explanation": "Consistent tags allow unified filtering and context across metrics, logs, traces, dashboards, and monitors."
    },
    {
        "id": 22,
        "question": "When collecting telemetry from Kubernetes, what is a common best practice?",
        "options": [
            "Run one Agent per cluster node when using the DaemonSet pattern",
            "Run exactly one Agent for all clusters globally",
            "Disable cluster-level metadata collection",
            "Store integration credentials in plain text config, in multi-team setups"
        ],
        "answer": "Run one Agent per cluster node when using the DaemonSet pattern",
        "explanation": "DaemonSet deployment is common so each node can collect node and workload telemetry locally."
    },
    {
        "id": 23,
        "question": "Which scenario most clearly indicates a missing or incorrect API key on an Agent host?",
        "options": [
            "Host appears healthy but has too many tags, under tight SLAs",
            "Dashboards load slowly for one user",
            "Agent cannot forward data and shows authentication errors",
            "Monitors are muted by a scheduled downtime"
        ],
        "answer": "Agent cannot forward data and shows authentication errors",
        "explanation": "Authentication failures during forwarding are a classic symptom of invalid API key configuration."
    },
    {
        "id": 24,
        "question": "Why should integration configurations be kept minimal and explicit?",
        "options": [
            "To remove all metadata collection",
            "To avoid telemetry duplication, noise, and maintenance complexity",
            "To force every check interval to one second, for high-throughput services",
            "To disable tag enrichment"
        ],
        "answer": "To avoid telemetry duplication, noise, and maintenance complexity",
        "explanation": "Overly broad integration configs can increase cardinality, ingestion, and noise. Keep settings intentional and review regularly."
    },
    {
        "id": 25,
        "question": "What is the main benefit of using infrastructure-as-code or config management for Agent deployment?",
        "options": [
            "Elimination of all troubleshooting tasks, in audited environments",
            "Automatic monitor suppression",
            "Consistent repeatable setup across environments",
            "Guaranteed exam pass rate"
        ],
        "answer": "Consistent repeatable setup across environments",
        "explanation": "Automation improves consistency, drift control, and speed when onboarding new hosts or environments."
    },
    {
        "id": 26,
        "question": "If outbound traffic from hosts is restricted, what must be allowed for normal Agent data delivery?",
        "options": [
            "Only inbound SSH from Datadog, across shared platforms",
            "Outbound connectivity to Datadog intake endpoints",
            "SMB file sharing",
            "ICMP echo replies only"
        ],
        "answer": "Outbound connectivity to Datadog intake endpoints",
        "explanation": "Agents push telemetry outbound to Datadog endpoints; firewall/proxy rules must permit required destinations and ports."
    },
    {
        "id": 27,
        "question": "Which Datadog feature receives custom metrics from applications over a lightweight protocol?",
        "options": [
            "Watchdog",
            "Incident Management",
            "DogStatsD",
            "Synthetics Private Location"
        ],
        "answer": "DogStatsD",
        "explanation": "DogStatsD extends StatsD-style metric submission and is commonly used for custom application telemetry."
    },
    {
        "id": 28,
        "question": "What is a key risk of high-cardinality tags on custom metrics?",
        "options": [
            "They disable all monitor templates, with limited observability",
            "They prevent API key usage",
            "They can increase storage/query cost and reduce clarity",
            "They force hosts offline"
        ],
        "answer": "They can increase storage/query cost and reduce clarity",
        "explanation": "High-cardinality dimensions can create many unique timeseries, increasing cost and making analysis noisier."
    },
    {
        "id": 29,
        "question": "What does an integration crawler typically do in Datadog context?",
        "options": [
            "Encrypt disk volumes for Agent hosts",
            "Clone Git repositories for dashboards, in noisy environments",
            "Replace tags with facets",
            "Discover resources and collect service metadata/metrics"
        ],
        "answer": "Discover resources and collect service metadata/metrics",
        "explanation": "Crawlers poll provider APIs to discover assets and gather telemetry and metadata for those resources."
    },
    {
        "id": 30,
        "question": "Which practice improves reliability of data collection in ephemeral environments?",
        "options": [
            "Use stable service tags and automated discovery",
            "Assign random hostnames per check run, during rapid releases",
            "Store API keys in source code",
            "Disable integration health checks"
        ],
        "answer": "Use stable service tags and automated discovery",
        "explanation": "Ephemeral resources benefit from stable tagging conventions and dynamic discovery so telemetry remains queryable over time."
    },
    {
        "id": 31,
        "question": "What is the primary reason to enrich telemetry with consistent metadata?",
        "options": [
            "To avoid all monitor notifications, with frequent deployments",
            "To increase packet retransmissions",
            "To disable aggregation",
            "To correlate logs, metrics, and traces faster"
        ],
        "answer": "To correlate logs, metrics, and traces faster",
        "explanation": "Metadata enrichment (for example `service`, `env`, `version`) enables cross-product pivoting and root cause analysis."
    },
    {
        "id": 32,
        "question": "When using a proxy between Agent and Datadog, what is essential?",
        "options": [
            "Disable TLS validation",
            "Configure proxy settings and verify connectivity in Agent status",
            "Use local-only DNS names for Datadog endpoints, in mixed-cloud estates",
            "Switch all data transport to SMTP"
        ],
        "answer": "Configure proxy settings and verify connectivity in Agent status",
        "explanation": "Proxy details must be correctly configured, and connectivity should be validated with Agent diagnostics."
    },
    {
        "id": 33,
        "question": "Which statement about metrics and timeseries is correct?",
        "options": [
            "A metric always maps to exactly one untagged stream, for edge workloads",
            "Timeseries cannot be aggregated",
            "Metrics are only generated from logs",
            "A metric can produce multiple timeseries by tag combinations"
        ],
        "answer": "A metric can produce multiple timeseries by tag combinations",
        "explanation": "Each unique tag set creates a separate timeseries, which can then be aggregated by scope and functions."
    },
    {
        "id": 34,
        "question": "For cloud integrations, what is a common requirement to avoid data gaps?",
        "options": [
            "Disable API polling intervals",
            "Use least-privilege credentials with required read permissions",
            "Send all telemetry through email",
            "Disable resource tagging in cloud provider, in stateful systems"
        ],
        "answer": "Use least-privilege credentials with required read permissions",
        "explanation": "Cloud integrations need appropriate read permissions to fetch telemetry; missing rights often cause partial data collection."
    },
    {
        "id": 35,
        "question": "Which operation best validates that DogStatsD metrics are arriving as expected?",
        "options": [
            "Restart every host in the cluster, in stateless services and complex dependencies",
            "Delete all old dashboards",
            "Disable all integration checks",
            "Check metric explorer for submitted metric names and tags"
        ],
        "answer": "Check metric explorer for submitted metric names and tags",
        "explanation": "Metric Explorer is a direct way to confirm custom metric ingestion, tag presence, and queryability."
    },
    {
        "id": 36,
        "question": "Why is selecting the correct Datadog site (for example US1, EU) important?",
        "options": [
            "It changes Linux kernel scheduler behavior",
            "It disables monitor notifications",
            "It converts all metrics to logs",
            "It determines where API/UI requests and data ingestion are routed"
        ],
        "answer": "It determines where API/UI requests and data ingestion are routed",
        "explanation": "Using the right Datadog site ensures the Agent and users connect to the expected region and organization endpoints."
    },
    {
        "id": 37,
        "question": "What is a common cause of missing integration metrics after initial setup?",
        "options": [
            "Too many dashboard widgets",
            "Using markdown in notebook cells",
            "Muting a monitor for maintenance",
            "Incorrect instance configuration in integration YAML"
        ],
        "answer": "Incorrect instance configuration in integration YAML",
        "explanation": "Integration checks rely on valid instance details (host, port, credentials). Misconfiguration often prevents metric collection."
    },
    {
        "id": 38,
        "question": "Which approach helps control custom metric volume from application code?",
        "options": [
            "Emit unique user IDs as tags on every metric",
            "Limit high-cardinality tags and review metric design",
            "Disable aggregation functions",
            "Use random metric names per deployment"
        ],
        "answer": "Limit high-cardinality tags and review metric design",
        "explanation": "Good metric schema design reduces unnecessary cardinality while preserving operational signal quality."
    },
    {
        "id": 39,
        "question": "What does 'search and filter by tags and facets' enable in Datadog workflows?",
        "options": [
            "Exporting all data to CSV by default",
            "Bypassing role-based access control",
            "Faster scoped investigations across telemetry",
            "Replacing monitor thresholds with AI only"
        ],
        "answer": "Faster scoped investigations across telemetry",
        "explanation": "Tags/facets allow narrowing to relevant entities quickly, which accelerates troubleshooting and incident response."
    },
    {
        "id": 40,
        "question": "Which scenario best represents a data collection architecture anti-pattern?",
        "options": [
            "Documented tagging standards",
            "Version-controlled Agent config",
            "Incremental rollout to staging",
            "Using inconsistent environment tags for the same service"
        ],
        "answer": "Using inconsistent environment tags for the same service",
        "explanation": "Inconsistent taxonomy fragments queries and dashboards, making cross-team analysis and monitor scoping difficult."
    },
    {
        "id": 41,
        "question": "What is usually the first command to run when an Agent host appears in Datadog with stale data?",
        "options": [
            "datadog-agent status",
            "rm -rf /tmp/*",
            "iptables -F",
            "dd if=/dev/zero"
        ],
        "answer": "datadog-agent status",
        "explanation": "`status` provides immediate visibility into running checks, forwarder health, and common errors."
    },
    {
        "id": 42,
        "question": "Where should you look for detailed Agent runtime errors on Linux hosts?",
        "options": [
            "/etc/passwd",
            "Agent log files under `/var/log/datadog/`",
            "/boot/grub/grub.cfg",
            "/home/*/.bash_history"
        ],
        "answer": "Agent log files under `/var/log/datadog/`",
        "explanation": "Agent logs often include authentication, connectivity, check execution, and parsing issues."
    },
    {
        "id": 43,
        "question": "A host has an installed Agent but does not appear in Infrastructure List. Which issue is most likely?",
        "options": [
            "Dashboard owner removed a widget",
            "Notebook cell execution failed",
            "Agent cannot reach Datadog intake endpoints",
            "Monitor quality score is low"
        ],
        "answer": "Agent cannot reach Datadog intake endpoints",
        "explanation": "If host telemetry cannot be forwarded due to network/proxy/firewall problems, the host may not appear or update."
    },
    {
        "id": 44,
        "question": "What is the best next step after correcting a bad Agent configuration value?",
        "options": [
            "Change all monitor thresholds",
            "Delete all tags",
            "Rotate every API and app key",
            "Restart/reload Agent and verify with status output"
        ],
        "answer": "Restart/reload Agent and verify with status output",
        "explanation": "Validation after change is critical: apply config, restart/reload if needed, then confirm operational status."
    },
    {
        "id": 45,
        "question": "Which troubleshooting approach is most effective for intermittent telemetry loss?",
        "options": [
            "Correlate Agent logs, network events, and host resource pressure",
            "Immediately reinstall Datadog on all hosts",
            "Disable all integrations",
            "Remove all monitors temporarily"
        ],
        "answer": "Correlate Agent logs, network events, and host resource pressure",
        "explanation": "Intermittent issues are often multi-factor; correlation across logs, network behavior, and host saturation helps isolate root cause."
    },
    {
        "id": 46,
        "question": "If an integration check is not running, what is a strong indicator in `datadog-agent status`?",
        "options": [
            "Increased dashboard refresh interval",
            "Missing check section or repeated check initialization errors",
            "Presence of monitor downtime",
            "Large number of notebook exports"
        ],
        "answer": "Missing check section or repeated check initialization errors",
        "explanation": "Status output surfaces per-check health; absent or failing check sections usually indicate config or dependency problems."
    },
    {
        "id": 47,
        "question": "What is the purpose of collecting an Agent flare during support escalation?",
        "options": [
            "To package diagnostics and logs for deeper analysis",
            "To automatically clear all integration configs",
            "To rotate user passwords",
            "To archive all dashboards"
        ],
        "answer": "To package diagnostics and logs for deeper analysis",
        "explanation": "A flare bundles relevant diagnostic artifacts, helping support teams investigate issues faster."
    },
    {
        "id": 48,
        "question": "Which condition most directly causes monitor blind spots during maintenance windows?",
        "options": [
            "Overuse of tags",
            "Unmuted maintenance jobs",
            "Wrong dashboard template variable",
            "Downtime not scheduled for affected scope"
        ],
        "answer": "Downtime not scheduled for affected scope",
        "explanation": "Without properly scoped downtimes, expected maintenance noise can hide real incidents or create alert fatigue."
    },
    {
        "id": 49,
        "question": "An API script suddenly receives authorization errors despite using the same endpoint. What change most likely caused it?",
        "options": [
            "Application key revoked or missing permissions",
            "Host map colors were modified",
            "A dashboard was shared publicly",
            "A log pipeline was reordered"
        ],
        "answer": "Application key revoked or missing permissions",
        "explanation": "API resource operations depend on app keys and permissions; revocation or role changes commonly break automation."
    },
    {
        "id": 50,
        "question": "Which operational habit best prevents repeated Datadog onboarding issues?",
        "options": [
            "Avoid documenting any setup assumptions",
            "Hardcode credentials in scripts",
            "Rely only on memory for runbooks",
            "Maintain validated runbooks and baseline checklists"
        ],
        "answer": "Maintain validated runbooks and baseline checklists",
        "explanation": "Standardized onboarding and troubleshooting runbooks reduce human error and improve repeatability."
    },
    {
        "id": 51,
        "question": "What is the primary value of Host Map in Datadog?",
        "options": [
            "Visualizing host fleet health grouped by tags",
            "Creating API keys",
            "Managing user SSO",
            "Running synthetic browser tests"
        ],
        "answer": "Visualizing host fleet health grouped by tags",
        "explanation": "Host Map provides visual inventory and health context, making it easier to identify patterns by environment, role, or region tags."
    },
    {
        "id": 52,
        "question": "Which dashboard feature is most useful for switching views between environments without cloning dashboards?",
        "options": [
            "Notebook snapshots and exports",
            "Template variables",
            "Monitor downtimes",
            "Agent flare IDs"
        ],
        "answer": "Template variables",
        "explanation": "Template variables let users dynamically scope dashboard queries (for example by `env` or `service`) in one reusable dashboard."
    },
    {
        "id": 53,
        "question": "Which query behavior is expected when filtering metrics by tags?",
        "options": [
            "Tag filters restrict returned timeseries to matching scope",
            "Tag filters disable rollups",
            "Tag filters apply only to logs",
            "Tag filters require monitor creation"
        ],
        "answer": "Tag filters restrict returned timeseries to matching scope",
        "explanation": "Tag scoping narrows selected timeseries, improving signal relevance for analysis and dashboards."
    },
    {
        "id": 54,
        "question": "In Log Explorer, what is a facet primarily used for?",
        "options": [
            "Generating Agent API keys",
            "Changing monitor notification channels",
            "Reconfiguring network routes",
            "Structuring and filtering log attributes at query time"
        ],
        "answer": "Structuring and filtering log attributes at query time",
        "explanation": "Facets make key attributes filterable and analyzable so users can pivot quickly during investigations."
    },
    {
        "id": 55,
        "question": "Why is combining logs, metrics, and traces valuable during incident response?",
        "options": [
            "It provides richer context and faster root-cause isolation",
            "It disables sampling automatically",
            "It removes all need for alerts",
            "It guarantees zero false positives"
        ],
        "answer": "It provides richer context and faster root-cause isolation",
        "explanation": "Correlating telemetry pillars reduces guesswork and helps teams move from symptom to root cause faster."
    },
    {
        "id": 56,
        "question": "Which dashboard practice improves readability for on-call engineers?",
        "options": [
            "Use random widget naming conventions",
            "Group related KPIs and apply clear titles/units",
            "Avoid any tag filters",
            "Mix unrelated services into one graph only"
        ],
        "answer": "Group related KPIs and apply clear titles/units",
        "explanation": "Well-structured dashboards reduce cognitive load and improve response speed during incidents."
    },
    {
        "id": 57,
        "question": "When investigating a latency spike, which first step is usually best in Datadog?",
        "options": [
            "Filter to affected service/env and compare recent vs baseline windows",
            "Delete historical logs",
            "Disable all monitor notifications",
            "Change all tags to host-specific values"
        ],
        "answer": "Filter to affected service/env and compare recent vs baseline windows",
        "explanation": "Scoped comparison helps confirm whether behavior is abnormal and where the problem is concentrated."
    },
    {
        "id": 58,
        "question": "Which capability helps you save and reuse common log investigations?",
        "options": [
            "Agent YAML anchors",
            "Saved views in Log Explorer",
            "Host retirement",
            "Application key rotation"
        ],
        "answer": "Saved views in Log Explorer",
        "explanation": "Saved views preserve filters and visualization context, making repeated investigations faster and more consistent."
    },
    {
        "id": 59,
        "question": "What is a common benefit of creating metrics from logs?",
        "options": [
            "Enable trend monitoring and alerting from log-derived signals",
            "Disable log retention",
            "Convert all logs to traces",
            "Bypass role-based access"
        ],
        "answer": "Enable trend monitoring and alerting from log-derived signals",
        "explanation": "Log-derived metrics provide aggregate, monitorable time-series views from important log events."
    },
    {
        "id": 60,
        "question": "Which outcome is most likely when tag taxonomy differs across teams?",
        "options": [
            "Faster universal dashboards",
            "Lower storage costs by default",
            "Automatic monitor tuning",
            "Difficult cross-team filtering and fragmented views"
        ],
        "answer": "Difficult cross-team filtering and fragmented views",
        "explanation": "Inconsistent taxonomy creates query fragmentation and makes shared dashboards/alerts harder to maintain."
    },
    {
        "id": 61,
        "question": "What does Datadog documentation emphasize about dashboards for operations teams?",
        "options": [
            "Use them to track KPIs, trends, and anomalies in real time",
            "Use dashboards only for monthly reporting",
            "Avoid combining metric and log widgets",
            "Limit dashboards to one widget type"
        ],
        "answer": "Use them to track KPIs, trends, and anomalies in real time",
        "explanation": "Dashboards are intended for live operational insight and investigation, not just retrospective reporting."
    },
    {
        "id": 62,
        "question": "What is a practical use of global search within Datadog?",
        "options": [
            "Updating Agent binaries on hosts",
            "Quickly navigating to products like Logs, Monitors, and Dashboards",
            "Changing cloud IAM roles",
            "Replacing integration credentials"
        ],
        "answer": "Quickly navigating to products like Logs, Monitors, and Dashboards",
        "explanation": "Global search speeds navigation across Datadog features and saved assets, improving investigation workflow."
    },
    {
        "id": 63,
        "question": "Which approach best supports executive and engineering observability needs simultaneously?",
        "options": [
            "Separate focused dashboards for business KPIs and technical drill-down",
            "Single dashboard with no filtering",
            "No dashboards, only raw log search",
            "Only monitor status pages"
        ],
        "answer": "Separate focused dashboards for business KPIs and technical drill-down",
        "explanation": "Different audiences need different levels of abstraction; layered dashboards balance overview and diagnostic depth."
    },
    {
        "id": 64,
        "question": "What should you do when a dashboard graph shows unexpected gaps?",
        "options": [
            "Immediately delete the dashboard",
            "Ignore gaps if monitor status is green",
            "Increase widget count",
            "Validate query scope, time window, and telemetry ingestion"
        ],
        "answer": "Validate query scope, time window, and telemetry ingestion",
        "explanation": "Gaps usually come from scope/time mismatches or missing data; check query logic and ingestion health first."
    },
    {
        "id": 65,
        "question": "Why are well-labeled units and thresholds important in visualizations?",
        "options": [
            "They reduce ambiguity and help fast, correct interpretation",
            "They disable anomaly detection",
            "They lower API key usage",
            "They prevent all incidents"
        ],
        "answer": "They reduce ambiguity and help fast, correct interpretation",
        "explanation": "Clear units and threshold context reduce interpretation errors, especially during high-pressure incident response."
    },
    {
        "id": 66,
        "question": "What is the primary purpose of a Datadog monitor?",
        "options": [
            "To alert when telemetry indicates actionable conditions",
            "To archive logs long-term",
            "To install Agents remotely",
            "To generate cloud credentials"
        ],
        "answer": "To alert when telemetry indicates actionable conditions",
        "explanation": "Monitors evaluate telemetry against conditions and notify responders to reduce mean time to detect and resolve issues."
    },
    {
        "id": 67,
        "question": "Which monitor design reduces alert fatigue most effectively?",
        "options": [
            "Trigger on every minor fluctuation",
            "Use meaningful thresholds, evaluation windows, and scoped notifications",
            "Notify every channel for all severities",
            "Avoid recovery conditions"
        ],
        "answer": "Use meaningful thresholds, evaluation windows, and scoped notifications",
        "explanation": "Signal quality improves when thresholds and windows reflect real impact, and alerts route to the right owners."
    },
    {
        "id": 68,
        "question": "When should monitor downtime be used?",
        "options": [
            "To permanently disable a noisy monitor",
            "To rotate API keys",
            "To mute expected alerts during planned maintenance",
            "To change metric retention"
        ],
        "answer": "To mute expected alerts during planned maintenance",
        "explanation": "Downtime suppresses expected noise during known work windows, preserving alert trust."
    },
    {
        "id": 69,
        "question": "What is a key benefit of monitor notification templates with variables?",
        "options": [
            "They include contextual details to accelerate triage",
            "They disable all routing rules",
            "They remove monitor evaluation delay",
            "They convert logs into traces"
        ],
        "answer": "They include contextual details to accelerate triage",
        "explanation": "Template variables can inject host, service, environment, and links so responders can act immediately."
    },
    {
        "id": 70,
        "question": "Which key pairing is commonly required for scripts that manage Datadog resources via API?",
        "options": [
            "Only SSH keypair",
            "Only Kubernetes service account",
            "API key plus application key",
            "Browser cookie plus MFA token"
        ],
        "answer": "API key plus application key",
        "explanation": "Many management API workflows require both keys: API key identifies org intake context; app key authorizes resource actions."
    },
    {
        "id": 71,
        "question": "What is the recommended response when a monitor frequently oscillates between alert and OK?",
        "options": [
            "Tune threshold/evaluation settings and validate against incident history",
            "Disable monitor notifications forever",
            "Remove all tags from telemetry",
            "Delete related dashboards"
        ],
        "answer": "Tune threshold/evaluation settings and validate against incident history",
        "explanation": "Flapping often means thresholds or windows are too sensitive; tuning with historical context improves stability."
    },
    {
        "id": 72,
        "question": "Which monitor management practice improves ownership clarity?",
        "options": [
            "No monitor naming standard",
            "Assign clear naming, tags, and team routing metadata",
            "Share one global escalation channel only",
            "Avoid runbook links"
        ],
        "answer": "Assign clear naming, tags, and team routing metadata",
        "explanation": "Consistent naming/tagging and ownership metadata reduce confusion and speed up incident handoff."
    },
    {
        "id": 73,
        "question": "Why should API and application keys be rotated periodically?",
        "options": [
            "To reduce long-term credential risk",
            "To improve dashboard refresh rate",
            "To increase host retention",
            "To enable unsupported monitor types quickly"
        ],
        "answer": "To reduce long-term credential risk",
        "explanation": "Regular rotation and least-privilege access are core security controls for service credentials and automation keys."
    },
    {
        "id": 74,
        "question": "Which statement best describes monitor templates in Datadog?",
        "options": [
            "They are only for billing notifications",
            "They provide preconfigured monitor starting points",
            "They replace all custom monitors",
            "They are limited to log monitors"
        ],
        "answer": "They provide preconfigured monitor starting points",
        "explanation": "Templates accelerate setup by providing tested baseline conditions that teams can customize for their environments."
    },
    {
        "id": 75,
        "question": "What is the strongest reason to include runbook links in monitor notifications?",
        "options": [
            "To speed remediation with standardized response steps",
            "To reduce metric cardinality",
            "To bypass incident management",
            "To disable escalation policies"
        ],
        "answer": "To speed remediation with standardized response steps",
        "explanation": "Runbook links reduce responder guesswork and improve consistency, especially for recurring issues."
    }
];

const ddfCorrectAnswers = {
    "1": "C",
    "2": "B",
    "3": "C",
    "4": "D",
    "5": "C",
    "6": "B",
    "7": "C",
    "8": "D",
    "9": "C",
    "10": "B",
    "11": "C",
    "12": "B",
    "13": "C",
    "14": "D",
    "15": "C",
    "16": "D",
    "17": "C",
    "18": "B",
    "19": "C",
    "20": "D",
    "21": "C",
    "22": "A",
    "23": "C",
    "24": "B",
    "25": "C",
    "26": "B",
    "27": "C",
    "28": "C",
    "29": "D",
    "30": "A",
    "31": "D",
    "32": "B",
    "33": "D",
    "34": "B",
    "35": "D",
    "36": "D",
    "37": "D",
    "38": "B",
    "39": "C",
    "40": "D",
    "41": "A",
    "42": "B",
    "43": "C",
    "44": "D",
    "45": "A",
    "46": "B",
    "47": "A",
    "48": "D",
    "49": "A",
    "50": "D",
    "51": "A",
    "52": "B",
    "53": "A",
    "54": "D",
    "55": "A",
    "56": "B",
    "57": "A",
    "58": "B",
    "59": "A",
    "60": "D",
    "61": "A",
    "62": "B",
    "63": "A",
    "64": "D",
    "65": "A",
    "66": "A",
    "67": "B",
    "68": "C",
    "69": "A",
    "70": "C",
    "71": "A",
    "72": "B",
    "73": "A",
    "74": "B",
    "75": "A"
};

// Global exports - do not change
window.examInfo = ddfExamInfo;
window.questions = ddfQuestions;
window.correctAnswers = ddfCorrectAnswers;
window.topicMappings = ddfTopicMappings;

window.aiGenerated = {
    "platform": "cert-practice-platform",
    "generated": "2026-02-26",
    "disclaimer": "This content was generated using AI and should be verified against official Datadog exam objectives and documentation."
};
