import { en, type Content } from './en'

// Wording is epicene (no masculine/feminine job titles or past participles) so it fits any reader.

const jobs: { role: string; period: string; bullets: string[] }[] = [
  {
    role: 'Développement Full-Stack',
    period: 'Juillet 2025 – Présent',
    bullets: [
      'Conception et développement de Le Transfert, une plateforme multi-applications de transport privé opérant en Europe et en Tunisie, sur une architecture microservices avec Spring Boot et Angular.',
      'Développement d’applications dédiées aux clients, entreprises, chauffeurs et administrateurs : réservations, gestion des chauffeurs et de la flotte, workflows de vérification et d’admission, messagerie client–chauffeur.',
      'Mise en place d’un backend microservices avec communication asynchrone via Apache Kafka, ainsi que Redis et Docker.',
      'Mise en œuvre des flux de paiement avec Stripe pour l’Europe et d’un système dédié pour la Tunisie, avec authentification et autorisation gérées par Keycloak.',
      'Intégration de Mapbox pour les cartes, la gestion des itinéraires et les services de géolocalisation ; déploiement de l’infrastructure avec Proxmox et Docker Desktop.',
    ],
  },
  {
    role: 'Stage en développement web et IA',
    period: 'Févr. – Mai 2025',
    bullets: [
      'Développement et déploiement de modules de merchandising et de recommandation pilotés par l’IA pour Salesforce Commerce Cloud (SFCC), basés sur la segmentation client et intégrés via FastAPI et des jobs SFCC.',
      'Mise en place d’un suivi continu des performances avec Grafana et Prometheus.',
    ],
  },
  {
    role: 'Développement et DevOps (temps partiel)',
    period: 'Oct. 2024 – Janv. 2025',
    bullets: [
      'Développement et maintenance d’une plateforme ERP : livraison de nouvelles fonctionnalités et d’évolutions du système.',
      'Gestion des pipelines CI/CD pour automatiser le build, les tests et le déploiement ; collaboration sur l’intégration des fonctionnalités et les revues de code.',
    ],
  },
  {
    role: 'Stage en développement web et DevOps',
    period: 'Juin – Août 2024',
    bullets: [
      'Développement d’un module de gestion des congés basé sur les rôles pour un ERP : workflows de demande, approbations, notifications et historique.',
      'Implémentation de services backend avec Spring Boot et MySQL ; contribution aux pipelines CI/CD et à la conteneurisation.',
    ],
  },
  {
    role: 'Stage en développement web',
    period: 'Août 2023',
    bullets: [
      'Développement d’une application full-stack de gestion de tâches avec authentification, tableaux de bord personnalisés et API REST adossées à PostgreSQL.',
      'Conteneurisation de l’application avec Docker pour simplifier le déploiement et le passage à l’échelle.',
    ],
  },
]

const projectText: { title: string; badge: string; description: string }[] = [
  {
    title: 'Le Transfert',
    badge: 'Professionnel · Majradeep',
    description:
      'Plateforme multi-applications de transport privé pour l’Europe et la Tunisie : réservations, gestion de flotte, vérification des chauffeurs, messagerie, paiements et cartes en direct, sur un backend microservices piloté par Kafka.',
  },
  {
    title: 'Gestion avancée du trafic dans Kubernetes avec Traefik',
    badge: 'Projet de fin d’année',
    description:
      'Déploiement d’une application full-stack sur un cluster Kubernetes et mise en place de la gestion du trafic avec Traefik en reverse proxy, avec SSL/TLS pour sécuriser les échanges.',
  },
  {
    title: 'Orchestration de pipelines de données avec MWAA',
    badge: 'Cloud · Data',
    description:
      'Automatisation de pipelines ETL évolutifs avec Amazon MWAA et Apache Airflow, en intégrant les services AWS pour le stockage, le traitement et la gestion des bases de données.',
  },
  {
    title: 'Application web full-stack de livraison de repas',
    badge: 'Projet personnel',
    description:
      'Plateforme de livraison de repas avec authentification, panier, suivi de commande, paiements PayPal et localisation de livraison sur carte. Conteneurisée et déployée sur Kubernetes avec Minikube.',
  },
]

