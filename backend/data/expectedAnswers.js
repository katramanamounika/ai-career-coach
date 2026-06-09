const expectedAnswers = {

  // ================= FRONTEND =================

  "What is React?": {
    keywords: [
      "javascript library",
      "ui",
      "components",
      "frontend"
    ],
    ideal:
      "React is a JavaScript library for building user interfaces using reusable components."
  },

  "Explain Virtual DOM.": {
    keywords: [
      "virtual dom",
      "copy",
      "real dom",
      "efficient"
    ],
    ideal:
      "Virtual DOM is a lightweight copy of the real DOM used to improve rendering performance."
  },

  "Difference between let and var?": {
    keywords: [
      "block scope",
      "function scope",
      "redeclare"
    ],
    ideal:
      "let is block scoped while var is function scoped."
  },

  "What is JSX?": {
    keywords: [
      "javascript xml",
      "html",
      "react syntax"
    ],
    ideal:
      "JSX allows writing HTML inside JavaScript."
  },

  "Explain useState hook.": {
    keywords: [
      "state",
      "react hook",
      "functional component"
    ],
    ideal:
      "useState is a React hook used to manage state."
  },

  "What is responsive design?": {
    keywords: [
      "mobile",
      "screen size",
      "responsive",
      "media queries"
    ],
    ideal:
      "Responsive design ensures websites work properly on all devices."
  },

  "Difference between == and ===?": {
    keywords: [
      "strict equality",
      "type conversion"
    ],
    ideal:
      "== compares values while === compares value and datatype."
  },

  "What are props in React?": {
    keywords: [
      "pass data",
      "parent",
      "child"
    ],
    ideal:
      "Props are used to pass data between components."
  },

  "Explain Flexbox.": {
    keywords: [
      "css",
      "layout",
      "alignment"
    ],
    ideal:
      "Flexbox is a CSS layout model for alignment and spacing."
  },

  "What is event bubbling?": {
    keywords: [
      "event propagation",
      "child",
      "parent"
    ],
    ideal:
      "Event bubbling means events move from child to parent elements."
  },

  // ================= BACKEND =================

  "What is REST API?": {
    keywords: [
      "http",
      "api",
      "client",
      "server"
    ],
    ideal:
      "REST API allows communication between client and server using HTTP methods."
  },

  "Explain CRUD operations.": {
    keywords: [
      "create",
      "read",
      "update",
      "delete"
    ],
    ideal:
      "CRUD stands for Create Read Update Delete."
  },

  "What is Node.js?": {
    keywords: [
      "javascript runtime",
      "backend",
      "server"
    ],
    ideal:
      "Node.js is a JavaScript runtime used for backend development."
  },

  "Difference between SQL and NoSQL?": {
    keywords: [
      "relational",
      "non relational",
      "table",
      "document"
    ],
    ideal:
      "SQL databases are relational while NoSQL databases are document based."
  },

  "What is middleware?": {
    keywords: [
      "request",
      "response",
      "next"
    ],
    ideal:
      "Middleware processes requests and responses in Express."
  },

  "Explain JWT authentication.": {
    keywords: [
      "token",
      "authentication",
      "secure"
    ],
    ideal:
      "JWT authentication uses tokens for secure authentication."
  },

  "What is MongoDB?": {
    keywords: [
      "nosql",
      "document",
      "database"
    ],
    ideal:
      "MongoDB is a NoSQL document database."
  },

  "What is an API endpoint?": {
    keywords: [
      "url",
      "api",
      "request"
    ],
    ideal:
      "An API endpoint is a URL used to access API resources."
  },

  "Difference between GET and POST?": {
    keywords: [
      "retrieve",
      "send data"
    ],
    ideal:
      "GET retrieves data while POST sends data."
  },

  "What is JSON?": {
    keywords: [
      "javascript object notation",
      "data format"
    ],
    ideal:
      "JSON is a lightweight data format used for APIs."
  },

  // ================= FULL STACK =================

  "What is MERN stack?": {
    keywords: [
      "mongodb",
      "express",
      "react",
      "node"
    ],
    ideal:
      "MERN stack includes MongoDB Express React and Node.js."
  },

  "Explain frontend-backend communication.": {
    keywords: [
      "api",
      "http",
      "request",
      "response"
    ],
    ideal:
      "Frontend and backend communicate using APIs and HTTP requests."
  },

  "What is authentication?": {
    keywords: [
      "login",
      "verify",
      "identity"
    ],
    ideal:
      "Authentication verifies user identity."
  },

  "Difference between frontend and backend?": {
    keywords: [
      "ui",
      "server",
      "database"
    ],
    ideal:
      "Frontend handles UI while backend handles server and database logic."
  },

  "What is Express.js?": {
    keywords: [
      "node framework",
      "backend",
      "api"
    ],
    ideal:
      "Express.js is a backend framework for Node.js."
  },

  "What is Git?": {
    keywords: [
      "version control",
      "code management"
    ],
    ideal:
      "Git is a version control system."
  },

  "What is responsive UI?": {
    keywords: [
      "mobile",
      "responsive",
      "screen size"
    ],
    ideal:
      "Responsive UI adapts to different screen sizes."
  },

  // ================= PYTHON =================

  "What are decorators?": {
    keywords: [
      "wrapper",
      "modify function"
    ],
    ideal:
      "Decorators modify the behavior of functions."
  },

  "Explain list comprehension.": {
    keywords: [
      "list",
      "short syntax",
      "loop"
    ],
    ideal:
      "List comprehension is a short way to create lists."
  },

  "Difference between tuple and list?": {
    keywords: [
      "mutable",
      "immutable"
    ],
    ideal:
      "Lists are mutable while tuples are immutable."
  },

  "What is PEP8?": {
    keywords: [
      "python style guide",
      "coding standards"
    ],
    ideal:
      "PEP8 is the coding style guide for Python."
  },

  "Explain generators.": {
    keywords: [
      "yield",
      "memory efficient"
    ],
    ideal:
      "Generators produce values lazily using yield."
  },

  "What is lambda function?": {
    keywords: [
      "anonymous",
      "single line"
    ],
    ideal:
      "Lambda functions are anonymous single-line functions."
  },

  "Explain Python OOP.": {
    keywords: [
      "class",
      "object",
      "inheritance"
    ],
    ideal:
      "Python OOP uses classes and objects for programming."
  },

  "What is exception handling?": {
    keywords: [
      "try",
      "catch",
      "error"
    ],
    ideal:
      "Exception handling manages runtime errors."
  },

  "Difference between deep copy and shallow copy?": {
    keywords: [
      "reference",
      "nested object"
    ],
    ideal:
      "Deep copy copies nested objects while shallow copy copies references."
  },

  "What is FastAPI?": {
    keywords: [
      "python framework",
      "api",
      "backend"
    ],
    ideal:
      "FastAPI is a modern Python framework for building APIs."
  },
  // ================= JAVA =================

    "What is JVM?": {
    keywords: [
        "java virtual machine",
        "bytecode",
        "runtime"
    ],
    ideal:
        "JVM is the Java Virtual Machine that runs Java bytecode."
    },

    "Explain OOP concepts in Java.": {
    keywords: [
        "encapsulation",
        "inheritance",
        "polymorphism",
        "abstraction"
    ],
    ideal:
        "OOP concepts include encapsulation inheritance polymorphism and abstraction."
    },

    "Difference between JDK, JRE, and JVM?": {
    keywords: [
        "development kit",
        "runtime",
        "virtual machine"
    ],
    ideal:
        "JDK is development kit JRE is runtime environment and JVM executes Java bytecode."
    },

    "What is method overloading?": {
    keywords: [
        "same method",
        "different parameters"
    ],
    ideal:
        "Method overloading means same method with different parameters."
    },

    "What is method overriding?": {
    keywords: [
        "inheritance",
        "same method",
        "runtime polymorphism"
    ],
    ideal:
        "Method overriding means redefining parent method in child class."
    },

    "What is multithreading?": {
    keywords: [
        "multiple threads",
        "parallel execution"
    ],
    ideal:
        "Multithreading allows multiple threads to execute simultaneously."
    },

    "What is Spring Boot?": {
    keywords: [
        "java framework",
        "backend",
        "microservices"
    ],
    ideal:
        "Spring Boot is a Java framework for backend and microservices development."
    },

    // ================= AI ML =================

    "What is Machine Learning?": {
    keywords: [
        "learn from data",
        "prediction",
        "ai"
    ],
    ideal:
        "Machine Learning enables systems to learn patterns from data."
    },

    "Difference between AI, ML, and Deep Learning?": {
    keywords: [
        "artificial intelligence",
        "machine learning",
        "deep learning"
    ],
    ideal:
        "AI is broad ML is subset of AI and Deep Learning is subset of ML."
    },

    "What is supervised learning?": {
    keywords: [
        "labeled data",
        "training"
    ],
    ideal:
        "Supervised learning trains models using labeled data."
    },

    "What is overfitting?": {
    keywords: [
        "training data",
        "poor generalization"
    ],
    ideal:
        "Overfitting happens when model performs well on training data but poorly on new data."
    },

    "Explain train-test split.": {
    keywords: [
        "training data",
        "testing data"
    ],
    ideal:
        "Train test split divides data into training and testing sets."
    },

    "What is TensorFlow?": {
    keywords: [
        "machine learning",
        "google",
        "framework"
    ],
    ideal:
        "TensorFlow is a machine learning framework developed by Google."
    },

    "What is PyTorch?": {
    keywords: [
        "deep learning",
        "framework"
    ],
    ideal:
        "PyTorch is a deep learning framework."
    },

    // ================= DEVOPS =================

    "What is DevOps?": {
    keywords: [
        "development",
        "operations",
        "automation"
    ],
    ideal:
        "DevOps combines development and operations for faster delivery."
    },

    "What is Docker?": {
    keywords: [
        "container",
        "application",
        "deployment"
    ],
    ideal:
        "Docker is a containerization platform."
    },

    "Explain CI/CD.": {
    keywords: [
        "continuous integration",
        "continuous deployment"
    ],
    ideal:
        "CI/CD automates testing and deployment."
    },

    "What is Kubernetes?": {
    keywords: [
        "container orchestration",
        "k8s"
    ],
    ideal:
        "Kubernetes manages containerized applications."
    },

    "What is Jenkins?": {
    keywords: [
        "automation",
        "ci cd"
    ],
    ideal:
        "Jenkins is an automation tool used in CI/CD pipelines."
    },

    "What is containerization?": {
    keywords: [
        "isolated environment",
        "docker"
    ],
    ideal:
        "Containerization packages applications with dependencies."
    },

    "What is monitoring?": {
    keywords: [
        "logs",
        "metrics",
        "performance"
    ],
    ideal:
        "Monitoring tracks application and server performance."
    },
    // =========================
  // PYTHON DEVELOPER
  // =========================

  "What are decorators?":
    ["function wrapper", "modify behavior", "reuse"],

  "Explain list comprehension.":
    ["short syntax", "create list", "loop"],

  "Difference between tuple and list?":
    ["tuple immutable", "list mutable"],

  "What is PEP8?":
    ["python style guide", "coding standards"],

  "Explain generators.":
    ["yield", "lazy loading", "iterator"],

  "What is lambda function?":
    ["anonymous function", "single expression"],

  "Explain Python OOP.":
    ["class", "object", "inheritance", "polymorphism"],

  "What is exception handling?":
    ["try", "catch", "except", "error handling"],

  "Difference between deep copy and shallow copy?":
    ["nested objects", "reference", "copy"],

  "What is FastAPI?":
    ["python framework", "api", "fast"],

  // =========================
  // JAVA DEVELOPER
  // =========================

  "What is JVM?":
    ["java virtual machine", "runs java bytecode"],

  "Explain OOP concepts in Java.":
    ["encapsulation", "inheritance", "polymorphism", "abstraction"],

  "Difference between JDK, JRE, and JVM?":
    ["jdk development", "jre runtime", "jvm execution"],

  "What is method overloading?":
    ["same method", "different parameters"],

  "What is method overriding?":
    ["same method", "child class"],

  "Explain Java collections.":
    ["list", "set", "map"],

  "Difference between ArrayList and LinkedList?":
    ["array", "linked nodes", "performance"],

  "What is multithreading?":
    ["multiple threads", "parallel execution"],

  "What is Spring Boot?":
    ["java framework", "backend development"],

  // =========================
  // AI/ML ENGINEER
  // =========================

  "What is Machine Learning?":
    ["ai", "learn from data", "prediction"],

  "Difference between AI, ML, and Deep Learning?":
    ["ai broader", "ml subset", "deep learning neural networks"],

  "What is supervised learning?":
    ["labeled data", "training"],

  "What is overfitting?":
    ["memorizes data", "poor generalization"],

  "Explain train-test split.":
    ["training data", "testing data"],

  "What is feature engineering?":
    ["select features", "improve model"],

  "What is TensorFlow?":
    ["machine learning framework"],

  "What is PyTorch?":
    ["deep learning framework"],

  "Difference between classification and regression?":
    ["classification categories", "regression continuous values"],

  "What is model accuracy?":
    ["correct predictions", "performance"],

  // =========================
  // DEVOPS ENGINEER
  // =========================

  "What is DevOps?":
    ["development", "operations", "automation"],

  "What is Docker?":
    ["containerization", "isolated environment"],

  "Explain CI/CD.":
    ["continuous integration", "continuous deployment"],

  "What is Kubernetes?":
    ["container orchestration"],

  "What is Jenkins?":
    ["automation server", "ci cd"],

  "What is deployment?":
    ["release application", "production"],

  "What is monitoring?":
    ["track system", "performance"],

  // =========================
  // CYBER SECURITY
  // =========================

  "What is cybersecurity?":
    ["protect systems", "networks", "data"],

  "What is SQL injection?":
    ["database attack", "malicious query"],

  "Explain XSS attacks.":
    ["cross site scripting", "inject scripts"],

  "What is phishing?":
    ["fake emails", "steal information"],

  "What is encryption?":
    ["secure data", "encoding"],

  "Difference between HTTP and HTTPS?":
    ["https secure", "ssl"],

  "What is firewall?":
    ["network security", "filters traffic"],

  "What is malware?":
    ["malicious software"],

  // =========================
  // DATA SCIENTIST
  // =========================

  "What is Data Science?":
    ["analyze data", "extract insights"],

  "Difference between AI and Data Science?":
    ["ai automation", "data science analysis"],

  "What is regression?":
    ["predict continuous values"],

  "What is classification?":
    ["predict categories"],

  "Explain mean, median, and mode.":
    ["average", "middle value", "most frequent"],

  "What is data cleaning?":
    ["remove errors", "prepare data"],

  "What is Pandas?":
    ["python library", "data analysis"],

  "What is NumPy?":
    ["numerical computing", "arrays"],

  // =========================
  // DATA ANALYST
  // =========================

  "What is SQL?":
    ["database query language"],

  "Explain joins in SQL.":
    ["combine tables"],

  "What is Excel VLOOKUP?":
    ["search data", "lookup value"],

  "What is Power BI?":
    ["business intelligence tool"],

  "What is Tableau?":
    ["data visualization tool"],

  "Explain GROUP BY clause.":
    ["group records"],

  "What is KPI?":
    ["key performance indicator"],

  "What is dashboard reporting?":
    ["visual reports", "analytics"],

  // =========================
  // CLOUD ENGINEER
  // =========================

  "What is cloud computing?":
    ["internet computing", "remote servers"],

  "Difference between AWS, Azure, and GCP?":
    ["cloud providers"],

  "What is EC2?":
    ["aws virtual server"],

  "What is IAM?":
    ["identity access management"],

  "What is auto scaling?":
    ["automatic scaling"],

  "What is serverless computing?":
    ["no server management"],

  "Explain VPC basics.":
    ["virtual private cloud"],

  // =========================
  // MOBILE APP DEVELOPER
  // =========================

  "What is Flutter?":
    ["google framework", "cross platform"],

  "Difference between Flutter and React Native?":
    ["dart", "javascript"],

  "What is an Activity in Android?":
    ["screen component"],

  "What is a Widget in Flutter?":
    ["ui component"],

  "Explain app lifecycle.":
    ["app states"],

  "What is state management?":
    ["manage ui data"],

  "What is APK?":
    ["android package"],

  // =========================
  // QA ENGINEER
  // =========================

  "What is software testing?":
    ["find bugs", "quality assurance"],

  "Difference between manual and automation testing?":
    ["human testing", "automated scripts"],

  "What is a test case?":
    ["testing scenario"],

  "What is regression testing?":
    ["retest existing features"],

  "What is unit testing?":
    ["test individual units"],

  "What is Selenium?":
    ["automation testing tool"],

  "What is smoke testing?":
    ["basic testing"],

  // =========================
  // UI UX DESIGNER
  // =========================

  "What is UI design?":
    ["user interface"],

  "What is UX design?":
    ["user experience"],

  "Difference between UI and UX?":
    ["interface", "experience"],

  "What is wireframing?":
    ["layout design"],

  "What is prototyping?":
    ["interactive design"],

  "What is Figma?":
    ["design tool"],

  "What is accessibility in design?":
    ["usable for everyone"],

  // =========================
  // GAME DEVELOPER
  // =========================

  "What is Unity?":
    ["game engine"],

  "What is Unreal Engine?":
    ["game engine"],

  "Explain game loop.":
    ["continuous update"],

  "What is collision detection?":
    ["object collision"],

  "What is FPS in games?":
    ["frames per second"],

  "What is multiplayer gaming?":
    ["multiple players"],

  // =========================
  // BLOCKCHAIN
  // =========================

  "What is blockchain?":
    ["decentralized ledger"],

  "What is Ethereum?":
    ["blockchain platform"],

  "What is Bitcoin?":
    ["cryptocurrency"],

  "What is a smart contract?":
    ["self executing contract"],

  "What is Solidity?":
    ["blockchain programming language"],

  "What is Web3?":
    ["decentralized internet"],

  "What is decentralization?":
    ["no central authority"],

    // =========================
  // EMBEDDED ENGINEER
  // =========================

  "What is embedded systems?":
    ["hardware", "software", "microcontroller"],

  "Difference between microprocessor and microcontroller?":
    ["microcontroller integrated", "microprocessor cpu"],

  "What is RTOS?":
    ["real time operating system"],

  "Explain GPIO.":
    ["general purpose input output"],

  "What is interrupt handling?":
    ["interrupt signal", "cpu response"],

  "What is UART communication?":
    ["serial communication"],

  "What is SPI protocol?":
    ["serial peripheral interface"],

  "What is I2C communication?":
    ["two wire communication"],

  "Explain pointers in C.":
    ["memory address"],

  "What is memory allocation?":
    ["allocate memory"],

  // =========================
  // FULL STACK
  // =========================

  "What is MERN stack?":
    ["mongodb", "express", "react", "node"],

  "Explain frontend-backend communication.":
    ["api", "http requests"],

  "What is authentication?":
    ["verify user"],

  "Difference between frontend and backend?":
    ["ui", "server"],

  "What is Express.js?":
    ["node framework"],

  "What is Git?":
    ["version control"],

  "What is responsive UI?":
    ["mobile friendly"],

  // =========================
  // BACKEND DEVELOPER
  // =========================

  "What is REST API?":
    ["api", "http methods"],

  "Explain CRUD operations.":
    ["create", "read", "update", "delete"],

  "What is Node.js?":
    ["javascript runtime"],

  "Difference between SQL and NoSQL?":
    ["relational", "non relational"],

  "What is middleware?":
    ["request processing"],

  "Explain JWT authentication.":
    ["token authentication"],

  "What is MongoDB?":
    ["nosql database"],

  "What is an API endpoint?":
    ["api url"],

  "Difference between GET and POST?":
    ["retrieve data", "send data"],

  "What is JSON?":
    ["javascript object notation"],

  // =========================
  // FRONTEND DEVELOPER
  // =========================

  "What is React?":
    ["javascript library", "ui"],

  "Explain Virtual DOM.":
    ["virtual dom", "faster rendering"],

  "Difference between let and var?":
    ["scope"],

  "What is JSX?":
    ["javascript xml"],

  "Explain useState hook.":
    ["state management"],

  "What is responsive design?":
    ["mobile friendly"],

  "Difference between == and ===?":
    ["strict equality"],

  "What are props in React?":
    ["pass data"],

  "Explain Flexbox.":
    ["css layout"],

  "What is event bubbling?":
    ["event propagation"]

};

module.exports = expectedAnswers;