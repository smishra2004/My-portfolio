import type { Project } from "@/types/project";

export const projects: Project[] = [
  //   {
  //     id: 1,
  //     slug: "pdf-summary-agent",
  //     tagline: "AI Agent to summarize your day to day PDFs",
  //     title: "PDF Summary Agent",
  //     description:
  //       "Developed an AI-powered PDF summarization web application that uses Flask for the frontend and an automated n8n pipeline with Ollama for local LLM-based document processing.",
  //     gradientStyle:
  //       "linear-gradient(10deg, rgb(219, 39, 119) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 99.88%)",
  //     accentColor: "bg-[#F02E8A]",
  //     textAccent: "text-[#F02E8A]",
  //     bullets: [
  //       "Developed an event-driven PDF summarization system where file uploads trigger automated AI-based processing and dynamic summary generation.",
  //       "Built a Flask-based web interface using HTML and CSS that handles file uploads and communicates with the backend via REST APIs.",
  //       "Designed an automated n8n pipeline with Webhook, Extract from File, Ollama, and Respond to Webhook nodes to process and summarize documents.",
  //       "Integrated Ollama to perform local Large Language Model inference for secure, low-latency document summarization.",
  //       "Implemented a modular microservice-style architecture separating the UI and AI workflow layers using REST-based communication and JSON data exchange.",
  //     ],
  //     techStack: [
  //       { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  //       { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  //       { name: "n8n", src: "https://cdn.simpleicons.org/n8n/EA4B71" },
  //       { name: "Ollama", src: "https://cdn.simpleicons.org/ollama/000000" },
  //     ],
  //     image: "/n8n.png",
  //     metadata: { type: "AI Agent", role: "Full Stack Developer", year: "2025" },
  //     motivation:
  //       "Daily PDF reports, research papers, and policy documents are time-consuming to read end-to-end. I built this agent to automate first-pass comprehension — turning dense documents into concise, actionable summaries without sending sensitive files to external cloud APIs.",
  //     concept:
  //       "The system treats document summarization as an event-driven pipeline: a user uploads a PDF through a lightweight Flask UI, which triggers an n8n workflow. The workflow extracts text, sends it to a locally hosted Ollama LLM, and returns a structured summary via webhook response. The UI and AI layers remain decoupled, communicating only through REST and JSON.",
  //     howItWorks:
  //       "When a user selects a PDF and submits the form, Flask sends the file as multipart data to the n8n webhook endpoint. n8n's Extract from File node parses the document into plain text. The text is passed to an Ollama node with a carefully crafted prompt requesting a structured summary with key points and action items. The LLM response is serialized as JSON and returned through the Respond to Webhook node. Flask receives the payload and renders the summary on the results page — all within seconds, entirely on local infrastructure.",
  //     architecture: [
  //       { title: "Flask Web Layer", description: "Handles file upload validation, session state, and renders HTML templates. Acts as the user-facing entry point and API consumer." },
  //       { title: "n8n Orchestration Engine", description: "Coordinates the async workflow — webhook intake, file extraction, LLM invocation, and response routing — without custom backend glue code." },
  //       { title: "Ollama LLM Runtime", description: "Runs local inference with configurable models (Llama, Mistral) ensuring data never leaves the machine." },
  //       { title: "REST Bridge", description: "JSON-over-HTTP contract between Flask and n8n enables independent scaling and testing of each layer." },
  //     ],
  //     folderStructure: [
  //       {
  //         name: "pdf-summary-agent/",
  //         type: "folder",
  //         children: [
  //           { name: "app.py", type: "file", description: "Flask routes, upload handler, n8n webhook client" },
  //           { name: "templates/", type: "folder", children: [
  //             { name: "index.html", type: "file", description: "Upload form UI" },
  //             { name: "result.html", type: "file", description: "Summary display page" },
  //           ]},
  //           { name: "static/", type: "folder", children: [
  //             { name: "style.css", type: "file", description: "Dark-themed UI styles" },
  //           ]},
  //           { name: "workflows/", type: "folder", children: [
  //             { name: "pdf-summary.json", type: "file", description: "Exportable n8n workflow definition" },
  //           ]},
  //         ],
  //       },
  //     ],
  //     codeSnippets: [
  //       {
  //         filename: "app.py",
  //         language: "python",
  //         code: `@app.route("/upload", methods=["POST"])
  // def upload_pdf():
  //     file = request.files["pdf"]
  //     if not file.filename.endswith(".pdf"):
  //         return jsonify({"error": "PDF only"}), 400

  //     response = requests.post(
  //         N8N_WEBHOOK_URL,
  //         files={"file": (file.filename, file.read(), "application/pdf")},
  //         timeout=120,
  //     )
  //     return render_template("result.html", summary=response.json())`,
  //       },
  //       {
  //         filename: "n8n-prompt.json",
  //         language: "json",
  //         code: `{
  //   "model": "llama3.2",
  //   "prompt": "Summarize the following document.\\n\\nProvide:\\n1. Executive summary (2-3 sentences)\\n2. Key points (bullet list)\\n3. Action items\\n\\nDocument:\\n{{ $json.text }}"
  // }`,
  //       },
  //     ],
  //     decisions: [
  //       { title: "n8n over custom Celery workers", description: "Visual workflow orchestration with built-in retry and error nodes.", rationale: "Reduced boilerplate for async pipelines and made the workflow inspectable without redeploying code." },
  //       { title: "Local Ollama vs OpenAI API", description: "All inference runs on-device via Ollama.", rationale: "Documents may contain confidential data; local inference eliminates data egress and API cost." },
  //       { title: "Flask over FastAPI", description: "Server-rendered HTML templates instead of a SPA.", rationale: "Minimal scope — a two-page upload/result flow didn't warrant a separate frontend build step." },
  //     ],
  //     challenges: [
  //       { title: "Large PDF timeout on webhook", description: "Documents over 50 pages caused n8n webhook timeouts before LLM processing completed.", state: "error" },
  //       { title: "Chunking strategy for long documents", description: "Implemented page-level text chunking with map-reduce summarization across chunks.", state: "warning" },
  //       { title: "Sub-30s summary for typical reports", description: "Optimized prompt length and model selection achieved consistent fast responses.", state: "success" },
  //     ],
  //     learnings: [
  //       { title: "Event-driven beats synchronous for AI tasks", description: "Decoupling upload from processing via webhooks makes the UX responsive even when LLM inference takes 10–20 seconds." },
  //       { title: "Prompt engineering matters more than model size", description: "A structured output prompt on a smaller local model outperformed free-form prompts on larger models." },
  //     ],
  //     bannerHeadline: "Turn dense PDFs into actionable summaries with local AI",
  //     bannerHighlightWords: ["actionable summaries", "local AI"],
  //   },/
  {
    id: 1,
    slug: "researchmind-ai-research-assistant",
    tagline:
      "Multi-agent AI system that autonomously researches topics, generates reports, and critiques its own output",

    title: "ResearchMind",

    description:
      "A multi-agent AI research assistant built with LangChain that performs autonomous web research, retrieves detailed content from online sources, generates structured research reports, and evaluates its own output using a dedicated critique workflow. The system combines tool-calling agents, web search, content retrieval, and LLM-powered report generation into a transparent end-to-end research pipeline.",

    gradientStyle:
      "linear-gradient(10deg, rgb(190, 24, 93) 49.9%, rgb(190, 24, 93) 81.7%, rgb(251, 146, 60) 99.88%)",

    accentColor: "bg-[#BE185D]",

    textAccent: "text-[#BE185D]",

    bullets: [
      "Built a multi-agent AI system using LangChain that decomposes research tasks into Search, Reader, Writer, and Critic workflows.",
      "Integrated Tavily Search and custom web scraping tools to retrieve real-time information beyond the model's training data.",
      "Designed a report-generation pipeline that transforms gathered content into structured research documents with citations and summaries.",
      "Implemented a self-evaluation mechanism where a dedicated Critic Chain reviews reports, assigns quality scores, and suggests improvements.",
      "Developed an interactive Streamlit application allowing users to perform autonomous research and download generated reports.",
    ],

    techStack: [
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "LangChain",
        src: "https://cdn.simpleicons.org/langchain/1C3C3C",
      },
      {
        name: "Streamlit",
        src: "https://cdn.simpleicons.org/streamlit/FF4B4B",
      },
      {
        name: "Hugging Face",
        src: "https://cdn.simpleicons.org/huggingface/FFD21E",
      },
      {
        name: "BeautifulSoup",
        src: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "Tavily",
        src: "https://cdn.simpleicons.org/google/4285F4",
      },
    ],

    image: "/research-mind.png",

    metadata: {
      type: "Agentic AI Application",
      role: "AI Engineer",
      year: "2025",
    },

    motivation:
      "Traditional LLM applications often rely on a single prompt and struggle with accessing current information, verifying claims, and producing high-quality long-form research. I wanted to build an agentic system where specialized AI components collaborate to gather information, generate reports, and evaluate their own work, closely mimicking a real-world research workflow.",

    concept:
      "ResearchMind follows a multi-agent architecture where each component has a dedicated responsibility. A Search Agent gathers relevant information from the web, a Reader Agent extracts detailed content from selected sources, a Writer Chain synthesizes findings into a structured report, and a Critic Chain independently evaluates the final output. This separation of concerns improves transparency, reliability, and maintainability.",

    howItWorks:
      "Users enter a research topic through the Streamlit interface. The Search Agent uses Tavily to discover relevant sources and returns URLs and summaries. The Reader Agent retrieves and cleans webpage content using web scraping tools. The Writer Chain processes the gathered information and generates a structured research report containing key findings and conclusions. Finally, the Critic Chain reviews the report, scores its quality, identifies weaknesses, and suggests improvements before presenting the final output to the user.",

    architecture: [
      {
        title: "Search Agent",
        description:
          "Uses Tavily Search to discover relevant and up-to-date information from the web.",
      },
      {
        title: "Reader Agent",
        description:
          "Retrieves webpage content, removes noise, and extracts clean text for analysis.",
      },
      {
        title: "Writer Chain",
        description:
          "Synthesizes gathered research into a structured report with findings and conclusions.",
      },
      {
        title: "Critic Chain",
        description:
          "Evaluates report quality, assigns scores, and provides actionable feedback.",
      },
      {
        title: "Streamlit Frontend",
        description:
          "Interactive interface for entering research queries and viewing generated reports.",
      },
    ],

    folderStructure: [
      {
        name: "ResearchMind/",
        type: "folder",
        children: [
          {
            name: "app.py",
            type: "file",
            description: "Streamlit interface and workflow orchestration",
          },
          {
            name: "agents.py",
            type: "file",
            description: "Search and Reader agent implementations",
          },
          {
            name: "tools.py",
            type: "file",
            description: "Web search and scraping tools",
          },
          {
            name: "assets/",
            type: "folder",
            children: [],
          },
          {
            name: "outputs/",
            type: "folder",
            children: [],
          },
          {
            name: "requirements.txt",
            type: "file",
            description: "Project dependencies",
          },
        ],
      },
    ],

    codeSnippets: [
      {
        filename: "agents.py",
        language: "python",
        code: `search_agent = create_agent(
    model=model,
    tools=[web_search_tool],
    system_prompt="Research the given topic and collect reliable sources."
)`,
      },
      {
        filename: "writer_chain.py",
        language: "python",
        code: `writer_chain = (
    report_prompt
    | llm
    | StrOutputParser()
)`,
      },
    ],

    decisions: [
      {
        title: "Multi-Agent Architecture",
        description:
          "Separated responsibilities across specialized AI components.",
        rationale:
          "Improves transparency, maintainability, and reasoning quality compared to a single-agent workflow.",
      },
      {
        title: "Tavily Search Integration",
        description: "Provides real-time access to web information.",
        rationale:
          "Allows the system to research topics beyond the model's training cutoff.",
      },
      {
        title: "Dedicated Critic Chain",
        description: "Independent evaluation stage for generated reports.",
        rationale:
          "Introduces quality control and self-reflection into the research workflow.",
      },
    ],

    challenges: [
      {
        title: "Reliable Source Retrieval",
        description:
          "Search results often contained noisy or low-quality webpages.",
        state: "error",
      },
      {
        title: "Content Cleaning",
        description:
          "Implemented extraction logic to remove navigation menus, scripts, and irrelevant page content.",
        state: "warning",
      },
      {
        title: "Report Quality Evaluation",
        description:
          "Successfully integrated a Critic Chain to provide structured feedback and scoring.",
        state: "success",
      },
    ],

    learnings: [
      {
        title: "Agent Collaboration Improves Outcomes",
        description:
          "Breaking complex tasks into specialized agents produces more reliable and interpretable results.",
      },
      {
        title: "Tools Extend LLM Capabilities",
        description:
          "Combining web search and retrieval tools with LLM reasoning enables grounded, up-to-date research workflows.",
      },
    ],

    bannerHeadline:
      "Multi-agent AI system for autonomous research and self-evaluation",

    bannerHighlightWords: ["Multi-agent AI", "autonomous research"],
  },

  {
    id: 2,
    slug: "vehicle-insurance-mlops",
    tagline:
      "End-to-end MLOps pipeline that trains, evaluates, and self-deploys a production ML model.",
    title: "Vehicle Insurance Risk — MLOps Pipeline",
    description:
      "A production-grade, end-to-end machine learning system for vehicle insurance risk prediction that implements the complete MLOps lifecycle—from MongoDB Atlas data ingestion and automated training pipelines to AWS-hosted deployment with CI/CD. The project demonstrates how modern ML systems are built, governed, and continuously delivered in production environments.",
    gradientStyle:
      "linear-gradient(10deg, rgb(109, 40, 217) 49.9%, rgb(109, 40, 217) 81.7%, rgb(167, 139, 250) 99.88%)",
    accentColor: "bg-[#7C3AED]",
    textAccent: "text-[#7C3AED]",
    bullets: [
      "Built a modular 6-stage MLOps pipeline covering data ingestion, validation, transformation, model training, evaluation, and model promotion using reusable artifact-based architecture.",
      "Integrated MongoDB Atlas as the cloud-native data source, enabling automated ingestion of live insurance records without relying on static datasets.",
      "Implemented threshold-based model governance where newly trained models are compared against production models before deployment.",
      "Designed a complete CI/CD workflow using GitHub Actions, Docker, AWS ECR, and EC2 for automated application deployment.",
      "Developed a Flask-based prediction service exposing training and inference endpoints backed by production-ready cloud infrastructure.",
    ],
    techStack: [
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      { name: "AWS", src: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      {
        name: "Scikit-Learn",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Flask",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
    ],
    image: "/vehicle.png",
    metadata: { type: "MLOps Pipeline", role: "ML Engineer", year: "2025" },
    motivation:
      "The goal of this project was to build a production-grade machine learning system rather than a standalone model. Instead of focusing only on training, the project implements the complete lifecycle of an ML application including cloud-based data ingestion, validation, automated retraining, model governance, containerized deployment, and continuous delivery using modern MLOps practices.",
    concept:
      "The application is built as a modular MLOps pipeline where every stage operates independently and communicates through structured artifact objects. Raw insurance data is fetched from MongoDB Atlas, validated against predefined schemas, transformed into model-ready features, and passed through training and evaluation workflows. The resulting model is compared against the current production model stored in AWS S3 before promotion. A Flask prediction service consumes the latest approved model, while GitHub Actions automatically handles container builds and cloud deployment.",
    howItWorks:
      "The pipeline starts by connecting to MongoDB Atlas and extracting vehicle insurance records into ingestion artifacts. The validation stage performs schema verification, column consistency checks, and quality validations before data enters the transformation stage. During transformation, categorical variables are encoded, numerical features are processed, and reusable preprocessing objects are generated. The training stage builds and evaluates machine learning models before selecting the best candidate. The evaluation stage compares the candidate model against the production model stored in AWS S3 and only promotes it if the configured improvement threshold is met. Once approved, the model is registered in S3 and becomes available to the Flask prediction service. GitHub Actions continuously monitors repository changes and automatically rebuilds, pushes, and redeploys the application using Docker, ECR, and EC2.",
    architecture: [
      {
        title: "Data Ingestion Layer",
        description:
          "Connects to MongoDB Atlas, extracts raw insurance records, and creates versioned ingestion artifacts for downstream processing.",
      },
      {
        title: "Validation & Quality Layer",
        description:
          "Performs schema validation, column verification, and data quality checks before training begins.",
      },
      {
        title: "Transformation & Feature Pipeline",
        description:
          "Handles encoding, preprocessing, feature engineering, and serialization of reusable transformation objects.",
      },
      {
        title: "Training & Evaluation Engine",
        description:
          "Trains machine learning models and compares candidate performance against the production baseline using configurable thresholds.",
      },
      {
        title: "AWS Model Registry",
        description:
          "Stores approved production models in S3 with support for controlled promotion and rollback workflows.",
      },
      {
        title: "Deployment Infrastructure",
        description:
          "Dockerized Flask application deployed through GitHub Actions, Amazon ECR, and an EC2 self-hosted runner.",
      },
    ],
    folderStructure: [
      {
        name: "vehicle-insurance-mlops/",
        type: "folder",
        children: [
          {
            name: "src/",
            type: "folder",
            children: [
              {
                name: "components/",
                type: "folder",
                children: [
                  {
                    name: "data_ingestion.py",
                    type: "file",
                    description:
                      "Extracts and stores insurance records from MongoDB Atlas.",
                  },
                  {
                    name: "data_validation.py",
                    type: "file",
                    description:
                      "Performs schema validation and quality checks.",
                  },
                  {
                    name: "data_transformation.py",
                    type: "file",
                    description:
                      "Handles preprocessing, encoding, and feature engineering.",
                  },
                  {
                    name: "model_trainer.py",
                    type: "file",
                    description:
                      "Trains and evaluates candidate machine learning models.",
                  },
                  {
                    name: "model_evaluation.py",
                    type: "file",
                    description:
                      "Compares candidate and production models before promotion.",
                  },
                  {
                    name: "model_pusher.py",
                    type: "file",
                    description:
                      "Registers approved models into the AWS S3 registry.",
                  },
                ],
              },
            ],
          },
          {
            name: "config/",
            type: "folder",
            children: [
              {
                name: "schema.yaml",
                type: "file",
                description:
                  "Dataset schema used for validation and consistency checks.",
              },
            ],
          },
          {
            name: ".github/workflows/",
            type: "folder",
            children: [
              {
                name: "aws.yaml",
                type: "file",
                description: "Automated CI/CD workflow for AWS deployment.",
              },
            ],
          },
          {
            name: "Dockerfile",
            type: "file",
            description: "Containerizes the Flask application for deployment.",
          },
          {
            name: "app.py",
            type: "file",
            description:
              "Flask prediction API exposing training and inference endpoints.",
          },
        ],
      },
    ],
    codeSnippets: [
      {
        filename: "model_evaluation.py",
        language: "python",
        code: `def evaluate_and_promote(new_metrics: dict, threshold: float = 0.02): 
        current = load_model_metrics_from_s3() 
        improvement = new_metrics["f1"] - current["f1"] 
        if improvement >= threshold: 
          push_model_to_s3(new_model_path) 
          logger.info(f"Model promoted: +{improvement:.3f} F1") 
        else: 
          logger.warning(f"Model rejected: {improvement:.3f} < {threshold}")`,
      },
      {
        filename: "aws.yaml",
        language: "yaml",
        code: `name: Deploy Application Docker Image to EC2 instance

on:
  push:
    branches: [main]

jobs:
  Continuous-Integration:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: {{secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: {{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: {{ secrets.AWS_DEFAULT_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build, tag, and push image to Amazon ECR
        id: build-image
        env:
          ECR_REGISTRY: {{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: {{ secrets.ECR_REPO }}
          IMAGE_TAG: latest
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .  
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
          echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"

  Continuous-Deployment:
    needs: Continuous-Integration
    runs-on: self-hosted
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: {{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: {{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: {{ secrets.AWS_DEFAULT_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Run Docker Image to serve users
        run: |
         docker run -d -e AWS_ACCESS_KEY_ID="{{ secrets.AWS_ACCESS_KEY_ID }}" -e AWS_SECRET_ACCESS_KEY="{{ secrets.AWS_SECRET_ACCESS_KEY }}" -e AWS_DEFAULT_REGION="{{ secrets.AWS_DEFAULT_REGION }}" -e MONGODB_URL="{{ secrets.MONGODB_URL }}" -p 5000:5000 "{{ steps.login-ecr.outputs.registry }}"/"{{ secrets.ECR_REPO }}":latest`,
      },
    ],
    decisions: [
      {
        title: "Artifact-Based Pipeline Design",
        description:
          "Each pipeline stage produces dedicated Config and Artifact objects consumed by downstream stages.",
        rationale:
          "Provides clear contracts between components, improves testability, and simplifies debugging.",
      },
      {
        title: "Threshold-Based Model Promotion",
        description:
          "Candidate models are evaluated against the currently deployed production model before promotion.",
        rationale:
          "Prevents weaker models from replacing production systems and enforces automated model governance.",
      },
      {
        title: "Self-Hosted GitHub Runner",
        description:
          "CI/CD workflows execute directly on the EC2 deployment environment.",
        rationale:
          "Simplifies deployment automation and removes the need for custom SSH-based deployment scripts.",
      },
      {
        title: "MongoDB Atlas Data Source",
        description:
          "Training data is pulled dynamically from a cloud-hosted NoSQL database.",
        rationale:
          "Ensures the pipeline always works with fresh data and mirrors enterprise-grade data architectures.",
      },
    ],
    challenges: [
      {
        title: "Schema Drift in Cloud Data",
        description:
          "Changes in MongoDB records occasionally introduced inconsistencies that caused downstream validation failures.",
        state: "error",
      },
      {
        title: "Reusable Training & Inference Pipelines",
        description:
          "Ensuring identical preprocessing behavior across model training and production inference required careful serialization of transformation objects.",
        state: "warning",
      },
      {
        title: "Fully Automated Deployments",
        description:
          "Successfully integrated Docker, ECR, EC2, and GitHub Actions into a zero-touch deployment workflow.",
        state: "success",
      },
    ],
    learnings: [
      {
        title: "Production ML Requires More Than Modeling",
        description:
          "Validation, deployment, monitoring, reproducibility, and governance are equally important as model accuracy in real-world systems.",
      },
      {
        title: "Automation Improves Reliability",
        description:
          "CI/CD pipelines and model promotion gates reduce manual intervention and significantly improve deployment confidence.",
      },
    ],
    bannerHeadline: "Production ML that trains, evaluates, and deploys itself",
    bannerHighlightWords: ["trains, evaluates", "deploys itself"],
  },
{
  id: 3,
  slug: "chest-xray-pneumonia-classifier",
  tagline: "Production-grade MLOps pipeline for automated pneumonia detection from chest X-rays",
  title: "Chest X-Ray Pneumonia Classifier",
  description:
    "An end-to-end MLOps system that classifies chest X-ray images as NORMAL or PNEUMONIA using a fine-tuned ResNet50 model. The pipeline integrates AWS S3 for data and model storage, MLflow and DagsHub for experiment tracking, automated model governance, and a Streamlit interface for real-time inference and retraining.",
  gradientStyle:
    "linear-gradient(10deg, rgb(245, 158, 11) 49.9%, rgb(245, 158, 11) 81.7%, rgb(251, 191, 36) 99.88%)",
  accentColor: "bg-[#F59E0B]",
  textAccent: "text-[#F59E0B]",

  bullets: [
    "Built a complete MLOps pipeline covering data ingestion, transformation, model training, evaluation, and deployment for chest X-ray pneumonia classification.",
    "Fine-tuned a pretrained ResNet50 model using PyTorch with weighted loss functions and sampling strategies to handle class imbalance.",
    "Integrated AWS S3 as a centralized storage layer for datasets and production model artifacts.",
    "Implemented MLflow and DagsHub tracking for experiment versioning, metrics logging, artifact management, and reproducibility.",
    "Designed an automated model governance workflow that promotes new models only when ROC-AUC surpasses the production baseline.",
  ],

  techStack: [
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "PyTorch",
      src: "https://cdn.simpleicons.org/pytorch/EE4C2C",
    },
    {
      name: "AWS S3",
      src: "https://cdn.simpleicons.org/amazonaws/FF9900",
    },
    {
      name: "MLflow",
      src: "https://cdn.simpleicons.org/mlflow/0194E2",
    },
    {
      name: "DagsHub",
      src: "https://cdn.simpleicons.org/github/181717",
    },
    {
      name: "Streamlit",
      src: "https://cdn.simpleicons.org/streamlit/FF4B4B",
    },
  ],

  image: "/chest-xray.png",

  metadata: {
    type: "MLOps & Computer Vision",
    role: "Machine Learning Engineer",
    year: "2025",
  },

  motivation:
    "Many machine learning projects stop after model training and never address deployment, monitoring, experiment tracking, or model governance. I wanted to build a production-oriented computer vision system that mirrors how real-world ML teams manage datasets, experiments, model promotion, and inference workflows.",

  concept:
    "The system follows a complete MLOps lifecycle. Datasets are stored in AWS S3 and pulled dynamically during training. Images pass through preprocessing and augmentation pipelines before being used to fine-tune a ResNet50 model. MLflow and DagsHub track experiments, metrics, and artifacts, while a model evaluation stage compares the newly trained model against the current production model. Only superior models are promoted to production and deployed for inference through a Streamlit interface.",

  howItWorks:
    "The pipeline downloads the chest X-ray dataset from AWS S3, applies image transformations and augmentation, and trains a ResNet50 classifier. Metrics such as ROC-AUC, precision, recall, and F1-score are logged to MLflow and DagsHub. During evaluation, the new model is compared against the production model stored in S3. If performance improves, the model is automatically promoted. Users can upload X-ray images through Streamlit for instant predictions or trigger retraining directly from the application.",

  architecture: [
    {
      title: "AWS S3 Storage",
      description:
        "Stores training datasets, production models, and versioned artifacts as a centralized cloud repository.",
    },
    {
      title: "Data Processing Pipeline",
      description:
        "Handles dataset ingestion, image transformations, augmentation, and balanced sampling for training.",
    },
    {
      title: "ResNet50 Training Engine",
      description:
        "Fine-tunes a pretrained ResNet50 architecture using transfer learning and class imbalance mitigation techniques.",
    },
    {
      title: "MLflow + DagsHub",
      description:
        "Tracks experiments, logs metrics and artifacts, and provides full reproducibility across training runs.",
    },
    {
      title: "Model Governance Layer",
      description:
        "Evaluates newly trained models against production baselines and promotes only higher-performing models.",
    },
    {
      title: "Streamlit Application",
      description:
        "Provides a user interface for chest X-ray uploads, live predictions, and retraining operations.",
    },
  ],

  folderStructure: [
    {
      name: "MLOPs-Project-02/",
      type: "folder",
      children: [
        {
          name: "src/",
          type: "folder",
          children: [
            {
              name: "components/",
              type: "folder",
              children: [
                {
                  name: "data_ingestion.py",
                  type: "file",
                  description: "Downloads and extracts dataset from AWS S3",
                },
                {
                  name: "data_transformation.py",
                  type: "file",
                  description: "Image preprocessing and augmentation pipeline",
                },
                {
                  name: "model_trainer.py",
                  type: "file",
                  description: "ResNet50 training workflow",
                },
                {
                  name: "model_evaluation.py",
                  type: "file",
                  description: "Performance comparison and governance checks",
                },
                {
                  name: "model_pusher.py",
                  type: "file",
                  description: "Production model promotion to S3",
                },
              ],
            },
            {
              name: "pipeline/",
              type: "folder",
              children: [
                {
                  name: "training_pipeline.py",
                  type: "file",
                  description: "Orchestrates the full training workflow",
                },
                {
                  name: "prediction_pipeline.py",
                  type: "file",
                  description: "Handles production inference",
                },
              ],
            },
          ],
        },
        {
          name: "experiments/",
          type: "folder",
          children: [
            {
              name: "eda_notebooks.ipynb",
              type: "file",
              description: "Exploratory data analysis and validation",
            },
          ],
        },
        {
          name: "app.py",
          type: "file",
          description: "Streamlit interface for predictions and retraining",
        },
      ],
    },
  ],

  codeSnippets: [
    {
      filename: "model_evaluation.py",
      language: "python",
      code: `if trained_model_auc > production_model_auc:
    evaluation_result = True
else:
    evaluation_result = False`,
    },
    {
      filename: "app.py",
      language: "python",
      code: `uploaded_file = st.file_uploader(
    "Upload Chest X-Ray",
    type=["jpg", "jpeg", "png"]
)

if uploaded_file:
    prediction = predict(uploaded_file)
    st.success(f"Prediction: {prediction}")`,
    },
  ],

  decisions: [
    {
      title: "AWS S3 as Model Registry",
      description:
        "Centralized cloud storage for datasets and production models.",
      rationale:
        "Provides scalable, reliable storage while simulating enterprise ML infrastructure.",
    },
    {
      title: "ResNet50 Transfer Learning",
      description:
        "Pretrained computer vision backbone with custom classification head.",
      rationale:
        "Reduces training time and improves performance on limited medical imaging datasets.",
    },
    {
      title: "AUC-Based Model Promotion",
      description:
        "Automated performance comparison against production models.",
      rationale:
        "Prevents model regressions and ensures only superior models reach production.",
    },
  ],

  challenges: [
    {
      title: "Class Imbalance",
      description:
        "Pneumonia samples significantly outnumbered normal cases, risking biased predictions.",
      state: "error",
    },
    {
      title: "Balanced Training Strategy",
      description:
        "Implemented WeightedRandomSampler and weighted loss functions to improve model fairness.",
      state: "warning",
    },
    {
      title: "Automated Model Governance",
      description:
        "Successfully deployed evaluation gates that block underperforming models from production.",
      state: "success",
    },
  ],

  learnings: [
    {
      title: "MLOps Extends Beyond Training",
      description:
        "Production systems require experiment tracking, deployment workflows, governance, and reproducibility.",
    },
    {
      title: "Model Evaluation Should Be Automated",
      description:
        "Automated promotion criteria reduce deployment risks and improve confidence in model updates.",
    },
  ],

  bannerHeadline:
    "Production-grade MLOps pipeline for AI-powered pneumonia detection",

  bannerHighlightWords: [
    "MLOps pipeline",
    "AI-powered pneumonia detection",
  ],
},
  {
    id: 4,
    slug: "ai-travel-agent",
    tagline:
      "A travel agent chatbot that remembers your past trips and recent conversations.",
    title: "AI Travel Agent Chatbot",
    description:
      "An AI-powered travel agent chatbot with persistent conversational memory that leverages historical interaction data and user preferences to deliver context-aware, personalized trip planning.",
    gradientStyle:
      "linear-gradient(10deg, rgb(37, 99, 235) 49.9%, rgb(37, 99, 235) 81.7%, rgb(96, 165, 250) 99.88%)",
    accentColor: "bg-[#3B82F6]",
    textAccent: "text-[#3B82F6]",
    bullets: [
      "Designed a dual-memory AI agent architecture using short-term conversational state managed by LangGraph's Redis checkpointer and long-term persistent memory stored in Redis with vector embeddings for semantic recall.",
      "Implemented vector-based memory storage and retrieval using RedisVL with OpenAI embeddings, enabling episodic and semantic memory indexing, similarity search, and deduplication through vector range queries.",
      "Built structured memory data models with Pydantic (MemoryType, Memory, StoredMemory) to ensure type-safe memory lifecycle management from LLM extraction to Redis persistence.",
      "Developed a ReAct-based travel agent using LangGraph and OpenAI GPT-4o, exposing memory operations as tools (store/retrieve) that the LLM dynamically invokes during reasoning.",
      "Optimized context management with automated conversation summarization to prevent context window overflow while preserving key user preferences, ensuring scalable and production-ready agent performance.",
    ],
    techStack: [
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Redis",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "LangGraph",
        src: "https://cdn.simpleicons.org/langchain/1C3C3C",
      },
      { name: "OpenAI", src: "https://cdn.simpleicons.org/openai/412991" },
    ],
    image: "/memory.png",
    metadata: { type: "AI Agent", role: "AI Engineer", year: "2025" },
    motivation:
      "Generic chatbots forget user preferences between sessions — recommending beach resorts to someone who hates humidity. I wanted a travel agent that genuinely remembers past trips, budget constraints, and dietary preferences to deliver increasingly personalized recommendations over time.",
    concept:
      "The agent combines short-term conversational memory (LangGraph Redis checkpointer) with long-term semantic memory (RedisVL vector store). When a user mentions a preference or past trip, the LLM decides via ReAct tool-calling whether to store it as episodic or semantic memory. On future sessions, vector similarity search retrieves relevant memories to enrich the agent's context before generating responses.",
    howItWorks:
      "User messages enter a LangGraph state machine. The agent node calls GPT-4o with access to store_memory and retrieve_memory tools. Store operations serialize Pydantic Memory objects into RedisVL with OpenAI embeddings. Retrieve operations perform vector similarity search filtered by user ID. When conversation history grows beyond a threshold, a summarization node compresses older turns while preserving extracted preferences. The final response incorporates both recent chat context and retrieved long-term memories.",
    architecture: [
      {
        title: "LangGraph Agent Loop",
        description:
          "ReAct-style reasoning graph with tool nodes for memory operations and a conditional router for multi-step planning.",
      },
      {
        title: "Redis Checkpointer",
        description:
          "Persists conversation state across sessions enabling thread continuity without manual session management.",
      },
      {
        title: "RedisVL Vector Store",
        description:
          "Stores embedded memory records with metadata tags for type-safe filtering and deduplication via vector range queries.",
      },
      {
        title: "Pydantic Memory Models",
        description:
          "MemoryType, Memory, and StoredMemory schemas enforce consistent data shapes from extraction to retrieval.",
      },
    ],
    folderStructure: [
      {
        name: "travel-agent/",
        type: "folder",
        children: [
          {
            name: "agent/",
            type: "folder",
            children: [
              {
                name: "graph.py",
                type: "file",
                description: "LangGraph state machine definition",
              },
              {
                name: "tools.py",
                type: "file",
                description: "Memory store/retrieve tool implementations",
              },
              {
                name: "prompts.py",
                type: "file",
                description: "System and tool-use prompt templates",
              },
            ],
          },
          {
            name: "memory/",
            type: "folder",
            children: [
              {
                name: "models.py",
                type: "file",
                description: "Pydantic Memory, StoredMemory schemas",
              },
              {
                name: "store.py",
                type: "file",
                description: "RedisVL indexing and retrieval logic",
              },
            ],
          },
          {
            name: "main.py",
            type: "file",
            description: "CLI / API entry point",
          },
        ],
      },
    ],
    codeSnippets: [
      {
        filename: "models.py",
        language: "python",
        code: `class MemoryType(str, Enum):
    EPISODIC = "episodic"
    SEMANTIC = "semantic"

class Memory(BaseModel):
    content: str
    memory_type: MemoryType
    user_id: str
    metadata: dict[str, str] = {}`,
      },
      {
        filename: "tools.py",
        language: "python",
        code: `@tool
def retrieve_memory(query: str, user_id: str) -> list[str]:
    """Search long-term memory for relevant travel preferences."""
    results = memory_store.similarity_search(
        query=query,
        filter=f"@user_id:{{{user_id}}}",
        k=5,
    )
    return [r.content for r in results]`,
      },
    ],
    decisions: [
      {
        title: "Dual memory over single context window",
        description:
          "Separate short-term chat state from long-term vector memory.",
        rationale:
          "Context windows are finite; vector retrieval scales memory without linear token growth.",
      },
      {
        title: "LLM-driven tool invocation",
        description:
          "Agent decides when to store vs retrieve rather than rule-based triggers.",
        rationale:
          "Natural language preferences are ambiguous — the LLM handles nuance better than regex.",
      },
      {
        title: "RedisVL over Pinecone",
        description:
          "Unified Redis instance for both checkpointer and vector store.",
        rationale:
          "Single infrastructure dependency simplifies deployment and reduces latency.",
      },
    ],
    challenges: [
      {
        title: "Memory duplication across sessions",
        description:
          "Similar preferences stored multiple times degraded retrieval quality.",
        state: "error",
      },
      {
        title: "Vector range deduplication",
        description:
          "Added cosine similarity threshold before insert to merge near-duplicate memories.",
        state: "warning",
      },
      {
        title: "Context window management",
        description:
          "Automated summarization kept conversations under token limits while preserving preferences.",
        state: "success",
      },
    ],
    learnings: [
      {
        title: "Memory is an architecture problem, not a prompt trick",
        description:
          "Reliable personalization requires explicit storage, retrieval, and deduplication — not just longer system prompts.",
      },
      {
        title: "Type-safe schemas prevent silent data corruption",
        description:
          "Pydantic models caught malformed LLM extractions before they polluted the vector store.",
      },
    ],
    bannerHeadline: "A travel agent that remembers every trip and preference",
    bannerHighlightWords: ["remembers", "every trip"],
  },
  //   {
  //     id: 3,
  //     slug: "ai-water-tracker",
  //     tagline: "Allows you to track your daily water intake needs using smart AI assistance",
  //     title: "AI Water Tracker App",
  //     description:
  //       "A full-stack hydration tracking system using Streamlit, FastAPI, and SQLite that aggregates daily water intake via backend SQL queries and leverages a LangChain-powered Ollama LLM to generate real-time, AI-driven hydration insights.",
  //     gradientStyle:
  //       "linear-gradient(10deg, rgb(5, 150, 105) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 99.88%)",
  //     accentColor: "bg-[#10B981]",
  //     textAccent: "text-[#10B981]",
  //     bullets: [
  //       "Developed a full-stack hydration tracking system using Streamlit (frontend) and FastAPI (backend) with SQLite for persistent user data storage.",
  //       "Implemented backend SQL queries to store each intake entry with a unique user ID and dynamically compute the total daily water consumption.",
  //       "Designed a processing pipeline where the aggregated daily intake is passed to a LangChain-powered ChatOllama (Llama 3.2:1B) model for contextual analysis.",
  //       "Engineered structured prompt templates to generate concise, supportive hydration feedback based on computed totals.",
  //       "Delivered real-time AI-driven hydration insights to the Streamlit frontend, completing an end-to-end data-to-LLM response workflow.",
  //     ],
  //     techStack: [
  //       { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  //       { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  //       { name: "Streamlit", src: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
  //       { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  //     ],
  //     image: "/water.png",
  //     metadata: { type: "Full Stack App", role: "Full Stack Developer", year: "2025" },
  //     motivation:
  //       "Most water tracking apps show a progress bar and stop there. I wanted an app that contextualizes hydration data — telling you not just how much you've drunk, but whether you're on track for your body weight, activity level, and time of day, with encouraging AI-generated feedback.",
  //     concept:
  //       "Streamlit provides a rapid UI for logging intake entries. FastAPI serves as the data and AI layer — persisting entries in SQLite, aggregating daily totals via SQL, and piping the computed intake to a LangChain ChatOllama chain that generates personalized hydration advice. The frontend never touches the database directly; all operations flow through REST endpoints.",
  //     howItWorks:
  //       "Users log water intake (ml) through Streamlit sliders and buttons. Each entry POSTs to FastAPI with a user ID and timestamp. The backend inserts into SQLite and runs an aggregation query for today's total. When the user requests feedback, FastAPI fetches the daily total, injects it into a LangChain prompt template alongside the recommended daily intake, and invokes Llama 3.2 via Ollama. The generated insight renders in the Streamlit sidebar within seconds.",
  //     architecture: [
  //       { title: "Streamlit Frontend", description: "Interactive widgets for logging intake, viewing progress rings, and displaying AI feedback." },
  //       { title: "FastAPI Backend", description: "REST endpoints for CRUD operations, daily aggregation, and LLM insight generation." },
  //       { title: "SQLite Database", description: "Lightweight persistent storage with indexed user_id and date columns for fast daily queries." },
  //       { title: "LangChain + Ollama", description: "Prompt templating and chain orchestration over local Llama 3.2 for privacy-friendly insights." },
  //     ],
  //     folderStructure: [
  //       {
  //         name: "water-tracker/",
  //         type: "folder",
  //         children: [
  //           { name: "backend/", type: "folder", children: [
  //             { name: "main.py", type: "file", description: "FastAPI app, routes, CORS config" },
  //             { name: "database.py", type: "file", description: "SQLite connection and schema" },
  //             { name: "ai_chain.py", type: "file", description: "LangChain prompt + ChatOllama setup" },
  //           ]},
  //           { name: "frontend/", type: "folder", children: [
  //             { name: "app.py", type: "file", description: "Streamlit UI and API client" },
  //           ]},
  //           { name: "data/", type: "folder", children: [
  //             { name: "hydration.db", type: "file", description: "SQLite database file" },
  //           ]},
  //         ],
  //       },
  //     ],
  //     codeSnippets: [
  //       {
  //         filename: "main.py",
  //         language: "python",
  //         code: `@app.get("/daily-total/{user_id}")
  // def get_daily_total(user_id: str):
  //     today = date.today().isoformat()
  //     total = db.execute(
  //         "SELECT COALESCE(SUM(amount_ml), 0) FROM intake "
  //         "WHERE user_id = ? AND date(timestamp) = ?",
  //         (user_id, today),
  //     ).fetchone()[0]
  //     return {"total_ml": total, "date": today}`,
  //       },
  //       {
  //         filename: "ai_chain.py",
  //         language: "python",
  //         code: `prompt = ChatPromptTemplate.from_template(
  //     "User has consumed {total_ml}ml of water today. "
  //     "Recommended intake: {target_ml}ml. "
  //     "Provide a brief, encouraging hydration tip."
  // )
  // chain = prompt | ChatOllama(model="llama3.2:1b")`,
  //       },
  //     ],
  //     decisions: [
  //       { title: "Streamlit over React frontend", description: "Python-native UI for rapid prototyping.", rationale: "Entire stack stays in Python — no separate JS build pipeline for a utility app." },
  //       { title: "SQLite over PostgreSQL", description: "File-based database for single-user / demo deployment.", rationale: "Zero infrastructure overhead; easy to ship as a self-contained demo." },
  //       { title: "Local Llama 3.2:1B", description: "Smallest capable model for short text generation.", rationale: "Hydration tips are simple — a 1B model is fast enough for real-time UX on modest hardware." },
  //     ],
  //     challenges: [
  //       { title: "Streamlit state desync with API", description: "Cached session state showed stale totals after logging new entries.", state: "error" },
  //       { title: "Explicit cache invalidation", description: "Added st.rerun() triggers after successful POST to force UI refresh.", state: "warning" },
  //       { title: "Sub-2s feedback generation", description: "1B model with concise prompts delivered insights in under 2 seconds locally.", state: "success" },
  //     ],
  //     learnings: [
  //       { title: "Separate data layer from presentation early", description: "FastAPI as a clean boundary made it trivial to swap Streamlit for a mobile app later." },
  //       { title: "Right-size the model for the task", description: "Not every feature needs GPT-4 — small local models excel at templated short-form generation." },
  //     ],
  //     bannerHeadline: "Smart hydration tracking with real-time AI insights",
  //     bannerHighlightWords: ["Smart hydration", "AI insights"],
  //   },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
