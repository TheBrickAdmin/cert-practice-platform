// CGOA - Certified GitOps Associate v1.0
// GitOps certification practice exam

const cgoaExamInfo = {
    id: 'cgoa-v1.0',
    name: 'CGOA - Certified GitOps Associate',
    description: 'Practice exam for the Certified GitOps Associate certification covering GitOps principles, practices, tools, and implementation strategies.',
    version: '1.0',
    totalQuestions: 50,
    passingScore: 75,
    topics: ['GitOps Fundamentals', 'Git & Version Control', 'CI/CD Integration', 'GitOps Tools', 'Security & Compliance', 'Monitoring & Observability'],
    difficulty: 'Intermediate',
    lastUpdated: '2025-11-02'
};

// Topic mappings for detailed scoring
const cgoaTopicMappings = {
    'GitOps Fundamentals': [1,2,3,4,5,6,7,8,9,10],
    'Git & Version Control': [11,12,13,14,15,16,17,18],
    'CI/CD Integration': [19,20,21,22,23,24,25,26,27],
    'GitOps Tools': [28,29,30,31,32,33,34,35,36],
    'Security & Compliance': [37,38,39,40,41,42,43],
    'Monitoring & Observability': [44,45,46,47,48,49,50]
};

const cgoaQuestions = [
    {
        id: 1,
        question: "What is the primary principle of GitOps?",
        options: [
            "Declarative infrastructure and applications stored in Git",
            "Infrastructure managed through comprehensive manual deployment scripts with detailed step-by-step operational procedures",
            "Using Kubernetes exclusively for all deployments with centralized orchestration and container management workflows",
            "Automated testing in CI/CD pipelines with comprehensive validation, quality gates, and deployment verification processes"
        ],
        answer: "Declarative infrastructure and applications stored in Git",
        explanation: "GitOps is based on the principle of storing declarative descriptions of infrastructure and applications in Git, using Git as the single source of truth for the desired state of the system."
    },
    {
        id: 2,
        question: "Which of the following best describes the GitOps workflow?",
        options: [
            "Code → Build → Test → Deploy → Monitor with comprehensive validation and operational oversight",
            "Git Push → CI Build → Manual Approval → Deploy with administrative review and quality control processes",
            "Developer Push → Webhook → Immediate Deploy with automated triggers and instant deployment mechanisms",
            "Git Commit → Agent Pulls → Reconcile → Deploy"
        ],
        answer: "Git Commit → Agent Pulls → Reconcile → Deploy",
        explanation: "GitOps follows a pull-based model where a GitOps agent continuously monitors Git repositories and pulls changes to reconcile the actual state with the desired state declared in Git."
    },
    {
        id: 3,
        question: "What does 'declarative' mean in the context of GitOps?",
        options: [
            "Writing detailed deployment scripts with comprehensive step-by-step instructions and procedural implementation details",
            "Describing the desired end state without specifying how to achieve it",
            "Using imperative commands to configure infrastructure with explicit control flow and execution ordering",
            "Manually declaring each deployment action through administrative interfaces with individual configuration management"
        ],
        answer: "Describing the desired end state without specifying how to achieve it",
        explanation: "Declarative configuration means describing what you want (the desired state) rather than how to achieve it. The system figures out the steps needed to reach that state."
    },
    {
        id: 4,
        question: "Which Git workflow is most commonly used in GitOps?",
        options: [
            "Pull request workflow with environment promotion",
            "GitFlow with comprehensive release branches, feature isolation, and complex branching strategies for enterprise development",
            "Trunk-based development with direct commits to main branch and continuous integration without feature isolation",
            "Feature branch workflow with merge commits, conflict resolution, and extensive branch management processes"
        ],
        answer: "Pull request workflow with environment promotion",
        explanation: "GitOps typically uses pull request workflows to manage changes and promote configurations through different environments (dev → staging → production) using separate branches or repositories."
    },
    {
        id: 5,
        question: "What is the main advantage of GitOps over traditional CI/CD?",
        options: [
            "Faster build times and optimized compilation processes for improved development velocity",
            "Simpler application architecture with reduced complexity and streamlined deployment patterns",
            "Better test coverage through automated testing frameworks and comprehensive validation strategies",
            "Improved security through Git-based access control"
        ],
        answer: "Improved security through Git-based access control",
        explanation: "GitOps improves security by using Git's access control mechanisms, eliminating the need for CI/CD systems to have direct access to production environments, and providing a complete audit trail through Git history."
    },
    {
        id: 6,
        question: "In GitOps, what is meant by 'observability'?",
        options: [
            "The system's capability to provide insights into its internal state",
            "Having comprehensive dashboards to view application metrics, performance indicators, and operational analytics",
            "The ability to manually inspect system logs through administrative interfaces and debugging tools",
            "Monitoring CPU and memory usage with real-time performance tracking and resource utilization analysis"
        ],
        answer: "The system's capability to provide insights into its internal state",
        explanation: "Observability in GitOps refers to the system's ability to provide comprehensive insights into its internal state, including drift detection, reconciliation status, and overall system health."
    },
    {
        id: 7,
        question: "What is 'configuration drift' in GitOps?",
        options: [
            "Changes made to Git repository structure, branching strategies, and version control organization",
            "Differences between desired state in Git and actual running state",
            "Performance degradation over time due to resource exhaustion and system aging",
            "Version conflicts between different Git branches with merge resolution and branching strategy issues"
        ],
        answer: "Differences between desired state in Git and actual running state",
        explanation: "Configuration drift occurs when the actual running state of the system diverges from the desired state declared in Git, often due to manual changes or external factors."
    },
    {
        id: 8,
        question: "Which principle ensures that GitOps systems can recover from failures?",
        options: [
            "Automated rollbacks with version control integration and dependency management for systematic recovery processes",
            "Backup and restore procedures with comprehensive data protection and disaster recovery planning strategies",
            "Manual intervention protocols with administrative oversight and human-driven recovery validation workflows",
            "Self-healing and convergence"
        ],
        answer: "Self-healing and convergence",
        explanation: "GitOps systems continuously reconcile the actual state with the desired state in Git, automatically correcting drift and recovering from failures without manual intervention."
    },
    {
        id: 9,
        question: "What role does immutability play in GitOps?",
        options: [
            "Git repositories cannot be modified once created and require complete recreation for any changes",
            "Application code cannot be changed after deployment and requires redeployment for any updates",
            "Infrastructure components are replaced rather than modified in-place",
            "Configuration files are read-only and cannot be updated through standard operational procedures"
        ],
        answer: "Infrastructure components are replaced rather than modified in-place",
        explanation: "Immutability in GitOps means that instead of modifying existing infrastructure or application instances, new versions are deployed and old ones are removed, ensuring predictable and reproducible deployments."
    },
    {
        id: 10,
        question: "Which of the following is NOT a core GitOps principle?",
        options: [
            "Manually approved changes",
            "Version controlled and immutable with comprehensive change tracking and historical preservation",
            "Automatically deployed through continuous reconciliation and automated deployment processes",
            "Declarative configuration with infrastructure as code and desired state management"
        ],
        answer: "Manually approved changes",
        explanation: "While approval workflows can be part of GitOps, manual approval is not a core principle. The core principles focus on declarative configuration, version control, automatic deployment, and continuous reconciliation."
    },
    {
        id: 11,
        question: "What Git feature is essential for GitOps auditability?",
        options: [
            "Git hooks with pre-commit validation and automated policy enforcement mechanisms",
            "Commit history and blame",
            "Git submodules with nested repository management and dependency tracking capabilities",
            "Git LFS (Large File Storage) with binary asset versioning and distributed storage management"
        ],
        answer: "Commit history and blame",
        explanation: "Git's commit history provides a complete audit trail of who made what changes when, which is crucial for compliance, debugging, and understanding system evolution in GitOps."
    },
    {
        id: 12,
        question: "How should secrets be handled in a GitOps repository?",
        options: [
            "Secrets should never be stored in Git and must be managed through external secret management systems with encryption and access controls",
            "Plain text storage with basic file permissions and simple access restriction mechanisms",
            "Encoded in base64 format with minimal encryption and standard repository access controls",
            "Environment variables with limited rotation and basic security implementation practices"
        ],
        answer: "Secrets should never be stored in Git and must be managed through external secret management systems with encryption and access controls",
        explanation: "Secrets should never be committed to Git repositories. They should be managed through dedicated secret management tools like HashiCorp Vault, Kubernetes Secrets, or cloud provider secret services."
    },
    {
        id: 13,
        question: "What is the primary benefit of using branches in GitOps workflows?",
        options: [
            "Feature isolation, testing environments, and controlled integration with comprehensive change validation processes",
            "Code backup with simple versioning and basic restoration capabilities for development teams",
            "Developer separation with limited collaboration and basic workspace management for individual contributors",
            "Version numbering with sequential tracking and minimal branching strategy for release management"
        ],
        answer: "Feature isolation, testing environments, and controlled integration with comprehensive change validation processes",
        explanation: "Branches in GitOps workflows provide feature isolation, enable testing in separate environments, allow parallel development, and facilitate controlled integration through pull requests and reviews."
    },
    {
        id: 14,
        question: "Which Git branching strategy aligns best with GitOps environment promotion?",
        options: [
            "Environment-specific branches (dev, staging, prod)",
            "All environments use the main branch with unified configuration and shared deployment patterns",
            "Feature branches for each deployment with individual release cycles and isolated change management",
            "Tags for environment releases with version-based promotion and sequential deployment workflows"
        ],
        answer: "Environment-specific branches (dev, staging, prod)",
        explanation: "Using environment-specific branches allows for controlled promotion of changes through environments, with each branch representing the desired state of that specific environment."
    },
    {
        id: 15,
        question: "What is the purpose of Git signed commits in GitOps?",
        options: [
            "To compress commit data with advanced algorithms and storage optimization for large repository management",
            "To improve Git performance with enhanced processing speed and optimized resource utilization for distributed workflows",
            "To automatically deploy changes with immediate release triggers and streamlined deployment automation for continuous delivery",
            "To verify commit authenticity and integrity"
        ],
        answer: "To verify commit authenticity and integrity",
        explanation: "Git signed commits use GPG signatures to verify that commits come from trusted sources and haven't been tampered with, adding a security layer to the GitOps process."
    },
    {
        id: 16,
        question: "How should large binary files be handled in GitOps repositories?",
        options: [
            "Use Git LFS or external artifact storage",
            "Store directly in Git repository with standard versioning and basic file management for simplicity",
            "Compress and archive files with zip compression and bundled storage for space efficiency",
            "Convert to text format with encoding transformation and readable representation for version control compatibility"
        ],
        answer: "Use Git LFS or external artifact storage",
        explanation: "Large binary files should not be stored directly in Git repositories as they can significantly slow down clone and fetch operations. Git LFS or external artifact stores are better solutions."
    },
    {
        id: 17,
        question: "What role do Git hooks play in GitOps workflows?",
        options: [
            "Policy enforcement, validation, and automated workflows with comprehensive compliance checking and security integration",
            "Repository backup with automated synchronization and basic data protection for disaster recovery scenarios",
            "Performance optimization with enhanced processing speed and improved resource utilization for large repository operations",
            "User interface enhancement with visual improvements and streamlined developer experience for repository interactions"
        ],
        answer: "Policy enforcement, validation, and automated workflows with comprehensive compliance checking and security integration",
        explanation: "Git hooks in GitOps can enforce policies (like commit message standards), validate configurations before they're committed, trigger CI/CD pipelines, and integrate with security scanning tools."
    },
    {
        id: 18,
        question: "Which Git strategy helps maintain environment consistency in GitOps?",
        options: [
            "Monorepo with shared configurations and unified versioning for cross-environment consistency and coordinated deployments",
            "Multiple repositories with isolated configurations and independent versioning for environment-specific management and deployment flexibility",
            "Single repository per environment with dedicated configurations and separate versioning for isolated environment management",
            "Automated repository mirroring with synchronized configurations and replicated versioning for redundant environment backup"
        ],
        answer: "Monorepo with shared configurations and unified versioning for cross-environment consistency and coordinated deployments",
        explanation: "A monorepo approach can help maintain consistency by keeping all environment configurations in one place, making it easier to track changes across environments and ensure consistent deployment patterns."
    },
    {
        id: 19,
        question: "What is the primary benefit of using pull requests in GitOps?",
        options: [
            "Code review, validation, and controlled deployment with comprehensive change approval and quality assurance processes",
            "Faster development cycles with accelerated deployment and reduced development overhead for rapid iteration",
            "Automated testing with integrated validation and streamlined quality control for continuous deployment workflows",
            "Repository synchronization with coordinated updates and unified version management for distributed development teams"
        ],
        answer: "Code review, validation, and controlled deployment with comprehensive change approval and quality assurance processes",
        explanation: "Pull requests provide a mechanism for peer review, automated testing, policy validation, and controlled integration of changes before they affect production environments."
    },
    {
        id: 20,
        question: "How does Git blame contribute to GitOps troubleshooting?",
        options: [
            "Identifies who made specific changes and when for effective troubleshooting and accountability in deployment issues",
            "Automatically fixes configuration errors with intelligent correction and self-healing deployment mechanisms for system recovery",
            "Optimizes repository performance with enhanced processing speed and improved resource utilization for large-scale operations",
            "Provides deployment statistics with comprehensive metrics and performance analytics for operational monitoring and optimization"
        ],
        answer: "Identifies who made specific changes and when for effective troubleshooting and accountability in deployment issues",
        explanation: "Git blame shows line-by-line authorship and timing of changes, which is invaluable for understanding the history of configuration issues and knowing who to contact for context about specific changes."
    },
    {
        id: 21,
        question: "What is the key difference between traditional CI/CD and GitOps?",
        options: [
            "GitOps uses a pull-based deployment model with Git as the single source of truth for declarative infrastructure and application state",
            "Traditional CI/CD with push-based deployment and centralized control for rapid development and streamlined release management",
            "Manual deployment processes with human oversight and controlled release cycles for enterprise governance and compliance requirements",
            "Container-based deployment with orchestrated releases and automated scaling for modern application delivery and cloud-native operations"
        ],
        answer: "GitOps uses a pull-based deployment model with Git as the single source of truth for declarative infrastructure and application state",
        explanation: "Traditional CI/CD often uses push-based deployment where the CI system deploys directly to environments. GitOps uses a pull-based model where deployment agents pull changes from Git repositories."
    },
    {
        id: 22,
        question: "How should CI pipelines integrate with GitOps workflows?",
        options: [
            "Build artifacts and update deployment manifests in GitOps repositories through automated commits and pull requests",
            "Direct deployment with immediate release cycles and bypass version control for rapid development and shortened feedback loops",
            "Manual configuration updates with human intervention and controlled release management for enterprise governance and compliance oversight",
            "Artifact storage only with limited integration and basic versioning for simplified deployment and minimal automation requirements"
        ],
        answer: "Build artifacts and update deployment manifests in GitOps repositories through automated commits and pull requests",
        explanation: "CI pipelines should focus on building and testing artifacts, then update GitOps repositories with new image tags or configurations, letting GitOps tools handle the actual deployment."
    },
    {
        id: 23,
        question: "What is the role of image promotion in GitOps CI/CD?",
        options: [
            "Moving tested container images through environment stages with validation gates and automated deployment progression",
            "Image compression with size optimization and storage efficiency for container registry management and resource conservation",
            "Performance testing with load validation and scalability assessment for production readiness and capacity planning",
            "Security scanning with vulnerability assessment and compliance checking for enterprise security and regulatory requirements"
        ],
        answer: "Moving tested container images through environment stages with validation gates and automated deployment progression",
        explanation: "Image promotion involves moving the same container image artifact through different environments (dev, staging, prod) as it passes quality gates, ensuring consistency across environments."
    },
    {
        id: 24,
        question: "Which testing strategy works best with GitOps?",
        options: [
            "Test only in production with live environment validation and real-time monitoring for operational acceptance",
            "Progressive delivery with canary deployments",
            "Manual testing after each deployment with human validation and comprehensive quality assurance processes",
            "Testing only in CI pipelines with isolated validation and limited environment coverage for development phases"
        ],
        answer: "Progressive delivery with canary deployments",
        explanation: "GitOps enables progressive delivery patterns like canary deployments, blue-green deployments, and feature flags, allowing safe testing and gradual rollouts."
    },
    {
        id: 25,
        question: "How should rollbacks be handled in GitOps?",
        options: [
            "Use kubectl rollback commands with direct cluster manipulation and imperative configuration management",
            "Revert Git commits to previous state",
            "Manually restore previous configuration with file system recovery and manual intervention processes",
            "Use backup and restore procedures with comprehensive data recovery and system restoration workflows"
        ],
        answer: "Revert Git commits to previous state",
        explanation: "In GitOps, rollbacks are performed by reverting Git commits or merging a previous state, letting the GitOps agent automatically reconcile to the previous configuration."
    },
    {
        id: 26,
        question: "What is 'GitOps promotion' between environments?",
        options: [
            "Moving developers between teams with role transitions and organizational restructuring for improved collaboration",
            "Upgrading Git software with version updates and enhanced functionality for improved repository management",
            "Promoting configuration changes from lower to higher environments through Git workflows and automated deployment processes",
            "Performance optimization with system tuning and resource allocation for enhanced operational efficiency"
        ],
        answer: "Promoting configuration changes from lower to higher environments through Git workflows and automated deployment processes",
        explanation: "GitOps promotion involves moving validated configurations from development through staging to production environments, typically through Git branches or repository structures."
    },
    {
        id: 27,
        question: "Which CI/CD pattern is most compatible with GitOps?",
        options: [
            "Push-based deployment from CI with direct deployment integration and immediate release cycles for rapid development",
            "Pull-based deployment with Git polling",
            "Event-driven deployment triggers with reactive automation and real-time response for dynamic environments",
            "Manual deployment gates with human approval and controlled release management for enterprise governance"
        ],
        answer: "Pull-based deployment with Git polling",
        explanation: "GitOps uses a pull-based model where deployment agents continuously monitor Git repositories and pull changes, rather than CI systems pushing deployments directly."
    },
    {
        id: 28,
        question: "Which tool is specifically designed for GitOps?",
        options: [
            "Jenkins with pipeline automation and build orchestration for continuous integration and delivery workflows",
            "Docker with container management and image orchestration for application packaging and deployment",
            "GitLab CI with integrated version control and continuous deployment for unified development workflows",
            "ArgoCD"
        ],
        answer: "ArgoCD",
        explanation: "ArgoCD is a declarative, GitOps continuous delivery tool specifically designed for Kubernetes that follows GitOps principles by monitoring Git repositories and automatically syncing application state."
    },
    {
        id: 29,
        question: "What is the purpose of a GitOps operator?",
        options: [
            "Continuously monitors Git repositories and ensures cluster state matches the desired state defined in Git",
            "Git repository backup with automated synchronization and data protection for disaster recovery scenarios",
            "Performance monitoring with system metrics and resource utilization tracking for operational optimization",
            "User access control with authentication management and permission enforcement for security governance"
        ],
        answer: "Continuously monitors Git repositories and ensures cluster state matches the desired state defined in Git",
        explanation: "A GitOps operator runs in the cluster and continuously watches Git repositories for changes, then reconciles the actual cluster state with the desired state defined in the Git repository."
    },
    {
        id: 30,
        question: "Which Kubernetes resource is commonly used by GitOps tools for application definitions?",
        options: [
            "ConfigMap with configuration data storage and environment-specific settings for application deployment",
            "Secret with encrypted data management and sensitive information storage for security requirements",
            "Custom Resource Definitions (CRDs)",
            "Service with network configuration and load balancing for application connectivity and traffic routing"
        ],
        answer: "Custom Resource Definitions (CRDs)",
        explanation: "GitOps tools often use CRDs to define applications, repositories, and sync policies, extending Kubernetes API to support GitOps concepts natively."
    },
    {
        id: 31,
        question: "What is Helm's role in GitOps?",
        options: [
            "A GitOps agent with continuous deployment monitoring and automated reconciliation for cluster state management",
            "A package manager and templating tool",
            "A Git repository hosting service with version control and collaboration features for development teams",
            "A monitoring solution with metrics collection and alerting for operational observability and performance tracking"
        ],
        answer: "A package manager and templating tool",
        explanation: "Helm serves as a package manager and templating tool in GitOps, allowing parameterized deployments and reusable application charts while maintaining declarative configurations."
    },
    {
        id: 32,
        question: "Which tool helps manage secrets in GitOps workflows?",
        options: [
            "Sealed Secrets",
            "kubectl with direct cluster manipulation and imperative configuration management for resource administration",
            "Docker with container management and image orchestration for application packaging and deployment workflows",
            "Git LFS with large file storage and binary asset management for repository optimization and versioning"
        ],
        answer: "Sealed Secrets",
        explanation: "Sealed Secrets encrypts secrets that can be safely stored in Git repositories and automatically decrypted by a controller in the target cluster."
    },
    {
        id: 33,
        question: "What is Kustomize used for in GitOps?",
        options: [
            "Git repository management with version control and collaboration features for development teams and source control",
            "Secret encryption with cryptographic protection and secure storage for sensitive data and credential management",
            "Container image building with automated compilation and packaging for application deployment and distribution workflows",
            "Configuration management and customization without templating"
        ],
        answer: "Configuration management and customization without templating",
        explanation: "Kustomize provides a way to customize Kubernetes configurations through overlays and patches without using templates, making it ideal for managing environment-specific configurations in GitOps."
    },
    {
        id: 34,
        question: "Which feature is essential for GitOps tools?",
        options: [
            "Built-in CI capabilities with continuous integration and automated testing for comprehensive development workflows",
            "Container image scanning with vulnerability assessment and security validation for production readiness",
            "Drift detection and auto-sync",
            "Load balancing with traffic distribution and performance optimization for application scalability and availability"
        ],
        answer: "Drift detection and auto-sync",
        explanation: "GitOps tools must be able to detect when the actual state differs from the desired state in Git and automatically synchronize to maintain consistency."
    },
    {
        id: 35,
        question: "What is the purpose of ArgoCD's Application CRD?",
        options: [
            "Defines how applications should be deployed and managed with comprehensive configuration and deployment specifications",
            "Container image storage with registry management and distribution for application packaging and deployment workflows",
            "Log aggregation with centralized monitoring and analytics for operational observability and troubleshooting",
            "Network configuration with service mesh and connectivity management for application communication and security"
        ],
        answer: "Defines how applications should be deployed and managed with comprehensive configuration and deployment specifications",
        explanation: "ArgoCD's Application CRD allows you to declaratively define application deployments, including source repositories, target clusters, sync policies, and other deployment configurations."
    },
    {
        id: 36,
        question: "Which GitOps tool is part of the CNCF (Cloud Native Computing Foundation)?",
        options: [
            "ArgoCD with comprehensive application deployment and cluster management for enterprise Kubernetes environments",
            "GitLab with integrated version control and continuous deployment for unified development workflows and DevOps automation",
            "Flux",
            "Jenkins X with automated CI/CD pipelines and cloud-native development workflows for Kubernetes application delivery"
        ],
        answer: "Flux",
        explanation: "Flux is a CNCF graduated project that provides GitOps capabilities for Kubernetes, with a focus on simplicity and composability."
    },
    {
        id: 37,
        question: "What security principle does GitOps enforce?",
        options: [
            "Infrastructure is never directly modified; all changes go through Git with audit trails and version control",
            "Password-based authentication with basic credential management and simple access control for user verification",
            "Network isolation with firewall configuration and traffic segmentation for security boundaries and access restriction",
            "Manual approval processes with human verification and controlled authorization for administrative oversight and compliance"
        ],
        answer: "Infrastructure is never directly modified; all changes go through Git with audit trails and version control",
        explanation: "GitOps enforces that all infrastructure changes must go through Git, providing audit trails, version control, and preventing unauthorized direct modifications to production systems."
    },
    {
        id: 38,
        question: "How does GitOps improve compliance and auditing?",
        options: [
            "Through complete Git commit history and traceability",
            "By requiring manual approval for all changes with human oversight and controlled authorization processes",
            "By storing logs in external systems only with centralized monitoring and separate audit trail management",
            "Through encrypted deployment processes with secure transmission and protected configuration management workflows"
        ],
        answer: "Through complete Git commit history and traceability",
        explanation: "GitOps provides superior compliance through Git's immutable commit history, which records who made what changes when, with full traceability and the ability to revert any change."
    },
    {
        id: 39,
        question: "What is 'policy as code' in GitOps?",
        options: [
            "Writing policies in programming languages with custom code development and application-specific implementation",
            "Storing security and governance policies in Git repositories",
            "Hardcoding policies in applications with embedded rules and fixed enforcement mechanisms for runtime behavior",
            "Using only manual policy enforcement with human oversight and administrative control for compliance management"
        ],
        answer: "Storing security and governance policies in Git repositories",
        explanation: "Policy as code means defining security, compliance, and governance policies as code stored in Git repositories, enabling version control, review, and automated enforcement."
    },
    {
        id: 40,
        question: "Which tool can enforce policies in GitOps workflows?",
        options: [
            "Git with basic version control and simple access management for repository administration and source control",
            "Docker with container management and image orchestration for application packaging and deployment workflows",
            "kubectl with direct cluster manipulation and imperative configuration management for resource administration",
            "Open Policy Agent (OPA)"
        ],
        answer: "Open Policy Agent (OPA)",
        explanation: "Open Policy Agent (OPA) can enforce policies in GitOps by evaluating policies against configurations before they're applied, ensuring compliance and security requirements are met."
    },
    {
        id: 41,
        question: "How should RBAC (Role-Based Access Control) be implemented in GitOps?",
        options: [
            "At both Git repository and cluster levels",
            "Only at the Kubernetes cluster level with standard resource permissions and namespace-based access control",
            "Only at the Git repository level with branch protection and commit authorization for source control security",
            "Through application-level permissions only with service-specific access control and resource-based authorization"
        ],
        answer: "At both Git repository and cluster levels",
        explanation: "RBAC should be implemented at both the Git repository level (controlling who can modify configurations) and the cluster level (controlling what the GitOps agent can deploy)."
    },
    {
        id: 42,
        question: "What is image scanning in the context of GitOps security?",
        options: [
            "Scanning Git repositories for secrets with credential detection and sensitive data identification for security compliance",
            "Analyzing container images for vulnerabilities",
            "Checking YAML syntax with configuration validation and structural verification for deployment readiness",
            "Monitoring network traffic with security analysis and threat detection for operational security"
        ],
        answer: "Analyzing container images for vulnerabilities",
        explanation: "Image scanning in GitOps involves analyzing container images for security vulnerabilities, malware, and compliance issues before they are deployed to prevent security risks."
    },
    {
        id: 43,
        question: "How does GitOps enhance infrastructure security?",
        options: [
            "By providing immutable infrastructure history and preventing unauthorized changes through version-controlled declarative configurations",
            "Through password complexity with advanced credential requirements and authentication strength for user access security",
            "Via network firewalls with traffic filtering and perimeter security for network-based protection and access control",
            "Using antivirus software with malware detection and endpoint protection for system security and threat prevention"
        ],
        answer: "By providing immutable infrastructure history and preventing unauthorized changes through version-controlled declarative configurations",
        explanation: "GitOps enhances security by making infrastructure changes traceable through Git history and requiring all changes to go through controlled processes, preventing unauthorized direct modifications."
    },
    {
        id: 44,
        question: "What monitoring approach works best with GitOps?",
        options: [
            "Observability through metrics, logs, and traces with comprehensive system visibility and automated alerting for operational insight",
            "Manual log review with human analysis and periodic inspection for basic monitoring and issue identification",
            "Simple uptime checks with basic availability monitoring and limited health assessment for service status verification",
            "Network monitoring only with traffic analysis and connectivity assessment for infrastructure performance and availability"
        ],
        answer: "Observability through metrics, logs, and traces with comprehensive system visibility and automated alerting for operational insight",
        explanation: "GitOps works best with comprehensive observability that includes metrics, logs, and distributed traces, providing full visibility into application and infrastructure behavior."
    },
    {
        id: 45,
        question: "How should alerts be configured in a GitOps environment?",
        options: [
            "Alerts should be defined as code in Git repositories with version control and automated deployment for consistent monitoring",
            "Through GUI tools only with visual configuration and manual setup for immediate alerting and basic notification management",
            "Hardcoded in applications with embedded logic and fixed thresholds for application-specific monitoring and direct notification",
            "Manual configuration with human setup and administrative control for customized alerting and personalized notification management"
        ],
        answer: "Alerts should be defined as code in Git repositories with version control and automated deployment for consistent monitoring",
        explanation: "In GitOps, monitoring configurations including alerts should be defined as code and stored in Git repositories, ensuring they are version controlled, reviewable, and consistently deployed."
    },
    {
        id: 46,
        question: "What is 'observability' in GitOps beyond basic monitoring?",
        options: [
            "Understanding system behavior through traces, metrics, and logs",
            "Having more dashboards with additional visualizations and enhanced graphical representations for improved monitoring interfaces",
            "Monitoring only CPU and memory with basic resource tracking and fundamental performance metrics for system health",
            "Setting up more alerts with increased notification frequency and expanded alerting rules for comprehensive issue detection"
        ],
        answer: "Understanding system behavior through traces, metrics, and logs",
        explanation: "Observability provides deep insights into system behavior through the three pillars: metrics (what), logs (why), and traces (how), enabling better debugging and optimization."
    },
    {
        id: 47,
        question: "Which tool can provide GitOps-specific observability?",
        options: [
            "Prometheus with GitOps-aware metrics",
            "Basic system monitoring tools only with fundamental resource tracking and standard performance metrics for general system health",
            "File-based logging only with text output and manual analysis for basic troubleshooting and issue identification",
            "Manual status checks with human verification and periodic inspection for controlled monitoring and administrative oversight"
        ],
        answer: "Prometheus with GitOps-aware metrics",
        explanation: "Prometheus can collect GitOps-specific metrics like sync status, reconciliation times, and drift detection, providing comprehensive observability for GitOps operations."
    },
    {
        id: 48,
        question: "What should be included in GitOps alerting?",
        options: [
            "Only infrastructure failures with basic system outages and fundamental service disruptions for essential monitoring coverage",
            "Only performance issues with resource utilization and efficiency metrics for optimization-focused monitoring and capacity planning",
            "Only application errors with code-level issues and software-specific problems for development-focused monitoring and debugging",
            "Sync failures, drift detection, and policy violations"
        ],
        answer: "Sync failures, drift detection, and policy violations",
        explanation: "GitOps alerting should cover sync failures (when desired state can't be achieved), drift detection (when actual state diverges), and policy violations (when changes don't comply with rules)."
    },
    {
        id: 49,
        question: "How can GitOps systems provide deployment visibility?",
        options: [
            "Through manual status reports with human documentation and administrative reporting for controlled information sharing",
            "Only through log files with text output and file-based analysis for basic troubleshooting and issue identification",
            "Via dashboards showing sync status and deployment history",
            "Email notifications only with message-based communication and administrative alerts for status updates and change notifications"
        ],
        answer: "Via dashboards showing sync status and deployment history",
        explanation: "GitOps tools provide deployment visibility through dashboards that show real-time sync status, deployment history, application health, and configuration drift, enabling quick issue identification and resolution."
    },
    {
        id: 50,
        question: "What is the relationship between GitOps and SRE (Site Reliability Engineering)?",
        options: [
            "They are completely unrelated with separate methodologies and independent operational frameworks for distinct organizational approaches",
            "GitOps supports SRE goals through reliable, observable deployments",
            "SRE replaces the need for GitOps with comprehensive monitoring and manual operational procedures for service reliability",
            "GitOps is only for development teams with coding focus and application-specific deployment for software engineering workflows"
        ],
        answer: "GitOps supports SRE goals through reliable, observable deployments",
        explanation: "GitOps aligns with SRE principles by providing reliable, automated deployments with strong observability, auditability, and the ability to quickly recover from failures through Git-based rollbacks."
    }
];

