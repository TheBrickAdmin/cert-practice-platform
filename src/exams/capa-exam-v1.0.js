// CAPA - Certified Argo Project Associate v1.0
// Auto-generated from Questions.md

const capaExamInfo = {
    id: 'capa-v1.0',
    name: 'CAPA - Certified Argo Project Associate',
    description: 'Practice exam for the Certified Argo Project Associate certification covering GitOps, Argo CD, Argo Workflows, Argo Events, and Argo Rollouts.',
    version: '1.0',
    totalQuestions: 100,
    passingScore: 70,
    topics: ['Argo CD Fundamentals', 'Argo CD Advanced', 'Argo Workflows', 'Argo Events', 'Argo Rollouts', 'Integration & Advanced'],
    lastUpdated: '2025-11-02'
};

// Topic mappings for detailed scoring
const capaTopicMappings = {
    'Argo CD Fundamentals': [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    'Argo CD Advanced': [16,26,27,28,29,30,31,32,33,34,35,51,52,53,54,55,56,57,70,71,72,73],
    'Argo Workflows': [36,37,38,39,40,41,58,59,60,61,74,75,76,77],
    'Argo Events': [17,18,19,20,42,43,44,45,62,63,64,65,78,79,80],
    'Argo Rollouts': [21,22,23,24,25,46,47,48,49,50,66,67,68,69,81,82,83,84],
    'Integration & Advanced': [85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
};

const capaQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of Argo CD?",
        options: [
            "To provide a web-based IDE for Kubernetes development",
            "To monitor Kubernetes cluster performance and metrics",
            "To serve as a declarative, GitOps continuous delivery tool for Kubernetes",
            "To manage Kubernetes networking and service mesh configurations"
        ],
        answer: "To serve as a declarative, GitOps continuous delivery tool for Kubernetes",
        explanation: "Argo CD follows the GitOps methodology where Git repositories serve as the single source of truth for application configurations. It continuously monitors Git repositories for changes and automatically synchronizes the desired state with the actual state in Kubernetes clusters."
    },
    {
        id: 2,
        question: "Which of the following best describes the GitOps workflow pattern?",
        options: [
            "A methodology that uses push-based deployments from CI/CD pipelines",
            "A pattern where infrastructure is managed through imperative commands",
            "A deployment methodology where Git repositories serve as the single source of truth for declarative infrastructure and application configurations",
            "A workflow that requires manual approval for all infrastructure changes"
        ],
        answer: "A deployment methodology where Git repositories serve as the single source of truth for declarative infrastructure and application configurations",
        explanation: "GitOps relies on Git as the single source of truth, uses pull-based deployment mechanisms, employs declarative configuration, and provides continuous reconciliation between desired and actual states."
    },
    {
        id: 3,
        question: "What is an Argo CD Application?",
        options: [
            "A Kubernetes pod that runs application containers",
            "A Git repository containing application source code",
            "A custom resource that defines source repository, target cluster, and synchronization policies",
            "A Docker image registry for storing container images"
        ],
        answer: "A custom resource that defines source repository, target cluster, and synchronization policies",
        explanation: "Applications in Argo CD are CRDs (Custom Resource Definitions) that specify where to find the source code (Git repository), where to deploy it (destination cluster/namespace), and how to manage the synchronization process."
    },
    {
        id: 4,
        question: "What is the purpose of Argo CD's Application Controller?",
        options: [
            "To provide a web interface for managing applications",
            "To monitor Application resources, pull configurations from Git, and apply them to target clusters",
            "To store application configurations in a database",
            "To handle user authentication and authorization"
        ],
        answer: "To monitor Application resources, pull configurations from Git, and apply them to target clusters",
        explanation: "The Application Controller runs continuously, watches for changes in both Git repositories and Kubernetes clusters, detects drift between desired and actual states, and performs synchronization operations to maintain consistency."
    },
    {
        id: 5,
        question: "Which component of Argo CD provides the web-based user interface?",
        options: [
            "Argo CD Server",
            "Repository Server",
            "Application Controller",
            "Dex Identity Service"
        ],
        answer: "Argo CD Server",
        explanation: "The Argo CD Server is a stateless component that serves the web UI, handles API requests, and provides authentication and authorization capabilities for users interacting with Argo CD."
    },
    {
        id: 6,
        question: "What is the purpose of the Repository Server in Argo CD?",
        options: [
            "To store Git repositories locally within the cluster",
            "To synchronize changes between multiple Git repositories",
            "To manage user permissions for repository access",
            "To clone Git repositories, render Kubernetes manifests, and cache rendered manifests"
        ],
        answer: "To clone Git repositories, render Kubernetes manifests, and cache rendered manifests",
        explanation: "The Repository Server isolates the repository access logic and provides manifest generation services. It supports multiple configuration management tools and caches results to improve performance."
    },
    {
        id: 7,
        question: "What does \"OutOfSync\" status mean in Argo CD?",
        options: [
            "The Git repository is unreachable",
            "The application has failed to start",
            "The live state in the cluster differs from the desired state in Git",
            "The application is currently being synchronized"
        ],
        answer: "The live state in the cluster differs from the desired state in Git",
        explanation: "This status appears when there's a drift between what's actually running in the cluster and what's defined in Git. This could be due to manual changes in the cluster, updates in Git that haven't been applied, or external modifications."
    },
    {
        id: 8,
        question: "What is the difference between manual and automatic sync policies in Argo CD?",
        options: [
            "Manual sync uses webhooks while automatic sync uses polling",
            "Manual sync requires user intervention while automatic sync continuously applies changes without user intervention",
            "Manual sync only works with Helm charts while automatic sync works with all manifest types",
            "Manual sync is faster than automatic sync"
        ],
        answer: "Manual sync requires user intervention while automatic sync continuously applies changes without user intervention",
        explanation: "Manual sync provides more control and safety, requiring explicit approval before changes are applied. Automatic sync enables true continuous deployment but requires careful consideration of change management processes."
    },
    {
        id: 9,
        question: "What is a sync wave in Argo CD?",
        options: [
            "A batch of applications that are synchronized together",
            "A method for grouping related applications",
            "A rolling update strategy for deployments",
            "An annotation that controls the order in which resources are applied during synchronization"
        ],
        answer: "An annotation that controls the order in which resources are applied during synchronization",
        explanation: "Sync waves enable fine-grained control over resource application order, which is crucial for dependencies like databases needing to be ready before applications, or ConfigMaps before Deployments."
    },
    {
        id: 10,
        question: "What is the purpose of Argo CD's health checks?",
        options: [
            "To monitor the health of Git repositories",
            "To check the connectivity between Argo CD and target clusters",
            "To determine whether deployed resources are running correctly and ready to serve traffic",
            "To validate YAML syntax in Git repositories"
        ],
        answer: "To determine whether deployed resources are running correctly and ready to serve traffic",
        explanation: "Argo CD includes built-in health checks for common Kubernetes resources and allows custom health checks. This helps distinguish between successfully deployed but unhealthy applications."
    },
    {
        id: 11,
        question: "What is Argo Workflows primarily used for?",
        options: [
            "Managing Kubernetes cluster networking and security policies",
            "Orchestrating parallel jobs and workflows on Kubernetes",
            "Providing continuous integration and source code management",
            "Monitoring application performance and generating alerts"
        ],
        answer: "Orchestrating parallel jobs and workflows on Kubernetes",
        explanation: "Argo Workflows provides a declarative way to define complex workflows as DAGs (Directed Acyclic Graphs) using Kubernetes custom resources, enabling scalable and parallel execution of containerized tasks."
    },
    {
        id: 12,
        question: "What is a Workflow template in Argo Workflows?",
        options: [
            "A reusable workflow definition that can be parameterized and instantiated multiple times",
            "A Git repository structure for organizing workflow files",
            "A Kubernetes deployment configuration for workflow controllers",
            "A monitoring dashboard template for tracking workflow execution"
        ],
        answer: "A reusable workflow definition that can be parameterized and instantiated multiple times",
        explanation: "Workflow templates promote reusability and standardization by allowing teams to create template workflows that can be used across different projects with varying parameters and configurations."
    },
    {
        id: 13,
        question: "What are the main step types available in Argo Workflows?",
        options: [
            "Build steps, test steps, deploy steps, and monitor steps",
            "Sequential steps, parallel steps, conditional steps, and loop steps",
            "Container steps, script steps, resource steps, and suspend steps",
            "Input steps, processing steps, output steps, and validation steps"
        ],
        answer: "Container steps, script steps, resource steps, and suspend steps",
        explanation: "Each step type serves different purposes: container steps for running applications, script steps for inline code execution, resource steps for Kubernetes operations, and suspend steps for manual approvals or timing controls."
    },
    {
        id: 14,
        question: "What is the purpose of artifacts in Argo Workflows?",
        options: [
            "To store workflow execution logs and debugging information",
            "To define the container images used in workflow steps",
            "To pass data between workflow steps using external storage",
            "To configure network policies for workflow execution"
        ],
        answer: "To pass data between workflow steps using external storage",
        explanation: "Artifacts enable data flow between steps in a workflow, allowing outputs from one step to be inputs to another. They're stored externally to the workflow execution environment for persistence and sharing."
    },
    {
        id: 15,
        question: "What is a DAG (Directed Acyclic Graph) template in Argo Workflows?",
        options: [
            "A template that defines linear, sequential workflow execution",
            "A template that defines workflow steps with dependencies and parallel execution patterns",
            "A template used for creating circular workflow dependencies",
            "A template for defining database access patterns in workflows"
        ],
        answer: "A template that defines workflow steps with dependencies and parallel execution patterns",
        explanation: "DAG templates allow for complex workflow patterns with conditional execution, parallel processing, and dependency management, making them ideal for sophisticated CI/CD and data processing pipelines."
    },
    {
        id: 16,
        question: "What is the Workflow Controller in Argo Workflows?",
        options: [
            "A user interface component for managing workflows through a web browser",
            "A security component that controls access to workflow execution",
            "The core component that watches for Workflow resources and manages their lifecycle",
            "A monitoring service that collects metrics from running workflows"
        ],
        answer: "The core component that watches for Workflow resources and manages their lifecycle",
        explanation: "The Workflow Controller operates as a Kubernetes controller, continuously reconciling the desired workflow state with the actual execution state, managing pod creation, monitoring step completion, and handling failures."
    },
    {
        id: 17,
        question: "What is Argo Events used for?",
        options: [
            "Monitoring and alerting for Kubernetes cluster events",
            "Real-time streaming of application performance metrics",
            "Logging and auditing of application deployment events",
            "Event-driven workflow automation that triggers actions in response to various events"
        ],
        answer: "Event-driven workflow automation that triggers actions in response to various events",
        explanation: "Argo Events enables reactive automation by connecting event sources (webhooks, message queues, file systems) with event triggers that can launch workflows, update applications, or perform other automated actions."
    },
    {
        id: 18,
        question: "What are Event Sources in Argo Events?",
        options: [
            "Kubernetes pods that generate application logs and metrics",
            "Configurations that define how to consume events from external systems",
            "Database tables that store historical event information",
            "Network endpoints that receive HTTP requests from applications"
        ],
        answer: "Configurations that define how to consume events from external systems",
        explanation: "Event Sources act as adapters that standardize event consumption from various external systems, converting different event formats into a common format that can be processed by Argo Events."
    },
    {
        id: 19,
        question: "What are Sensors in Argo Events?",
        options: [
            "Resources that listen for events and trigger actions based on event conditions",
            "Hardware devices that monitor physical infrastructure conditions",
            "Monitoring agents that collect metrics from Kubernetes clusters",
            "Network security components that detect intrusion attempts"
        ],
        answer: "Resources that listen for events and trigger actions based on event conditions",
        explanation: "Sensors implement the event processing logic, including filtering, transformation, and conditional triggering. They bridge the gap between event reception and action execution."
    },
    {
        id: 20,
        question: "What is an EventBus in Argo Events?",
        options: [
            "A physical network bus for connecting event processing hardware",
            "The messaging infrastructure that transports events from sources to sensors",
            "A database that stores event history for audit and compliance",
            "A web interface for monitoring event processing performance"
        ],
        answer: "The messaging infrastructure that transports events from sources to sensors",
        explanation: "EventBus provides reliable event delivery, buffering, and distribution capabilities, ensuring events are properly routed from sources to sensors even under high load or system failures."
    },
    {
        id: 21,
        question: "What is Argo Rollouts primarily designed for?",
        options: [
            "Managing Kubernetes cluster networking and DNS resolution",
            "Storing and versioning container images in a registry",
            "Monitoring application performance and generating real-time alerts",
            "Providing advanced deployment strategies like blue-green and canary deployments"
        ],
        answer: "Providing advanced deployment strategies like blue-green and canary deployments",
        explanation: "Argo Rollouts extends Kubernetes Deployments with sophisticated deployment patterns that enable safer releases through gradual traffic shifting, automated metrics analysis, and automatic rollback on failure detection."
    },
    {
        id: 22,
        question: "What is a Rollout resource in Argo Rollouts?",
        options: [
            "A Kubernetes Service that manages network traffic routing",
            "A custom resource that defines advanced deployment strategies, replacing standard Deployments",
            "A ConfigMap that stores deployment configuration parameters",
            "A Secret that contains sensitive deployment credentials"
        ],
        answer: "A custom resource that defines advanced deployment strategies, replacing standard Deployments",
        explanation: "Rollouts provide more sophisticated deployment control than standard Deployments, including traffic management, analysis runs, and automated decision-making based on metrics and manual approvals."
    },
    {
        id: 23,
        question: "What is the difference between blue-green and canary deployment strategies?",
        options: [
            "Blue-green is for databases while canary is for applications",
            "Blue-green requires manual approval while canary is fully automated",
            "Blue-green switches all traffic at once between environments; canary gradually shifts traffic",
            "Blue-green uses containers while canary uses virtual machines"
        ],
        answer: "Blue-green switches all traffic at once between environments; canary gradually shifts traffic",
        explanation: "Blue-green offers instant rollback and clear separation but requires double resources. Canary provides risk mitigation through gradual rollout and real-world testing but takes longer to complete."
    },
    {
        id: 24,
        question: "What are Analysis Templates in Argo Rollouts?",
        options: [
            "User interface templates for deployment monitoring dashboards",
            "Database schemas for storing deployment history and audit logs",
            "Network configuration templates for service mesh integration",
            "Templates that define metrics queries and success criteria for automated deployment decisions"
        ],
        answer: "Templates that define metrics queries and success criteria for automated deployment decisions",
        explanation: "Analysis Templates integrate with monitoring systems like Prometheus, Datadog, or New Relic to provide data-driven deployment decisions, reducing the risk of deploying problematic releases."
    },
    {
        id: 25,
        question: "What is the Rollouts Controller?",
        options: [
            "A component that manages Rollout resources and orchestrates deployment strategies",
            "A web interface for manually managing deployment rollouts",
            "A database that stores rollout history and configuration",
            "A network proxy that handles traffic routing during deployments"
        ],
        answer: "A component that manages Rollout resources and orchestrates deployment strategies",
        explanation: "The controller continuously watches Rollout resources, manages replica sets, coordinates with traffic management systems, and executes the deployment logic defined in the Rollout specification."
    },
    {
        id: 26,
        question: "How does Argo CD handle secrets management?",
        options: [
            "Stores all secrets directly in Git repositories for version control",
            "Requires all secrets to be manually entered through the web interface",
            "Encrypts secrets using built-in AES encryption before storing in Git",
            "Integrates with external secret management systems rather than storing secrets in Git"
        ],
        answer: "Integrates with external secret management systems rather than storing secrets in Git",
        explanation: "Since Git repositories should not contain sensitive data, Argo CD works with secret management solutions that inject secrets at deployment time from secure external stores like HashiCorp Vault or cloud provider secret services."
    },
    {
        id: 27,
        question: "What is the purpose of Argo CD Projects?",
        options: [
            "To offer logical grouping of applications with shared policies and RBAC restrictions",
            "To provide IDE integration for application development",
            "To manage container image building and registry operations",
            "To handle database migrations and schema versioning"
        ],
        answer: "To offer logical grouping of applications with shared policies and RBAC restrictions",
        explanation: "Projects enable multi-tenancy by isolating applications and controlling which teams can deploy to which clusters and namespaces, providing security boundaries and governance controls."
    },
    {
        id: 28,
        question: "What is the Application Sets controller in Argo CD?",
        options: [
            "A component that manages container image sets and registries",
            "A controller that automatically generates multiple Applications based on templates",
            "A service that handles user authentication and session management",
            "A tool for managing database connection pools and transactions"
        ],
        answer: "A controller that automatically generates multiple Applications based on templates",
        explanation: "ApplicationSets reduce manual overhead when managing many similar applications, providing declarative generation of applications with different parameters for various environments, reducing configuration drift."
    },
    {
        id: 29,
        question: "What are the supported generators in Argo CD ApplicationSets?",
        options: [
            "Git directory, Git file, Cluster, List, and Matrix generators",
            "Container generators, image generators, and registry generators",
            "Database generators, API generators, and webhook generators",
            "Network generators, storage generators, and compute generators"
        ],
        answer: "Git directory, Git file, Cluster, List, and Matrix generators",
        explanation: "Each generator serves different use cases: Git generators for repository-based discovery, Cluster generators for multi-cluster deployments, List generators for explicit enumeration, and Matrix generators for complex combinations."
    },
    {
        id: 30,
        question: "What is the refresh annotation in Argo CD?",
        options: [
            "An annotation that forces immediate refresh of application state from Git",
            "An annotation that schedules automatic application updates every hour",
            "An annotation that enables real-time monitoring of application health",
            "An annotation that triggers automatic scaling of application resources"
        ],
        answer: "An annotation that forces immediate refresh of application state from Git",
        explanation: "This annotation is useful when you need to trigger immediate synchronization checking outside of the normal polling interval, particularly after making changes that should be reflected quickly."
    },
    {
        id: 31,
        question: "How does Argo CD handle Helm charts?",
        options: [
            "Argo CD cannot work with Helm charts and requires plain YAML manifests",
            "Argo CD renders Helm charts into Kubernetes manifests using the Helm template engine",
            "Argo CD only supports Helm charts stored in OCI registries",
            "Argo CD requires a separate Helm operator for chart deployment"
        ],
        answer: "Argo CD renders Helm charts into Kubernetes manifests using the Helm template engine",
        explanation: "Argo CD treats Helm charts as another manifest source, rendering them with specified values and applying the resulting Kubernetes resources while maintaining GitOps principles."
    },
    {
        id: 32,
        question: "What is Kustomize support in Argo CD?",
        options: [
            "Kustomize is not supported in Argo CD and requires external tools",
            "Argo CD natively supports Kustomize for overlay-based configuration management",
            "Kustomize only works with Argo CD in offline mode",
            "Argo CD requires manual conversion of Kustomize to plain YAML"
        ],
        answer: "Argo CD natively supports Kustomize for overlay-based configuration management",
        explanation: "Kustomize enables configuration management without templating, using patches and overlays to customize base configurations for different environments while maintaining clear inheritance relationships."
    },
    {
        id: 33,
        question: "What are pre-sync and post-sync hooks in Argo CD?",
        options: [
            "Tasks that run before and after synchronization operations",
            "Database backup operations that run automatically",
            "Hooks that run during cluster maintenance windows only",
            "Security scans that validate deployment configurations"
        ],
        answer: "Tasks that run before and after synchronization operations",
        explanation: "Hooks enable execution of additional tasks during the deployment process, providing integration points for database migrations, testing, notifications, or other operational tasks that should occur at specific points in the deployment lifecycle."
    },
    {
        id: 34,
        question: "What is the significance of the `argocd.argoproj.io/sync-options` annotation?",
        options: [
            "It defines the Git repository branch to sync from",
            "It sets the synchronization schedule for applications",
            "It controls sync behavior for specific resources with various options",
            "It configures user access permissions for applications"
        ],
        answer: "It controls sync behavior for specific resources with various options",
        explanation: "Sync options provide fine-grained control over how individual resources are handled during synchronization, allowing customization of validation, creation behavior, and error handling on a per-resource basis."
    },
    {
        id: 35,
        question: "What is the purpose of resource filters in Argo CD?",
        options: [
            "To improve application performance by filtering network traffic",
            "To exclude specific Kubernetes resources from Argo CD management",
            "To filter log messages based on severity levels",
            "To compress resource definitions for storage efficiency"
        ],
        answer: "To exclude specific Kubernetes resources from Argo CD management",
        explanation: "Resource filters prevent conflicts when multiple systems manage the same cluster by explicitly excluding certain resource types or specific resources from Argo CD's synchronization process."
    },
    {
        id: 36,
        question: "How does Argo Workflows handle workflow parameter passing?",
        options: [
            "Parameters can only be hardcoded in workflow templates and cannot be changed at runtime",
            "Workflow parameters are only supported through environment variables",
            "Parameters must be stored in external databases and fetched during execution",
            "Workflows support parameters passed at submission time with default values in templates"
        ],
        answer: "Workflows support parameters passed at submission time with default values in templates",
        explanation: "Parameters enable workflow reusability by allowing the same workflow template to be executed with different inputs, supporting both simple values and complex objects for flexible workflow execution."
    },
    {
        id: 37,
        question: "What are workflow conditions in Argo Workflows?",
        options: [
            "Network connectivity requirements that must be met before workflow execution",
            "Conditional execution of steps based on previous outcomes, parameters, or expressions",
            "Hardware resource requirements specified for each workflow step",
            "Security policies that govern workflow access to cluster resources"
        ],
        answer: "Conditional execution of steps based on previous outcomes, parameters, or expressions",
        explanation: "Conditions support complex workflow logic including success/failure branching, parameter-based routing, and expression evaluation, enabling sophisticated automation patterns and error handling."
    },
    {
        id: 38,
        question: "What is the purpose of workflow retry policies?",
        options: [
            "To automatically scale workflow resources based on demand",
            "To define how failed steps should be retried with limits and backoff strategies",
            "To schedule workflows to run at specific times of day",
            "To manage network connectivity between workflow steps"
        ],
        answer: "To define how failed steps should be retried with limits and backoff strategies",
        explanation: "Retry policies improve workflow reliability by handling transient failures automatically, with configurable strategies for different types of failures and exponential backoff to avoid overwhelming failing services."
    },
    {
        id: 39,
        question: "How does Argo Workflows handle workflow scheduling?",
        options: [
            "Workflows can only be triggered manually through the web interface",
            "All workflows run continuously in a loop until manually stopped",
            "Workflows are scheduled using CronWorkflows or triggered by external events",
            "Workflows require external cron jobs on the host operating system"
        ],
        answer: "Workflows are scheduled using CronWorkflows or triggered by external events",
        explanation: "CronWorkflows enable time-based automation, while event-driven triggers provide reactive workflow execution, supporting both batch processing patterns and real-time automation scenarios."
    },
    {
        id: 40,
        question: "What are workflow submission options in Argo Workflows?",
        options: [
            "Configuration files that define workflow templates and dependencies",
            "Network policies that control workflow access to external services",
            "Parameters, labels, annotations, service accounts, and priority settings for execution control",
            "Database schemas for storing workflow execution results"
        ],
        answer: "Parameters, labels, annotations, service accounts, and priority settings for execution control",
        explanation: "Submission options provide runtime configuration for workflow execution, enabling customization of security context, resource allocation, and metadata without modifying the workflow template."
    },
    {
        id: 41,
        question: "What is the role of the Workflow Archive in Argo Workflows?",
        options: [
            "To store workflow templates for reuse across different projects",
            "To backup workflow configurations to external storage systems",
            "To store completed workflow information for historical analysis and auditing",
            "To compress workflow logs to save storage space"
        ],
        answer: "To store completed workflow information for historical analysis and auditing",
        explanation: "The archive provides long-term storage of workflow execution data, enabling historical analysis, compliance reporting, and trend analysis that extends beyond the typical Kubernetes resource lifecycle."
    },
    {
        id: 42,
        question: "How does Argo Events handle event filtering?",
        options: [
            "All events are processed equally without any filtering capabilities",
            "Event filtering is implemented in Sensors using dependencies with filters based on data and expressions",
            "Events are filtered only by timestamp and source IP address",
            "Filtering requires external middleware and cannot be done within Argo Events"
        ],
        answer: "Event filtering is implemented in Sensors using dependencies with filters based on data and expressions",
        explanation: "Filtering enables precise event processing by allowing sensors to respond only to relevant events, reducing noise and ensuring triggers fire only under appropriate conditions."
    },
    {
        id: 43,
        question: "What are event dependencies in Argo Events?",
        options: [
            "Dependencies that define which events a sensor must receive before triggering actions",
            "Network connectivity requirements for event processing components",
            "Database relationships between different event types",
            "Software library dependencies required for event source compilation"
        ],
        answer: "Dependencies that define which events a sensor must receive before triggering actions",
        explanation: "Dependencies enable sophisticated event correlation, allowing sensors to wait for multiple related events before taking action, supporting complex automation scenarios and state-based triggers."
    },
    {
        id: 44,
        question: "How does Argo Events handle event transformation?",
        options: [
            "Events cannot be transformed and must be processed in their original format",
            "Transformation requires external ETL tools and cannot be done within Argo Events",
            "Event transformation occurs in sensors through data transformers that modify payloads",
            "Events are automatically transformed using machine learning algorithms"
        ],
        answer: "Event transformation occurs in sensors through data transformers that modify payloads",
        explanation: "Transformation enables adaptation of external event formats to match the requirements of triggered actions, providing data mapping and enrichment capabilities for seamless integration."
    },
    {
        id: 45,
        question: "What triggers can be configured in Argo Events?",
        options: [
            "Only Kubernetes resource triggers are supported for cluster operations",
            "Only webhook triggers are supported for external system integration",
            "Triggers are limited to database operations and file system changes",
            "Common triggers include Argo Workflows, Kubernetes resources, HTTP requests, and serverless functions"
        ],
        answer: "Common triggers include Argo Workflows, Kubernetes resources, HTTP requests, and serverless functions",
        explanation: "The variety of trigger types enables integration with diverse systems and automation patterns, from container orchestration to serverless functions and message-based systems."
    },
    {
        id: 46,
        question: "What is traffic splitting in Argo Rollouts?",
        options: [
            "Gradually shifting traffic between old and new versions during canary deployments",
            "A network security feature that isolates application traffic",
            "A load balancing algorithm for distributing requests across pods",
            "A monitoring technique for analyzing network traffic patterns"
        ],
        answer: "Gradually shifting traffic between old and new versions during canary deployments",
        explanation: "Traffic splitting enables risk mitigation by exposing new versions to progressively larger user populations, allowing for real-world validation while limiting blast radius of potential issues."
    },
    {
        id: 47,
        question: "How does Argo Rollouts integrate with service meshes?",
        options: [
            "Argo Rollouts cannot integrate with service meshes and requires custom load balancers",
            "Integration requires custom plugins that must be developed for each service mesh",
            "Service mesh integration is only available for blue-green deployments",
            "Integration with service meshes like Istio and Linkerd for advanced traffic management"
        ],
        answer: "Integration with service meshes like Istio and Linkerd for advanced traffic management",
        explanation: "Service mesh integration provides sophisticated traffic control, including header-based routing, geographic distribution, and fine-grained traffic policies that enhance deployment safety and flexibility."
    },
    {
        id: 48,
        question: "What are analysis runs in Argo Rollouts?",
        options: [
            "Diagnostic tools for debugging rollout configuration errors",
            "Security scans that validate deployment configurations before release",
            "Performance benchmarks that compare old and new application versions",
            "Metric queries that automatically determine deployment success or failure during rollouts"
        ],
        answer: "Metric queries that automatically determine deployment success or failure during rollouts",
        explanation: "Analysis runs provide automated quality gates by integrating with monitoring systems to evaluate deployment success based on real performance data rather than just deployment completion."
    },
    {
        id: 49,
        question: "What is the pause functionality in Argo Rollouts?",
        options: [
            "A feature that stops all deployments cluster-wide during maintenance windows",
            "Functionality that allows deployments to be paused for manual verification or extended analysis",
            "An automatic timeout that stops deployments after a fixed duration",
            "A debugging mode that freezes deployment state for troubleshooting"
        ],
        answer: "Functionality that allows deployments to be paused for manual verification or extended analysis",
        explanation: "Pausing provides control points in the deployment process where human intervention or extended automated analysis can occur before proceeding with traffic shifting or completion."
    },
    {
        id: 50,
        question: "How does Argo Rollouts handle rollback scenarios?",
        options: [
            "Rollbacks must be performed manually by deleting and recreating deployments",
            "Rollbacks are only possible during blue-green deployments, not canary deployments",
            "Rollbacks can be triggered automatically based on failed analysis or manually by operators",
            "Rollbacks require external tools and cannot be handled within Argo Rollouts"
        ],
        answer: "Rollbacks can be triggered automatically based on failed analysis or manually by operators",
        explanation: "Rollback capabilities provide safety nets for deployments, enabling rapid recovery from issues while preserving the ability to understand what happened and potentially retry with fixes."
    },
    {
        id: 51,
        question: "What is the significance of the `.argocd` directory in Git repositories?",
        options: [
            "It stores Argo CD-specific configurations like application definitions and repository policies",
            "It contains compiled application binaries for faster deployment",
            "It holds encrypted secrets that are decrypted during deployment",
            "It contains backup copies of application configurations for disaster recovery"
        ],
        answer: "It stores Argo CD-specific configurations like application definitions and repository policies",
        explanation: "This directory enables repository-centric configuration management, allowing Git repositories to define their own Argo CD policies and application structures alongside application code."
    },
    {
        id: 52,
        question: "How does Argo CD handle multi-cluster deployments?",
        options: [
            "Argo CD can only manage applications within a single Kubernetes cluster",
            "Argo CD manages applications across multiple clusters by registering cluster credentials",
            "Multi-cluster deployment requires a separate Argo CD instance for each cluster",
            "Multi-cluster support is only available in the enterprise version of Argo CD"
        ],
        answer: "Argo CD manages applications across multiple clusters by registering cluster credentials",
        explanation: "Multi-cluster support enables centralized management of applications across development, staging, and production environments, or geographic regions, from a single Argo CD instance."
    },
    {
        id: 53,
        question: "What is the Application finalizer in Argo CD?",
        options: [
            "A component that validates application configurations before deployment",
            "A mechanism that ensures proper cleanup of application resources when deleted",
            "A process that finalizes application deployments by running post-deployment tests",
            "A security feature that applies final access controls to deployed applications"
        ],
        answer: "A mechanism that ensures proper cleanup of application resources when deleted",
        explanation: "Finalizers prevent resource leaks by ensuring that deleting an Application also removes its deployed resources from Kubernetes, maintaining clean state management."
    },
    {
        id: 54,
        question: "What are resource hooks in Argo CD?",
        options: [
            "Network connections that link Argo CD to external monitoring systems",
            "API endpoints that receive webhooks from Git repositories",
            "Kubernetes jobs or pods that execute at specific points in the synchronization lifecycle",
            "Security mechanisms that prevent unauthorized access to application resources"
        ],
        answer: "Kubernetes jobs or pods that execute at specific points in the synchronization lifecycle",
        explanation: "Hooks enable integration of additional operations into the deployment process, such as database migrations, testing, notifications, or cleanup tasks that should occur at specific deployment phases."
    },
    {
        id: 55,
        question: "How does Argo CD handle application dependencies?",
        options: [
            "Application dependencies can be managed using sync waves or external tools like ApplicationSets",
            "Argo CD has built-in dependency management that automatically orders application deployments",
            "Dependencies must be handled by external CI/CD tools before deploying to Argo CD",
            "Argo CD does not support any form of application dependency management"
        ],
        answer: "Application dependencies can be managed using sync waves or external tools like ApplicationSets",
        explanation: "While Argo CD doesn't have built-in application dependency management, sync waves and ApplicationSets can be used to implement ordered deployments where some applications must be ready before others are deployed."
    },
    {
        id: 56,
        question: "What is the role of the dex component in Argo CD?",
        options: [
            "Dex is an identity service that provides OIDC authentication for external identity providers",
            "Dex manages container image registries and handles image pulling operations",
            "Dex handles network routing and load balancing for Argo CD components",
            "Dex manages database connections and data persistence for application state"
        ],
        answer: "Dex is an identity service that provides OIDC authentication for external identity providers",
        explanation: "Dex enables single sign-on integration with enterprise identity systems, providing centralized authentication and supporting various identity provider protocols for seamless user access."
    },
    {
        id: 57,
        question: "What are the different sync policies available in Argo CD?",
        options: [
            "Manual sync, automatic sync, and automated sync with self-healing options are available",
            "Only manual sync is supported to ensure maximum control over deployments",
            "Sync policies are determined by the Git repository structure and cannot be configured",
            "Only automatic sync is supported to enable true continuous deployment"
        ],
        answer: "Manual sync, automatic sync, and automated sync with self-healing options are available",
        explanation: "Different sync policies balance automation with control: manual for maximum oversight, automatic for continuous deployment, and self-healing for maintaining desired state against drift."
    },
    {
        id: 58,
        question: "How does Argo Workflows handle workflow state persistence?",
        options: [
            "Workflow state is only stored in memory and is lost when pods restart",
            "Workflow state is persisted as Kubernetes custom resources with optional database archiving",
            "All workflow state must be stored in external databases for persistence",
            "Workflow state is stored only in log files for post-execution analysis"
        ],
        answer: "Workflow state is persisted as Kubernetes custom resources with optional database archiving",
        explanation: "State persistence ensures workflow reliability and enables features like workflow resumption, historical analysis, and audit trails while leveraging Kubernetes' native storage capabilities."
    },
    {
        id: 59,
        question: "What are workflow templates vs. cluster workflow templates?",
        options: [
            "Workflow templates are for development environments while cluster templates are for production",
            "There is no difference; both terms refer to the same functionality",
            "Workflow templates are namespace-scoped while cluster workflow templates are cluster-scoped",
            "Workflow templates use YAML while cluster templates use JSON format"
        ],
        answer: "Workflow templates are namespace-scoped while cluster workflow templates are cluster-scoped",
        explanation: "The scoping difference enables both namespace-level isolation for team-specific templates and cluster-level sharing for common organizational workflows and standards."
    },
    {
        id: 60,
        question: "How does Argo Workflows handle resource management?",
        options: [
            "Resource management is handled entirely by Kubernetes and cannot be configured in workflows",
            "Resources are allocated equally to all workflow steps and cannot be customized",
            "Resource management includes CPU/memory limits, quotas, priority classes, and Kubernetes integration",
            "Resource management requires external tools and is not supported within Argo Workflows"
        ],
        answer: "Resource management includes CPU/memory limits, quotas, priority classes, and Kubernetes integration",
        explanation: "Comprehensive resource management ensures workflows don't overwhelm clusters while providing appropriate resource allocation for different types of workloads and priority levels."
    },
    {
        id: 61,
        question: "What is the purpose of workflow step groups?",
        options: [
            "To organize workflow templates into logical categories for better management",
            "To group workflows by priority level for resource allocation purposes",
            "To allow multiple steps to run in parallel within the same pod, sharing resources",
            "To create security boundaries between different workflow execution contexts"
        ],
        answer: "To allow multiple steps to run in parallel within the same pod, sharing resources",
        explanation: "Step groups optimize resource usage and enable patterns where multiple containers need to share volumes or network interfaces while maintaining workflow orchestration benefits."
    },
    {
        id: 62,
        question: "How does Argo Events handle event source high availability?",
        options: [
            "Event sources automatically replicate across multiple clusters for geographic redundancy",
            "Event sources run as singletons and do not support high availability configurations",
            "High availability requires external load balancers and cannot be handled within Argo Events",
            "Event sources can be deployed with multiple replicas using leader election to prevent duplication"
        ],
        answer: "Event sources can be deployed with multiple replicas using leader election to prevent duplication",
        explanation: "HA deployment patterns ensure continuous event processing even during pod failures while preventing duplicate event processing through coordination mechanisms."
    },
    {
        id: 63,
        question: "What are the security considerations for Argo Events?",
        options: [
            "Security is handled entirely by Kubernetes RBAC and no additional configuration is needed",
            "Argo Events has no security features and relies on external security tools",
            "Security includes webhook authentication, RBAC for sensors, network policies, and credential management",
            "Security is only needed for production environments and can be ignored in development"
        ],
        answer: "Security includes webhook authentication, RBAC for sensors, network policies, and credential management",
        explanation: "Comprehensive security requires attention to authentication, authorization, network isolation, and credential management across the event processing pipeline to prevent unauthorized access and actions."
    },
    {
        id: 64,
        question: "How does Argo Events handle event ordering and delivery guarantees?",
        options: [
            "Event ordering and delivery guarantees depend on the underlying EventBus implementation",
            "All events are processed in strict chronological order regardless of the EventBus implementation",
            "Events are processed randomly with no ordering or delivery guarantees",
            "Ordering is guaranteed but delivery is best-effort for all EventBus implementations"
        ],
        answer: "Event ordering and delivery guarantees depend on the underlying EventBus implementation",
        explanation: "The choice of EventBus technology (NATS, Kafka, etc.) determines the delivery semantics, with trade-offs between performance, ordering guarantees, and delivery reliability."
    },
    {
        id: 65,
        question: "What is the concept of event context in Argo Events?",
        options: [
            "Event context provides metadata about events including source information and processing history",
            "Event context refers to the execution environment where event processing occurs",
            "Event context is the network configuration required for event transmission",
            "Event context refers to the user permissions needed to process events"
        ],
        answer: "Event context provides metadata about events including source information and processing history",
        explanation: "Rich context information enables better event correlation, debugging, and processing decisions by providing comprehensive metadata about event origins and processing path."
    },
    {
        id: 66,
        question: "How does Argo Rollouts handle database migrations during deployments?",
        options: [
            "Database migrations are not supported and must be handled by external tools",
            "Database migrations are only supported in canary deployments, not blue-green",
            "Migrations are automatically detected and executed without configuration",
            "Database migrations can be handled using pre-sync hooks, migration jobs, or blue-green strategies"
        ],
        answer: "Database migrations can be handled using pre-sync hooks, migration jobs, or blue-green strategies",
        explanation: "Migration strategies must consider database schema compatibility, rollback scenarios, and data consistency during the deployment process to avoid service disruption."
    },
    {
        id: 67,
        question: "What are the metrics and monitoring capabilities in Argo Rollouts?",
        options: [
            "Monitoring is limited to basic deployment status and does not support custom metrics",
            "Monitoring requires external tools and is not built into Argo Rollouts",
            "Metrics are only available through the web interface and cannot be exported",
            "Argo Rollouts provides Prometheus metrics, external monitoring integration, and custom metrics support"
        ],
        answer: "Argo Rollouts provides Prometheus metrics, external monitoring integration, and custom metrics support",
        explanation: "Comprehensive monitoring enables visibility into deployment health, progress tracking, and automated decision-making based on both technical and business metrics."
    },
    {
        id: 68,
        question: "How does Argo Rollouts handle canary analysis failure scenarios?",
        options: [
            "Analysis failures always result in immediate deployment termination with no recovery options",
            "Analysis failures can trigger automatic rollbacks, pause deployments, or retry based on policies",
            "Failed analysis results are ignored and deployments continue automatically",
            "Analysis failures require manual intervention and cannot be handled automatically"
        ],
        answer: "Analysis failures can trigger automatic rollbacks, pause deployments, or retry based on policies",
        explanation: "Robust failure handling ensures that deployments don't proceed when quality metrics indicate problems, providing safety mechanisms and recovery options."
    },
    {
        id: 69,
        question: "What is the notification system in Argo Rollouts?",
        options: [
            "Argo Rollouts can send notifications through webhooks to systems like Slack and email",
            "Notifications are only available through the web interface and cannot be automated",
            "Notification systems must be implemented externally and are not part of Argo Rollouts",
            "Notifications are limited to deployment failures and do not include success events"
        ],
        answer: "Argo Rollouts can send notifications through webhooks to systems like Slack and email",
        explanation: "Notification capabilities enable team awareness of deployment progress and issues, supporting both automated alerts and integration with collaboration tools."
    },
    {
        id: 70,
        question: "How does Argo CD handle large Git repositories?",
        options: [
            "Large repositories are not supported and will cause performance issues",
            "Repository size limits are enforced and large repositories are automatically rejected",
            "Large repositories require external caching systems and cannot be handled natively",
            "Argo CD supports shallow clones, sparse checkouts, and LFS for repository optimization"
        ],
        answer: "Argo CD supports shallow clones, sparse checkouts, and LFS for repository optimization",
        explanation: "Optimization techniques enable efficient handling of large repositories by reducing the amount of data that needs to be transferred and stored during synchronization operations."
    },
    {
        id: 71,
        question: "What is the purpose of the ignore differences feature in Argo CD?",
        options: [
            "To ignore specific fields or resources during synchronization when managed by other controllers",
            "To ignore Git repository changes that don't affect application deployment",
            "To ignore failed deployments and continue with subsequent application updates",
            "To ignore user access permissions and allow unrestricted application management"
        ],
        answer: "To ignore specific fields or resources during synchronization when managed by other controllers",
        explanation: "This feature prevents synchronization conflicts when multiple systems manage different aspects of the same resources, enabling coexistence with other Kubernetes controllers."
    },
    {
        id: 72,
        question: "How does Argo CD handle Git webhooks?",
        options: [
            "Git webhooks are not supported and Argo CD only uses polling for change detection",
            "Git webhooks require external middleware and cannot be processed directly by Argo CD",
            "Webhooks are only supported for private repositories and not public ones",
            "Git webhooks can trigger immediate application refreshes, reducing synchronization detection time"
        ],
        answer: "Git webhooks can trigger immediate application refreshes, reducing synchronization detection time",
        explanation: "Webhook integration enables faster response to changes while maintaining the pull-based GitOps model, improving deployment latency without compromising security."
    },
    {
        id: 73,
        question: "What are the backup and disaster recovery considerations for Argo CD?",
        options: [
            "Only Git repositories need to be backed up since Argo CD is stateless",
            "Disaster recovery is not needed since Argo CD can be easily reinstalled",
            "Backup considerations include the Argo CD database, Git access, and cluster credentials",
            "Backups are only necessary for the web interface configuration and user settings"
        ],
        answer: "Backup considerations include the Argo CD database, Git access, and cluster credentials",
        explanation: "Comprehensive disaster recovery requires backing up configuration data, ensuring Git repository availability, and planning for cluster credential recovery to restore service quickly."
    },
    {
        id: 74,
        question: "How does Argo Workflows handle workflow timeout and cancellation?",
        options: [
            "Workflows support execution time limits, step timeouts, and graceful cancellation with cleanup",
            "Workflows run indefinitely and cannot be terminated or cancelled once started",
            "Timeouts are only supported at the workflow level and not for individual steps",
            "Cancellation requires manual intervention and cannot be automated"
        ],
        answer: "Workflows support execution time limits, step timeouts, and graceful cancellation with cleanup",
        explanation: "Timeout and cancellation mechanisms prevent runaway workflows, enable resource cleanup, and provide control over workflow execution duration at multiple levels."
    },
    {
        id: 75,
        question: "What are the artifact repository options in Argo Workflows?",
        options: [
            "Artifact repositories include S3-compatible storage, Google Cloud Storage, Azure Blob Storage, and local storage",
            "Only local storage is supported for workflow artifacts",
            "Artifacts must be stored in external databases and cannot use cloud storage",
            "Artifact storage is not supported and data cannot be shared between workflow steps"
        ],
        answer: "Artifact repositories include S3-compatible storage, Google Cloud Storage, Azure Blob Storage, and local storage",
        explanation: "Multiple storage options enable deployment flexibility while providing reliable artifact storage for data sharing between workflow steps and long-term artifact retention."
    },
    {
        id: 76,
        question: "How does Argo Workflows handle workflow parallelism and concurrency?",
        options: [
            "Parallelism can be controlled at workflow, step group, and cluster levels with various limits",
            "All workflow steps must run sequentially and parallel execution is not supported",
            "Parallelism is unlimited and cannot be controlled or restricted",
            "Parallel execution is only available in cluster workflow templates, not regular workflows"
        ],
        answer: "Parallelism can be controlled at workflow, step group, and cluster levels with various limits",
        explanation: "Concurrency controls prevent resource exhaustion while enabling parallel execution, balancing performance with cluster stability and resource availability."
    },
    {
        id: 77,
        question: "What is the role of workflow service accounts in Argo Workflows?",
        options: [
            "Service accounts are only used for workflow web interface authentication",
            "Service accounts are only needed for workflows that access external services",
            "Service accounts are optional and workflows run with cluster admin privileges by default",
            "Service accounts provide the security context determining workflow resource access permissions"
        ],
        answer: "Service accounts provide the security context determining workflow resource access permissions",
        explanation: "Proper service account configuration follows the principle of least privilege, granting workflows only the permissions necessary for their specific tasks while maintaining security boundaries."
    },
    {
        id: 78,
        question: "How does Argo Events handle event replay and debugging?",
        options: [
            "Event replay is not supported and events cannot be reprocessed once consumed",
            "Event debugging includes logging, payload inspection, condition evaluation, and event replay capabilities",
            "Debugging is only available through external monitoring tools and not built into Argo Events",
            "Event replay requires manual reconstruction of events and cannot be automated"
        ],
        answer: "Event debugging includes logging, payload inspection, condition evaluation, and event replay capabilities",
        explanation: "Debugging tools enable developers to understand event flow, diagnose processing issues, and validate event processing logic during development and troubleshooting."
    },
    {
        id: 79,
        question: "What are the scalability considerations for Argo Events?",
        options: [
            "Argo Events cannot scale beyond a single instance and does not support high-volume processing",
            "Scalability is only limited by network bandwidth and has no other constraints",
            "Scalability considerations include EventBus capacity, sensor scaling, and partitioning strategies",
            "Scaling requires external load balancers and cannot be handled within Argo Events"
        ],
        answer: "Scalability considerations include EventBus capacity, sensor scaling, and partitioning strategies",
        explanation: "Proper scaling design ensures that event processing can handle varying loads while maintaining performance and reliability across different event volumes and patterns."
    },
    {
        id: 80,
        question: "How does Argo Events integrate with external monitoring systems?",
        options: [
            "Monitoring integration is not supported and requires external tools for visibility",
            "Monitoring integration is only available for specific EventBus implementations",
            "Only basic logging is available and advanced monitoring requires custom development",
            "Integration includes Prometheus metrics, CloudWatch events, and custom metrics exporters"
        ],
        answer: "Integration includes Prometheus metrics, CloudWatch events, and custom metrics exporters",
        explanation: "Monitoring integration provides visibility into event processing health, performance metrics, and operational insights necessary for maintaining reliable event-driven systems."
    },
    {
        id: 81,
        question: "What are the progressive delivery patterns supported by Argo Rollouts?",
        options: [
            "Only canary deployments and blue-green deployments",
            "Manual deployment approval workflows",
            "Rolling updates and recreate deployments only",
            "Canary deployments, blue-green deployments, A/B testing setups, and feature flag integration"
        ],
        answer: "Canary deployments, blue-green deployments, A/B testing setups, and feature flag integration",
        explanation: "Argo Rollouts supports multiple progressive delivery patterns including canary deployments (gradual traffic shifting), blue-green deployments (environment switching), A/B testing setups (parallel variant comparison), and feature flag integration for controlled feature releases. These patterns enable different risk management approaches and business requirements, from technical validation to business metric optimization and user experience testing."
    },
    {
        id: 82,
        question: "How does Argo Rollouts handle multi-region deployments?",
        options: [
            "Automatically deploys to all regions simultaneously",
            "Requires manual intervention for each region",
            "Only supports single-region deployments",
            "Using ApplicationSets with cluster generators, regional traffic management, and coordinated rollout strategies"
        ],
        answer: "Using ApplicationSets with cluster generators, regional traffic management, and coordinated rollout strategies",
        explanation: "Multi-region deployments can be coordinated using ApplicationSets with cluster generators to target multiple clusters, regional traffic management for geographic distribution, and coordinated rollout strategies across regions. Regional deployment coordination requires careful planning of traffic management, data consistency, and rollout timing to maintain service availability and performance across different geographic locations."
    },
    {
        id: 83,
        question: "What is the experiment feature in Argo Rollouts?",
        options: [
            "A debugging tool for failed deployments",
            "A feature for running parallel versions of applications for A/B testing with traffic splitting",
            "A monitoring dashboard for rollout metrics",
            "An automated rollback mechanism"
        ],
        answer: "A feature for running parallel versions of applications for A/B testing with traffic splitting",
        explanation: "Experiments in Argo Rollouts enable running parallel versions of applications for A/B testing, allowing traffic splitting between multiple variants to compare performance and business metrics. Experiment capabilities support data-driven decision making by enabling controlled testing of different application versions or configurations with real user traffic, helping teams make informed decisions about feature releases."
    },
    {
        id: 84,
        question: "How does Argo Rollouts integrate with GitOps workflows?",
        options: [
            "It requires a separate Git repository for rollout configurations",
            "Only supports manual configuration without Git integration",
            "It bypasses Git repositories for faster deployments",
            "Using Git repositories to define rollout configurations, with Argo CD managing deployment of rollout specifications"
        ],
        answer: "Using Git repositories to define rollout configurations, with Argo CD managing deployment of rollout specifications",
        explanation: "Argo Rollouts integrates with GitOps by using Git repositories to define rollout configurations, with Argo CD managing the deployment of rollout specifications. GitOps integration maintains declarative configuration management while enabling advanced deployment strategies, combining infrastructure-as-code with sophisticated deployment patterns. This ensures that all deployment configurations are version-controlled and auditable."
    },
    {
        id: 85,
        question: "What are the RBAC (Role-Based Access Control) considerations across Argo projects?",
        options: [
            "All projects use the same RBAC configuration automatically",
            "RBAC is not supported in Argo projects",
            "Only basic authentication is supported",
            "Cluster-level permissions for controllers, namespace-level access for applications, and external identity provider integration"
        ],
        answer: "Cluster-level permissions for controllers, namespace-level access for applications, and external identity provider integration",
        explanation: "RBAC considerations across Argo projects include cluster-level permissions for controllers to manage resources, namespace-level access controls for applications to enforce boundaries, and integration with external identity providers for user authentication. Comprehensive RBAC design ensures that users and systems have appropriate permissions while maintaining security boundaries and enabling proper separation of concerns across teams and environments."
    },
    {
        id: 86,
        question: "How do the different Argo projects integrate with each other?",
        options: [
            "Integration patterns include Argo Events triggering Argo Workflows, Argo CD deploying Argo Rollouts configurations, and workflows updating Git repositories",
            "Each project operates independently without integration",
            "Only Argo CD can integrate with other projects",
            "Integration requires custom third-party tools"
        ],
        answer: "Integration patterns include Argo Events triggering Argo Workflows, Argo CD deploying Argo Rollouts configurations, and workflows updating Git repositories",
        explanation: "The Argo ecosystem provides complementary capabilities that can be combined to create comprehensive automation pipelines. Integration patterns include Argo Events triggering Argo Workflows based on external events, Argo CD deploying Argo Rollouts configurations for advanced deployment strategies, and workflows updating Git repositories to complete GitOps cycles. These integrations enable end-to-end automation covering event processing, workflow execution, and application deployment."
    },
    {
        id: 87,
        question: "What are the common troubleshooting approaches for Argo CD sync issues?",
        options: [
            "Checking application health status, reviewing sync operation logs, validating Git repository access, and examining resource-specific error messages",
            "Restart the Argo CD server only",
            "Delete and recreate the application",
            "Check only the Kubernetes cluster status"
        ],
        answer: "Checking application health status, reviewing sync operation logs, validating Git repository access, and examining resource-specific error messages",
        explanation: "Systematic troubleshooting for Argo CD sync issues involves examining each component of the sync process. This includes checking application health status for overall state, reviewing sync operation logs for detailed error information, validating Git repository access for connectivity issues, and examining resource-specific error messages to identify specific failure points. This comprehensive approach helps identify whether issues are related to Git access, manifest rendering, or Kubernetes resource application."
    },
    {
        id: 88,
        question: "How do you handle secrets rotation in GitOps workflows?",
        options: [
            "Store secrets directly in Git repositories",
            "Manual secret updates only",
            "Through external secret operators, automated workflows that update secret stores, and coordinated updates between secret management systems and deployments",
            "Secrets rotation is not supported in GitOps"
        ],
        answer: "Through external secret operators, automated workflows that update secret stores, and coordinated updates between secret management systems and deployments",
        explanation: "Secrets rotation in GitOps workflows can be handled through external secret operators that synchronize secrets from external systems, automated workflows that update secret stores based on rotation schedules, and coordinated updates between secret management systems and deployments. Effective secrets rotation requires coordination between secret storage, application deployment, and monitoring systems to ensure seamless updates without service disruption while maintaining security best practices."
    },
    {
        id: 89,
        question: "What are the performance optimization strategies for Argo Workflows at scale?",
        options: [
            "Use only single-step workflows",
            "Workflow controller tuning, artifact storage optimization, step parallelism configuration, and resource allocation strategies",
            "Disable all monitoring and logging",
            "Run all workflows sequentially"
        ],
        answer: "Workflow controller tuning, artifact storage optimization, step parallelism configuration, and resource allocation strategies",
        explanation: "Performance optimization for Argo Workflows at scale includes workflow controller tuning for better throughput, artifact storage optimization to reduce I/O bottlenecks, step parallelism configuration to maximize resource utilization, and resource allocation strategies for high-throughput scenarios. Scale optimization requires balancing resource utilization, execution performance, and system stability through careful configuration of workflow execution parameters and infrastructure resources."
    },
    {
        id: 90,
        question: "How does Argo Events handle event source authentication and authorization?",
        options: [
            "Webhook signature validation, API key management, OAuth integration, and RBAC controls for event source access",
            "Only basic username/password authentication",
            "No authentication is required for event sources",
            "Authentication is handled by external systems only"
        ],
        answer: "Webhook signature validation, API key management, OAuth integration, and RBAC controls for event source access",
        explanation: "Argo Events handles event source authentication and authorization through multiple mechanisms including webhook signature validation to verify event authenticity, API key management for secure access, OAuth integration for third-party services, and RBAC controls for event source access. Secure event processing requires validation of event sources, protection against unauthorized events, and controlled access to event processing capabilities to maintain system integrity and prevent malicious event injection."
    },
    {
        id: 91,
        question: "What are the compliance and audit considerations for Argo deployments?",
        options: [
            "Compliance is not relevant for GitOps deployments",
            "Deployment audit trails, change approval workflows, security scanning integration, and compliance reporting for regulatory requirements",
            "Only basic logging is required",
            "Manual documentation is sufficient"
        ],
        answer: "Deployment audit trails, change approval workflows, security scanning integration, and compliance reporting for regulatory requirements",
        explanation: "Compliance and audit considerations for Argo deployments include comprehensive deployment audit trails for tracking all changes, change approval workflows to ensure proper authorization, security scanning integration for vulnerability management, and compliance reporting for regulatory requirements. Regulatory compliance requires comprehensive logging, approval processes, security controls, and reporting mechanisms to demonstrate adherence to organizational and regulatory standards such as SOC 2, PCI DSS, or HIPAA."
    },
    {
        id: 92,
        question: "How do you implement blue-green deployments with database considerations?",
        options: [
            "Databases are not supported in blue-green deployments",
            "Use separate databases for each environment without synchronization",
            "Database compatibility strategies, migration planning, data synchronization approaches, and rollback procedures that consider data consistency",
            "Always use read-only databases"
        ],
        answer: "Database compatibility strategies, migration planning, data synchronization approaches, and rollback procedures that consider data consistency",
        explanation: "Implementing blue-green deployments with databases requires database compatibility strategies to handle schema differences, migration planning for data structure changes, data synchronization approaches to maintain consistency, and rollback procedures that consider data consistency requirements. Database integration adds complexity to blue-green deployments, requiring careful planning of schema changes, data migration timing, and consistency guarantees during environment switching to prevent data loss or corruption."
    },
    {
        id: 93,
        question: "What are the disaster recovery patterns for GitOps deployments?",
        options: [
            "Disaster recovery is not needed for GitOps",
            "Git repository replication, cluster backup strategies, application configuration backup, and automated recovery procedures",
            "Only cluster backups are sufficient",
            "Manual recovery procedures only"
        ],
        answer: "Git repository replication, cluster backup strategies, application configuration backup, and automated recovery procedures",
        explanation: "Disaster recovery patterns for GitOps deployments include Git repository replication to ensure configuration availability, cluster backup strategies for infrastructure recovery, application configuration backup for complete state restoration, and automated recovery procedures for different failure scenarios. Comprehensive disaster recovery requires planning for various failure modes including Git system failures, cluster failures, and data corruption scenarios with appropriate recovery procedures to minimize downtime and data loss."
    },
    {
        id: 94,
        question: "How do you handle configuration drift detection and remediation?",
        options: [
            "Configuration drift is not a concern in GitOps",
            "Manual checks are sufficient",
            "Only automated remediation without monitoring",
            "Continuous monitoring of actual vs. desired state, with automated sync policies, alerting systems, and manual intervention procedures"
        ],
        answer: "Continuous monitoring of actual vs. desired state, with automated sync policies, alerting systems, and manual intervention procedures",
        explanation: "Configuration drift detection and remediation involves continuous monitoring of actual vs. desired state to identify discrepancies, automated sync policies for immediate correction, alerting systems for notification of drift events, and manual intervention procedures for complex scenarios. Drift management requires continuous monitoring, clear escalation procedures, and balanced automation to maintain system integrity while allowing for emergency interventions when automated remediation is insufficient."
    },
    {
        id: 95,
        question: "What are the network security considerations for Argo deployments?",
        options: [
            "Network security is not important for internal deployments",
            "Only firewall rules are needed",
            "TLS encryption for all communications, network policies for traffic isolation, secure Git access, and protection of webhook endpoints and API servers",
            "Basic authentication is sufficient"
        ],
        answer: "TLS encryption for all communications, network policies for traffic isolation, secure Git access, and protection of webhook endpoints and API servers",
        explanation: "Network security considerations for Argo deployments include TLS encryption for all communications to prevent eavesdropping, network policies for traffic isolation between components, secure Git access with proper authentication and authorization, and protection of webhook endpoints and API servers from unauthorized access. These measures ensure secure communication channels, prevent lateral movement in case of compromise, and protect sensitive deployment processes from network-based attacks."
    },
    {
        id: 96,
        question: "How do you implement canary analysis with custom business metrics?",
        options: [
            "Canary analysis only supports technical metrics",
            "Only automated technical analysis is possible",
            "Business metrics are not supported in canary deployments",
            "Custom business metrics integration involves configuring metric providers, defining success criteria in analysis templates, and implementing metric collection from business monitoring systems"
        ],
        answer: "Custom business metrics integration involves configuring metric providers, defining success criteria in analysis templates, and implementing metric collection from business monitoring systems",
        explanation: "Implementing canary analysis with custom business metrics involves configuring metric providers to connect to business monitoring systems, defining success criteria in analysis templates that specify business thresholds, and implementing metric collection from business monitoring systems to evaluate deployment success. Business metric integration enables deployment decisions based on user experience and business outcomes rather than just technical metrics, providing more comprehensive quality assessment for production deployments."
    },
    {
        id: 97,
        question: "What are the patterns for managing environment-specific configurations in GitOps?",
        options: [
            "Use the same configuration for all environments",
            "Manual configuration per environment",
            "Store configurations outside of Git",
            "Directory structures per environment, overlay patterns with Kustomize, Helm values per environment, and branching strategies for environment isolation"
        ],
        answer: "Directory structures per environment, overlay patterns with Kustomize, Helm values per environment, and branching strategies for environment isolation",
        explanation: "Environment-specific configuration patterns include directory structures per environment for clear separation, overlay patterns with Kustomize for configuration inheritance, Helm values per environment for parameterized deployments, and branching strategies for environment isolation. Environment management requires balancing configuration reuse with environment-specific customization while maintaining clear inheritance relationships and avoiding configuration drift between environments."
    },
    {
        id: 98,
        question: "How do you implement approval workflows in GitOps deployments?",
        options: [
            "Git-based approval processes (pull requests), external approval systems integrated with webhooks, or manual promotion patterns between environments",
            "Approval workflows are not compatible with GitOps",
            "Only automated deployments without approvals",
            "Approval workflows require non-Git storage"
        ],
        answer: "Git-based approval processes (pull requests), external approval systems integrated with webhooks, or manual promotion patterns between environments",
        explanation: "Approval workflows in GitOps deployments can be implemented through Git-based approval processes using pull requests for code review and approval, external approval systems integrated with webhooks for enterprise approval tools, or manual promotion patterns between environments with controlled progression. Approval integration maintains GitOps principles while providing necessary governance controls, requiring careful design of approval triggers and automated progression mechanisms to balance automation with control."
    },
    {
        id: 99,
        question: "What are the observability patterns for Argo-based deployments?",
        options: [
            "Basic logging is sufficient for observability",
            "Manual observation of deployment status",
            "Only cluster-level monitoring is needed",
            "Deployment tracing across the pipeline, metric correlation between deployment events and system performance, and comprehensive logging of all automation activities"
        ],
        answer: "Deployment tracing across the pipeline, metric correlation between deployment events and system performance, and comprehensive logging of all automation activities",
        explanation: "Observability patterns for Argo-based deployments include deployment tracing across the entire pipeline to track changes from commit to production, metric correlation between deployment events and system performance to understand impact, and comprehensive logging of all automation activities for audit and troubleshooting. Effective observability enables rapid troubleshooting, performance optimization, and understanding of deployment impact across the entire application lifecycle and infrastructure."
    },
    {
        id: 100,
        question: "How do you design resilient automation pipelines using the Argo ecosystem?",
        options: [
            "Resilience is not important for automation pipelines",
            "Failure isolation between components, retry mechanisms, circuit breaker patterns, graceful degradation strategies, and comprehensive monitoring with automated recovery procedures",
            "Single point of failure design is acceptable",
            "Manual intervention for all failures"
        ],
        answer: "Failure isolation between components, retry mechanisms, circuit breaker patterns, graceful degradation strategies, and comprehensive monitoring with automated recovery procedures",
        explanation: "Designing resilient automation pipelines using the Argo ecosystem requires failure isolation between components to prevent cascade failures, retry mechanisms for transient issues, circuit breaker patterns to prevent system overload, graceful degradation strategies to maintain partial functionality, and comprehensive monitoring with automated recovery procedures. Pipeline resilience requires designing for various failure modes, implementing appropriate recovery mechanisms, and maintaining system availability even when individual components experience issues, while providing clear visibility into system health and automated remediation capabilities."
    }
];

