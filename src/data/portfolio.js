// ================== PERSONAL ==================
export const personal = {
  name: 'Sheena P',
  roles: [
    'AI / ML Engineer',
    'Cloud Enthusiast',
    'IEEE Published Researcher',
    'Problem Solver',
  ],
  tagline:
    'Building intelligent systems with machine learning and RAG, and deploying them on the cloud. Passionate about research that solves real-world problems.',
  email: 'sheenap.aiml2024@citchennai.net',
  location: 'Chennai, India',
  profileImage: '/images/profile/profile.jpg',
  // Replace this file anytime with the same name -> push -> Vercel auto-updates
  resume: '/resume/Sheena_P_Resume.pdf',
  socials: {
    github: 'https://github.com/SHEENA2024',   // TODO: https://github.com/your-username
    linkedin: 'https://www.linkedin.com/in/sheena-p-524647328/', // TODO: https://www.linkedin.com/in/your-profile
    leetcode: 'https://leetcode.com/u/SHEENA2024/', // TODO: https://leetcode.com/u/your-username
  },
};

export const stats = [
  { value: '8.73', label: 'CGPA' },
  { value: '3', label: 'IEEE papers' },
  { value: '600+', label: 'LeetCode solved' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'internship', label: 'Experience' },
  { id: 'publications', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
];

// ================== EDUCATION ==================
export const education = {
  institution: 'Chennai Institute of Technology (CIT)',
  degree: 'B.E. Computer Science and Engineering',
  specialization: 'Artificial Intelligence and Machine Learning',
  duration: '2024 – 2028',
  location: 'Chennai, Tamil Nadu',
  cgpa: 8.73,
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'OOPS',
    'Cloud Computing',
    'AWS',
    'Linux',
    'RAG',
    'Research',
    'Public Speaking',
  ],
  images: ['/images/education/edu1.png'],
};

// ================== INTERNSHIP ==================
export const internship = {
  role: 'Research Intern',
  organization: 'National Institute of Technology (NIT) Puducherry',
  duration: 'Apr 2026 – Jun 2026',
  summary:
    'Built an end-to-end medical question-answering system on oncology datasets using MRL embeddings, LAQA and medical LLMs (MedGemma).',
  points: [
    'Designed the retrieval pipeline and optimized retrieval quality for oncology QA',
    'Integrated MedGemma for grounded answer generation',
    'Ran ablation studies to measure the contribution of each pipeline module',
  ],
  tags: ['RAG', 'MRL Embeddings', 'LAQA', 'MedGemma', 'Medical LLMs', 'Python'],
  images: [
    '/images/internship/intern1.jpeg',
  ],
};

// ================== PUBLICATIONS ==================
export const publications = [
  {
    title:
      'Network- and Cost-Aware Adaptive Cloud–Edge Computer Vision Framework Using Machine Learning for Latency-Critical Applications',
    venue: 'IEEE',
    year: '', // TODO: e.g. '2026'
    description:
      'Developed an adaptive cloud–edge computer vision system that dynamically decides whether inference should run on edge devices or the cloud based on runtime network conditions and scene complexity. Implemented a Random Forest decision engine that optimizes latency, bandwidth usage, and cloud cost, achieving 83.33% decision accuracy in real-world experiments.',
    tags: ['Cloud–Edge', 'Computer Vision', 'ML'],
    link: 'https://ieeexplore.ieee.org/document/11554777', // TODO: paper URL
  },
  {
    title:
      'Interpretable Multi-Organ Dynamics Prediction via Graph Attention Networks and Counterfactual Simulation',
    venue: 'IEEE',
    year: '2026', // TODO
    description:
      'Designed a GAT-based framework to model inter-organ relationships (cardiac, renal, hepatic) using publicly available biochemical datasets. Incorporated counterfactual organ cascade simulation and SHAP-based explainability to enable interpretable, system-level clinical risk prediction, achieving 69.6% accuracy.',
    tags: ['GNN', 'Explainable AI', 'Healthcare'],
    link: 'https://ieeexplore.ieee.org/document/11590324', // TODO
  },
  {
    title: 'EcoRAG-EDU: A Subject-Aware Token-Efficient Retrieval Augmented Generation Framework for Computer Science Education ', 
    venue: 'IEEE',
    year: '2026',
    description: 'Developed a token-efficient RAG framework for computer science education that leverages subject-aware retrieval and efficient token utilization to provide accurate and contextually relevant answers to student queries. The framework integrates domain-specific knowledge bases and employs advanced retrieval techniques to enhance the quality of generated responses, achieving improved learning outcomes in educational settings.',
    tags: [],
    link: '#',
  },
];

