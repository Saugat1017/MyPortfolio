// Single source of truth for portfolio content.
// Update text here and every section (plus the chat assistant and ⌘K menu) stays in sync.
// Wrap words in **double asterisks** to bold them in bullet points.

import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiAndroid,
  SiApacheairflow,
  SiApachekafka,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDatabricks,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGooglecloud,
  SiGrafana,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiMlflow,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiNvidia,
  SiOnnx,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSitecore,
  SiSpringboot,
  SiSqlalchemy,
  SiSqlite,
  SiTensorflow,
  SiTerraform,
} from "react-icons/si";
import {
  LuBot,
  LuBrain,
  LuCloud,
  LuCodeXml,
  LuCpu,
  LuDatabase,
  LuFileText,
  LuGauge,
  LuHandHeart,
  LuLayers,
  LuNetwork,
  LuRuler,
  LuServer,
  LuShieldCheck,
  LuSparkles,
  LuTerminal,
  LuWorkflow,
  LuZap,
} from "react-icons/lu";

/* -------------------------------------------------------------------------- */
/* Identity                                                                   */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Saugat Bhatta",
  firstName: "Saugat",
  initials: "SB",
  roles: ["ML platforms", "cloud automation", "edge AI systems", "full-stack products"],
  status: {
    badge: "Offer accepted",
    text: "Incoming Software Engineer at State Farm",
  },
  location: "Dallas–Fort Worth, TX",
  timeZone: "America/Chicago",
  email: "saugatbhatta1234@gmail.com",
  photo: "/images/profile.jpg",
  links: {
    github: "https://github.com/Saugat1017",
    githubUser: "Saugat1017",
    linkedin: "https://www.linkedin.com/in/saugat-bhatta-01a595217/",
    website: "https://saugatdev.com",
  },
  resume: {
    pdf: "/resume/Saugat_Bhatta_Resume.pdf",
    preview: "/resume/resume-preview.jpg",
    fileName: "Saugat_Bhatta_Resume.pdf",
    size: "170 KB",
    pages: 1,
  },
};

export const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "goals",
  "resume",
  "contact",
] as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "goals", label: "What's Next" },
  { id: "contact", label: "Contact" },
];

export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: 100, suffix: "+", label: "ML models built on Python packages I maintain" },
  { value: 4.7, decimals: 1, suffix: "×", label: "faster Vision Transformer on Jetson Orin Nano" },
  { value: 35, suffix: "+", label: "tutors led at UT Arlington" },
  { value: 3.73, decimals: 2, label: "GPA, B.S. Computer Science" },
];

/* -------------------------------------------------------------------------- */
/* Tech → icon lookup (used by chips, marquee and flow diagrams)              */
/* -------------------------------------------------------------------------- */

export const techIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: FaJava,
  SQL: LuDatabase,
  JavaScript: SiJavascript,
  "C/C++": SiCplusplus,
  C: SiC,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  ONNX: SiOnnx,
  TensorRT: SiNvidia,
  "NVIDIA Jetson": SiNvidia,
  MLflow: SiMlflow,
  "Hugging Face": SiHuggingface,
  "scikit-learn": SiScikitlearn,
  MCP: LuBot,
  LLMs: LuSparkles,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  "Spring Boot": SiSpringboot,
  React: SiReact,
  "Node.js": SiNodedotjs,
  SQLAlchemy: SiSqlalchemy,
  JWT: LuShieldCheck,
  SLF4J: LuFileText,
  AWS: FaAws,
  "AWS RDS": FaAws,
  "Amazon Bedrock": FaAws,
  "Amazon Kendra": FaAws,
  Terraform: SiTerraform,
  Databricks: SiDatabricks,
  "Apache Airflow": SiApacheairflow,
  "Google Cloud": SiGooglecloud,
  "Vertex AI": SiGooglecloud,
  Kafka: SiApachekafka,
  Redis: SiRedis,
  Nginx: SiNginx,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Git: SiGit,
  Agile: LuWorkflow,
  Sitecore: SiSitecore,
  "Android SDK": SiAndroid,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  CLI: LuTerminal,
};

