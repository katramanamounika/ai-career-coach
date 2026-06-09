const expectedAnswersEasy = {
        "What is React?": {
    keywords: [
        "javascript library",
        "user interface",
        "components",
        "frontend"
    ]
    },

    "Explain Virtual DOM.": {
    keywords: [
        "virtual dom",
        "real dom",
        "efficient",
        "update",
        "rendering"
    ]
    },

    "Difference between let and var?": {
    keywords: [
        "block scope",
        "function scope",
        "redeclare",
        "hoisting"
    ]
    },

    "What is JSX?": {
    keywords: [
        "javascript xml",
        "html",
        "react",
        "syntax"
    ]
    },

    "Explain useState hook.": {
    keywords: [
        "state",
        "hook",
        "react",
        "update"
    ]
    },

    "What is responsive design?": {
    keywords: [
        "mobile",
        "screen size",
        "responsive",
        "media query"
    ]
    },

    "Difference between == and ===?": {
    keywords: [
        "strict equality",
        "type conversion",
        "comparison"
    ]
    },

    "What are props in React?": {
    keywords: [
        "pass data",
        "parent",
        "child",
        "component"
    ]
    },

    "Explain Flexbox.": {
    keywords: [
        "css",
        "layout",
        "alignment",
        "container"
    ]
    },

    "What is event bubbling?": {
    keywords: [
        "event propagation",
        "child",
        "parent",
        "dom"
    ]
    },
    "What is REST API?": {
    keywords: [
        "api",
        "http",
        "client",
        "server",
        "resource"
    ]
    },

    "Explain CRUD operations.": {
    keywords: [
        "create",
        "read",
        "update",
        "delete"
    ]
    },

    "What is Node.js?": {
    keywords: [
        "javascript runtime",
        "backend",
        "server"
    ]
    },

    "Difference between SQL and NoSQL?": {
    keywords: [
        "relational",
        "non relational",
        "table",
        "document"
    ]
    },

    "What is middleware?": {
    keywords: [
        "request",
        "response",
        "next",
        "processing"
    ]
    },

    "Explain JWT authentication.": {
    keywords: [
        "token",
        "authentication",
        "authorization",
        "security"
    ]
    },

    "What is MongoDB?": {
    keywords: [
        "nosql",
        "document",
        "database",
        "collection"
    ]
    },

    "What is an API endpoint?": {
    keywords: [
        "url",
        "api",
        "resource",
        "route"
    ]
    },

    "Difference between GET and POST?": {
    keywords: [
        "retrieve",
        "send",
        "request",
        "data"
    ]
    },

    "What is JSON?": {
    keywords: [
        "javascript object notation",
        "data format",
        "key value"
    ]
    },
    "What is MERN stack?": {
    keywords: [
        "mongodb",
        "express",
        "react",
        "node"
    ]
    },

    "Explain frontend-backend communication.": {
    keywords: [
        "api",
        "request",
        "response",
        "http"
    ]
    },

    "What is authentication?": {
    keywords: [
        "verify",
        "identity",
        "login",
        "user"
    ]
    },

    "Difference between frontend and backend?": {
    keywords: [
        "client",
        "server",
        "ui",
        "database"
    ]
    },

    "What is Express.js?": {
    keywords: [
        "node",
        "framework",
        "server",
        "api"
    ]
    },

    "What is Git?": {
    keywords: [
        "version control",
        "repository",
        "tracking",
        "code"
    ]
    },

    "Explain REST API.": {
    keywords: [
        "api",
        "http",
        "client",
        "server"
    ]
    },

    "What is responsive UI?": {
    keywords: [
        "mobile",
        "screen size",
        "responsive",
        "layout"
    ]
    },
    "What are decorators?": {
    keywords: [
        "function",
        "modify",
        "wrapper",
        "behavior"
    ]
    },

    "Explain list comprehension.": {
    keywords: [
        "list",
        "short syntax",
        "loop",
        "python"
    ]
    },

    "Difference between tuple and list?": {
    keywords: [
        "mutable",
        "immutable",
        "list",
        "tuple"
    ]
    },

    "What is PEP8?": {
    keywords: [
        "style guide",
        "coding standard",
        "python"
    ]
    },

    "Explain generators.": {
    keywords: [
        "yield",
        "iterator",
        "memory",
        "lazy"
    ]
    },

    "What is lambda function?": {
    keywords: [
        "anonymous",
        "function",
        "single expression"
    ]
    },

    "Explain Python OOP.": {
    keywords: [
        "class",
        "object",
        "inheritance",
        "encapsulation"
    ]
    },

    "What is exception handling?": {
    keywords: [
        "try",
        "except",
        "error",
        "exception"
    ]
    },

    "Difference between deep copy and shallow copy?": {
    keywords: [
        "copy",
        "reference",
        "nested",
        "object"
    ]
    },

    "What is FastAPI?": {
    keywords: [
        "python",
        "api",
        "framework",
        "backend"
    ]
    },
    "What is JVM?": {
    keywords: [
        "java virtual machine",
        "bytecode",
        "execute",
        "java"
    ]
    },

    "Explain OOP concepts in Java.": {
    keywords: [
        "encapsulation",
        "inheritance",
        "polymorphism",
        "abstraction"
    ]
    },

    "Difference between JDK, JRE, and JVM?": {
    keywords: [
        "jdk",
        "jre",
        "jvm",
        "development",
        "runtime"
    ]
    },

    "What is method overloading?": {
    keywords: [
        "same method",
        "different parameters",
        "compile time"
    ]
    },

    "What is method overriding?": {
    keywords: [
        "inheritance",
        "same method",
        "runtime polymorphism"
    ]
    },

    "Explain Java collections.": {
    keywords: [
        "list",
        "set",
        "map",
        "collection framework"
    ]
    },

    "What is exception handling?": {
    keywords: [
        "try",
        "catch",
        "finally",
        "exception"
    ]
    },

    "Difference between ArrayList and LinkedList?": {
    keywords: [
        "arraylist",
        "linkedlist",
        "dynamic array",
        "node"
    ]
    },

    "What is multithreading?": {
    keywords: [
        "thread",
        "parallel",
        "concurrent",
        "execution"
    ]
    },

    "What is Spring Boot?": {
    keywords: [
        "java",
        "framework",
        "spring",
        "backend"
    ]
    },
    "What is Machine Learning?": {
    keywords: [
        "data",
        "algorithm",
        "learn",
        "prediction"
    ]
    },

    "Difference between AI, ML, and Deep Learning?": {
    keywords: [
        "artificial intelligence",
        "machine learning",
        "deep learning",
        "neural network"
    ]
    },

    "What is supervised learning?": {
    keywords: [
        "labeled data",
        "training",
        "prediction"
    ]
    },

    "What is overfitting?": {
    keywords: [
        "training data",
        "poor generalization",
        "model"
    ]
    },

    "Explain train-test split.": {
    keywords: [
        "training",
        "testing",
        "dataset",
        "evaluation"
    ]
    },

    "What is feature engineering?": {
    keywords: [
        "feature",
        "data",
        "model",
        "improve"
    ]
    },

    "What is TensorFlow?": {
    keywords: [
        "machine learning",
        "google",
        "framework",
        "deep learning"
    ]
    },

    "What is PyTorch?": {
    keywords: [
        "machine learning",
        "framework",
        "deep learning",
        "facebook"
    ]
    },

    "Difference between classification and regression?": {
    keywords: [
        "classification",
        "regression",
        "categorical",
        "continuous"
    ]
    },

    "What is model accuracy?": {
    keywords: [
        "correct prediction",
        "evaluation",
        "percentage"
    ]
    },
    "What is DevOps?": {
    keywords: [
        "development",
        "operations",
        "automation",
        "collaboration"
    ]
    },

    "What is Docker?": {
    keywords: [
        "container",
        "application",
        "deployment"
    ]
    },

    "Explain CI/CD.": {
    keywords: [
        "continuous integration",
        "continuous deployment",
        "automation"
    ]
    },

    "What is Kubernetes?": {
    keywords: [
        "container orchestration",
        "cluster",
        "deployment"
    ]
    },

    "What is Jenkins?": {
    keywords: [
        "automation",
        "ci cd",
        "pipeline"
    ]
    },

    "Explain Linux basics.": {
    keywords: [
        "operating system",
        "terminal",
        "command line"
    ]
    },

    "What is containerization?": {
    keywords: [
        "container",
        "application",
        "isolation"
    ]
    },

    "What is deployment?": {
    keywords: [
        "release",
        "application",
        "production"
    ]
    },

    "What is monitoring?": {
    keywords: [
        "system",
        "performance",
        "tracking"
    ]
    },
    "What is cybersecurity?": {
    keywords: [
        "security",
        "protection",
        "systems",
        "data"
    ]
    },

    "What is SQL injection?": {
    keywords: [
        "sql",
        "database",
        "attack",
        "query"
    ]
    },

    "Explain XSS attacks.": {
    keywords: [
        "cross site scripting",
        "javascript",
        "attack"
    ]
    },

    "What is phishing?": {
    keywords: [
        "fraud",
        "email",
        "steal",
        "credentials"
    ]
    },

    "What is encryption?": {
    keywords: [
        "data",
        "secure",
        "cipher",
        "encryption"
    ]
    },

    "Difference between HTTP and HTTPS?": {
    keywords: [
        "secure",
        "ssl",
        "tls",
        "encryption"
    ]
    },

    "What is authentication?": {
    keywords: [
        "verify",
        "identity",
        "login"
    ]
    },

    "What is firewall?": {
    keywords: [
        "network",
        "security",
        "filter",
        "traffic"
    ]
    },

    "What is malware?": {
    keywords: [
        "malicious software",
        "virus",
        "attack"
    ]
    },

    "Explain VPN basics.": {
    keywords: [
        "virtual private network",
        "secure",
        "connection",
        "privacy"
    ]
    },
    "What is Data Science?": {
    keywords: [
        "data",
        "analysis",
        "insights",
        "statistics"
    ]
    },

    "Difference between AI and Data Science?": {
    keywords: [
        "artificial intelligence",
        "data analysis",
        "machine learning",
        "insights"
    ]
    },

    "What is regression?": {
    keywords: [
        "prediction",
        "continuous",
        "numerical",
        "model"
    ]
    },

    "What is classification?": {
    keywords: [
        "categories",
        "labels",
        "prediction",
        "class"
    ]
    },

    "Explain mean, median, and mode.": {
    keywords: [
        "average",
        "middle",
        "frequency"
    ]
    },

    "What is data cleaning?": {
    keywords: [
        "remove errors",
        "missing values",
        "quality"
    ]
    },

    "What is Pandas?": {
    keywords: [
        "python",
        "data analysis",
        "dataframe"
    ]
    },

    "What is NumPy?": {
    keywords: [
        "array",
        "python",
        "numerical"
    ]
    },

    "What is data visualization?": {
    keywords: [
        "charts",
        "graphs",
        "visual"
    ]
    },
    "What is SQL?": {
    keywords: [
        "structured query language",
        "database",
        "query"
    ]
    },

    "Explain joins in SQL.": {
    keywords: [
        "combine tables",
        "inner join",
        "left join"
    ]
    },

    "What is Excel VLOOKUP?": {
    keywords: [
        "lookup",
        "excel",
        "search"
    ]
    },

    "What is Power BI?": {
    keywords: [
        "business intelligence",
        "dashboard",
        "visualization"
    ]
    },

    "What is Tableau?": {
    keywords: [
        "visualization",
        "dashboard",
        "analytics"
    ]
    },

    "Explain GROUP BY clause.": {
    keywords: [
        "group",
        "aggregate",
        "sql"
    ]
    },

    "What is KPI?": {
    keywords: [
        "key performance indicator",
        "metric",
        "performance"
    ]
    },

    "Explain data visualization.": {
    keywords: [
        "graphs",
        "charts",
        "dashboard"
    ]
    },

    "What is dashboard reporting?": {
    keywords: [
        "dashboard",
        "report",
        "metrics"
    ]
    },
    "What is SQL?": {
    keywords: [
        "structured query language",
        "database",
        "query"
    ]
    },

    "Explain joins in SQL.": {
    keywords: [
        "combine tables",
        "inner join",
        "left join"
    ]
    },

    "What is Excel VLOOKUP?": {
    keywords: [
        "lookup",
        "excel",
        "search"
    ]
    },

    "What is Power BI?": {
    keywords: [
        "business intelligence",
        "dashboard",
        "visualization"
    ]
    },

    "What is Tableau?": {
    keywords: [
        "visualization",
        "dashboard",
        "analytics"
    ]
    },

    "Explain GROUP BY clause.": {
    keywords: [
        "group",
        "aggregate",
        "sql"
    ]
    },

    "What is KPI?": {
    keywords: [
        "key performance indicator",
        "metric",
        "performance"
    ]
    },

    "Explain data visualization.": {
    keywords: [
        "graphs",
        "charts",
        "dashboard"
    ]
    },

    "What is dashboard reporting?": {
    keywords: [
        "dashboard",
        "report",
        "metrics"
    ]
    },
    "What is cloud computing?": {
    keywords: [
        "internet",
        "servers",
        "services",
        "cloud"
    ]
    },

    "Difference between AWS, Azure, and GCP?": {
    keywords: [
        "amazon",
        "microsoft",
        "google",
        "cloud"
    ]
    },

    "What is EC2?": {
    keywords: [
        "aws",
        "virtual machine",
        "compute"
    ]
    },

    "What is cloud storage?": {
    keywords: [
        "data",
        "storage",
        "cloud"
    ]
    },

    "What is IAM?": {
    keywords: [
        "identity",
        "access management",
        "permissions"
    ]
    },

    "Explain load balancer basics.": {
    keywords: [
        "traffic",
        "distribution",
        "servers"
    ]
    },

    "What is auto scaling?": {
    keywords: [
        "automatic",
        "resources",
        "scale"
    ]
    },

    "What is serverless computing?": {
    keywords: [
        "no server management",
        "functions",
        "cloud"
    ]
    },

    "Explain VPC basics.": {
    keywords: [
        "virtual private cloud",
        "network",
        "isolation"
    ]
    },
    "What is Flutter?": {
    keywords: [
        "google",
        "cross platform",
        "framework"
    ]
    },

    "Difference between Flutter and React Native?": {
    keywords: [
        "dart",
        "javascript",
        "cross platform"
    ]
    },

    "What is an Activity in Android?": {
    keywords: [
        "screen",
        "android",
        "component"
    ]
    },

    "What is a Widget in Flutter?": {
    keywords: [
        "ui",
        "building block",
        "flutter"
    ]
    },

    "Explain app lifecycle.": {
    keywords: [
        "create",
        "pause",
        "resume",
        "destroy"
    ]
    },

    "What is state management?": {
    keywords: [
        "state",
        "data",
        "ui"
    ]
    },

    "Difference between Stateless and Stateful widgets?": {
    keywords: [
        "state",
        "dynamic",
        "static"
    ]
    },

    "What is APK?": {
    keywords: [
        "android package",
        "application",
        "install"
    ]
    },

    "Explain navigation in mobile apps.": {
    keywords: [
        "screen",
        "routing",
        "navigation"
    ]
    },

    "What is responsive mobile UI?": {
    keywords: [
        "screen size",
        "responsive",
        "layout"
    ]
    },
    "What is software testing?": {
    keywords: [
        "quality",
        "bug",
        "verification"
    ]
    },

    "Difference between manual and automation testing?": {
    keywords: [
        "manual",
        "automation",
        "testing"
    ]
    },

    "What is a test case?": {
    keywords: [
        "steps",
        "expected result",
        "testing"
    ]
    },

    "What is regression testing?": {
    keywords: [
        "retest",
        "changes",
        "existing functionality"
    ]
    },

    "Explain bug lifecycle.": {
    keywords: [
        "new",
        "assigned",
        "fixed",
        "closed"
    ]
    },

    "What is unit testing?": {
    keywords: [
        "individual",
        "component",
        "testing"
    ]
    },

    "What is integration testing?": {
    keywords: [
        "modules",
        "integration",
        "testing"
    ]
    },

    "What is Selenium?": {
    keywords: [
        "automation",
        "web testing",
        "tool"
    ]
    },

    "What is API testing?": {
    keywords: [
        "api",
        "request",
        "response"
    ]
    },

    "What is smoke testing?": {
    keywords: [
        "basic",
        "build",
        "testing"
    ]
    },
    "What is UI design?": {
    keywords: [
        "user interface",
        "visual",
        "design"
    ]
    },

    "What is UX design?": {
    keywords: [
        "user experience",
        "usability",
        "interaction"
    ]
    },

    "Difference between UI and UX?": {
    keywords: [
        "interface",
        "experience",
        "design"
    ]
    },

    "What is wireframing?": {
    keywords: [
        "layout",
        "structure",
        "design"
    ]
    },

    "What is prototyping?": {
    keywords: [
        "interactive",
        "mockup",
        "design"
    ]
    },

    "What is Figma?": {
    keywords: [
        "design tool",
        "ui",
        "prototype"
    ]
    },

    "Explain color theory basics.": {
    keywords: [
        "colors",
        "contrast",
        "harmony"
    ]
    },

    "What is typography?": {
    keywords: [
        "fonts",
        "text",
        "readability"
    ]
    },

    "What is accessibility in design?": {
    keywords: [
        "inclusive",
        "disabled users",
        "usability"
    ]
    },
    "What is UI design?": {
    keywords: [
        "user interface",
        "visual",
        "design"
    ]
    },

    "What is UX design?": {
    keywords: [
        "user experience",
        "usability",
        "interaction"
    ]
    },

    "Difference between UI and UX?": {
    keywords: [
        "interface",
        "experience",
        "design"
    ]
    },

    "What is wireframing?": {
    keywords: [
        "layout",
        "structure",
        "design"
    ]
    },

    "What is prototyping?": {
    keywords: [
        "interactive",
        "mockup",
        "design"
    ]
    },

    "What is Figma?": {
    keywords: [
        "design tool",
        "ui",
        "prototype"
    ]
    },

    "Explain color theory basics.": {
    keywords: [
        "colors",
        "contrast",
        "harmony"
    ]
    },

    "What is typography?": {
    keywords: [
        "fonts",
        "text",
        "readability"
    ]
    },

    "What is accessibility in design?": {
    keywords: [
        "inclusive",
        "disabled users",
        "usability"
    ]
    },
    "What is embedded systems?": {
    keywords: [
        "hardware",
        "software",
        "dedicated",
        "device"
    ]
    },

    "Difference between microprocessor and microcontroller?": {
    keywords: [
        "cpu",
        "memory",
        "microcontroller",
        "embedded"
    ]
    },

    "What is RTOS?": {
    keywords: [
        "real time operating system",
        "task",
        "scheduling"
    ]
    },

    "Explain GPIO.": {
    keywords: [
        "general purpose input output",
        "pin",
        "hardware"
    ]
    },

    "What is interrupt handling?": {
    keywords: [
        "interrupt",
        "event",
        "cpu"
    ]
    },

    "What is UART communication?": {
    keywords: [
        "serial communication",
        "transmit",
        "receive"
    ]
    },

    "What is SPI protocol?": {
    keywords: [
        "serial peripheral interface",
        "master",
        "slave"
    ]
    },

    "What is I2C communication?": {
    keywords: [
        "inter integrated circuit",
        "communication",
        "devices"
    ]
    },

    "Explain pointers in C.": {
    keywords: [
        "memory address",
        "pointer",
        "variable"
    ]
    },

    "What is memory allocation?": {
    keywords: [
        "memory",
        "allocation",
        "dynamic",
        "storage"
    ]
    },
    "What is blockchain?": {
    keywords: [
        "distributed ledger",
        "blocks",
        "transactions",
        "decentralized"
    ]
    },

    "What is Ethereum?": {
    keywords: [
        "blockchain",
        "smart contracts",
        "cryptocurrency"
    ]
    },

    "What is Bitcoin?": {
    keywords: [
        "cryptocurrency",
        "blockchain",
        "digital currency"
    ]
    },

    "What is a smart contract?": {
    keywords: [
        "self executing",
        "contract",
        "blockchain"
    ]
    },

    "What is Solidity?": {
    keywords: [
        "programming language",
        "ethereum",
        "smart contracts"
    ]
    },

    "What is Web3?": {
    keywords: [
        "decentralized",
        "blockchain",
        "internet"
    ]
    },

    "Explain blockchain mining.": {
    keywords: [
        "validation",
        "transactions",
        "proof of work"
    ]
    },

    "What is cryptocurrency?": {
    keywords: [
        "digital currency",
        "blockchain",
        "crypto"
    ]
    },

    "What is gas fee?": {
    keywords: [
        "transaction fee",
        "ethereum",
        "network"
    ]
    },

    "What is decentralization?": {
    keywords: [
        "distributed",
        "no central authority",
        "network"
    ]
    }
};

module.exports = expectedAnswersEasy;