const skillGroups = [
  'Langages',
  'Frontend',
  'Backend',
  'Bases de données & cache',
  'Cloud & infrastructure',
  'DevOps & outils',
  'Tests & API',
  'Sécurité & intégration',
]

export const fr: Content = {
  title: 'Développement Full-Stack & DevOps',
  tagline:
    'Je conçois et livre des plateformes de production de bout en bout : front-ends Angular, microservices Spring Boot, messagerie Kafka et l’infrastructure Docker/Kubernetes qui les fait tourner.',
  intro:
    'Je construis des plateformes de production de bout en bout : front-ends Angular, microservices Spring Boot, Kafka et l’infrastructure Kubernetes derrière.',
  location: 'Tunisie (UTC+1)',
  replyBy: 'demain avant 17 h (UTC+1)',
  topics: ['Opportunité d’emploi', 'Projet freelance', 'Collaboration', 'Simple bonjour'],
  about: [
    'Titulaire d’un diplôme d’ingénieur en télécommunications de l’ENET’COM Sfax, je conçois et développe depuis juillet 2025 Le Transfert, une plateforme multi-applications de transport privé opérant en Europe et en Tunisie.',
    'J’aime couvrir tout le chemin de l’idée à la production : services Angular et Spring Boot, messagerie Kafka, sécurité Keycloak, puis déploiement avec Docker, Kubernetes et CI/CD.',
  ],
  heroRoles: ['Développement Full-Stack', 'Ingénierie Microservices', 'Ingénierie DevOps'],
  stats: [
    { value: 4, label: 'Applications livrées sur une même plateforme (clients, entreprises, chauffeurs, administrateurs)' },
    { value: 2, label: 'Marchés servis : Europe et Tunisie' },
    { value: 5, label: 'Postes et stages en 3 ans' },
    { value: 6, label: 'Certifications professionnelles' },
  ],
  strengths: [
    {
      title: 'Microservices événementiels',
      text: 'Services Spring Boot communiquant de façon asynchrone via Kafka, avec cache Redis, pour une plateforme multi-marchés en production.',
    },
    {
      title: 'Paiements et identité sécurisés',
      text: 'Stripe et un système de paiement local pour deux marchés, avec Keycloak pour l’authentification et l’autorisation.',
    },
    {
      title: 'DevOps cloud-native',
      text: 'Docker, Kubernetes, Traefik, Jenkins et CI/CD GitLab, avec des bases certifiées AWS et Azure.',
    },
    {
      title: 'IA en production',
      text: 'Modules de recommandation exposés via FastAPI et supervisés avec Prometheus et Grafana.',
    },
  ],
  experience: en.experience.map((job, i) => ({ ...job, ...jobs[i] })),
  projects: en.projects.map((p, i) => ({ ...p, ...projectText[i] })),
  skills: en.skills.map((s, i) => ({ ...s, group: skillGroups[i] })),
  education: [
    {
      school: 'École Nationale d’Électronique et des Télécommunications de Sfax (ENET’COM)',
      degree: 'Diplôme d’ingénieur en télécommunications',
      period: '2022 – 2025',
    },
    {
      school: 'Institut Préparatoire aux Études d’Ingénieurs de Monastir (IPEIM)',
      degree: 'Cycle préparatoire en physique et chimie',
      period: '2020 – 2022',
    },
  ],
  certifications: [
    'AZ-900 · Microsoft Azure Fundamentals',
    'CCNA · Cisco',
    'Introduction à DevOps · IBM',
    'Introduction aux conteneurs : Docker, Kubernetes et OpenShift',
    'AWS Cloud Practitioner Essentials',
    'Certification Spring Boot · CrocoCoder',
  ],
  languages: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Allemand', level: 'Débutant' },
  ],
}
