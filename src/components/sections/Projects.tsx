"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles,
  FileCode2,   
  FlaskConical, 
  Workflow,     
  BrainCircuit  
} from 'lucide-react';

// --- DATA ARRAY ---
const projectsData = [
  {
    id: 1,
    tagline: "AI Agent to summarize your day to day PDFs",
    title: "PDF Summary Agent",
    description: "Developed an AI-powered PDF summarization web application that uses Flask for the frontend and an automated n8n pipeline with Ollama for local LLM-based document processing.",
    gradientStyle: "linear-gradient(10deg, rgb(219, 39, 119) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 99.88%)",
    accentColor: "bg-[#F02E8A]", textAccent: "text-[#F02E8A]",
    bullets: [
      "Developed an event-driven PDF summarization system where file uploads trigger automated AI-based processing and dynamic summary generation.",
      "Built a Flask-based web interface using HTML and CSS that handles file uploads and communicates with the backend via REST APIs.",
      "Designed an automated n8n pipeline with Webhook, Extract from File, Ollama, and Respond to Webhook nodes to process and summarize documents.",
      "Integrated Ollama to perform local Large Language Model inference for secure, low-latency document summarization.",
      "Implemented a modular microservice-style architecture separating the UI and AI workflow layers using REST-based communication and JSON data exchange."
    ],
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "n8n", src: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Ollama", src: "https://cdn.simpleicons.org/ollama/000000" }
    ],
    image: "/n8n.png" 
  },
  {
    id: 2,
    tagline: "A travel agent chatbot that remembers your past trips and recent conversations.",
    title: "AI Travel Agent Chatbot",
    description: "An AI-powered travel agent chatbot with persistent conversational memory that leverages historical interaction data and user preferences to deliver context-aware, personalized trip planning.",
    gradientStyle: "linear-gradient(10deg, rgb(37, 99, 235) 49.9%, rgb(37, 99, 235) 81.7%, rgb(96, 165, 250) 99.88%)", 
    accentColor: "bg-[#3B82F6]", textAccent: "text-[#3B82F6]",
    bullets: [
      "Designed a dual-memory AI agent architecture using short-term conversational state managed by LangGraph’s Redis checkpointer and long-term persistent memory stored in Redis with vector embeddings for semantic recall.",
      "Implemented vector-based memory storage and retrieval using RedisVL with OpenAI embeddings, enabling episodic and semantic memory indexing, similarity search, and deduplication through vector range queries.",
      "Built structured memory data models with Pydantic (MemoryType, Memory, StoredMemory) to ensure type-safe memory lifecycle management from LLM extraction to Redis persistence.",
      "Developed a ReAct-based travel agent using LangGraph and OpenAI GPT-4o, exposing memory operations as tools (store/retrieve) that the LLM dynamically invokes during reasoning.",
      "Optimized context management with automated conversation summarization to prevent context window overflow while preserving key user preferences, ensuring scalable and production-ready agent performance."
    ],
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Ollama", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/ollama.png" },
      { name: "HuggingFace", src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" }
    ],
    image: "/memory.png"
  },
  {
    id: 3,
    tagline: "Allows you to track your daily water intake needs using smart AI assistance",
    title: "AI Water Tracker App",
    description: "A full-stack hydration tracking system using Streamlit, FastAPI, and SQLite that aggregates daily water intake via backend SQL queries and leverages a LangChain-powered Ollama LLM to generate real-time, AI-driven hydration insights.",
    gradientStyle: "linear-gradient(10deg, rgb(5, 150, 105) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 99.88%)", 
    accentColor: "bg-[#10B981]", textAccent: "text-[#10B981]",
    bullets: [
      "Developed a full-stack hydration tracking system using Streamlit (frontend) and FastAPI (backend) with SQLite for persistent user data storage.",
      "Implemented backend SQL queries to store each intake entry with a unique user ID and dynamically compute the total daily water consumption.",
      "Designed a processing pipeline where the aggregated daily intake is passed to a LangChain-powered ChatOllama (Llama 3.2:1B) model for contextual analysis.",
      "Engineered structured prompt templates to generate concise, supportive hydration feedback based on computed totals.",
      "Delivered real-time AI-driven hydration insights to the Streamlit frontend, completing an end-to-end data-to-LLM response workflow."
    ],
    techStack: [
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Ollama", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/ollama.png" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    image: "/water.png"
  },
  {
    id: 4,
    tagline: "Detects fraudulent financial transactions using machine learning and intelligent data analysis.",
    title: "Fraud detection model",
    description: "A fraud detection system using EDA, feature engineering, SMOTE, and Logistic Regression to accurately identify fraudulent transactions.",
    gradientStyle: "linear-gradient(10deg, rgb(217, 119, 6) 49.9%, rgb(217, 119, 6) 81.7%, rgb(251, 191, 36) 99.88%)", 
    accentColor: "bg-[#F59E0B]", textAccent: "text-[#F59E0B]",
    bullets: [
      "Performed large-scale exploratory data analysis (6.3M+ records) using Pandas, NumPy, Matplotlib, and Seaborn to examine class imbalance, transaction distributions, fraud patterns by type, and temporal fraud trends.",
      "Engineered domain-specific features such as balanceDiffOrig and balanceDiffDest, and identified suspicious zero-balance patterns in TRANSFER and CASH_OUT transactions.",
      "Built a preprocessing pipeline using ColumnTransformer with StandardScaler for numerical features and OneHotEncoder for categorical encoding.",
      "Addressed severe class imbalance using SMOTE oversampling integrated within an imbalanced-learn pipeline.",
      "Trained and evaluated a Logistic Regression classifier with probability threshold tuning, achieving high recall for fraud detection while analyzing precision-recall trade-offs via classification metrics and confusion matrix."
    ],
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-Learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    ],
    image: "/matrix.png"
  }
];

