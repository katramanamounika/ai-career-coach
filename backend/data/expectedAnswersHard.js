const expectedAnswersHard = {
    "Design scalable frontend architecture.": {
  keywords: [
    "modular",
    "component architecture",
    "scalability",
    "state management",
    "maintainability"
  ]
},

"Explain micro frontend architecture.": {
  keywords: [
    "micro frontend",
    "independent deployment",
    "modular",
    "frontend"
  ]
},

"How would you optimize Core Web Vitals?": {
  keywords: [
    "lcp",
    "fid",
    "cls",
    "performance",
    "optimization"
  ]
},

"Explain React Fiber.": {
  keywords: [
    "react fiber",
    "reconciliation",
    "scheduling",
    "rendering"
  ]
},

"How would you reduce bundle size?": {
  keywords: [
    "tree shaking",
    "lazy loading",
    "code splitting",
    "optimization"
  ]
},

"Explain frontend caching strategies.": {
  keywords: [
    "cache",
    "browser cache",
    "cdn",
    "performance"
  ]
},

"How would you implement virtual scrolling?": {
  keywords: [
    "virtualization",
    "large lists",
    "performance"
  ]
},

"Explain frontend observability.": {
  keywords: [
    "monitoring",
    "logging",
    "analytics",
    "performance"
  ]
},

"How would you debug memory leaks?": {
  keywords: [
    "memory leak",
    "profiling",
    "cleanup",
    "debugging"
  ]
},

"Design enterprise dashboard architecture.": {
  keywords: [
    "dashboard",
    "scalable",
    "components",
    "architecture"
  ]
},
"Design scalable backend architecture.": {
  keywords: [
    "microservices",
    "load balancing",
    "database",
    "scalability"
  ]
},

"How would you handle millions of requests?": {
  keywords: [
    "load balancer",
    "caching",
    "horizontal scaling",
    "optimization"
  ]
},

"Explain load balancing.": {
  keywords: [
    "traffic distribution",
    "availability",
    "server",
    "scaling"
  ]
},

"How would you design payment systems?": {
  keywords: [
    "transactions",
    "security",
    "payment gateway",
    "reliability"
  ]
},

"Explain distributed systems.": {
  keywords: [
    "distributed",
    "nodes",
    "fault tolerance",
    "scalability"
  ]
},

"What is database sharding?": {
  keywords: [
    "sharding",
    "partitioning",
    "database",
    "scalability"
  ]
},

"Explain message queue architecture.": {
  keywords: [
    "queue",
    "rabbitmq",
    "kafka",
    "asynchronous"
  ]
},

"How would you implement real-time notifications?": {
  keywords: [
    "websocket",
    "real time",
    "notifications"
  ]
},

"Explain backend observability.": {
  keywords: [
    "monitoring",
    "logging",
    "metrics",
    "tracing"
  ]
},

"How would you scale WebSocket servers?": {
  keywords: [
    "load balancing",
    "websocket",
    "scaling",
    "distributed"
  ]
},
"Design scalable SaaS architecture.": {
  keywords: [
    "multi tenant",
    "scalability",
    "cloud",
    "architecture"
  ]
},

"How would you build real-time chat apps?": {
  keywords: [
    "websocket",
    "real time",
    "chat",
    "server"
  ]
},

"Explain microservices architecture.": {
  keywords: [
    "microservices",
    "independent services",
    "scalability"
  ]
},

"How would you scale full stack apps?": {
  keywords: [
    "load balancing",
    "caching",
    "database optimization"
  ]
},

"Explain websocket implementation.": {
  keywords: [
    "websocket",
    "real time",
    "connection"
  ]
},

"How would you optimize database-heavy systems?": {
  keywords: [
    "indexing",
    "caching",
    "query optimization"
  ]
},

"Explain distributed authentication.": {
  keywords: [
    "jwt",
    "authentication",
    "distributed systems"
  ]
},

"How would you design Netflix architecture?": {
  keywords: [
    "microservices",
    "cdn",
    "streaming",
    "scalability"
  ]
},

"Explain full stack observability.": {
  keywords: [
    "monitoring",
    "logging",
    "metrics"
  ]
},

"How would you monitor production systems?": {
  keywords: [
    "monitoring",
    "alerts",
    "metrics",
    "logs"
  ]
},
"Design scalable FastAPI architecture.": {
  keywords: [
    "fastapi",
    "microservices",
    "scalability",
    "api"
  ]
},

"How would you process huge datasets efficiently?": {
  keywords: [
    "pandas",
    "chunking",
    "parallel processing",
    "optimization"
  ]
},

"Explain Python GIL limitations.": {
  keywords: [
    "gil",
    "threading",
    "parallelism",
    "python"
  ]
},

"How would you design ETL pipelines?": {
  keywords: [
    "extract",
    "transform",
    "load",
    "pipeline"
  ]
},

"Explain scalable microservices in Python.": {
  keywords: [
    "microservices",
    "fastapi",
    "scalability"
  ]
},

"How would you monitor production APIs?": {
  keywords: [
    "logging",
    "monitoring",
    "metrics",
    "alerts"
  ]
},

"Explain websocket systems in Python.": {
  keywords: [
    "websocket",
    "real time",
    "fastapi"
  ]
},

"How would you debug Python memory leaks?": {
  keywords: [
    "memory leak",
    "profiling",
    "debugging"
  ]
},

"Explain distributed task processing.": {
  keywords: [
    "celery",
    "queue",
    "distributed",
    "workers"
  ]
},

"How would you optimize ML APIs?": {
  keywords: [
    "caching",
    "batching",
    "optimization",
    "inference"
  ]
},
"Design scalable Java backend systems.": {
  keywords: [
    "microservices",
    "spring boot",
    "load balancing",
    "scalability",
    "distributed systems"
  ]
},

"Explain JVM memory management.": {
  keywords: [
    "heap",
    "stack",
    "garbage collection",
    "memory"
  ]
},

"How would you handle millions of requests?": {
  keywords: [
    "load balancing",
    "caching",
    "horizontal scaling",
    "performance"
  ]
},

"Explain distributed systems in Java.": {
  keywords: [
    "distributed",
    "fault tolerance",
    "nodes",
    "scalability"
  ]
},

"How would you implement scalable authentication?": {
  keywords: [
    "jwt",
    "oauth",
    "authentication",
    "authorization"
  ]
},

"Explain event-driven architecture.": {
  keywords: [
    "events",
    "message queue",
    "asynchronous",
    "kafka"
  ]
},

"How would you optimize garbage collection?": {
  keywords: [
    "garbage collection",
    "memory",
    "jvm tuning"
  ]
},

"Explain reactive programming in Spring.": {
  keywords: [
    "reactive",
    "webflux",
    "non blocking"
  ]
},

"How would you scale microservices?": {
  keywords: [
    "containerization",
    "kubernetes",
    "load balancing"
  ]
},

"Explain enterprise Java architecture.": {
  keywords: [
    "layers",
    "microservices",
    "security",
    "scalability"
  ]
},
"Design scalable ML systems.": {
  keywords: [
    "scalability",
    "pipeline",
    "distributed",
    "deployment"
  ]
},

"How would you fine-tune LLMs?": {
  keywords: [
    "fine tuning",
    "transformers",
    "training",
    "dataset"
  ]
},

"Explain RAG architecture.": {
  keywords: [
    "retrieval augmented generation",
    "vector database",
    "llm"
  ]
},

"How would you handle model drift?": {
  keywords: [
    "monitoring",
    "retraining",
    "drift detection"
  ]
},

"Explain distributed training.": {
  keywords: [
    "gpu",
    "parallel",
    "distributed",
    "training"
  ]
},

"How would you optimize GPU utilization?": {
  keywords: [
    "gpu",
    "batching",
    "optimization"
  ]
},

"Explain MLOps pipelines.": {
  keywords: [
    "automation",
    "deployment",
    "monitoring",
    "mlops"
  ]
},

"How would you scale recommendation systems?": {
  keywords: [
    "recommendation",
    "distributed",
    "scalability"
  ]
},

"Explain transformer architecture deeply.": {
  keywords: [
    "attention",
    "transformer",
    "encoder",
    "decoder"
  ]
},

"How would you build real-time AI systems?": {
  keywords: [
    "real time",
    "streaming",
    "inference",
    "scalable"
  ]
},
"Design scalable DevOps pipelines.": {
  keywords: [
    "ci cd",
    "automation",
    "pipeline",
    "scalability"
  ]
},

"How would you manage multi-cluster Kubernetes?": {
  keywords: [
    "kubernetes",
    "clusters",
    "management"
  ]
},

"Explain disaster recovery systems.": {
  keywords: [
    "backup",
    "recovery",
    "business continuity"
  ]
},

"How would you implement zero downtime deployments?": {
  keywords: [
    "blue green",
    "rolling deployment",
    "zero downtime"
  ]
},

"Explain observability architecture.": {
  keywords: [
    "monitoring",
    "logging",
    "tracing",
    "metrics"
  ]
},

"How would you scale CI/CD systems?": {
  keywords: [
    "automation",
    "parallel execution",
    "pipeline"
  ]
},

"Explain service mesh architecture.": {
  keywords: [
    "service mesh",
    "istio",
    "microservices"
  ]
},

"How would you secure Kubernetes clusters?": {
  keywords: [
    "rbac",
    "security",
    "kubernetes"
  ]
},

"Explain distributed monitoring systems.": {
  keywords: [
    "monitoring",
    "distributed",
    "metrics"
  ]
},

"How would you optimize infrastructure reliability?": {
  keywords: [
    "redundancy",
    "monitoring",
    "availability"
  ]
},
"Design enterprise security architecture.": {
  keywords: [
    "security",
    "architecture",
    "zero trust",
    "defense"
  ]
},

"How would you handle ransomware attacks?": {
  keywords: [
    "backup",
    "incident response",
    "recovery"
  ]
},

"Explain zero trust security.": {
  keywords: [
    "zero trust",
    "verification",
    "authentication"
  ]
},

"How would you secure microservices?": {
  keywords: [
    "authentication",
    "authorization",
    "api security"
  ]
},

"Explain SOC operations.": {
  keywords: [
    "security operations center",
    "monitoring",
    "incident response"
  ]
},

"How would you investigate security breaches?": {
  keywords: [
    "forensics",
    "logs",
    "incident investigation"
  ]
},

"Explain advanced persistent threats.": {
  keywords: [
    "apt",
    "long term attack",
    "threat"
  ]
},

"How would you secure Kubernetes systems?": {
  keywords: [
    "rbac",
    "network policies",
    "security"
  ]
},

"Explain cloud security architecture.": {
  keywords: [
    "iam",
    "encryption",
    "cloud security"
  ]
},

"How would you design incident response systems?": {
  keywords: [
    "incident response",
    "detection",
    "recovery"
  ]
},
"Design scalable ML pipelines.": {
  keywords: [
    "pipeline",
    "automation",
    "scalable",
    "data processing",
    "ml workflow"
  ]
},

"How would you handle big data systems?": {
  keywords: [
    "spark",
    "hadoop",
    "distributed",
    "big data"
  ]
},

"Explain recommendation systems.": {
  keywords: [
    "collaborative filtering",
    "content based",
    "recommendation"
  ]
},

"How would you detect fraud using ML?": {
  keywords: [
    "anomaly detection",
    "classification",
    "fraud detection"
  ]
},

"Explain transformer models.": {
  keywords: [
    "attention",
    "transformer",
    "encoder",
    "decoder"
  ]
},

"How would you deploy ML systems?": {
  keywords: [
    "deployment",
    "api",
    "docker",
    "cloud"
  ]
},

"Explain model drift handling.": {
  keywords: [
    "monitoring",
    "drift",
    "retraining"
  ]
},

"How would you build real-time analytics systems?": {
  keywords: [
    "streaming",
    "real time",
    "analytics"
  ]
},

"Explain distributed ML training.": {
  keywords: [
    "distributed",
    "gpu",
    "parallel training"
  ]
},

"How would you design enterprise AI systems?": {
  keywords: [
    "scalable",
    "ai architecture",
    "deployment",
    "monitoring"
  ]
},
"Design enterprise analytics systems.": {
  keywords: [
    "data warehouse",
    "analytics",
    "scalable",
    "reporting"
  ]
},

"How would you analyze millions of records?": {
  keywords: [
    "sql",
    "big data",
    "optimization",
    "distributed"
  ]
},

"Explain predictive analytics.": {
  keywords: [
    "prediction",
    "machine learning",
    "forecasting"
  ]
},

"How would you optimize business KPIs?": {
  keywords: [
    "kpi",
    "business metrics",
    "optimization"
  ]
},

"Explain advanced SQL optimization.": {
  keywords: [
    "indexing",
    "query optimization",
    "execution plan"
  ]
},

"How would you build scalable BI systems?": {
  keywords: [
    "business intelligence",
    "dashboard",
    "scalability"
  ]
},

"Explain real-time analytics pipelines.": {
  keywords: [
    "streaming",
    "real time",
    "analytics"
  ]
},

"How would you design reporting architectures?": {
  keywords: [
    "reporting",
    "data warehouse",
    "architecture"
  ]
},

"Explain customer segmentation systems.": {
  keywords: [
    "segmentation",
    "customers",
    "clustering"
  ]
},

"How would you solve data inconsistency issues?": {
  keywords: [
    "data quality",
    "validation",
    "consistency"
  ]
},
"Design scalable cloud architecture.": {
  keywords: [
    "cloud",
    "scalability",
    "availability",
    "architecture"
  ]
},

"How would you handle cloud failover?": {
  keywords: [
    "failover",
    "backup",
    "redundancy"
  ]
},

"Explain hybrid cloud systems.": {
  keywords: [
    "hybrid cloud",
    "public cloud",
    "private cloud"
  ]
},

"How would you design high availability systems?": {
  keywords: [
    "availability",
    "redundancy",
    "load balancing"
  ]
},

"Explain distributed cloud architecture.": {
  keywords: [
    "distributed",
    "cloud",
    "regions"
  ]
},

"How would you optimize multi-cloud environments?": {
  keywords: [
    "multi cloud",
    "optimization",
    "management"
  ]
},

"Explain enterprise cloud security.": {
  keywords: [
    "iam",
    "encryption",
    "security"
  ]
},

"How would you scale Kubernetes clusters?": {
  keywords: [
    "kubernetes",
    "scaling",
    "cluster"
  ]
},

"Explain cloud observability systems.": {
  keywords: [
    "monitoring",
    "logging",
    "metrics"
  ]
},

"How would you build globally distributed systems?": {
  keywords: [
    "distributed",
    "global",
    "latency",
    "availability"
  ]
},
"Design scalable mobile app architecture.": {
  keywords: [
    "architecture",
    "scalable",
    "state management",
    "mobile"
  ]
},

"How would you build real-time mobile apps?": {
  keywords: [
    "websocket",
    "real time",
    "notifications"
  ]
},

"Explain mobile CI/CD pipelines.": {
  keywords: [
    "ci cd",
    "automation",
    "deployment"
  ]
},

"How would you optimize large mobile applications?": {
  keywords: [
    "optimization",
    "performance",
    "memory"
  ]
},

"Explain native module integration.": {
  keywords: [
    "native",
    "android",
    "ios",
    "integration"
  ]
},

"How would you secure sensitive mobile data?": {
  keywords: [
    "encryption",
    "security",
    "authentication"
  ]
},

"Explain app store deployment pipelines.": {
  keywords: [
    "deployment",
    "play store",
    "app store"
  ]
},

"How would you handle millions of mobile users?": {
  keywords: [
    "scalability",
    "backend",
    "load balancing"
  ]
},

"Explain mobile observability systems.": {
  keywords: [
    "monitoring",
    "analytics",
    "crash reporting"
  ]
},

"How would you design enterprise mobile systems?": {
  keywords: [
    "enterprise",
    "security",
    "scalability"
  ]
},
"Design scalable automation frameworks.": {
  keywords: [
    "automation",
    "framework",
    "reusable",
    "testing"
  ]
},

"How would you test distributed systems?": {
  keywords: [
    "distributed",
    "testing",
    "integration"
  ]
},

"Explain enterprise QA architecture.": {
  keywords: [
    "qa",
    "automation",
    "testing strategy"
  ]
},

"How would you automate CI/CD pipelines?": {
  keywords: [
    "ci cd",
    "automation",
    "testing"
  ]
},

"Explain performance bottleneck analysis.": {
  keywords: [
    "performance",
    "bottleneck",
    "analysis"
  ]
},

"How would you test real-time systems?": {
  keywords: [
    "real time",
    "testing",
    "latency"
  ]
},

"Explain security testing strategies.": {
  keywords: [
    "security",
    "penetration testing",
    "vulnerability"
  ]
},

"How would you optimize automation suites?": {
  keywords: [
    "optimization",
    "automation",
    "test execution"
  ]
},

"Explain end-to-end testing architecture.": {
  keywords: [
    "end to end",
    "testing",
    "workflow"
  ]
},

"How would you ensure production reliability?": {
  keywords: [
    "monitoring",
    "testing",
    "reliability"
  ]
},
"Design enterprise-level design systems.": {
  keywords: [
    "design system",
    "components",
    "consistency",
    "scalability",
    "ui library"
  ]
},

"How would you optimize conversion rates?": {
  keywords: [
    "conversion",
    "a b testing",
    "user experience",
    "optimization"
  ]
},

"Explain scalable UX architecture.": {
  keywords: [
    "ux architecture",
    "user flow",
    "scalable",
    "design"
  ]
},

"How would you redesign complex dashboards?": {
  keywords: [
    "dashboard",
    "usability",
    "information hierarchy",
    "ux"
  ]
},

"Explain accessibility optimization.": {
  keywords: [
    "accessibility",
    "wcag",
    "inclusive design",
    "usability"
  ]
},

"How would you conduct large-scale UX research?": {
  keywords: [
    "research",
    "user interviews",
    "surveys",
    "analytics"
  ]
},

"Explain cross-platform UX consistency.": {
  keywords: [
    "consistency",
    "cross platform",
    "user experience"
  ]
},

"How would you solve high drop-off problems?": {
  keywords: [
    "analytics",
    "drop off",
    "user journey",
    "optimization"
  ]
},

"Explain product-driven design strategy.": {
  keywords: [
    "product strategy",
    "user needs",
    "business goals"
  ]
},

"How would you design AI-powered interfaces?": {
  keywords: [
    "ai",
    "user experience",
    "personalization",
    "interface"
  ]
},
"Design scalable multiplayer game architecture.": {
  keywords: [
    "multiplayer",
    "server",
    "networking",
    "scalability"
  ]
},

"How would you optimize AAA game performance?": {
  keywords: [
    "optimization",
    "fps",
    "memory",
    "rendering"
  ]
},

"Explain real-time networking systems.": {
  keywords: [
    "real time",
    "networking",
    "latency",
    "synchronization"
  ]
},

"How would you implement anti-cheat systems?": {
  keywords: [
    "anti cheat",
    "security",
    "server validation"
  ]
},

"Explain advanced AI behavior systems.": {
  keywords: [
    "ai",
    "behavior tree",
    "pathfinding"
  ]
},

"How would you scale online game servers?": {
  keywords: [
    "load balancing",
    "distributed",
    "game servers"
  ]
},

"Explain procedural world generation.": {
  keywords: [
    "procedural",
    "generation",
    "algorithms"
  ]
},

"How would you optimize rendering pipelines?": {
  keywords: [
    "rendering",
    "gpu",
    "optimization"
  ]
},

"Explain cloud gaming infrastructure.": {
  keywords: [
    "cloud gaming",
    "streaming",
    "servers"
  ]
},

"How would you build battle royale architecture?": {
  keywords: [
    "battle royale",
    "multiplayer",
    "scalable",
    "networking"
  ]
},
"Design scalable IoT systems.": {
  keywords: [
    "iot",
    "devices",
    "scalability",
    "communication"
  ]
},

"How would you optimize real-time systems?": {
  keywords: [
    "real time",
    "latency",
    "optimization"
  ]
},

"Explain kernel development.": {
  keywords: [
    "kernel",
    "operating system",
    "drivers"
  ]
},

"How would you design automotive embedded systems?": {
  keywords: [
    "automotive",
    "embedded",
    "safety",
    "real time"
  ]
},

"Explain embedded security architecture.": {
  keywords: [
    "security",
    "encryption",
    "embedded systems"
  ]
},

"How would you optimize low-level memory handling?": {
  keywords: [
    "memory",
    "optimization",
    "embedded"
  ]
},

"Explain FPGA integration.": {
  keywords: [
    "fpga",
    "hardware",
    "integration"
  ]
},

"How would you design industrial automation systems?": {
  keywords: [
    "automation",
    "industrial",
    "control systems"
  ]
},

"Explain distributed IoT architectures.": {
  keywords: [
    "iot",
    "distributed",
    "devices",
    "cloud"
  ]
},

"How would you build reliable embedded systems?": {
  keywords: [
    "reliability",
    "testing",
    "fault tolerance"
  ]
},
"Design scalable blockchain architecture.": {
  keywords: [
    "blockchain",
    "scalability",
    "distributed",
    "architecture"
  ]
},

"How would you audit smart contracts?": {
  keywords: [
    "audit",
    "security",
    "smart contracts"
  ]
},

"Explain Layer 2 scaling solutions.": {
  keywords: [
    "layer 2",
    "rollups",
    "scaling"
  ]
},

"How would you build decentralized exchanges?": {
  keywords: [
    "dex",
    "smart contracts",
    "liquidity"
  ]
},

"Explain cross-chain communication.": {
  keywords: [
    "cross chain",
    "interoperability",
    "blockchain"
  ]
},

"How would you optimize blockchain performance?": {
  keywords: [
    "performance",
    "transactions",
    "optimization"
  ]
},

"Explain blockchain security vulnerabilities.": {
  keywords: [
    "security",
    "vulnerabilities",
    "attacks"
  ]
},

"How would you design DeFi systems?": {
  keywords: [
    "defi",
    "smart contracts",
    "finance"
  ]
},

"Explain zero-knowledge proofs.": {
  keywords: [
    "zero knowledge",
    "privacy",
    "cryptography"
  ]
},

"How would you build enterprise blockchain systems?": {
  keywords: [
    "enterprise",
    "blockchain",
    "security",
    "scalability"
  ]
},
};

module.exports = expectedAnswersHard;