export const marqueeTech = [
  "Python",
  "PyTorch",
  "TensorRT",
  "ONNX",
  "MLflow",
  "Databricks",
  "AWS",
  "Terraform",
  "Apache Airflow",
  "Spring Boot",
  "React",
  "FastAPI",
  "Kafka",
  "Redis",
  "Docker",
  "PostgreSQL",
  "Google Cloud",
  "Hugging Face",
  "Prometheus",
  "Grafana",
];

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm a Computer Science senior at the **University of Texas at Arlington** who works where software engineering meets machine learning. At **State Farm**, I build the Python packages and automation that data scientists use across **100+ ML models**, and I modernized an internal knowledge platform onto **Terraform** and **Amazon Bedrock**.",
    "In the lab, I research how to make Vision Transformers fast enough for the edge — compressing DeiT-Small to run in real time on an **NVIDIA Jetson Orin Nano**. Outside of code, I lead a team of **35+ tutors** at UTA.",
  ],
  focus: ["ML platforms", "MLOps", "Cloud infrastructure", "Edge AI", "LLM tooling", "Full-stack"],
  education: {
    degree: "B.S. in Computer Science",
    school: "University of Texas at Arlington",
    period: "Aug 2024 – Dec 2026",
    gpa: "3.73",
    honors: ["Honor Roll", "Freshman Distinction Roll"],
    coursework: [
      "Algorithms & Data Structures",
      "Operating Systems",
      "Database Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Data Mining",
      "Computer Networks",
      "NLP",
    ],
    previous: "Earlier coursework at SUNY Oswego and Dallas College (2022–2024).",
  },
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export type Badge = { label: string; tone: "green" | "violet" | "amber" | "neutral" };

