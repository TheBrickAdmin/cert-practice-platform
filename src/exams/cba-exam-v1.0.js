// CBA - Certified Backstage Associate v1.0
// AI-Generated Content - Verify against official documentation
// Created: 2026-05-30

const cbaExamInfo = {
    id: 'cba-v1.0',
    name: 'CBA - Certified Backstage Associate',
    description: 'Practice exam for the Certified Backstage Associate certification covering Backstage Development Workflow, Infrastructure, Software Catalog, and Customizing Backstage.',
    totalQuestions: 60,
    passingScore: 75,
    topics: [
        'Backstage Development Workflow',
        'Backstage Infrastructure',
        'Backstage Catalog',
        'Customizing Backstage'
    ],
    difficulty: 'Intermediate',
    version: '1.0',
    lastUpdated: '2026-05-30'
};

// Questions are interleaved across all four domains.
// Domain question IDs by topic:
//   Development Workflow : 1,6,10,14,18,22,26,30,34,38,42,46,50,54
//   Infrastructure       : 2,7,11,15,19,23,27,31,35,39,43,47,51
//   Catalog              : 3,8,12,16,20,24,28,32,36,40,44,48,52
//   Customizing          : 4,5,9,13,17,21,25,29,33,37,41,45,49,53,55,56,57,58,59,60
const cbaTopicMappings = {
    'Backstage Development Workflow': [1,6,10,14,18,22,26,30,34,38,42,46,50,54],
    'Backstage Infrastructure': [2,7,11,15,19,23,27,31,35,39,43,47,51],
    'Backstage Catalog': [3,8,12,16,20,24,28,32,36,40,44,48,52],
    'Customizing Backstage': [4,5,9,13,17,21,25,29,33,37,41,45,49,53,55,56,57,58,59,60]
};