// --- INDIVIDUAL PROJECT CARD COMPONENT ---
const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"] 
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95]);

  return (
    <motion.div 
      ref={cardRef} 
      style={{ scale }} 
      className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
    >
      
      {/* LEFT COLUMN: Media (7 out of 12 columns) */}
      <div className="lg:col-span-7 relative group w-full">
        <div className="w-full min-h-[450px] h-auto rounded-2xl overflow-hidden relative shadow-2xl flex flex-col p-6 md:p-10 pr-0 pb-0">
          
          <div 
            aria-hidden="true" 
            className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-105" 
            style={{ background: project.gradientStyle }}
          ></div>

          <div className="flex justify-between items-start text-white relative z-10 pr-6 md:pr-10 shrink-0">
            <h3 className="text-xl md:text-2xl font-medium max-w-[90%] leading-snug">
              {project.tagline}
            </h3>
            <ArrowRight className="w-6 h-6 shrink-0 opacity-80 mt-1 ml-4" />
          </div>

          {/* SINGLE MAIN IMAGE CONTAINER */}
          {/* THE FIX: Changed to rounded-2xl to give ALL corners a smooth shape, 
              and changed the border to wrap all the way around! */}
          <div className="relative w-full h-auto mt-6 md:mt-10 rounded-2xl overflow-hidden shadow-2xl bg-[#0F0F11] border border-white/10 z-10">
            <img 
              src={project.image} 
              alt={`${project.title} screenshot`}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN: Text content (5 out of 12 columns) */}
      <div className="lg:col-span-5 flex flex-col justify-start space-y-6 pt-2">
        
        <div className="flex items-center gap-4">
          <div className={`w-6 h-[2px] ${project.accentColor}`}></div>
          <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        <p className="text-gray-400 text-base leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-3">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <Sparkles className={`w-5 h-5 ${project.textAccent} shrink-0 mt-0.5`} />
              <span className="leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#121214] border border-white/10 hover:border-white/20 transition-colors rounded-lg text-xs text-gray-300 font-mono"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-4 h-4"
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>

    </motion.div>
  );
};

// --- MAIN SECTION EXPORT ---
const ProjectsSection = () => {
  return (
    <section id= "projects" className="relative z-10 w-full py-32 px-4 md:px-8 lg:px-16 flex flex-col gap-32 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text italic pr-2">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-white/20 rounded-full"></div>
      </div>

      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      
    </section>
  );
};

export default ProjectsSection;