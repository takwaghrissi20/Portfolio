export const profile = {
  name: 'Takwa Benleghrissi',
  title: 'Full-Stack Developer & DevOps Engineer',
  tagline:
    'I design and ship production platforms end to end: Angular front ends, Spring Boot microservices, Kafka messaging and the Docker/Kubernetes infrastructure behind them.',
  email: 'takwaghrissi28@gmail.com',
  phone: '+216 94 494 656',
  intro:
    'I build production platforms end to end: Angular front ends, Spring Boot microservices, Kafka, and the Kubernetes infrastructure behind them.',
  location: 'Tunisia (UTC+1)',
  github: 'https://github.com/takwaghrissi20',
  // TODO: paste your LinkedIn profile URL here (it is hidden behind a link in the CV)
  linkedin: '',
  cv: '/Takwa_Benleghrissi_CV.pdf',
  // Web3Forms public access key: form submissions are emailed to the address it was created with
  // Shown in the "message received" panel
  replyBy: 'by tomorrow, 5 PM (UTC+1)',
  web3formsKey: 'c4f1e64f-7f50-459e-bee4-6478cb5ad0ed',
}

export const topics = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi']

export const about = [
  'I am a full-stack developer with a telecommunications engineering degree from ENET’COM Sfax. Since July 2025 I have been designing and building Le Transfert, a multi-application private taxi platform operating across Europe and Tunisia.',
  'I enjoy the whole path from idea to production: Angular and Spring Boot services, Kafka messaging, Keycloak security, and shipping it all with Docker, Kubernetes and CI/CD.',
]

export const heroRoles = ['Full-Stack Developer', 'Microservices Engineer', 'DevOps Engineer']

export const stats = [
  { value: 4, label: 'Applications shipped on one platform (clients, companies, drivers, admins)' },
  { value: 2, label: 'Markets served: Europe & Tunisia' },
  { value: 5, label: 'Roles & internships in 3 years' },
  { value: 6, label: 'Industry certifications' },
]

export const strengths = [
  {
    title: 'Event-driven microservices',
    text: 'Spring Boot services talking asynchronously over Kafka, with Redis caching, built for a live multi-market platform.',
  },
  {
    title: 'Secure payments & identity',
    text: 'Stripe and a local payment system for two markets, with Keycloak handling authentication and authorization.',
  },
  {
    title: 'Cloud-native DevOps',
    text: 'Docker, Kubernetes, Traefik, Jenkins and GitLab CI/CD, plus AWS and Azure certified foundations.',
  },
  {
    title: 'AI in production',
    text: 'Recommendation modules served through FastAPI and monitored with Prometheus and Grafana.',
  },
]

export type Job = {
  role: string
  company: string
  period: string
  bullets: string[]
  tech: string[]
}

export const experience: Job[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Majradeep',
    period: 'July 2025 – Present',
    bullets: [
      'Designed and developed Le Transfert, a multi-application private taxi platform operating across Europe and Tunisia, using a microservices architecture with Spring Boot and Angular.',
      'Built dedicated applications for clients, companies, drivers and administrators: trip reservations, driver and fleet management, verification and admission workflows, and client–driver messaging.',
      'Implemented a microservices backend with asynchronous communication through Apache Kafka, plus Redis and Docker.',
      'Delivered payment workflows with Stripe for Europe and a dedicated payment system for Tunisia, with authentication and authorization handled by Keycloak.',
      'Integrated Mapbox for maps, route management and location-based services; deployed the infrastructure with Proxmox and Docker Desktop.',
    ],
    tech: ['Angular', 'Spring Boot', 'Microservices', 'Kafka', 'Docker', 'Keycloak', 'Redis', 'Mapbox', 'Stripe', 'Proxmox', 'Traefik'],
  },
  {
    role: 'Intern in Web Development and AI',
    company: 'Decade',
    period: 'Feb – May 2025',
    bullets: [
      'Developed and deployed AI-driven merchandising and recommendation modules for Salesforce Commerce Cloud (SFCC) based on customer segmentation, integrated through FastAPI and SFCC jobs.',
      'Set up continuous performance monitoring with Grafana and Prometheus.',
    ],
    tech: ['SFCC', 'JavaScript', 'Python', 'Machine Learning', 'FastAPI', 'Docker', 'Ngrok', 'Grafana', 'Prometheus'],
  },
  {
    role: 'Part-time Developer and DevOps',
    company: 'GETS Company',
    period: 'Oct 2024 – Jan 2025',
    bullets: [
      'Developed and maintained an ERP platform, shipping new features and system enhancements.',
      'Managed CI/CD pipelines to automate build, test and deployment, collaborating on feature integration and code reviews.',
    ],
    tech: ['Next.js', 'Spring Boot', 'Docker', 'Jenkins', 'GitLab', 'Jira'],
  },
  {
    role: 'Web Development and DevOps Intern',
    company: 'GETS Company',
    period: 'June – Aug 2024',
    bullets: [
      'Built a role-based Leave Management module for an ERP: request workflows, approvals, notifications and history tracking.',
      'Implemented backend services with Spring Boot and MySQL; contributed to CI/CD pipelines and containerization.',
    ],
    tech: ['Next.js', 'JavaScript', 'Spring Boot', 'MySQL', 'Docker', 'GitLab', 'Jenkins', 'Jira', 'Postman'],
  },
  {
    role: 'Web Development Intern',
    company: 'Aures Konnect',
    period: 'Aug 2023',
    bullets: [
      'Developed a full-stack task management app with authentication, personalized dashboards and RESTful APIs backed by PostgreSQL.',
      'Containerized the application with Docker to simplify deployment and scaling.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker'],
  },
]