const cbaQuestions = [
    {
        id: 1,
        question: "Which command is used to create a new Backstage application?",
        options: [
            "npx @backstage/create-app@latest",
            "npm install -g @backstage/cli && backstage create app",
            "yarn global add @backstage/create-app && create-app",
            "npx create-backstage --template default"
        ],
        answer: "npx @backstage/create-app@latest",
        explanation: "The official way to bootstrap a new Backstage application is `npx @backstage/create-app@latest`. This command uses the Backstage create-app package to scaffold a new application, setting up the project structure, dependencies, and initial configuration automatically without requiring a global installation."
    },
    {
        id: 2,
        question: "What database does a standalone Backstage installation use by default?",
        options: [
            "PostgreSQL – the production-grade database installed by default for all environments",
            "MySQL – Backstage's default database for both development and production use cases",
            "SQLite with an in-memory database – the default for development, not suitable for production",
            "MongoDB – the NoSQL database used by Backstage for flexible entity storage"
        ],
        answer: "SQLite with an in-memory database – the default for development, not suitable for production",
        explanation: "Out-of-the-box, Backstage uses an in-memory SQLite database. This requires no external database setup, making it ideal for quick local testing and demos. However, because data is not persisted between restarts, SQLite is not suitable for production deployments—PostgreSQL should be used instead."
    },
    {
        id: 3,
        question: "How many core entity kinds does the Backstage Software Catalog define?",
        options: [
            "5 entity kinds covering the most common component types in the catalog",
            "6 entity kinds for components, APIs, resources, groups, users, and locations",
            "7 entity kinds including all infrastructure and organizational entity types",
            "9 entity kinds: Component, API, Resource, System, Domain, Group, User, Location, and Template"
        ],
        answer: "9 entity kinds: Component, API, Resource, System, Domain, Group, User, Location, and Template",
        explanation: "Backstage defines 9 core entity kinds out of the box: Component (deployable software), API (interfaces), Resource (infrastructure), System (collections of components), Domain (collections of systems), Group (teams/business units), User (individuals), Location (pointers to catalog data), and Template (scaffolding blueprints). Each serves a distinct purpose in the software ecosystem model."
    },
    {
        id: 4,
        question: "What are the two primary types of Backstage plugins?",
        options: [
            "Frontend plugins that run in the browser and backend plugins that run on the server",
            "Core plugins bundled with Backstage and community plugins from the open-source ecosystem",
            "UI plugins providing visual components and API plugins providing data integrations",
            "Local plugins used in development and remote plugins deployed in production environments"
        ],
        answer: "Frontend plugins that run in the browser and backend plugins that run on the server",
        explanation: "Backstage distinguishes between frontend plugins (React-based components that run in the browser and add pages, tabs, or cards to the UI) and backend plugins (Node.js services that run on the server and expose APIs or process data). Many features require both: a frontend plugin for the UI and a corresponding backend plugin for the data access layer."
    },
    {
        id: 5,
        question: "What is the purpose of the proxy configuration in Backstage?",
        options: [
            "To replicate backend services across availability zones for high availability",
            "To allow frontend plugins to call external APIs without exposing credentials in the browser",
            "To cache frequently accessed catalog queries and reduce database load",
            "To load balance incoming requests across multiple Backstage backend instances"
        ],
        answer: "To allow frontend plugins to call external APIs without exposing credentials in the browser",
        explanation: "The Backstage proxy (configured under `proxy` in `app-config.yaml`) allows frontend plugins to call external APIs through the Backstage backend. This is important for security: API keys and tokens stay on the server side and are injected by the backend, preventing them from being exposed in browser network requests. The frontend calls `/api/proxy/<service>` and the backend forwards the authenticated request."
    },
    {
        id: 6,
        question: "What is the default port that a Backstage frontend serves on after running `yarn start`?",
        options: [
            "8080 – the standard HTTP alternative port used by most backend services",
            "3000 – the default port for the Backstage frontend development server",
            "4200 – the default Angular development server port",
            "8000 – the standard Python development server port"
        ],
        answer: "3000 – the default port for the Backstage frontend development server",
        explanation: "Backstage's frontend development server starts on port 3000 by default (accessible at http://localhost:3000). The backend runs on a separate port (7007 by default). This is controlled by the `app.baseUrl` and `backend.baseUrl` values in `app-config.yaml`."
    },
    {
        id: 7,
        question: "What is the recommended database for production Backstage deployments?",
        options: [
            "SQLite – upgraded with WAL mode for production-level performance and reliability",
            "MySQL – the primary production database fully supported by Backstage",
            "MongoDB – the recommended document database for flexible catalog data storage",
            "PostgreSQL – the recommended production-grade relational database for Backstage"
        ],
        answer: "PostgreSQL – the recommended production-grade relational database for Backstage",
        explanation: "PostgreSQL is the recommended database for production Backstage deployments. The Backstage backend uses the `@backstage/plugin-database-backend` package, which supports both PostgreSQL and SQLite. PostgreSQL provides persistent storage, ACID compliance, and the ability to run multiple Backstage backend replicas safely."
    },
    {
        id: 8,
        question: "Which `spec.lifecycle` value designates a component that is currently running in production?",
        options: [
            "production – the standard lifecycle value for production-ready, live components",
            "live – used to indicate that a component is actively serving production traffic",
            "stable – indicates a component that has passed all stability requirements",
            "released – marks a component that has been formally released to end customers"
        ],
        answer: "production – the standard lifecycle value for production-ready, live components",
        explanation: "The `spec.lifecycle` field in a Backstage entity descriptor has three conventional values: `experimental` (in active development), `production` (running in production and maintained), and `deprecated` (being phased out). Using `production` tells teams and the platform that the component is live and critical. These values enable catalog filtering and health dashboards."
    },
    {
        id: 9,
        question: "What is the role of the Backstage Scaffolder?",
        options: [
            "To generate test fixtures and mock data for integration testing environments",
            "To orchestrate deployment pipelines for applications registered in the catalog",
            "To execute Software Template steps that create new components, repositories, and resources",
            "To provide static code analysis, linting, and quality gate enforcement for services"
        ],
        answer: "To execute Software Template steps that create new components, repositories, and resources",
        explanation: "The Scaffolder is Backstage's template engine. When a developer triggers a Software Template, the Scaffolder collects the form inputs, then executes each defined step in sequence. Steps are implemented as 'actions' (e.g., `fetch:template`, `publish:github`, `catalog:register`) that can create files, push to SCM, create PRs, register catalog entities, and more. It is backed by the `@backstage/plugin-scaffolder-backend` plugin."
    },
    {
        id: 10,
        question: "What file format is used for Backstage entity descriptor files registered in the Software Catalog?",
        options: [
            "JSON – entity definitions are written as structured JSON objects alongside source code",
            "TOML – Backstage uses TOML for both configuration and entity definitions",
            "YAML – entity descriptors use YAML format, typically named catalog-info.yaml",
            "HCL – Backstage uses HashiCorp Configuration Language for entity definitions"
        ],
        answer: "YAML – entity descriptors use YAML format, typically named catalog-info.yaml",
        explanation: "Backstage entity descriptors are written in YAML format. The file is conventionally named `catalog-info.yaml` and placed in the root of a repository. It contains fields like `apiVersion`, `kind`, `metadata`, and `spec` that describe the entity to the Software Catalog."
    },
    {
        id: 11,
        question: "Which cloud storage providers does TechDocs support for storing generated documentation artifacts?",
        options: [
            "Google Cloud Storage, AWS S3, and Azure Blob Storage",
            "Only AWS S3, as it is the only officially supported TechDocs storage backend",
            "Dropbox and Google Drive through the TechDocs cloud storage integration",
            "Google Cloud Storage and AWS S3 only, with Azure Blob Storage support in preview"
        ],
        answer: "Google Cloud Storage, AWS S3, and Azure Blob Storage",
        explanation: "TechDocs supports multiple cloud storage backends for storing the generated static documentation sites: Google Cloud Storage, AWS S3, and Azure Blob Storage. This allows organizations to use their existing cloud infrastructure. For local development, TechDocs can also serve documentation directly from the local filesystem."
    },
    {
        id: 12,
        question: "Which Backstage entity kind is used to represent an organizational team or business unit?",
        options: [
            "User – represents collections of individuals organized into teams",
            "Group – represents organizational entities such as teams and business units",
            "Organization – the top-level entity for organizing teams in the catalog",
            "Team – a specialized entity kind for representing development teams"
        ],
        answer: "Group – represents organizational entities such as teams and business units",
        explanation: "The `Group` entity kind represents organizational structures such as teams, squads, business units, or departments. Groups have `spec.type` (e.g., `team`, `business-unit`), `spec.parent` (for hierarchy), `spec.children` (sub-groups), and `spec.members` (User references). Groups are used extensively as the value for `spec.owner` on other entities to express ownership."
    },
    {
        id: 13,
        question: "Which JavaScript framework is used to build the Backstage frontend?",
        options: [
            "Angular – Backstage uses Angular's component model and dependency injection system",
            "Vue.js – the Backstage frontend is built with Vue.js and the Composition API",
            "Svelte – Backstage uses Svelte for its compiler-based reactive UI framework",
            "React – the Backstage frontend is built with React and TypeScript"
        ],
        answer: "React – the Backstage frontend is built with React and TypeScript",
        explanation: "Backstage's frontend is a React single-page application (SPA) built with TypeScript. All frontend plugins are React components. Backstage uses React Router for navigation, Material UI for the component library, and provides custom hooks and context providers via the `@backstage/core-plugin-api` package for plugin development."
    },
    {
        id: 14,
        question: "Which package manager is required for developing and running a Backstage application?",
        options: [
            "npm – Backstage exclusively uses npm for package management and workspace support",
            "pnpm – Backstage uses pnpm for its workspace feature and speed advantages",
            "Bun – Backstage migrated to the Bun runtime for improved performance",
            "Yarn – Backstage uses Yarn workspaces to manage its monorepo structure"
        ],
        answer: "Yarn – Backstage uses Yarn workspaces to manage its monorepo structure",
        explanation: "Backstage requires Yarn (specifically version 4.x with Yarn workspaces) because it structures the application as a monorepo. Yarn workspaces allow the `packages/app` (frontend) and `packages/backend` (backend) to share dependencies while remaining independently manageable."
    },
    {
        id: 15,
        question: "What is the purpose of integration configuration in `app-config.yaml`?",
        options: [
            "To define the organizational hierarchy and reporting structure for engineering teams",
            "To configure authenticated connections to external SCM systems like GitHub and GitLab",
            "To manage user authentication flows and single sign-on provider settings exclusively",
            "To create reusable Software Templates for provisioning new microservices"
        ],
        answer: "To configure authenticated connections to external SCM systems like GitHub and GitLab",
        explanation: "The `integrations` section in `app-config.yaml` configures how Backstage connects to external source control management systems such as GitHub, GitLab, Bitbucket, and Azure DevOps. These integrations are used for catalog discovery, reading `catalog-info.yaml` files, Software Template operations, and TechDocs source fetching."
    },
    {
        id: 16,
        question: "What is the primary function of the `Location` entity kind in Backstage?",
        options: [
            "To describe geographic data centers and cloud regions where services are hosted",
            "To manage network routing and service discovery rules for microservices",
            "To act as a marker that references other places where catalog data can be found",
            "To define the physical office location of the engineering team that owns a component"
        ],
        answer: "To act as a marker that references other places where catalog data can be found",
        explanation: "A `Location` entity is a pointer to other catalog descriptor files. It does not describe any software itself but instead tells Backstage where to look for more `catalog-info.yaml` files. For example, a top-level Location can reference a GitHub organization's URL pattern, causing Backstage to discover all repositories that contain entity descriptors automatically."
    },
    {
        id: 17,
        question: "How are Backstage plugins typically added to an existing Backstage application?",
        options: [
            "By installing the plugin package with yarn, then wiring it into the app and backend code",
            "By downloading plugin archives from the Backstage marketplace and extracting them locally",
            "Using the `backstage-cli plugin:install` command which handles all registration automatically",
            "Through the Backstage admin web interface under the Plugin Management section"
        ],
        answer: "By installing the plugin package with yarn, then wiring it into the app and backend code",
        explanation: "Adding a Backstage plugin involves: (1) installing the npm package with `yarn add`, (2) importing and registering the plugin in `packages/app/src/App.tsx` for frontend plugins, and (3) adding the backend plugin to `packages/backend/src/index.ts` for backend plugins. Some plugins also require configuration entries in `app-config.yaml`. The process is intentional to give teams explicit control."
    },
    {
        id: 18,
        question: "What is TechDocs in Backstage?",
        options: [
            "Backstage's built-in docs-like-code solution for writing Markdown documentation alongside source code",
            "A plugin that visualizes CI/CD pipeline status and build history within Backstage",
            "A monitoring tool that aggregates logs and metrics from services in the catalog",
            "A code search and cross-referencing engine for navigating large codebases"
        ],
        answer: "Backstage's built-in docs-like-code solution for writing Markdown documentation alongside source code",
        explanation: "TechDocs is Spotify's homegrown docs-like-code solution built into Backstage. Engineers write documentation in Markdown files stored alongside their source code, and TechDocs (using MkDocs) generates polished, searchable documentation sites accessible directly within the Backstage portal."
    },
    {
        id: 19,
        question: "Which operating systems does Backstage officially support for local development?",
        options: [
            "Windows only, with WSL2 required as a compatibility layer for Unix build tools",
            "macOS only, due to dependencies on macOS-specific build toolchains",
            "Unix-based systems including Linux, macOS, or Windows Subsystem for Linux (WSL2)",
            "Any operating system natively, including Windows, Linux, and macOS without restrictions"
        ],
        answer: "Unix-based systems including Linux, macOS, or Windows Subsystem for Linux (WSL2)",
        explanation: "Backstage officially supports Unix-based operating systems: Linux, macOS, and WSL2 on Windows. Native Windows is not officially supported due to dependencies on GNU-like build tools. The documentation explicitly recommends using WSL2 for Windows developers who want a supported local development environment."
    },
    {
        id: 20,
        question: "What is the `apiVersion` field value used for most Backstage catalog entity definitions?",
        options: [
            "`backstage.io/v1` – the stable API version for all core Backstage entities",
            "`backstage.io/v2alpha1` – the latest alpha version with new entity type features",
            "`backstage.io/v1beta1` – the beta API version used during the initial catalog rollout",
            "`backstage.io/v1alpha1` – the current API version for most catalog entity kinds"
        ],
        answer: "`backstage.io/v1alpha1` – the current API version for most catalog entity kinds",
        explanation: "The `apiVersion: backstage.io/v1alpha1` is used for most Backstage entity kinds: Component, API, Resource, System, Domain, Group, User, and Location. The Template entity uses `backstage.io/v1beta3` (the latest scaffolder template version). The `apiVersion` field follows a Kubernetes-like convention to allow future API evolution."
    },
    {
        id: 21,
        question: "Which UI component library does Backstage use for its frontend design system?",
        options: [
            "Chakra UI – the accessible design system used by Backstage for all UI components",
            "Material UI – Backstage uses Material UI (MUI) for its frontend component library",
            "Ant Design – the enterprise-grade design system powering Backstage's interface",
            "Bootstrap – the CSS framework used for Backstage's responsive layout system"
        ],
        answer: "Material UI – Backstage uses Material UI (MUI) for its frontend component library",
        explanation: "Backstage uses Material UI (MUI, formerly Material-UI) as its primary UI component library. All built-in Backstage components—cards, tables, dialogs, navigation—are built on Material UI v4/v5. Plugin developers are expected to use Material UI components to maintain visual consistency across the portal. Backstage's theming system is built on top of Material UI's theme provider."
    },
    {
        id: 22,
        question: "Which Node.js version is recommended for Backstage development?",
        options: [
            "Node.js 16 LTS exclusively, as later versions introduce breaking API changes",
            "Active LTS releases such as Node.js 22 or 24, ideally managed via nvm",
            "Node.js 18 only, as it is the sole version with complete Backstage support",
            "Any version above Node.js 14, since Backstage supports all recent releases"
        ],
        answer: "Active LTS releases such as Node.js 22 or 24, ideally managed via nvm",
        explanation: "Backstage requires an active Node.js LTS release. The official documentation recommends Node.js 22 or 24 (the current active LTS versions at the time of writing) and suggests using nvm (Node Version Manager) to switch between versions easily. Node.js 16 is no longer supported."
    },
    {
        id: 23,
        question: "What is the configuration file loading order in Backstage?",
        options: [
            "`backstage.yaml` → `backstage.local.yaml` → environment-specific overrides",
            "`config.yaml` → `config.env.yaml` → `config.local.yaml` in that order",
            "`settings.json` → `settings.env.json` → `settings.local.json` in that order",
            "`app-config.yaml` → `app-config.<env>.yaml` → `app-config.local.yaml`"
        ],
        answer: "`app-config.yaml` → `app-config.<env>.yaml` → `app-config.local.yaml`",
        explanation: "Backstage loads configuration files in a specific hierarchy where later files override earlier ones: `app-config.yaml` (base config) → `app-config.<BACKSTAGE_ENV>.yaml` (environment-specific, e.g., production) → `app-config.local.yaml` (local developer overrides). Additional files can also be specified with `--config` flags."
    },
    {
        id: 24,
        question: "Which entity kind is specifically designed to describe a software interface such as an OpenAPI or AsyncAPI specification?",
        options: [
            "API – specifically designed to represent software interfaces and their specifications",
            "Interface – the entity kind for documenting API contracts and specifications",
            "Service – used to represent APIs exposed by backend microservices",
            "Endpoint – the entity kind for individual API operations and endpoint definitions"
        ],
        answer: "API – specifically designed to represent software interfaces and their specifications",
        explanation: "The `API` entity kind describes an interface that can be exposed by a component. It supports multiple definition formats via `spec.type`: `openapi` (OpenAPI/Swagger), `asyncapi` (AsyncAPI), `graphql` (GraphQL schema), and `grpc` (Protocol Buffers). API entities enable teams to discover, consume, and document interfaces across the organization."
    },
    {
        id: 25,
        question: "What is a Backstage entity provider?",
        options: [
            "A configuration block that defines how Backstage authenticates users via OAuth providers",
            "A service that automatically deploys new component versions when catalog entries are updated",
            "A mechanism for ingesting entities into the Software Catalog from external data sources",
            "A plugin that provisions cloud infrastructure using catalog entity specifications"
        ],
        answer: "A mechanism for ingesting entities into the Software Catalog from external data sources",
        explanation: "Entity providers are backend modules that discover and ingest catalog entities from external sources. Instead of requiring every team to maintain a `catalog-info.yaml`, providers can automatically discover components by querying GitHub organizations, AWS services, Kubernetes clusters, or any other external API. They implement the `EntityProvider` interface and can run on a schedule to keep the catalog up to date."
    },
    {
        id: 26,
        question: "What is the primary purpose of Software Templates in Backstage?",
        options: [
            "To provide read-only catalog views summarizing component configurations and ownership",
            "To generate infrastructure-as-code templates for cloud resource provisioning",
            "To enable rapid, standardized project creation that enforces organizational best practices",
            "To monitor service health and alert teams when components deviate from baselines"
        ],
        answer: "To enable rapid, standardized project creation that enforces organizational best practices",
        explanation: "Software Templates (also called Scaffolder templates) allow platform teams to define reusable blueprints for creating new components. When a developer uses a template, Backstage collects parameters through a form, then executes a series of steps to create repositories, scaffold code, register catalog entries, and more—all while enforcing company standards."
    },
    {
        id: 27,
        question: "What is the minimum disk space required for a Backstage installation?",
        options: [
            "20 GB, as `node_modules` and build artifacts require significant storage space",
            "5 GB, which is sufficient for the core application without additional plugins",
            "10 GB, required for TypeScript compilation caches and development artifacts",
            "50 GB, required for production deployments with the full plugin suite enabled"
        ],
        answer: "20 GB, as `node_modules` and build artifacts require significant storage space",
        explanation: "The Backstage documentation specifies a minimum of 20 GB of free disk space. This is because Backstage's `node_modules` directory is very large (due to its extensive dependency tree), and this footprint grows further as additional plugins are installed. Build caches and generated documentation also consume substantial space."
    },
    {
        id: 28,
        question: "What type of entity must the `spec.owner` field in a Component entity reference?",
        options: [
            "A User or System entity that is responsible for the component",
            "A User or Group entity representing the individual or team who owns the component",
            "A Domain or System entity that the component belongs to organizationally",
            "A Location or Group entity that defines where the component is maintained"
        ],
        answer: "A User or Group entity representing the individual or team who owns the component",
        explanation: "`spec.owner` must reference either a `User` or `Group` entity (using the format `group:my-team` or `user:john-doe`). Ownership is a fundamental concept in Backstage—it enables the catalog to answer 'who owns this?' and drive accountability. Teams are encouraged to use `Group` entities as owners for shared responsibility."
    },
    {
        id: 29,
        question: "What schema format does the Backstage Scaffolder use for defining Software Template input parameters?",
        options: [
            "OpenAPI Schema for defining request parameter shapes and response types",
            "GraphQL Schema Definition Language for typed template parameter definitions",
            "Protocol Buffers (protobuf) for efficient binary serialization of parameters",
            "JSON Schema for defining the structure and validation rules of template input forms"
        ],
        answer: "JSON Schema for defining the structure and validation rules of template input forms",
        explanation: "Software Template `spec.parameters` uses JSON Schema to define the input form fields. Each property in the schema becomes a form field, with type, title, description, default values, and validation constraints. Backstage uses the `react-jsonschema-form` library to render the schema as a UI form, supporting custom UI widgets for specialized input types like entity pickers."
    },
    {
        id: 30,
        question: "Which file contains the primary application configuration shared between the Backstage frontend and backend?",
        options: [
            "settings.yaml – the primary settings file for all Backstage configuration",
            "backstage.config.yaml – the root configuration file for Backstage settings",
            "config.yaml – the standard YAML configuration file used across the platform",
            "app-config.yaml – the primary configuration file shared between frontend and backend"
        ],
        answer: "app-config.yaml – the primary configuration file shared between frontend and backend",
        explanation: "`app-config.yaml` is the main configuration file for a Backstage application. It lives in the project root and contains settings used by both the frontend and backend, including `app.baseUrl`, `backend.baseUrl`, catalog configuration, integrations, and authentication settings. Configuration is shared to avoid duplication."
    },
    {
        id: 31,
        question: "Which command validates that Backstage configuration files conform to their schemas?",
        options: [
            "`yarn config:validate` – runs configuration schema validation locally",
            "`backstage-cli config:check` – validates configuration against the combined plugin schemas",
            "`yarn check:config` – checks all YAML configuration files for syntax errors",
            "`backstage validate --config` – the CLI command for full configuration validation"
        ],
        answer: "`backstage-cli config:check` – validates configuration against the combined plugin schemas",
        explanation: "`backstage-cli config:check` validates `app-config.yaml` and other configuration files against the JSON Schema contributed by all installed plugins and packages. This catches typos, missing required fields, and invalid values before they cause runtime errors. It can be run as part of a CI pipeline to prevent bad configuration from being deployed."
    },
    {
        id: 32,
        question: "How does a `System` entity relate to `Component` entities in the Backstage catalog hierarchy?",
        options: [
            "Systems are nested inside Components as sub-groupings of related functionality",
            "Components completely replace Systems in the modern Backstage catalog hierarchy",
            "Systems provide a higher-level abstraction that groups related Components and Resources together",
            "Components and Systems are independent entity types with no formally defined relationship"
        ],
        answer: "Systems provide a higher-level abstraction that groups related Components and Resources together",
        explanation: "A `System` is a collection of Components and Resources that work together to deliver a capability. For example, a 'Payments System' might group a frontend Component, a backend Component, and a database Resource. Systems provide a useful abstraction level for consumers who don't need to understand individual component details. Components reference their System via `spec.system`."
    },
    {
        id: 33,
        question: "What is a 'Card' in the context of Backstage entity page customization?",
        options: [
            "A UI widget component rendered in a grid on an entity's detail page to display information",
            "A payment or billing integration for managing Backstage subscription costs",
            "A physical access card identifier linked to a developer's Backstage user profile",
            "A configuration card that defines integration settings for connecting external tools"
        ],
        answer: "A UI widget component rendered in a grid on an entity's detail page to display information",
        explanation: "In Backstage, 'Cards' are React components that render as panels within an entity's detail page layout. The entity page is composed of tabs, and each tab can contain a grid of Cards displaying different information (e.g., entity metadata, links, CI status, Kubernetes workloads, cost data). Plugin developers create custom Cards using `createComponentExtension()` to add their data to relevant entity pages."
    },
    {
        id: 34,
        question: "What is the minimum RAM required to run Backstage locally according to the official documentation?",
        options: [
            "6 GB of RAM, as specified in the official system requirements",
            "2 GB of RAM, sufficient for the lightweight development server",
            "4 GB of RAM required for the TypeScript compilation process",
            "16 GB of RAM due to the extensive plugin ecosystem compilation"
        ],
        answer: "6 GB of RAM, as specified in the official system requirements",
        explanation: "The official Backstage documentation specifies a minimum of 6 GB of RAM for local development. This requirement exists because Backstage compiles a large TypeScript codebase and runs both frontend and backend processes simultaneously, which is memory-intensive."
    },
    {
        id: 35,
        question: "How does the Backstage frontend access configuration values defined in `app-config.yaml`?",
        options: [
            "All configuration values in app-config.yaml are automatically available in the browser",
            "The frontend reads values via environment variables prefixed with `REACT_APP_`",
            "Only values marked with `visibility: frontend` in their schema definition are browser-accessible",
            "Configuration is automatically replicated to the frontend via a built-in GraphQL subscription"
        ],
        answer: "Only values marked with `visibility: frontend` in their schema definition are browser-accessible",
        explanation: "By default, all configuration in Backstage is backend-only and not exposed to the browser (for security). Frontend visibility is controlled by the `visibility` property in the plugin's config schema. When a config value is marked with `visibility: frontend` (or `visibility: secret`), it becomes available to the frontend via the `ConfigApi`. This prevents accidental exposure of sensitive values like database passwords."
    },
    {
        id: 36,
        question: "What is the maximum allowed length for an entity `name` in Backstage?",
        options: [
            "128 characters, following the standard Kubernetes label length limitation",
            "255 characters, matching the typical database VARCHAR field limit",
            "32 characters, to ensure compatibility with all supported naming conventions",
            "63 characters, following Kubernetes naming conventions for labels and metadata"
        ],
        answer: "63 characters, following Kubernetes naming conventions for labels and metadata",
        explanation: "Backstage entity names follow Kubernetes naming conventions and are limited to 63 characters. Names must consist of alphanumeric characters (`[a-z0-9A-Z]`) optionally separated by hyphens, underscores, or dots. This limit applies to names, namespaces, and other identifier fields in the catalog entity descriptor format."
    },
    {
        id: 37,
        question: "What is the TechDocs Addon Framework, introduced in Backstage 1.2?",
        options: [
            "A replacement for the MkDocs generator with a custom JavaScript documentation builder",
            "A system that augments the TechDocs documentation reading experience at read-time with addons",
            "A deployment pipeline manager for building and publishing TechDocs to cloud storage",
            "A version control integration that provides branching and merge request support for docs"
        ],
        answer: "A system that augments the TechDocs documentation reading experience at read-time with addons",
        explanation: "The TechDocs Addon Framework (introduced in Backstage 1.2) allows developers to extend the TechDocs reader experience without modifying the underlying MkDocs generation process. Addons are React components that render alongside the documentation content. Examples include the community `ReportIssue` addon that lets readers flag documentation problems directly in the UI."
    },
    {
        id: 38,
        question: "What is the primary purpose of a `catalog-info.yaml` file placed in a repository?",
        options: [
            "To configure Backstage backend settings including database and authentication",
            "To define entity metadata that registers the repository as a component in the Software Catalog",
            "To specify which Backstage plugins are loaded and their configuration options",
            "To set the authentication provider configuration for the frontend application"
        ],
        answer: "To define entity metadata that registers the repository as a component in the Software Catalog",
        explanation: "`catalog-info.yaml` is an entity descriptor file that tells Backstage about a software component. It defines fields like `kind`, `metadata.name`, `spec.type`, `spec.lifecycle`, and `spec.owner`. When Backstage discovers this file (via a Location or GitHub discovery), it ingests the component into the Software Catalog."
    },
    {
        id: 39,
        question: "What environment variable pattern can be used to override `app-config.yaml` values at runtime?",
        options: [
            "`BACKSTAGE_VAR_key=value` following the Backstage environment variable convention",
            "`CONFIG_key=value` using the standard CONFIG prefix pattern",
            "`BACKSTAGE_CONFIG_key=value` using the Backstage-specific prefix convention",
            "`APP_CONFIG_app_baseUrl=value` which maps to the `app.baseUrl` configuration path"
        ],
        answer: "`APP_CONFIG_app_baseUrl=value` which maps to the `app.baseUrl` configuration path",
        explanation: "Backstage supports environment variable substitution using the `APP_CONFIG_` prefix. The variable name maps to the configuration path using underscores as path separators, so `APP_CONFIG_app_baseUrl=https://example.com` overrides `app.baseUrl` in the config. However, the documentation recommends using this sparingly and preferring config files for most settings."
    },
    {
        id: 40,
        question: "Which entity kind is used to describe infrastructure dependencies such as databases, message queues, or S3 buckets?",
        options: [
            "Resource – describes infrastructure a system needs to operate",
            "Infrastructure – the entity kind for all managed infrastructure components",
            "Storage – a specialized entity kind for data storage infrastructure dependencies",
            "Asset – the entity kind for external infrastructure assets and dependencies"
        ],
        answer: "Resource – describes infrastructure a system needs to operate",
        explanation: "The `Resource` entity kind describes infrastructure components that systems depend on, such as databases (e.g., BigTable, RDS), message queues (e.g., Pub/Sub, SQS), object storage (e.g., S3 buckets), CDNs, or Kubernetes clusters. Resources are linked to systems and components via `spec.system` and `spec.dependsOn` relationships."
    },
    {
        id: 41,
        question: "What is the purpose of `createPlugin()` in Backstage plugin development?",
        options: [
            "To install a plugin package from the npm registry into a Backstage application",
            "To configure a plugin's authentication settings and external API access permissions",
            "To define and register a new plugin with its ID, feature flags, and extensions",
            "To publish a completed plugin to the open-source Backstage plugin marketplace"
        ],
        answer: "To define and register a new plugin with its ID, feature flags, and extensions",
        explanation: "`createPlugin()` is the core function from `@backstage/core-plugin-api` used to define a Backstage frontend plugin. It takes a configuration object with a unique `id`, optional `apis` (API factory registrations), and optional `featureFlags`. The returned plugin object is used to create routes, components, and other extensions. Every frontend plugin starts with a `createPlugin()` call."
    },
    {
        id: 42,
        question: "What documentation generator does TechDocs use under the hood to convert Markdown files into documentation sites?",
        options: [
            "Docusaurus – a Facebook-developed static site generator built for documentation",
            "Hugo – a Go-based static site generator known for its build speed",
            "MkDocs – a Python-based static site generator that TechDocs uses to build docs",
            "Jekyll – a Ruby-based static site generator used by GitHub Pages"
        ],
        answer: "MkDocs – a Python-based static site generator that TechDocs uses to build docs",
        explanation: "TechDocs uses MkDocs (and the Material for MkDocs theme) to convert Markdown files into static documentation sites. The `mkdocs.yml` file in a repository's root controls the documentation structure. TechDocs can also leverage the large ecosystem of MkDocs plugins to add functionality like search, diagrams, and more."
    },
    {
        id: 43,
        question: "Which source control providers does TechDocs support for fetching documentation source files?",
        options: [
            "GitHub, GitLab, Bitbucket, Azure DevOps, and other providers via integrations",
            "Only GitHub and GitLab, as they are the only officially supported providers",
            "Only GitHub and Bitbucket through the native TechDocs integration plugins",
            "GitHub, GitLab, Mercurial, and Subversion via the universal VCS adapter"
        ],
        answer: "GitHub, GitLab, Bitbucket, Azure DevOps, and other providers via integrations",
        explanation: "TechDocs supports a wide range of source control providers through Backstage's integration system: GitHub, GitLab, Bitbucket (Cloud and Data Center), Azure DevOps, and others. The integration configuration tells TechDocs where to fetch the Markdown source files from when building documentation."
    },
    {
        id: 44,
        question: "What does the `spec.domain` field in a `System` entity reference?",
        options: [
            "An internet domain name or URL where the system's API is publicly accessible",
            "A Domain entity that groups related systems sharing a business purpose or terminology",
            "A URL where the system's technical documentation is hosted on an external site",
            "A network configuration domain used for internal DNS resolution and service discovery"
        ],
        answer: "A Domain entity that groups related systems sharing a business purpose or terminology",
        explanation: "`spec.domain` in a `System` entity references a `Domain` entity (e.g., `domain:payments`). A `Domain` groups multiple related `System` entities that share terminology, domain models, or business purpose—similar to Domain-Driven Design bounded contexts. This creates a three-level hierarchy: Domain → System → Component/Resource."
    },
    {
        id: 45,
        question: "What is the purpose of `EntityPage` in Backstage?",
        options: [
            "To render a paginated table listing all entities registered in the Software Catalog",
            "To provide full-text search functionality across all catalog entity names and descriptions",
            "To generate `catalog-info.yaml` files from a visual entity creation wizard",
            "To display a customizable detail view for individual catalog entities with tabs and cards"
        ],
        answer: "To display a customizable detail view for individual catalog entities with tabs and cards",
        explanation: "`EntityPage` is the main layout component for individual entity detail pages in Backstage. It is defined in `packages/app/src/components/catalog/EntityPage.tsx` and can be customized per entity kind and type. It renders a set of tabs (e.g., Overview, CI/CD, Kubernetes, Docs, Dependencies) each containing cards from various plugins. This is the primary customization point for the catalog UI."
    },
    {
        id: 46,
        question: "How is a Backstage application's codebase organized by default?",
        options: [
            "As a single monolithic package with all frontend and backend code bundled together",
            "As independent microservices with separate repositories per capability area",
            "As a collection of Docker containers orchestrated by Docker Compose files",
            "As Yarn workspaces inside a `packages/` directory containing separate frontend and backend packages"
        ],
        answer: "As Yarn workspaces inside a `packages/` directory containing separate frontend and backend packages",
        explanation: "A Backstage application is a Yarn workspace monorepo. The `packages/` directory contains at least `packages/app` (the React frontend) and `packages/backend` (the Node.js backend). Additional plugins can be added as separate workspace packages, allowing them to be developed and versioned independently while sharing common dependencies."
    },
    {
        id: 47,
        question: "What is the purpose of `app-config.local.yaml` in a Backstage project?",
        options: [
            "To define production-specific configuration that overrides the base app-config.yaml",
            "To provide local developer overrides that should not be committed to version control",
            "To configure the local SQLite database connection strings for development",
            "To define localhost-specific networking, port bindings, and CORS settings"
        ],
        answer: "To provide local developer overrides that should not be committed to version control",
        explanation: "`app-config.local.yaml` is designed for developer-specific overrides such as personal access tokens, local database passwords, or custom endpoint URLs. This file is listed in `.gitignore` by default so sensitive personal credentials are never accidentally committed to the repository. It is loaded last and overrides all other configuration files."
    },
    {
        id: 48,
        question: "Which `spec.lifecycle` value should be used for a component actively being developed but not yet ready for production?",
        options: [
            "development – indicates the component is being actively developed by the team",
            "staging – marks a component deployed to a staging environment for testing",
            "experimental – used for components in active development not yet production-ready",
            "beta – indicates a component available for early adopters but not fully released"
        ],
        answer: "experimental – used for components in active development not yet production-ready",
        explanation: "The three conventional lifecycle values in Backstage are `experimental` (new or under active development—may have breaking changes), `production` (stable and in production), and `deprecated` (being phased out). Using `experimental` signals to other teams that the component should not be relied upon yet and may change significantly."
    },
    {
        id: 49,
        question: "What is a 'scaffolder action' in Backstage?",
        options: [
            "A named, reusable step that Software Templates invoke to perform specific tasks like creating repos",
            "A Kubernetes Job that runs infrastructure provisioning workflows inside the cluster",
            "A monitoring probe that checks component health and updates the entity status in the catalog",
            "An automated code review triggered whenever a developer opens a new pull request"
        ],
        answer: "A named, reusable step that Software Templates invoke to perform specific tasks like creating repos",
        explanation: "Scaffolder actions are the atomic building blocks of Software Templates. Each step in `spec.steps` references an action by `id` (e.g., `fetch:template`, `publish:github:pull-request`, `catalog:register`). Actions are registered in the Scaffolder backend and can be built-in (from `@backstage/plugin-scaffolder-backend`) or custom-built. They receive input parameters and produce output values used by subsequent steps."
    },
    {
        id: 50,
        question: "Which command starts both the Backstage frontend and backend simultaneously in development mode?",
        options: [
            "yarn start – launches both the frontend React app and the Node.js backend concurrently",
            "npm run dev – the standard development startup command for Backstage applications",
            "backstage serve --watch – the Backstage CLI command for development mode",
            "yarn dev:all – the unified development command launching all Backstage services"
        ],
        answer: "yarn start – launches both the frontend React app and the Node.js backend concurrently",
        explanation: "`yarn start` is the standard command to start a Backstage application in development mode. It concurrently starts both the frontend development server (webpack dev server on port 3000) and the Node.js backend server (typically on port 7007), with hot-reloading enabled for both."
    },
    {
        id: 51,
        question: "What is the npm package name for the official TechDocs backend plugin?",
        options: [
            "`@backstage/techdocs-backend` – the primary backend package for TechDocs",
            "`@backstage/plugin-docs-backend` – the documentation service backend package",
            "`@backstage/plugin-techdocs-backend` – the official TechDocs backend plugin package",
            "`@backstage/docs-service` – the backend service package for TechDocs generation"
        ],
        answer: "`@backstage/plugin-techdocs-backend` – the official TechDocs backend plugin package",
        explanation: "The TechDocs system consists of two npm packages: `@backstage/plugin-techdocs` for the frontend React components, and `@backstage/plugin-techdocs-backend` for the server-side operations like fetching source files, generating documentation with MkDocs, and serving the static assets. Both follow Backstage's standard plugin package naming convention."
    },
    {
        id: 52,
        question: "What is the purpose of the `spec.dependsOn` field in a Component entity descriptor?",
        options: [
            "To list build-time dependencies and required development tools for the project",
            "To specify which teams must review and approve changes to this component",
            "To define required npm packages and their minimum version constraints",
            "To declare runtime dependencies on other catalog entities such as components or resources"
        ],
        answer: "To declare runtime dependencies on other catalog entities such as components or resources",
        explanation: "`spec.dependsOn` accepts an array of entity references (e.g., `['component:backend-api', 'resource:postgres-db']`) and creates dependency relationships in the catalog. These relationships are visualized in the catalog's dependency graph, helping teams understand impact radius during incidents, plan migration work, and identify bottlenecks in the system architecture."
    },
    {
        id: 53,
        question: "What is a `RouteRef` in Backstage plugin development?",
        options: [
            "An HTTP routing rule for forwarding external API requests to backend plugin handlers",
            "A stable typed identifier used to define navigable locations within or between plugins",
            "A configuration object for setting up request routing between frontend and backend plugins",
            "A registry that maps all available plugin routes across the entire Backstage platform"
        ],
        answer: "A stable typed identifier used to define navigable locations within or between plugins",
        explanation: "A `RouteRef` is a stable, type-safe identifier created with `createRouteRef()` from `@backstage/core-plugin-api`. It defines a navigable location within a plugin without hardcoding URL paths. Other plugins can use `ExternalRouteRef` to link to a `RouteRef` in another plugin, enabling cross-plugin navigation that remains stable even if URL paths change."
    },
    {
        id: 54,
        question: "What is the purpose of the `packages/` directory in a Backstage application?",
        options: [
            "To store third-party external dependencies downloaded from the npm registry",
            "To contain the frontend (`app`) and backend (`backend`) as separate Yarn workspace packages",
            "To hold plugin-specific configuration files and plugin metadata definitions",
            "To store database migration files and schema version definitions for PostgreSQL"
        ],
        answer: "To contain the frontend (`app`) and backend (`backend`) as separate Yarn workspace packages",
        explanation: "The `packages/` directory is the root of the Backstage Yarn workspaces monorepo. `packages/app` contains the React single-page frontend application, while `packages/backend` contains the Node.js backend service. Plugins installed locally also reside here as additional workspace packages."
    },
    {
        id: 55,
        question: "How does Backstage support multiple teams or organizational units within a single deployment?",
        options: [
            "Through separate database schemas for each tenant organization within PostgreSQL",
            "By creating isolated Backstage deployments per team with a shared identity provider",
            "Through namespaces that scope entity names and prevent catalog collisions between units",
            "Using separate YAML configuration files per organizational unit managed by an operator"
        ],
        answer: "Through namespaces that scope entity names and prevent catalog collisions between units",
        explanation: "Backstage uses namespaces (defined in `metadata.namespace`) to scope entity names within the catalog. Entities in different namespaces can have the same name without conflict. The default namespace is `default`. Entity references include the namespace (e.g., `component:payments-team/checkout-service`) to uniquely identify entities. This allows a single Backstage instance to serve multiple teams or organizational units."
    },
    {
        id: 56,
        question: "What does the `@backstage/core-plugin-api` package provide to plugin developers?",
        options: [
            "Administrative REST APIs for managing Backstage instances programmatically",
            "A code generation tool that creates API client code from OpenAPI specifications",
            "The plugin discovery mechanism for dynamically loading plugins at runtime",
            "Core APIs, hooks, and utilities that plugins use to interact with the Backstage platform"
        ],
        answer: "Core APIs, hooks, and utilities that plugins use to interact with the Backstage platform",
        explanation: "`@backstage/core-plugin-api` is the foundational package for Backstage frontend plugin development. It provides `createPlugin()`, `createApiRef()`, `useApi()`, `createRouteRef()`, `createComponentExtension()`, and many other building blocks. Plugins import from this package to access Backstage services like configuration, identity, alerts, and routing in a type-safe, dependency-injected manner."
    },
    {
        id: 57,
        question: "What does the `useApi()` hook provide in Backstage frontend plugin development?",
        options: [
            "Access to platform-level APIs and registered services within a React component",
            "A way to fetch data from external REST APIs directly within Software Template definitions",
            "The ability to define and expose new API endpoints in a backend plugin handler",
            "Validation utilities for verifying entity API specification formats in the catalog"
        ],
        answer: "Access to platform-level APIs and registered services within a React component",
        explanation: "`useApi()` is a React hook from `@backstage/core-plugin-api` that retrieves registered API implementations using an `ApiRef`. For example, `useApi(configApiRef)` returns the configuration service, and `useApi(catalogApiRef)` returns the catalog client. This implements dependency injection in the frontend, allowing plugins to consume services without direct coupling to their implementations."
    },
    {
        id: 58,
        question: "What is a Backstage 'App' in the context of the frontend architecture?",
        options: [
            "A mobile application for accessing the Backstage developer portal on iOS and Android",
            "A single-page application that combines and renders all installed plugins through a unified interface",
            "A standalone backend microservice that exposes the Backstage catalog via REST APIs",
            "A containerized Backstage instance scoped to a specific team or product domain"
        ],
        answer: "A single-page application that combines and renders all installed plugins through a unified interface",
        explanation: "The Backstage 'App' (in `packages/app`) is the root single-page application that orchestrates all installed plugins. It is created using `createApp()` from `@backstage/app-defaults`, which wires together the plugin registry, API implementations, theme, and routing. The App provides a consistent shell (sidebar, header) that plugins render within, creating the unified developer portal experience."
    },
    {
        id: 59,
        question: "Which file is the primary entry point for registering and configuring plugins in a Backstage frontend application?",
        options: [
            "`packages/app/src/plugin-config.ts` – the dedicated plugin registration configuration file",
            "`packages/app/src/backstage.config.ts` – the Backstage-specific configuration module",
            "`packages/app/src/App.tsx` – the root application component where plugins are imported and registered",
            "`packages/app/src/plugins.yaml` – the YAML manifest that lists all installed plugins"
        ],
        answer: "`packages/app/src/App.tsx` – the root application component where plugins are imported and registered",
        explanation: "`packages/app/src/App.tsx` is the central file for customizing a Backstage frontend. Plugin pages are added by importing the plugin's exported route components and adding them to the `<FlatRoutes>` in the `createApp()` call. The `EntityPage` component imported here defines what appears on catalog entity detail pages. This file is the main customization surface for platform engineers building their developer portal."
    },
    {
        id: 60,
        question: "What is the purpose of the Backstage permission framework?",
        options: [
            "To manage Unix file system permissions for Backstage configuration and log files",
            "To control network firewall rules governing which services can access Backstage APIs",
            "To configure Kubernetes RBAC roles granting cluster access to Backstage service accounts",
            "To provide fine-grained authorization controlling which users can perform which actions in the platform"
        ],
        answer: "To provide fine-grained authorization controlling which users can perform which actions in the platform",
        explanation: "The Backstage permission framework (introduced via `@backstage/plugin-permission-backend`) enables platform teams to implement fine-grained access control. Policy decisions determine whether a given user can perform a given action on a given resource (e.g., 'can this user delete a catalog entity?' or 'can this user trigger a Software Template?'). Plugins opt into the permission framework by defining `permission` objects for their actions."
    }
];