const cgoaCorrectAnswers = {
    1: 'A',    2: 'D',    3: 'B',    4: 'A',    5: 'D',    6: 'A',    7: 'B',    8: 'D',    9: 'C',    10: 'A',
    11: 'B',    12: 'A',    13: 'A',    14: 'A',    15: 'D',    16: 'A',    17: 'A',    18: 'A',    19: 'A',    20: 'A',
    21: 'A',    22: 'A',    23: 'A',    24: 'B',    25: 'B',    26: 'C',    27: 'B',    28: 'D',    29: 'A',    30: 'C',
    31: 'B',    32: 'A',    33: 'D',    34: 'C',    35: 'A',    36: 'C',    37: 'A',    38: 'A',    39: 'B',    40: 'D',
    41: 'A',    42: 'B',    43: 'A',    44: 'A',    45: 'A',    46: 'A',    47: 'A',    48: 'D',    49: 'C',    50: 'B'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examInfo: cgoaExamInfo, questions: cgoaQuestions, correctAnswers: cgoaCorrectAnswers, topicMappings: cgoaTopicMappings };
}

// Make all variables globally accessible for dynamic loading
window.examInfo = cgoaExamInfo;
window.questions = cgoaQuestions;
window.correctAnswers = cgoaCorrectAnswers;
window.topicMappings = cgoaTopicMappings;