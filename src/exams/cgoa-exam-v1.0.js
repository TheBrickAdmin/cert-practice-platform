// CGOA - Certified GitOps Associate v1.0
// GitOps certification practice exam

const cgoaExamInfo = {
    id: 'cgoa-v1.0',
    name: 'CGOA - Certified GitOps Associate',
    description: 'Practice exam for the Certified GitOps Associate certification covering GitOps principles, practices, tools, and implementation strategies.',
    version: '1.0',
    totalQuestions: 60,
    passingScore: 75,
    timeLimit: 90, // minutes
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
            "Infrastructure managed through manual deployment scripts",
            "Using Kubernetes for all deployments",
            "Automated testing in CI/CD pipelines"
        ],
        answer: "Declarative infrastructure and applications stored in Git",
        explanation: "GitOps is based on the principle of storing declarative descriptions of infrastructure and applications in Git, using Git as the single source of truth for the desired state of the system."
    },
    {
        id: 2,
        question: "Which of the following best describes the GitOps workflow?",
        options: [
            "Code → Build → Test → Deploy → Monitor",
            "Git Push → CI Build → Manual Approval → Deploy",
            "Developer Push → Webhook → Immediate Deploy",
            "Git Commit → Agent Pulls → Reconcile → Deploy"
        ],
        answer: "Git Commit → Agent Pulls → Reconcile → Deploy",
        explanation: "GitOps follows a pull-based model where a GitOps agent continuously monitors Git repositories and pulls changes to reconcile the actual state with the desired state declared in Git."
    },
    {
        id: 3,
        question: "What does 'declarative' mean in the context of GitOps?",
        options: [
            "Writing detailed deployment scripts with step-by-step instructions",
            "Describing the desired end state without specifying how to achieve it",
            "Using imperative commands to configure infrastructure",
            "Manually declaring each deployment action"
        ],
        answer: "Describing the desired end state without specifying how to achieve it",
        explanation: "Declarative configuration means describing what you want (the desired state) rather than how to achieve it. The system figures out the steps needed to reach that state."
    },
    {
        id: 4,
        question: "Which Git workflow is most commonly used in GitOps?",
        options: [
            "Pull request workflow with environment promotion",
            "GitFlow with release branches",
            "Trunk-based development with direct commits to main",
            "Feature branch workflow with merge commits"
        ],
        answer: "Pull request workflow with environment promotion",
        explanation: "GitOps typically uses pull request workflows to manage changes and promote configurations through different environments (dev → staging → production) using separate branches or repositories."
    },
    {
        id: 5,
        question: "What is the main advantage of GitOps over traditional CI/CD?",
        options: [
            "Faster build times",
            "Simpler application architecture",
            "Better test coverage",
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
            "Having dashboards to view application metrics",
            "The ability to manually inspect system logs",
            "Monitoring CPU and memory usage"
        ],
        answer: "The system's capability to provide insights into its internal state",
        explanation: "Observability in GitOps refers to the system's ability to provide comprehensive insights into its internal state, including drift detection, reconciliation status, and overall system health."
    },
    {
        id: 7,
        question: "What is 'configuration drift' in GitOps?",
        options: [
            "Changes made to Git repository structure",
            "Differences between desired state in Git and actual running state",
            "Performance degradation over time",
            "Version conflicts between different Git branches"
        ],
        answer: "Differences between desired state in Git and actual running state",
        explanation: "Configuration drift occurs when the actual running state of the system diverges from the desired state declared in Git, often due to manual changes or external factors."
    },
    {
        id: 8,
        question: "Which principle ensures that GitOps systems can recover from failures?",
        options: [
            "Automated rollbacks",
            "Backup and restore procedures",
            "Manual intervention protocols",
            "Self-healing and convergence"
        ],
        answer: "Self-healing and convergence",
        explanation: "GitOps systems continuously reconcile the actual state with the desired state in Git, automatically correcting drift and recovering from failures without manual intervention."
    },
    {
        id: 9,
        question: "What role does immutability play in GitOps?",
        options: [
            "Git repositories cannot be modified once created",
            "Application code cannot be changed after deployment",
            "Infrastructure components are replaced rather than modified in-place",
            "Configuration files are read-only"
        ],
        answer: "Infrastructure components are replaced rather than modified in-place",
        explanation: "Immutability in GitOps means treating infrastructure and deployments as immutable artifacts that are replaced entirely rather than modified in-place, ensuring consistency and reliability."
    },
    {
        id: 10,
        question: "Which of the following is NOT a core GitOps principle?",
        options: [
            "Manually approved changes",
            "Version controlled and immutable",
            "Automatically deployed",
            "Declarative configuration"
        ],
        answer: "Manually approved changes",
        explanation: "While approval workflows can be part of GitOps, manual approval is not a core principle. The core principles focus on declarative configuration, version control, automatic deployment, and continuous reconciliation."
    },
    {
        id: 11,
        question: "What Git feature is essential for GitOps auditability?",
        options: [
            "Git hooks",
            "Commit history and blame",
            "Git submodules",
            "Git LFS (Large File Storage)"
        ],
        answer: "Commit history and blame",
        explanation: "Git's commit history provides a complete audit trail of who made what changes when, which is crucial for compliance, debugging, and understanding system evolution in GitOps."
    },
    {
        id: 12,
        question: "How should secrets be handled in a GitOps repository?",
        options: [
            "Store them directly in Git for transparency",
            "Keep them in environment variables only",
            "Use encrypted secrets with tools like Sealed Secrets or External Secrets",
            "Store them in a separate database"
        ],
        answer: "Use encrypted secrets with tools like Sealed Secrets or External Secrets",
        explanation: "Secrets should never be stored in plain text in Git. Instead, use tools like Sealed Secrets, External Secrets Operator, or similar solutions that encrypt secrets or reference external secret stores."
    },
    {
        id: 13,
        question: "What is the recommended Git repository structure for GitOps?",
        options: [
            "Single repository containing both application code and configuration",
            "All configuration in the main application repository",
            "One repository per microservice including everything",
            "Separate repositories for application code and deployment configurations"
        ],
        answer: "Separate repositories for application code and deployment configurations",
        explanation: "GitOps best practices recommend separating application source code from deployment configurations to enable different access controls, release cycles, and responsibilities."
    },
    {
        id: 14,
        question: "Which Git branching strategy aligns best with GitOps environment promotion?",
        options: [
            "Environment-specific branches (dev, staging, prod)",
            "All environments use the main branch",
            "Feature branches for each deployment",
            "Tags for environment releases"
        ],
        answer: "Environment-specific branches (dev, staging, prod)",
        explanation: "Using environment-specific branches allows for controlled promotion of changes through environments, with each branch representing the desired state of that specific environment."
    },
    {
        id: 15,
        question: "What is the purpose of Git signed commits in GitOps?",
        options: [
            "To compress commit data",
            "To improve Git performance",
            "To automatically deploy changes",
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
            "Store them directly in Git",
            "Compress them before committing",
            "Split them into smaller files"
        ],
        answer: "Use Git LFS or external artifact storage",
        explanation: "Large binary files should be stored using Git LFS or external artifact repositories to keep Git repositories lightweight and performant while maintaining version control."
    },
    {
        id: 17,
        question: "What is the recommended approach for handling environment-specific configurations?",
        options: [
            "Hard-code values for each environment",
            "Use only environment variables",
            "Create separate repositories for each environment",
            "Use templating tools like Helm or Kustomize"
        ],
        answer: "Use templating tools like Helm or Kustomize",
        explanation: "Templating tools like Helm, Kustomize, or Jsonnet allow you to maintain a base configuration with environment-specific overlays, reducing duplication while maintaining clarity."
    },
    {
        id: 18,
        question: "Which Git operation should GitOps agents primarily use?",
        options: [
            "git pull/fetch",
            "git push",
            "git merge",
            "git rebase"
        ],
        answer: "git pull/fetch",
        explanation: "GitOps follows a pull-based model where agents continuously fetch/pull changes from Git repositories, rather than receiving push notifications or commands."
    },
    {
        id: 19,
        question: "How should GitOps integrate with existing CI/CD pipelines?",
        options: [
            "Replace CI/CD entirely",
            "CI builds and tests, GitOps handles deployment",
            "Run GitOps inside CI/CD pipelines",
            "Use GitOps only for production deployments"
        ],
        answer: "CI builds and tests, GitOps handles deployment",
        explanation: "GitOps complements CI/CD by letting CI systems handle building, testing, and publishing artifacts, while GitOps agents handle deployment by pulling configurations from Git."
    },
    {
        id: 20,
        question: "What triggers a GitOps deployment?",
        options: [
            "Manual deployment commands",
            "CI/CD pipeline completion",
            "Git repository changes",
            "Scheduled cron jobs"
        ],
        answer: "Git repository changes",
        explanation: "GitOps deployments are triggered by changes to Git repositories, either through continuous polling or webhook notifications, maintaining Git as the source of truth."
    },
    {
        id: 21,
        question: "Which artifact should CI pipelines produce for GitOps?",
        options: [
            "Deployment scripts",
            "Infrastructure code",
            "Container images and manifests",
            "Test reports"
        ],
        answer: "Container images and manifests",
        explanation: "CI pipelines should build immutable artifacts like container images and generate or update deployment manifests that GitOps agents can deploy."
    },
    {
        id: 22,
        question: "How should image tags be managed in GitOps?",
        options: [
            "Always use 'latest' tag",
            "Use semantic versioning with specific tags",
            "Use branch names as tags",
            "Use random generated tags"
        ],
        answer: "Use semantic versioning with specific tags",
        explanation: "Specific, immutable tags (like semantic versions or commit SHAs) ensure reproducible deployments and clear tracking of what version is deployed in each environment."
    },
    {
        id: 23,
        question: "What is the role of webhooks in GitOps?",
        options: [
            "To push changes to Git repositories",
            "To automatically merge pull requests",
            "To notify GitOps agents of repository changes",
            "To backup Git repositories"
        ],
        answer: "To notify GitOps agents of repository changes",
        explanation: "Webhooks can notify GitOps agents immediately when repository changes occur, enabling faster deployment cycles compared to polling-based approaches."
    },
    {
        id: 24,
        question: "Which testing strategy works best with GitOps?",
        options: [
            "Test only in production",
            "Progressive delivery with canary deployments",
            "Manual testing after each deployment",
            "Testing only in CI pipelines"
        ],
        answer: "Progressive delivery with canary deployments",
        explanation: "GitOps enables progressive delivery patterns like canary deployments, blue-green deployments, and feature flags, allowing safe testing and gradual rollouts."
    },
    {
        id: 25,
        question: "How should rollbacks be handled in GitOps?",
        options: [
            "Use kubectl rollback commands",
            "Revert Git commits to previous state",
            "Manually restore previous configuration",
            "Use backup and restore procedures"
        ],
        answer: "Revert Git commits to previous state",
        explanation: "In GitOps, rollbacks are performed by reverting Git commits or merging a previous state, letting the GitOps agent automatically reconcile to the previous configuration."
    },
    {
        id: 26,
        question: "What is 'GitOps promotion' between environments?",
        options: [
            "Moving developers between teams",
            "Promoting Git repository changes through environment branches",
            "Upgrading GitOps tools",
            "Promoting applications to featured status"
        ],
        answer: "Promoting Git repository changes through environment branches",
        explanation: "GitOps promotion involves moving validated changes from one environment to another, typically by merging changes between environment-specific branches or updating environment configurations."
    },
    {
        id: 27,
        question: "Which CI/CD pattern is most compatible with GitOps?",
        options: [
            "Push-based deployment from CI",
            "Pull-based deployment with Git polling",
            "Event-driven deployment triggers",
            "Manual deployment gates"
        ],
        answer: "Pull-based deployment with Git polling",
        explanation: "GitOps uses a pull-based model where deployment agents continuously monitor Git repositories and pull changes, rather than CI systems pushing deployments directly."
    },
    {
        id: 28,
        question: "Which tool is specifically designed for GitOps?",
        options: [
            "Jenkins",
            "Docker",
            "GitLab CI",
            "ArgoCD"
        ],
        answer: "ArgoCD",
        explanation: "ArgoCD is a declarative, GitOps continuous delivery tool specifically designed for Kubernetes that implements GitOps principles and patterns."
    },
    {
        id: 29,
        question: "What is Flux in the context of GitOps?",
        options: [
            "A GitOps operator for Kubernetes",
            "A Git hosting platform",
            "A container registry",
            "A monitoring tool"
        ],
        answer: "A GitOps operator for Kubernetes",
        explanation: "Flux is a GitOps operator that automatically ensures that the state of a Kubernetes cluster matches the configuration defined in a Git repository."
    },
    {
        id: 30,
        question: "Which Kubernetes resource is commonly used by GitOps tools for application definitions?",
        options: [
            "ConfigMap",
            "Secret",
            "Custom Resource Definitions (CRDs)",
            "Service"
        ],
        answer: "Custom Resource Definitions (CRDs)",
        explanation: "GitOps tools often use CRDs to define applications, repositories, and sync policies, extending Kubernetes API to support GitOps concepts natively."
    },
    {
        id: 31,
        question: "What is Helm's role in GitOps?",
        options: [
            "A GitOps agent",
            "A package manager and templating tool",
            "A Git repository hosting service",
            "A monitoring solution"
        ],
        answer: "A package manager and templating tool",
        explanation: "Helm serves as a package manager and templating tool in GitOps, allowing parameterized deployments and reusable application charts while maintaining declarative configurations."
    },
    {
        id: 32,
        question: "Which tool helps manage secrets in GitOps workflows?",
        options: [
            "Sealed Secrets",
            "kubectl",
            "Docker",
            "Git LFS"
        ],
        answer: "Sealed Secrets",
        explanation: "Sealed Secrets encrypts secrets that can be safely stored in Git repositories and automatically decrypted by a controller in the target cluster."
    },
    {
        id: 33,
        question: "What is Kustomize used for in GitOps?",
        options: [
            "Git repository management",
            "Secret encryption",
            "Container image building",
            "Kubernetes YAML customization and overlays"
        ],
        answer: "Kubernetes YAML customization and overlays",
        explanation: "Kustomize allows customization of Kubernetes YAML configurations through overlays and patches, enabling environment-specific configurations without duplicating base manifests."
    },
    {
        id: 34,
        question: "Which feature is essential for GitOps tools?",
        options: [
            "Built-in CI capabilities",
            "Container image scanning",
            "Drift detection and auto-sync",
            "Load balancing"
        ],
        answer: "Drift detection and auto-sync",
        explanation: "GitOps tools must be able to detect when the actual state differs from the desired state in Git and automatically synchronize to maintain consistency."
    },
    {
        id: 35,
        question: "What is the purpose of ArgoCD's Application CRD?",
        options: [
            "To define container specifications",
            "To configure network policies",
            "To declare desired application state and sync policies",
            "To manage persistent volumes"
        ],
        answer: "To declare desired application state and sync policies",
        explanation: "ArgoCD's Application CRD defines the desired state of an application, including source repository, target cluster, sync policies, and other GitOps-related configurations."
    },
    {
        id: 36,
        question: "Which GitOps tool is part of the CNCF (Cloud Native Computing Foundation)?",
        options: [
            "ArgoCD",
            "GitLab",
            "Flux",
            "Jenkins X"
        ],
        answer: "Flux",
        explanation: "Flux is a CNCF graduated project that provides GitOps capabilities for Kubernetes, with a focus on simplicity and composability."
    },
    {
        id: 37,
        question: "What security principle does GitOps enforce?",
        options: [
            "Shared access to production systems",
            "Unlimited admin access for developers",
            "Direct database access for deployments",
            "Principle of least privilege through Git access controls"
        ],
        answer: "Principle of least privilege through Git access controls",
        explanation: "GitOps enforces security by using Git's access control mechanisms, ensuring users only have the minimum necessary permissions and eliminating direct production access."
    },
    {
        id: 38,
        question: "How does GitOps improve compliance and auditing?",
        options: [
            "Through complete Git commit history and traceability",
            "By requiring manual approval for all changes",
            "By storing logs in external systems only",
            "Through encrypted deployment processes"
        ],
        answer: "Through complete Git commit history and traceability",
        explanation: "GitOps provides superior compliance through Git's immutable commit history, which records who made what changes when, with full traceability and the ability to revert any change."
    },
    {
        id: 39,
        question: "What is 'policy as code' in GitOps?",
        options: [
            "Writing policies in programming languages",
            "Storing security and governance policies in Git repositories",
            "Hardcoding policies in applications",
            "Using only manual policy enforcement"
        ],
        answer: "Storing security and governance policies in Git repositories",
        explanation: "Policy as code means defining security, compliance, and governance policies as code stored in Git repositories, enabling version control, review, and automated enforcement."
    },
    {
        id: 40,
        question: "Which tool can enforce policies in GitOps workflows?",
        options: [
            "Git",
            "Docker",
            "kubectl",
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
            "Only at the Kubernetes cluster level",
            "Only at the Git repository level",
            "Through application-level permissions only"
        ],
        answer: "At both Git repository and cluster levels",
        explanation: "RBAC should be implemented at both the Git repository level (controlling who can modify configurations) and the cluster level (controlling what the GitOps agent can deploy)."
    },
    {
        id: 42,
        question: "What is image scanning in the context of GitOps security?",
        options: [
            "Scanning Git repositories for secrets",
            "Analyzing container images for vulnerabilities",
            "Checking YAML syntax",
            "Monitoring network traffic"
        ],
        answer: "Analyzing container images for vulnerabilities",
        explanation: "Image scanning analyzes container images for security vulnerabilities, malware, and compliance violations, which should be integrated into GitOps workflows to prevent deploying insecure images."
    },
    {
        id: 43,
        question: "Which security practice should be enforced in GitOps repositories?",
        options: [
            "Public read access for transparency",
            "Disabling authentication",
            "Storing all secrets in plain text",
            "Signed commits and branch protection"
        ],
        answer: "Signed commits and branch protection",
        explanation: "GitOps repositories should enforce signed commits for authenticity, branch protection rules to prevent unauthorized changes, and proper access controls to maintain security."
    },
    {
        id: 44,
        question: "What should be monitored in a GitOps system?",
        options: [
            "Only application metrics",
            "Only infrastructure metrics",
            "Git repository activity, sync status, and drift detection",
            "Only error logs"
        ],
        answer: "Git repository activity, sync status, and drift detection",
        explanation: "GitOps monitoring should include Git repository activity, sync status between desired and actual state, drift detection, reconciliation status, and overall system health."
    },
    {
        id: 45,
        question: "Which metric indicates GitOps system health?",
        options: [
            "Code coverage percentage",
            "Number of Git commits",
            "Sync success rate and drift frequency",
            "Container image size"
        ],
        answer: "Sync success rate and drift frequency",
        explanation: "Sync success rate shows how reliably the GitOps system maintains desired state, while drift frequency indicates how often the actual state diverges from the declared state."
    },
    {
        id: 46,
        question: "What is 'observability' in GitOps beyond basic monitoring?",
        options: [
            "Understanding system behavior through traces, metrics, and logs",
            "Having more dashboards",
            "Monitoring only CPU and memory",
            "Setting up more alerts"
        ],
        answer: "Understanding system behavior through traces, metrics, and logs",
        explanation: "Observability provides deep insights into system behavior through the three pillars: metrics (what), logs (why), and traces (how), enabling better debugging and optimization."
    },
    {
        id: 47,
        question: "Which tool can provide GitOps-specific observability?",
        options: [
            "Prometheus with GitOps-aware metrics",
            "Basic system monitoring tools only",
            "File-based logging only",
            "Manual status checks"
        ],
        answer: "Prometheus with GitOps-aware metrics",
        explanation: "Prometheus can collect GitOps-specific metrics like sync status, reconciliation times, and drift detection, providing comprehensive observability for GitOps operations."
    },
    {
        id: 48,
        question: "What should be included in GitOps alerting?",
        options: [
            "Only infrastructure failures",
            "Only performance issues",
            "Only application errors",
            "Sync failures, drift detection, and policy violations"
        ],
        answer: "Sync failures, drift detection, and policy violations",
        explanation: "GitOps alerting should cover sync failures (when desired state can't be achieved), drift detection (when actual state diverges), and policy violations (when changes don't comply with rules)."
    },
    {
        id: 49,
        question: "How can GitOps systems provide deployment visibility?",
        options: [
            "Through manual status reports",
            "Only through log files",
            "Via dashboards showing sync status and deployment history",
            "Through email notifications only"
        ],
        answer: "Via dashboards showing sync status and deployment history",
        explanation: "GitOps systems should provide dashboards that show real-time sync status, deployment history, drift detection, and the relationship between Git commits and deployed changes."
    },
    {
        id: 50,
        question: "What is the relationship between GitOps and SRE (Site Reliability Engineering)?",
        options: [
            "They are completely unrelated",
            "GitOps supports SRE goals through reliable, observable deployments",
            "SRE replaces the need for GitOps",
            "GitOps is only for development teams"
        ],
        answer: "GitOps supports SRE goals through reliable, observable deployments",
        explanation: "GitOps aligns with SRE principles by providing reliable, automated deployments with strong observability, auditability, and the ability to quickly recover from failures through Git-based rollbacks."
    }
];

const cgoaCorrectAnswers = {
    1: 'A',    2: 'D',    3: 'B',    4: 'A',    5: 'D',    6: 'A',    7: 'B',    8: 'D',    9: 'C',    10: 'A',
    11: 'B',    12: 'C',    13: 'D',    14: 'A',    15: 'D',    16: 'A',    17: 'D',    18: 'A',    19: 'B',    20: 'C',
    21: 'C',    22: 'B',    23: 'C',    24: 'B',    25: 'B',    26: 'B',    27: 'B',    28: 'D',    29: 'A',    30: 'C',
    31: 'B',    32: 'A',    33: 'D',    34: 'C',    35: 'C',    36: 'C',    37: 'D',    38: 'A',    39: 'B',    40: 'D',
    41: 'A',    42: 'B',    43: 'D',    44: 'C',    45: 'C',    46: 'A',    47: 'A',    48: 'D',    49: 'C',    50: 'B'
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