const cbaCorrectAnswers = {
     1: 'A',  2: 'C',  3: 'D',  4: 'A',  5: 'B',  6: 'B',  7: 'D',  8: 'A',  9: 'C', 10: 'C',
    11: 'A', 12: 'B', 13: 'D', 14: 'D', 15: 'B', 16: 'C', 17: 'A', 18: 'A', 19: 'C', 20: 'D',
    21: 'B', 22: 'B', 23: 'D', 24: 'A', 25: 'C', 26: 'C', 27: 'A', 28: 'B', 29: 'D', 30: 'D',
    31: 'B', 32: 'C', 33: 'A', 34: 'A', 35: 'C', 36: 'D', 37: 'B', 38: 'B', 39: 'D', 40: 'A',
    41: 'C', 42: 'C', 43: 'A', 44: 'B', 45: 'D', 46: 'D', 47: 'B', 48: 'C', 49: 'A', 50: 'A',
    51: 'C', 52: 'D', 53: 'B', 54: 'B', 55: 'C', 56: 'D', 57: 'A', 58: 'B', 59: 'C', 60: 'D'
};

// Global exports – DO NOT CHANGE THESE LINES
window.examInfo = cbaExamInfo;
window.questions = cbaQuestions;
window.correctAnswers = cbaCorrectAnswers;
window.topicMappings = cbaTopicMappings;

// AI Generation Metadata
window.aiGenerated = {
    platform: 'cert-practice-platform',
    generated: '2026-05-30',
    disclaimer: 'This content was AI-generated and should be verified against official Backstage documentation at https://backstage.io/docs'
};
