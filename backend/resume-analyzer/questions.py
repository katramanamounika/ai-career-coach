import random
import time

from voice_output import speak_text


QUESTION_DB = {

    "Frontend Developer": {

        "Easy": [
            "What is React?",
            "Explain Virtual DOM.",
            "Difference between let and var?",
            "What is JSX?",
            "Explain useState hook.",
            "What is responsive design?",
            "Difference between == and ===?",
            "What are props in React?",
            "Explain Flexbox.",
            "What is event bubbling?"
        ],

        "Medium": [
            "How would you optimize React rendering?",
            "Explain Context API.",
            "Difference between SSR and CSR?",
            "How does lazy loading work?",
            "Explain debounce and throttle.",
            "How would you handle API errors?",
            "Explain React.memo.",
            "What is hydration in Next.js?",
            "How would you implement authentication?",
            "Explain browser rendering pipeline."
        ],

        "Hard": [
            "Design scalable frontend architecture.",
            "Explain micro frontend architecture.",
            "How would you optimize Core Web Vitals?",
            "Explain React Fiber.",
            "How would you reduce bundle size?",
            "Explain frontend caching strategies.",
            "How would you implement virtual scrolling?",
            "Explain frontend observability.",
            "How would you debug memory leaks?",
            "Design enterprise dashboard architecture."
        ]
    },

    "Backend Developer": {

        "Easy": [
            "What is REST API?",
            "Explain CRUD operations.",
            "What is Node.js?",
            "Difference between SQL and NoSQL?",
            "What is middleware?",
            "Explain JWT authentication.",
            "What is MongoDB?",
            "What is an API endpoint?",
            "Difference between GET and POST?",
            "What is JSON?"
        ],

        "Medium": [
            "How would you secure REST APIs?",
            "Explain Redis caching.",
            "What is rate limiting?",
            "Explain database indexing.",
            "What is API pagination?",
            "Explain async/await.",
            "What are WebSockets?",
            "Explain MVC architecture.",
            "How would you optimize API performance?",
            "Difference between monolith and microservices?"
        ],

        "Hard": [
            "Design scalable backend architecture.",
            "How would you handle millions of requests?",
            "Explain load balancing.",
            "How would you design payment systems?",
            "Explain distributed systems.",
            "What is database sharding?",
            "Explain message queue architecture.",
            "How would you implement real-time notifications?",
            "Explain backend observability.",
            "How would you scale WebSocket servers?"
        ]
    },

    "Full Stack Developer": {

        "Easy": [
            "What is MERN stack?",
            "Explain frontend-backend communication.",
            "What is authentication?",
            "Difference between frontend and backend?",
            "What is React?",
            "What is Express.js?",
            "What is MongoDB?",
            "What is Git?",
            "Explain REST API.",
            "What is responsive UI?"
        ],

        "Medium": [
            "How would you implement authentication flow?",
            "Explain protected routes.",
            "What is Docker?",
            "Explain CI/CD basics.",
            "How would you optimize APIs?",
            "Explain Redux workflow.",
            "What is CORS?",
            "Explain SSR architecture.",
            "How would you deploy MERN apps?",
            "Explain caching strategies."
        ],

        "Hard": [
            "Design scalable SaaS architecture.",
            "How would you build real-time chat apps?",
            "Explain microservices architecture.",
            "How would you scale full stack apps?",
            "Explain websocket implementation.",
            "How would you optimize database-heavy systems?",
            "Explain distributed authentication.",
            "How would you design Netflix architecture?",
            "Explain full stack observability.",
            "How would you monitor production systems?"
        ]
    },

    "Python Developer": {

        "Easy": [
            "What are decorators?",
            "Explain list comprehension.",
            "Difference between tuple and list?",
            "What is PEP8?",
            "Explain generators.",
            "What is lambda function?",
            "Explain Python OOP.",
            "What is exception handling?",
            "Difference between deep copy and shallow copy?",
            "What is FastAPI?"
        ],

        "Medium": [
            "Explain async programming in Python.",
            "Difference between multithreading and multiprocessing?",
            "How would you optimize Python code?",
            "Explain context managers.",
            "What is dependency injection in FastAPI?",
            "Explain ORM concepts.",
            "How would you implement caching?",
            "Explain Celery task queues.",
            "How would you secure FastAPI apps?",
            "Explain Python memory management."
        ],

        "Hard": [
            "Design scalable FastAPI architecture.",
            "How would you process huge datasets efficiently?",
            "Explain Python GIL limitations.",
            "How would you design ETL pipelines?",
            "Explain scalable microservices in Python.",
            "How would you monitor production APIs?",
            "Explain websocket systems in Python.",
            "How would you debug Python memory leaks?",
            "Explain distributed task processing.",
            "How would you optimize ML APIs?"
        ]
    },

    "Java Developer": {

        "Easy": [
            "What is JVM?",
            "Explain OOP concepts in Java.",
            "Difference between JDK, JRE, and JVM?",
            "What is method overloading?",
            "What is method overriding?",
            "Explain Java collections.",
            "What is exception handling?",
            "Difference between ArrayList and LinkedList?",
            "What is multithreading?",
            "What is Spring Boot?"
        ],

        "Medium": [
            "Explain dependency injection in Spring Boot.",
            "Difference between HashMap and ConcurrentHashMap?",
            "What is Hibernate?",
            "Explain Java streams API.",
            "How would you optimize Java performance?",
            "Explain synchronization in Java.",
            "What is REST API development in Spring?",
            "Explain microservices in Java.",
            "What is Kafka?",
            "How would you secure Spring Boot APIs?"
        ],

        "Hard": [
            "Design scalable Java backend systems.",
            "Explain JVM memory management.",
            "How would you handle millions of requests?",
            "Explain distributed systems in Java.",
            "How would you implement scalable authentication?",
            "Explain event-driven architecture.",
            "How would you optimize garbage collection?",
            "Explain reactive programming in Spring.",
            "How would you scale microservices?",
            "Explain enterprise Java architecture."
        ]
    },
    "AI/ML Engineer": {

        "Easy": [
            "What is Machine Learning?",
            "Difference between AI, ML, and Deep Learning?",
            "What is supervised learning?",
            "What is overfitting?",
            "Explain train-test split.",
            "What is feature engineering?",
            "What is TensorFlow?",
            "What is PyTorch?",
            "Difference between classification and regression?",
            "What is model accuracy?"
        ],

        "Medium": [
            "How would you handle imbalanced datasets?",
            "Explain bias-variance tradeoff.",
            "What is hyperparameter tuning?",
            "Explain CNN architecture.",
            "What is transfer learning?",
            "How would you deploy ML models?",
            "Explain NLP pipelines.",
            "What is cross-validation?",
            "Explain vector databases.",
            "How would you optimize ML inference?"
        ],

        "Hard": [
            "Design scalable ML systems.",
            "How would you fine-tune LLMs?",
            "Explain RAG architecture.",
            "How would you handle model drift?",
            "Explain distributed training.",
            "How would you optimize GPU utilization?",
            "Explain MLOps pipelines.",
            "How would you scale recommendation systems?",
            "Explain transformer architecture deeply.",
            "How would you build real-time AI systems?"
        ]
    },

    "DevOps Engineer": {

        "Easy": [
            "What is DevOps?",
            "What is Docker?",
            "Explain CI/CD.",
            "What is Kubernetes?",
            "What is Jenkins?",
            "What is Git?",
            "Explain Linux basics.",
            "What is containerization?",
            "What is deployment?",
            "What is monitoring?"
        ],

        "Medium": [
            "How would you automate deployments?",
            "Explain Kubernetes architecture.",
            "What is Infrastructure as Code?",
            "Explain Terraform.",
            "How would you monitor production systems?",
            "Explain load balancing.",
            "What is blue-green deployment?",
            "Explain rolling deployments.",
            "How would you optimize cloud costs?",
            "Explain logging pipelines."
        ],

        "Hard": [
            "Design scalable DevOps pipelines.",
            "How would you manage multi-cluster Kubernetes?",
            "Explain disaster recovery systems.",
            "How would you implement zero downtime deployments?",
            "Explain observability architecture.",
            "How would you scale CI/CD systems?",
            "Explain service mesh architecture.",
            "How would you secure Kubernetes clusters?",
            "Explain distributed monitoring systems.",
            "How would you optimize infrastructure reliability?"
        ]
    },

    "Cyber Security Engineer": {

        "Easy": [
            "What is cybersecurity?",
            "What is SQL injection?",
            "Explain XSS attacks.",
            "What is phishing?",
            "What is encryption?",
            "Difference between HTTP and HTTPS?",
            "What is authentication?",
            "What is firewall?",
            "What is malware?",
            "Explain VPN basics."
        ],

        "Medium": [
            "How would you secure APIs?",
            "Explain penetration testing.",
            "What is OWASP Top 10?",
            "How would you prevent CSRF attacks?",
            "Explain SIEM systems.",
            "What is threat modeling?",
            "How would you secure cloud systems?",
            "Explain password hashing.",
            "What is privilege escalation?",
            "How would you perform vulnerability scanning?"
        ],

        "Hard": [
            "Design enterprise security architecture.",
            "How would you handle ransomware attacks?",
            "Explain zero trust security.",
            "How would you secure microservices?",
            "Explain SOC operations.",
            "How would you investigate security breaches?",
            "Explain advanced persistent threats.",
            "How would you secure Kubernetes systems?",
            "Explain cloud security architecture.",
            "How would you design incident response systems?"
        ]
    },

    "Data Scientist": {

        "Easy": [
            "What is Data Science?",
            "Difference between AI and Data Science?",
            "What is regression?",
            "What is classification?",
            "Explain mean, median, and mode.",
            "What is data cleaning?",
            "What is Pandas?",
            "What is NumPy?",
            "Explain train-test split.",
            "What is data visualization?"
        ],

        "Medium": [
            "How would you handle missing data?",
            "Explain feature selection.",
            "What is PCA?",
            "Explain confusion matrix.",
            "What is A/B testing?",
            "How would you evaluate ML models?",
            "Explain ensemble learning.",
            "What is time series forecasting?",
            "Explain hypothesis testing.",
            "How would you optimize ML models?"
        ],

        "Hard": [
            "Design scalable ML pipelines.",
            "How would you handle big data systems?",
            "Explain recommendation systems.",
            "How would you detect fraud using ML?",
            "Explain transformer models.",
            "How would you deploy ML systems?",
            "Explain model drift handling.",
            "How would you build real-time analytics systems?",
            "Explain distributed ML training.",
            "How would you design enterprise AI systems?"
        ]
    },

    "Data Analyst": {

        "Easy": [
            "What is SQL?",
            "Explain joins in SQL.",
            "What is Excel VLOOKUP?",
            "What is Power BI?",
            "What is Tableau?",
            "Explain GROUP BY clause.",
            "What is data cleaning?",
            "What is KPI?",
            "Explain data visualization.",
            "What is dashboard reporting?"
        ],

        "Medium": [
            "How would you optimize SQL queries?",
            "Explain window functions.",
            "What is ETL process?",
            "How would you build executive dashboards?",
            "Explain data storytelling.",
            "What is A/B testing?",
            "How would you analyze customer churn?",
            "Explain business metrics analysis.",
            "What is cohort analysis?",
            "How would you automate reporting?"
        ],

        "Hard": [
            "Design enterprise analytics systems.",
            "How would you analyze millions of records?",
            "Explain predictive analytics.",
            "How would you optimize business KPIs?",
            "Explain advanced SQL optimization.",
            "How would you build scalable BI systems?",
            "Explain real-time analytics pipelines.",
            "How would you design reporting architectures?",
            "Explain customer segmentation systems.",
            "How would you solve data inconsistency issues?"
        ]
    },

    "Cloud Engineer": {

        "Easy": [
            "What is cloud computing?",
            "Difference between AWS, Azure, and GCP?",
            "What is EC2?",
            "What is cloud storage?",
            "What is IAM?",
            "Explain load balancer basics.",
            "What is auto scaling?",
            "What is serverless computing?",
            "Explain VPC basics.",
            "What is Docker?"
        ],

        "Medium": [
            "How would you secure cloud systems?",
            "Explain Kubernetes deployment.",
            "What is Infrastructure as Code?",
            "Explain Terraform.",
            "How would you optimize cloud costs?",
            "Explain cloud networking.",
            "What is disaster recovery?",
            "How would you monitor cloud infrastructure?",
            "Explain multi-region deployment.",
            "What is cloud migration?"
        ],

        "Hard": [
            "Design scalable cloud architecture.",
            "How would you handle cloud failover?",
            "Explain hybrid cloud systems.",
            "How would you design high availability systems?",
            "Explain distributed cloud architecture.",
            "How would you optimize multi-cloud environments?",
            "Explain enterprise cloud security.",
            "How would you scale Kubernetes clusters?",
            "Explain cloud observability systems.",
            "How would you build globally distributed systems?"
        ]
    },
    "Mobile App Developer": {

        "Easy": [
            "What is Flutter?",
            "Difference between Flutter and React Native?",
            "What is an Activity in Android?",
            "What is a Widget in Flutter?",
            "Explain app lifecycle.",
            "What is state management?",
            "Difference between Stateless and Stateful widgets?",
            "What is APK?",
            "Explain navigation in mobile apps.",
            "What is responsive mobile UI?"
        ],

        "Medium": [
            "How would you optimize app performance?",
            "Explain offline storage systems.",
            "How would you implement push notifications?",
            "Explain API integration in mobile apps.",
            "What is Firebase?",
            "How would you secure mobile authentication?",
            "Explain deep linking.",
            "How would you handle app crashes?",
            "Explain mobile caching strategies.",
            "How would you optimize battery usage?"
        ],

        "Hard": [
            "Design scalable mobile app architecture.",
            "How would you build real-time mobile apps?",
            "Explain mobile CI/CD pipelines.",
            "How would you optimize large mobile applications?",
            "Explain native module integration.",
            "How would you secure sensitive mobile data?",
            "Explain app store deployment pipelines.",
            "How would you handle millions of mobile users?",
            "Explain mobile observability systems.",
            "How would you design enterprise mobile systems?"
        ]
    },

    "QA Engineer": {

        "Easy": [
            "What is software testing?",
            "Difference between manual and automation testing?",
            "What is a test case?",
            "What is regression testing?",
            "Explain bug lifecycle.",
            "What is unit testing?",
            "What is integration testing?",
            "What is Selenium?",
            "What is API testing?",
            "What is smoke testing?"
        ],

        "Medium": [
            "How would you automate web testing?",
            "Explain Selenium framework.",
            "How would you perform API testing?",
            "Explain performance testing.",
            "What is load testing?",
            "How would you write reusable test cases?",
            "Explain CI/CD testing integration.",
            "How would you test authentication systems?",
            "Explain test data management.",
            "How would you prioritize bugs?"
        ],

        "Hard": [
            "Design scalable automation frameworks.",
            "How would you test distributed systems?",
            "Explain enterprise QA architecture.",
            "How would you automate CI/CD pipelines?",
            "Explain performance bottleneck analysis.",
            "How would you test real-time systems?",
            "Explain security testing strategies.",
            "How would you optimize automation suites?",
            "Explain end-to-end testing architecture.",
            "How would you ensure production reliability?"
        ]
    },

    "UI/UX Designer": {

        "Easy": [
            "What is UI design?",
            "What is UX design?",
            "Difference between UI and UX?",
            "What is wireframing?",
            "What is prototyping?",
            "What is Figma?",
            "Explain color theory basics.",
            "What is typography?",
            "What is responsive design?",
            "What is accessibility in design?"
        ],

        "Medium": [
            "How would you improve user experience?",
            "Explain user journey mapping.",
            "How would you conduct user research?",
            "Explain design systems.",
            "How would you redesign poor user flows?",
            "Explain usability testing.",
            "How would you optimize onboarding flows?",
            "Explain mobile-first design.",
            "How would you handle stakeholder feedback?",
            "Explain UX metrics."
        ],

        "Hard": [
            "Design enterprise-level design systems.",
            "How would you optimize conversion rates?",
            "Explain scalable UX architecture.",
            "How would you redesign complex dashboards?",
            "Explain accessibility optimization.",
            "How would you conduct large-scale UX research?",
            "Explain cross-platform UX consistency.",
            "How would you solve high drop-off problems?",
            "Explain product-driven design strategy.",
            "How would you design AI-powered interfaces?"
        ]
    },

    "Game Developer": {

        "Easy": [
            "What is Unity?",
            "What is Unreal Engine?",
            "Explain game loop.",
            "What is collision detection?",
            "What is FPS in games?",
            "What is game physics?",
            "Explain sprites in games.",
            "What is multiplayer gaming?",
            "What is animation in games?",
            "What is level design?"
        ],

        "Medium": [
            "How would you optimize game performance?",
            "Explain AI pathfinding.",
            "How would you implement multiplayer systems?",
            "Explain game physics optimization.",
            "How would you reduce game lag?",
            "Explain shader basics.",
            "How would you design engaging gameplay?",
            "Explain networking in multiplayer games.",
            "How would you handle game asset loading?",
            "Explain mobile game optimization."
        ],

        "Hard": [
            "Design scalable multiplayer game architecture.",
            "How would you optimize AAA game performance?",
            "Explain real-time networking systems.",
            "How would you implement anti-cheat systems?",
            "Explain advanced AI behavior systems.",
            "How would you scale online game servers?",
            "Explain procedural world generation.",
            "How would you optimize rendering pipelines?",
            "Explain cloud gaming infrastructure.",
            "How would you build battle royale architecture?"
        ]
    },

    "Embedded Engineer": {

        "Easy": [
            "What is embedded systems?",
            "Difference between microprocessor and microcontroller?",
            "What is RTOS?",
            "Explain GPIO.",
            "What is interrupt handling?",
            "What is UART communication?",
            "What is SPI protocol?",
            "What is I2C communication?",
            "Explain pointers in C.",
            "What is memory allocation?"
        ],

        "Medium": [
            "How would you optimize embedded systems?",
            "Explain RTOS scheduling.",
            "How would you debug hardware issues?",
            "Explain embedded Linux.",
            "How would you handle memory constraints?",
            "Explain device drivers.",
            "How would you optimize power consumption?",
            "Explain bootloader systems.",
            "How would you test embedded firmware?",
            "Explain communication protocols deeply."
        ],

        "Hard": [
            "Design scalable IoT systems.",
            "How would you optimize real-time systems?",
            "Explain kernel development.",
            "How would you design automotive embedded systems?",
            "Explain embedded security architecture.",
            "How would you optimize low-level memory handling?",
            "Explain FPGA integration.",
            "How would you design industrial automation systems?",
            "Explain distributed IoT architectures.",
            "How would you build reliable embedded systems?"
        ]
    },

    "Blockchain Developer": {

        "Easy": [
            "What is blockchain?",
            "What is Ethereum?",
            "What is Bitcoin?",
            "What is a smart contract?",
            "What is Solidity?",
            "What is Web3?",
            "Explain blockchain mining.",
            "What is cryptocurrency?",
            "What is gas fee?",
            "What is decentralization?"
        ],

        "Medium": [
            "How would you write secure smart contracts?",
            "Explain ERC20 token standards.",
            "How would you optimize gas usage?",
            "Explain wallet integration.",
            "How would you prevent reentrancy attacks?",
            "Explain consensus algorithms.",
            "How would you test blockchain apps?",
            "Explain NFT architecture.",
            "How would you implement token transfers?",
            "Explain blockchain scalability issues."
        ],

        "Hard": [
            "Design scalable blockchain architecture.",
            "How would you audit smart contracts?",
            "Explain Layer 2 scaling solutions.",
            "How would you build decentralized exchanges?",
            "Explain cross-chain communication.",
            "How would you optimize blockchain performance?",
            "Explain blockchain security vulnerabilities.",
            "How would you design DeFi systems?",
            "Explain zero-knowledge proofs.",
            "How would you build enterprise blockchain systems?"
        ]
    }

}
def generate_questions(role, difficulty, num_questions=5):

    selected_questions = []

    if role in QUESTION_DB:

        if difficulty in QUESTION_DB[role]:

            questions_pool = QUESTION_DB[role][difficulty]

            selected_questions = random.sample(
                questions_pool,
                min(num_questions, len(questions_pool))
            )

    return selected_questions
def conduct_interview(role, difficulty):

    print(f"\nStarting {difficulty.upper()} interview for {role.upper()}\n")

    questions = generate_questions(role, difficulty, 5)

    for index, question in enumerate(questions, start=1):

        print(f"\nQuestion {index}: {question}")

        # Voice Output
        speak_text(question)

        # Simulate thinking time
        time.sleep(1)

        answer = input("Your Answer: ")

        print("Answer Recorded.\n")

    print("\nInterview Completed Successfully!")


# Example Usage
if __name__ == "__main__":

    role = input("Enter Role: ")
    difficulty = input("Enter Difficulty (easy/medium/hard): ")

    conduct_interview(role, difficulty)