const capaCorrectAnswers = {
    1: 'C',    2: 'C',    3: 'C',    4: 'B',    5: 'A',    6: 'D',    7: 'C',    8: 'B',    9: 'D',    10: 'C',
    11: 'B',    12: 'A',    13: 'C',    14: 'C',    15: 'B',    16: 'C',    17: 'D',    18: 'B',    19: 'A',    20: 'B',
    21: 'D',    22: 'B',    23: 'C',    24: 'D',    25: 'A',    26: 'D',    27: 'A',    28: 'B',    29: 'A',    30: 'A',
    31: 'B',    32: 'B',    33: 'A',    34: 'C',    35: 'B',    36: 'D',    37: 'B',    38: 'B',    39: 'C',    40: 'C',
    41: 'C',    42: 'B',    43: 'A',    44: 'C',    45: 'D',    46: 'A',    47: 'D',    48: 'D',    49: 'B',    50: 'C',
    51: 'A',    52: 'B',    53: 'B',    54: 'C',    55: 'A',    56: 'A',    57: 'A',    58: 'B',    59: 'C',    60: 'C',
    61: 'C',    62: 'D',    63: 'C',    64: 'A',    65: 'A',    66: 'D',    67: 'D',    68: 'B',    69: 'A',    70: 'D',
    71: 'A',    72: 'D',    73: 'C',    74: 'A',    75: 'A',    76: 'A',    77: 'D',    78: 'B',    79: 'C',    80: 'D',
    81: 'D',    82: 'D',    83: 'B',    84: 'D',    85: 'D',    86: 'A',    87: 'A',    88: 'C',    89: 'B',    90: 'A',
    91: 'B',    92: 'C',    93: 'B',    94: 'D',    95: 'C',    96: 'D',    97: 'D',    98: 'A',    99: 'D',    100: 'B'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examInfo: capaExamInfo, questions: capaQuestions, correctAnswers: capaCorrectAnswers, topicMappings: capaTopicMappings };
}

// Make all variables globally accessible for dynamic loading
window.examInfo = capaExamInfo;
window.questions = capaQuestions;
window.correctAnswers = capaCorrectAnswers;
window.topicMappings = capaTopicMappings;