export const projects = [
  {
    title: 'Le Transfert',
    badge: 'Professional · Majradeep',
    description:
      'Multi-application private taxi platform for Europe and Tunisia: reservations, fleet management, driver verification, messaging, payments and live maps on a Kafka-driven microservices backend.',
    tech: ['Angular', 'Spring Boot', 'Kafka', 'Keycloak', 'Stripe', 'Mapbox', 'Redis', 'Docker'],
  },
  {
    title: 'Advanced Traffic Management in Kubernetes with Traefik',
    badge: 'End-of-Year Project',
    description:
      'Deployed a full-stack application on a Kubernetes cluster and implemented traffic management with Traefik as a reverse proxy, including SSL/TLS for secure communication.',
    tech: ['Kubernetes', 'Traefik', 'Docker', 'GitLab', 'VirtualBox'],
  },
  {
    title: 'Orchestration of Data Pipelines with MWAA',
    badge: 'Cloud · Data',
    description:
      'Automated scalable ETL data pipelines with Amazon MWAA and Apache Airflow, integrating AWS services for storage, processing and database management.',
    tech: ['Amazon MWAA', 'Airflow', 'S3', 'IAM', 'Boto3', 'RDS', 'EC2', 'Linux'],
  },
  {
    title: 'Full-Stack Food Delivery Web App',
    badge: 'Personal project',
    description:
      'Food delivery platform with authentication, cart, order tracking, PayPal payments and map-based delivery location. Containerized and deployed on Kubernetes with Minikube.',
    tech: ['Angular 18+', 'RxJS', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes'],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'JavaScript / TypeScript', 'Python', 'Bash'] },
  { group: 'Frontend', items: ['Angular', 'React.js', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'RxJS'] },
  { group: 'Backend', items: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'] },
  { group: 'Databases & Caching', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DBeaver'] },
  { group: 'Cloud & Infrastructure', items: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'Proxmox', 'Vagrant'] },
  { group: 'DevOps & Tools', items: ['Jenkins', 'Git', 'GitHub', 'GitLab', 'Jira', 'Kafka'] },
  { group: 'Testing & API', items: ['JUnit', 'Jest', 'Postman'] },
  { group: 'Security & Integration', items: ['Keycloak', 'Stripe', 'Mapbox'] },
]

export const education = [
  {
    school: 'National School of Electronics and Telecommunications of Sfax (ENET’COM)',
    degree: 'Engineering Degree in Telecommunications',
    period: '2022 – 2025',
  },
  {
    school: 'Preparatory Institute for Engineering Studies of Monastir (IPEIM)',
    degree: 'Preparatory Cycle in Physics and Chemistry',
    period: '2020 – 2022',
  },
]

export const certifications = [
  'AZ-900 · Microsoft Azure Fundamentals',
  'CCNA · Cisco',
  'Introduction to DevOps · IBM',
  'Introduction to Containers: Docker, Kubernetes and OpenShift',
  'AWS Cloud Practitioner Essentials',
  'Spring Boot Certification · CrocoCoder',
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'Beginner' },
]