export type Job = {
  id: string;
  mark: string;
  markGradient: string;
  role: string;
  org: string;
  team?: string;
  note?: string;
  location: string;
  period: string;
  current?: boolean;
  badges?: Badge[];
  metrics?: { value: string; label: string }[];
  pipeline?: { label: string; tech?: string }[];
  bullets: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const experience: Job[] = [
  {
    id: "state-farm",
    mark: "SF",
    markGradient: "linear-gradient(135deg, #fda4af, #f0abfc)",
    role: "Software Engineer Intern",
    org: "State Farm",
    team: "Property & Casualty Modeling",
    location: "Richardson, TX",
    period: "Jun 2026 – Present",
    current: true,
    badges: [
      { label: "Full-time offer accepted", tone: "green" },
      { label: "Agile team", tone: "neutral" },
    ],
    metrics: [
      { value: "100+", label: "ML models using my Python packages" },
      { value: "3 → 1", label: "months to ship, using MLflow Autologging" },
    ],
    bullets: [
      "Develop and maintain **Python packages** used across **100+ machine learning models**, working with data scientists to build modeling and automation tools.",
      "Build automation with **Python, Databricks, MLflow and AWS** to speed up model development, experiment tracking and deployment — used **MLflow Autologging** to finish a planned three-month project in **one month**.",
      "Modernized the internal Knowledge Repository by moving its data workflows off **Apache Airflow** into **Terraform** jobs on AWS and migrating search from **Amazon Kendra** to **Amazon Bedrock**, improving reliability and answer quality.",
      "Building an **MCP server** and a **command-line tool (CLI)** so other engineering teams can use the Knowledge Repository.",
      "Collaborate in an **Agile** team through daily standups and sprint planning, owning assigned tasks from planning through delivery.",
    ],
    stack: ["Python", "Databricks", "MLflow", "AWS", "Terraform", "Amazon Bedrock", "Apache Airflow", "MCP", "CLI"],
  },
  {
    id: "edge-ai-research",
    mark: "UTA",
    markGradient: "linear-gradient(135deg, #c4b5fd, #93c5fd)",
    role: "Undergraduate Researcher",
    org: "UT Arlington",
    team: "Architecture Optimization for Edge AI",
    note: "Advisor: Dr. Chenxi Wang",
    location: "Arlington, TX",
    period: "Jan 2026 – Present",
    current: true,
    badges: [{ label: "First-author paper in preparation", tone: "violet" }],
    metrics: [
      { value: "4.7×", label: "faster inference" },
      { value: "330 FPS", label: "real-time on device" },
      { value: "69%", label: "smaller model" },
    ],
    pipeline: [
      { label: "DeiT-Small", tech: "PyTorch" },
      { label: "PQV-Mobile pruning", tech: "PyTorch" },
      { label: "ONNX export", tech: "ONNX" },
      { label: "TensorRT", tech: "TensorRT" },
      { label: "Jetson Orin Nano", tech: "NVIDIA Jetson" },
    ],
    bullets: [
      "Writing a **first-author research paper** (in preparation for publication) on shrinking a **DeiT-Small Vision Transformer** to run in real time on the **NVIDIA Jetson Orin Nano**.",
      "Built a repeatable **PyTorch** pipeline that combines model pruning (**PQV-Mobile**), **ONNX** export and **NVIDIA TensorRT** compilation, measured directly on the device.",
      "Made the model run up to **4.7× faster (330 FPS)** and **69% smaller** with almost no drop in accuracy — and showed the speedup came from **TensorRT**, not from pruning.",
    ],
    stack: ["PyTorch", "ONNX", "TensorRT", "NVIDIA Jetson", "Python"],
  },
  {
    id: "dallas-ai",
    mark: "DAI",
    markGradient: "linear-gradient(135deg, #67e8f9, #86efac)",
    role: "AI Summer Program",
    org: "Dallas AI",
    location: "Dallas, TX",
    period: "Jun 2025 – Aug 2025",
    metrics: [
      { value: "87%", label: "classification accuracy" },
      { value: "1,500+", label: "annotated food-mood records" },
      { value: "100+", label: "simulated users supported" },
    ],
    bullets: [
      "Built a secure full-stack platform using **Spring Boot** and **React** with **JWT** authentication, enabling real-time AI-powered chat guidance for **100+ simulated users** in emotional-eating support scenarios.",
      "Researched and implemented ML models with **Hugging Face Transformers** to detect emotional vs. physical hunger patterns, reaching **87% accuracy** across **1,500+** annotated food-mood records.",
      "Integrated an **LLM**-powered response engine that turned detected hunger patterns into personalized, real-time coaching messages in the chat interface.",
    ],
    stack: ["Spring Boot", "React", "JWT", "Hugging Face", "LLMs", "Python"],
  },
  {
    id: "lrc-lead",
    mark: "LRC",
    markGradient: "linear-gradient(135deg, #fde68a, #fca5a5)",
    role: "LRC Tutors Team Lead (LEAD Team)",
    org: "UT Arlington",
    team: "Mathematics",
    location: "Arlington, TX",
    period: "Aug 2024 – Present",
    current: true,
    badges: [{ label: "Mavs Up MVP", tone: "amber" }],
    bullets: [
      "Lead and coordinate **35+ tutors** across scheduling, operations and performance analytics, and manage the department's **Sitecore CMS** and official mathematics webpages.",
      "Awarded **Mavs Up MVP** for outstanding cross-department impact and operational excellence.",
    ],
    stack: ["Leadership", "Sitecore", "Analytics"],
    link: {
      label: "LRC tutors page",
      href: "https://www.uta.edu/academics/schools-colleges/science/departments/mathematics/lrc/tutors",
    },
  },
];

export const earlierExperience = [
  {
    role: "OURCS@DFW Research Assistant",
    org: "UT Arlington",
    period: "Feb 2025 – Mar 2025",
    summary:
      "Designed adversarial test cases for transformer-based summarization models, improving output robustness by 30% and contributing to a Runner-Up award at a regional research symposium.",
  },
  {
    role: "Computer Lab Assistant",
    org: "SUNY Oswego",
    period: "Aug 2022 – Dec 2022",
    summary:
      "Supported 100+ users a week with Java, software and connectivity issues at a 92% resolution rate, and trained 50+ students and faculty on IDEs and version control.",
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  id: string;
  title: string;
  tagline: string;
  period?: string;
  category: string;
  flow?: { label: string; tech?: string }[];
  bullets?: string[];
  stack: string[];
  links: { code?: string; live?: string };
};

export const featuredProjects: Project[] = [
  {
    id: "microservices",
    title: "Distributed Microservices System",
    tagline:
      "An event-driven microservices architecture with real-time monitoring and scalable orchestration.",
    period: "Dec 2025 – Present",
    category: "Distributed systems",
    flow: [
      { label: "React client", tech: "React" },
      { label: "Nginx API gateway", tech: "Nginx" },
      { label: "Python + Spring Boot services", tech: "Spring Boot" },
      { label: "Kafka event bus", tech: "Kafka" },
      { label: "Redis cache", tech: "Redis" },
      { label: "PostgreSQL", tech: "PostgreSQL" },
    ],
    bullets: [
      "Implemented **Kafka**-based asynchronous messaging, **Redis** caching and a **PostgreSQL** persistence layer.",
      "Configured an **Nginx** API gateway and containerized services with **Docker** for scalable orchestration.",
    ],
    stack: ["Python", "Spring Boot", "React", "Kafka", "Redis", "PostgreSQL", "Nginx", "Docker"],
    links: { code: "https://github.com/Saugat1017/MicroServiceProject" },
  },
  {
    id: "policy-advisor",
    title: "Insurance Smart Policy Advisor",
    tagline:
      "A full-stack insurance underwriting platform with ML-based risk scoring and premium estimation.",
    period: "Dec 2025 – Present",
    category: "Machine learning",
    flow: [
      { label: "Risk features", tech: "Python" },
      { label: "scikit-learn models", tech: "scikit-learn" },
      { label: "FastAPI scoring", tech: "FastAPI" },
      { label: "SQLite quotes", tech: "SQLite" },
    ],
    bullets: [
      "Engineered structured risk features and trained **scikit-learn** classification models on **1,000+** insurance records.",
      "Built **FastAPI** prediction APIs with explainable scoring and persisted **200+** generated quotes.",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "scikit-learn", "SQLite"],
    links: { code: "https://github.com/Saugat1017/Insurance_Smart_Policy_Advisor" },
  },
  {
    id: "mavthread",
    title: "MavThread",
    tagline:
      "A scalable full-stack university discussion platform with secure authentication and high-volume API handling.",
    period: "Jun 2025 – Oct 2025",
    category: "Full stack",
    flow: [
      { label: "React UI", tech: "React" },
      { label: "JWT auth", tech: "JWT" },
      { label: "Spring Boot API", tech: "Spring Boot" },
      { label: "MySQL on AWS RDS", tech: "MySQL" },
    ],
    bullets: [
      "Designed a **Spring Boot** backend deployed on **AWS RDS**, supporting **200+ users** and **5K+ API calls**.",
      "Integrated a **React** frontend with structured logging, reducing error-resolution time by **40%**.",
    ],
    stack: ["Java", "React", "Spring Boot", "MySQL", "JWT", "SLF4J", "AWS RDS"],
    links: { code: "https://github.com/Saugat1017/MavThread" },
  },
];

export const moreProjects: Project[] = [
  {
    id: "claim-risk",
    title: "Early Claim Risk Prediction",
    tagline:
      "Predicts claim severity (low / medium / high) the moment a claim is filed, using only intake-time data to avoid leakage.",
    category: "Machine learning",
    stack: ["Python", "FastAPI", "scikit-learn"],
    links: { code: "https://github.com/Saugat1017/Insurance_early_claim_risk_Prediction_System" },
  },
  {
    id: "mortgage",
    title: "Mortgage Website",
    tagline:
      "A responsive mortgage site with a real-time payment calculator, built as a volunteer project for a company's web presence.",
    category: "Volunteer · Web",
    stack: ["HTML5", "CSS3", "JavaScript"],
    links: {
      code: "https://github.com/Saugat1017/MortgageWebsite-Volunteer-Project",
      live: "https://saugat1017.github.io/MortgageWebsite-Volunteer-Project",
    },
  },
  {
    id: "fitness",
    title: "Fitness Tracker for Android",
    tagline:
      "A Java Android app with GPS tracking, sensor-based step counting and weekly analytics across 4+ activity types.",
    category: "Mobile",
    stack: ["Java", "Android SDK"],
    links: {},
  },
  {
    id: "farm",
    title: "Farm Data Management System",
    tagline:
      "A C console trading system for farmers and merchants with secure registration, listings and file-based persistence for 1,000+ records.",
    category: "Systems",
    stack: ["C"],
    links: { code: "https://github.com/Saugat1017/Trading-Program-for-Farmers-and-Merchants" },
  },
];

/* -------------------------------------------------------------------------- */
/* Skills                                                                     */
/* -------------------------------------------------------------------------- */

export const skillGroups: { title: string; icon: IconType; blurb: string; items: string[] }[] = [
  {
    title: "Languages",
    icon: LuCodeXml,
    blurb: "Python day to day, Java for services.",
    items: ["Python", "Java", "SQL", "JavaScript", "C/C++"],
  },
  {
    title: "AI / ML",
    icon: LuBrain,
    blurb: "Training, compressing and shipping models.",
    items: ["PyTorch", "TensorFlow", "ONNX", "TensorRT", "MLflow", "Hugging Face", "scikit-learn", "MCP"],
  },
  {
    title: "Backend & Web",
    icon: LuServer,
    blurb: "APIs and the apps on top of them.",
    items: ["FastAPI", "Flask", "Spring Boot", "React", "Node.js"],
  },
  {
    title: "Cloud & Data Platforms",
    icon: LuCloud,
    blurb: "Infrastructure as code and managed AI.",
    items: [
      "AWS",
      "Amazon Bedrock",
      "Amazon Kendra",
      "Terraform",
      "Databricks",
      "Apache Airflow",
      "Google Cloud",
      "Vertex AI",
    ],
  },
  {
    title: "Distributed Systems",
    icon: LuNetwork,
    blurb: "Event-driven services that scale.",
    items: ["Kafka", "Redis", "Nginx", "Docker", "PostgreSQL", "MySQL"],
  },
  {
    title: "Monitoring & DevOps",
    icon: LuGauge,
    blurb: "Observability and how teams ship.",
    items: ["Prometheus", "Grafana", "Git", "Agile"],
  },
];

/* -------------------------------------------------------------------------- */
/* Career goals & what's next                                                 */
/* -------------------------------------------------------------------------- */

export const careerGoals = {
  status: {
    label: "Job search: closed",
    title: "I've accepted a full-time Software Engineer offer at State Farm.",
    body: "After I graduate from UT Arlington in December 2026, I'm continuing at State Farm full-time. I'm not actively looking for new roles — but I'm always happy to connect about ML platforms, edge AI research, or helping students break into tech.",
    chips: ["Graduating Dec 2026", "Full-time at State Farm", "Open to connect"],
  },
  targetRoles: [
    {
      title: "Software Engineer — ML Platforms",
      description: "Building the libraries, pipelines and tooling data scientists rely on every day.",
      icon: LuLayers,
    },
    {
      title: "MLOps & ML Infrastructure",
      description: "Experiment tracking, deployment and automation that make models reproducible and fast to ship.",
      icon: LuWorkflow,
    },
    {
      title: "AI Infrastructure & Applied AI",
      description: "Retrieval, LLM services and MCP integrations that bring AI into real engineering workflows.",
      icon: LuSparkles,
    },
    {
      title: "Efficient & Edge AI",
      description: "Making models smaller and faster on real hardware — the thread running through my research.",
      icon: LuCpu,
    },
  ],
  industries: [
    { label: "Insurance & financial services", icon: LuShieldCheck },
    { label: "Enterprise AI platforms", icon: LuLayers },
    { label: "Developer tooling", icon: LuTerminal },
    { label: "Edge & embedded AI", icon: LuCpu },
  ],
  values: [
    {
      value: "Make other engineers faster",
      strength: "Platform & automation engineering",
      evidence: "Python packages behind 100+ ML models; MLflow Autologging turned a three-month plan into one month.",
      icon: LuZap,
    },
    {
      value: "Measure, don't guess",
      strength: "Research rigor",
      evidence: "Benchmarked on device and showed the 4.7× speedup came from TensorRT, not from pruning.",
      icon: LuRuler,
    },
    {
      value: "Build things that last",
      strength: "Cloud infrastructure",
      evidence: "Moved Airflow workflows to Terraform on AWS and migrated search from Kendra to Bedrock.",
      icon: LuShieldCheck,
    },
    {
      value: "Lift people up",
      strength: "Leadership & teaching",
      evidence: "Lead 35+ tutors at UTA and was awarded Mavs Up MVP for cross-department impact.",
      icon: LuHandHeart,
    },
  ],
  roadmap: [
    {
      phase: "Now",
      tone: "now",
      when: "Fall 2026",
      title: "Finish strong",
      items: [
        "Complete my B.S. in Computer Science at UT Arlington",
        "Ship the Knowledge Repository MCP server and CLI",
        "Finalize my first-author edge AI paper for submission",
      ],
    },
    {
      phase: "Next",
      tone: "next",
      when: "After graduation",
      title: "Start full-time at State Farm",
      items: [
        "Join State Farm as a full-time Software Engineer",
        "Own ML tooling end to end, from design to production",
        "Go deeper on AWS, MLOps and LLM infrastructure",
      ],
    },
    {
      phase: "Later",
      tone: "later",
      when: "3–5 years",
      title: "Grow into ML platform leadership",
      items: [
        "Lead the design of ML and AI platform systems",
        "Mentor new engineers, the way I mentor tutors today",
        "Stay close to research on efficient AI",
      ],
    },
  ],
};