// ================== PROJECTS ==================
// category: 'ai', 'cloud', or both — drives the filter tabs
export const projects = [
  {
    title: 'CloudSentinel AI',
    subtitle: 'Intelligent cloud resource monitoring and cost anomaly detection',
    description:
      'ML-based anomaly detection for cloud resources using Isolation Forest and resource-specific feature engineering. Containerized inference on AWS Lambda via Amazon ECR, S3 for I/O, CloudWatch monitoring and AWS Budgets alerts for cost tracking.',
    tags: ['Python', 'Scikit-learn', 'AWS Lambda', 'ECR', 'S3', 'CloudWatch', 'Docker'],
    category: ['ai', 'cloud'],
    github: 'https://github.com/SHEENA2024/CloudSentinal-AI', // TODO
  },
  {
    title: 'Yojana Mitra',
    subtitle: 'AI-powered government scheme navigator (RAG + LLM)',
    description:
      'Helps citizens discover eligible welfare schemes by combining semantic search with LLMs: personalized recommendations, eligibility explanations, scheme comparison, application guidance and citation-backed answers.',
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'Sentence Transformers', 'Claude LLM'],
    category: ['ai'],
    github: 'https://github.com/SHEENA2024/Government_scheme_navigator', // TODO
  },
  {
    title: 'Thalassemia Support System',
    subtitle: 'System for thalassemia patients to track blood donors and manage care',
    description:
      'Thalassemia Support System is a full-stack web application that helps thalassemia patients request blood, automatically match compatible donors, access treatment centers, and book hospitals. Built with a HTML,CSS, JS frontend, Django backend, and PostgreSQL, it ensures a scalable, efficient, and user-friendly healthcare support platform.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Django', 'PostgreSQL','pywhatkit', 'Twilio API'],
    category: ['Full-Stack', 'Python'],
    github: 'https://github.com/SHEENA2024/Thalassemia_Support_System', // TODO
  },
  {
    title: 'AI-Based Breast Cancer Detection',
    subtitle: 'Attention-based CNN for mammogram classification',
    description:
      'Custom CNN with attention mechanisms classifying mammograms as Normal, Benign or Malignant, with under 5-second inference and a GUI showing predictions with confidence scores.',
    tags: ['TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Tkinter'],
    category: ['ai'],
    github: 'https://github.com/SHEENA2024/Breast_cancer_detection', // TODO
  },
  {
    title: 'TourPulse',
    subtitle: 'MLOps-driven tourism demand forecasting platform',
    description:
      'Full-stack MLOps platform forecasting tourism demand across 15 Indian cities with ensemble models, live weather data, SHAP explainability and automated drift detection, deployed on the cloud.',
    tags: ['Random Forest', 'SHAP', 'FastAPI', 'React', 'Render', 'Vercel'],
    category: ['ai', 'cloud'],
    github: 'https://tourpulse-frontend.vercel.app/', // TODO
  },
];

// ================== CERTIFICATIONS ==================
export const featuredCert = {
  title: 'AWS Certified Cloud Practitioner',
  code: 'CLF-C02',
  issuer: 'Amazon Web Services',
  badge: '/images/certifications/aws-ccp.jpeg',
  verify: 'https://www.credly.com/badges/dab2b9ce-b681-4216-b89b-7f16cbe3b66a', // TODO: Credly link
};

export const certifications = [
  { title: 'Machine Learning', issuer: 'Internshala' },
  { title: 'Claude with Anthropic API', issuer: 'Anthropic (Training)' },
];

// ================== ACHIEVEMENTS ==================
// icon keys are mapped to icons inside Achievements.jsx
export const achievements = [
  {
    icon: 'code',
    title: 'LeetCode 600+ problems',
    description: 'Solved 600+ problems with a contest rating of 1700+.',
  },
  {
    icon: 'trophy',
    title: "National Finalist — Neurohack'26, IIT Madras",
    description:
      'Cleared a coding assessment against 2,000+ students to reach the top 25 finalist teams.',
  },
  {
    icon: 'heart',
    title: 'Finalist — AI for Public Good Hackathon (Ideatron, Microsoft)',
    description:
      "Built an AI-powered pregnancy and women's healthcare prototype selected for the final round.",
  },
  {
    icon: 'bulb',
    title: "Finalist — Nextgen'25, Soft Computing Research Society",
    description:
      'Selected from 4,000 registrants; pitched an AI-powered microplastic detection sensor to judges from Walmart and Apple.',
  },
];

// ================== VOLUNTEERING ==================
export const volunteering = [
  {
    role: 'Research & Innovation Lead',
    organization: 'Athera — AIML Department Club, CIT',
    duration: '', // TODO: e.g. '2025 – Present'
    description:
      'Lead research and innovation initiatives for the department club, guiding students toward research work, organizing technical events, and encouraging project-driven learning.',
    images: [
      '/images/volunteering/athera1.jpeg',
      '/images/volunteering/athera2.jpeg',
      '/images/volunteering/athera3.jpeg',
    ],
  },
  {
    role: 'Cloud Computing Workshop Speaker',
    organization: 'MAGNUS Symposium, AIML Department',
    duration: '',
    description:
      'Delivered a cloud computing workshop to students from multiple colleges, introducing core cloud concepts and their practical applications.',
    images: [
      '/images/volunteering/workshop1.jpeg',
      '/images/volunteering/workshop2.jpeg',
    ],
  },
  {
    role: 'Attendee — AWS User Group Meetup',
    organization: 'Hosted at Genesys',
    duration: '',
    description:
      'Joined the AWS User Group community meetup to learn from industry practitioners about real-world cloud architectures and connect with the cloud community.',
    images: [
      '/images/volunteering/aws-meetup1.jpeg',
      '/images/volunteering/aws-meetup2.jpeg',
    ],
  },
];