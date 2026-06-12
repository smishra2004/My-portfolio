import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "pdf-summary-agent",
    tagline: "AI Agent to summarize your day to day PDFs",
    title: "PDF Summary Agent",
    description:
      "Developed an AI-powered PDF summarization web application that uses Flask for the frontend and an automated n8n pipeline with Ollama for local LLM-based document processing.",
    gradientStyle:
      "linear-gradient(10deg, rgb(219, 39, 119) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 99.88%)",
    accentColor: "bg-[#F02E8A]",
    textAccent: "text-[#F02E8A]",
    bullets: [
      "Developed an event-driven PDF summarization system where file uploads trigger automated AI-based processing and dynamic summary generation.",
      "Built a Flask-based web interface using HTML and CSS that handles file uploads and communicates with the backend via REST APIs.",
      "Designed an automated n8n pipeline with Webhook, Extract from File, Ollama, and Respond to Webhook nodes to process and summarize documents.",
      "Integrated Ollama to perform local Large Language Model inference for secure, low-latency document summarization.",
      "Implemented a modular microservice-style architecture separating the UI and AI workflow layers using REST-based communication and JSON data exchange.",
    ],
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "n8n", src: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "Ollama", src: "https://cdn.simpleicons.org/ollama/000000" },
    ],
    image: "/n8n.png",
    metadata: { type: "AI Agent", role: "Full Stack Developer", year: "2025" },
    motivation:
      "Daily PDF reports, research papers, and policy documents are time-consuming to read end-to-end. I built this agent to automate first-pass comprehension — turning dense documents into concise, actionable summaries without sending sensitive files to external cloud APIs.",
    concept:
      "The system treats document summarization as an event-driven pipeline: a user uploads a PDF through a lightweight Flask UI, which triggers an n8n workflow. The workflow extracts text, sends it to a locally hosted Ollama LLM, and returns a structured summary via webhook response. The UI and AI layers remain decoupled, communicating only through REST and JSON.",
    howItWorks:
      "When a user selects a PDF and submits the form, Flask sends the file as multipart data to the n8n webhook endpoint. n8n's Extract from File node parses the document into plain text. The text is passed to an Ollama node with a carefully crafted prompt requesting a structured summary with key points and action items. The LLM response is serialized as JSON and returned through the Respond to Webhook node. Flask receives the payload and renders the summary on the results page — all within seconds, entirely on local infrastructure.",
    architecture: [
      { title: "Flask Web Layer", description: "Handles file upload validation, session state, and renders HTML templates. Acts as the user-facing entry point and API consumer." },
      { title: "n8n Orchestration Engine", description: "Coordinates the async workflow — webhook intake, file extraction, LLM invocation, and response routing — without custom backend glue code." },
      { title: "Ollama LLM Runtime", description: "Runs local inference with configurable models (Llama, Mistral) ensuring data never leaves the machine." },
      { title: "REST Bridge", description: "JSON-over-HTTP contract between Flask and n8n enables independent scaling and testing of each layer." },
    ],
    folderStructure: [
      {
        name: "pdf-summary-agent/",
        type: "folder",
        children: [
          { name: "app.py", type: "file", description: "Flask routes, upload handler, n8n webhook client" },
          { name: "templates/", type: "folder", children: [
            { name: "index.html", type: "file", description: "Upload form UI" },
            { name: "result.html", type: "file", description: "Summary display page" },
          ]},
          { name: "static/", type: "folder", children: [
            { name: "style.css", type: "file", description: "Dark-themed UI styles" },
          ]},
          { name: "workflows/", type: "folder", children: [
            { name: "pdf-summary.json", type: "file", description: "Exportable n8n workflow definition" },
          ]},
        ],
      },
    ],
    codeSnippets: [
      {
        filename: "app.py",
        language: "python",
        code: `@app.route("/upload", methods=["POST"])
def upload_pdf():
    file = request.files["pdf"]
    if not file.filename.endswith(".pdf"):
        return jsonify({"error": "PDF only"}), 400

    response = requests.post(
        N8N_WEBHOOK_URL,
        files={"file": (file.filename, file.read(), "application/pdf")},
        timeout=120,
    )
    return render_template("result.html", summary=response.json())`,
      },
      {
        filename: "n8n-prompt.json",
        language: "json",
        code: `{
  "model": "llama3.2",
  "prompt": "Summarize the following document.\\n\\nProvide:\\n1. Executive summary (2-3 sentences)\\n2. Key points (bullet list)\\n3. Action items\\n\\nDocument:\\n{{ $json.text }}"
}`,
      },
    ],
    decisions: [
      { title: "n8n over custom Celery workers", description: "Visual workflow orchestration with built-in retry and error nodes.", rationale: "Reduced boilerplate for async pipelines and made the workflow inspectable without redeploying code." },
      { title: "Local Ollama vs OpenAI API", description: "All inference runs on-device via Ollama.", rationale: "Documents may contain confidential data; local inference eliminates data egress and API cost." },
      { title: "Flask over FastAPI", description: "Server-rendered HTML templates instead of a SPA.", rationale: "Minimal scope — a two-page upload/result flow didn't warrant a separate frontend build step." },
    ],
    challenges: [
      { title: "Large PDF timeout on webhook", description: "Documents over 50 pages caused n8n webhook timeouts before LLM processing completed.", state: "error" },
      { title: "Chunking strategy for long documents", description: "Implemented page-level text chunking with map-reduce summarization across chunks.", state: "warning" },
      { title: "Sub-30s summary for typical reports", description: "Optimized prompt length and model selection achieved consistent fast responses.", state: "success" },
    ],
    learnings: [
      { title: "Event-driven beats synchronous for AI tasks", description: "Decoupling upload from processing via webhooks makes the UX responsive even when LLM inference takes 10–20 seconds." },
      { title: "Prompt engineering matters more than model size", description: "A structured output prompt on a smaller local model outperformed free-form prompts on larger models." },
    ],
    bannerHeadline: "Turn dense PDFs into actionable summaries with local AI",
    bannerHighlightWords: ["actionable summaries", "local AI"],
  },
  {
    id: 2,
    slug: "ai-travel-agent",
    tagline: "A travel agent chatbot that remembers your past trips and recent conversations.",
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
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "LangGraph", src: "https://cdn.simpleicons.org/langchain/1C3C3C" },
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
      { title: "LangGraph Agent Loop", description: "ReAct-style reasoning graph with tool nodes for memory operations and a conditional router for multi-step planning." },
      { title: "Redis Checkpointer", description: "Persists conversation state across sessions enabling thread continuity without manual session management." },
      { title: "RedisVL Vector Store", description: "Stores embedded memory records with metadata tags for type-safe filtering and deduplication via vector range queries." },
      { title: "Pydantic Memory Models", description: "MemoryType, Memory, and StoredMemory schemas enforce consistent data shapes from extraction to retrieval." },
    ],
    folderStructure: [
      {
        name: "travel-agent/",
        type: "folder",
        children: [
          { name: "agent/", type: "folder", children: [
            { name: "graph.py", type: "file", description: "LangGraph state machine definition" },
            { name: "tools.py", type: "file", description: "Memory store/retrieve tool implementations" },
            { name: "prompts.py", type: "file", description: "System and tool-use prompt templates" },
          ]},
          { name: "memory/", type: "folder", children: [
            { name: "models.py", type: "file", description: "Pydantic Memory, StoredMemory schemas" },
            { name: "store.py", type: "file", description: "RedisVL indexing and retrieval logic" },
          ]},
          { name: "main.py", type: "file", description: "CLI / API entry point" },
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
      { title: "Dual memory over single context window", description: "Separate short-term chat state from long-term vector memory.", rationale: "Context windows are finite; vector retrieval scales memory without linear token growth." },
      { title: "LLM-driven tool invocation", description: "Agent decides when to store vs retrieve rather than rule-based triggers.", rationale: "Natural language preferences are ambiguous — the LLM handles nuance better than regex." },
      { title: "RedisVL over Pinecone", description: "Unified Redis instance for both checkpointer and vector store.", rationale: "Single infrastructure dependency simplifies deployment and reduces latency." },
    ],
    challenges: [
      { title: "Memory duplication across sessions", description: "Similar preferences stored multiple times degraded retrieval quality.", state: "error" },
      { title: "Vector range deduplication", description: "Added cosine similarity threshold before insert to merge near-duplicate memories.", state: "warning" },
      { title: "Context window management", description: "Automated summarization kept conversations under token limits while preserving preferences.", state: "success" },
    ],
    learnings: [
      { title: "Memory is an architecture problem, not a prompt trick", description: "Reliable personalization requires explicit storage, retrieval, and deduplication — not just longer system prompts." },
      { title: "Type-safe schemas prevent silent data corruption", description: "Pydantic models caught malformed LLM extractions before they polluted the vector store." },
    ],
    bannerHeadline: "A travel agent that remembers every trip and preference",
    bannerHighlightWords: ["remembers", "every trip"],
  },
  {
    id: 3,
    slug: "ai-water-tracker",
    tagline: "Allows you to track your daily water intake needs using smart AI assistance",
    title: "AI Water Tracker App",
    description:
      "A full-stack hydration tracking system using Streamlit, FastAPI, and SQLite that aggregates daily water intake via backend SQL queries and leverages a LangChain-powered Ollama LLM to generate real-time, AI-driven hydration insights.",
    gradientStyle:
      "linear-gradient(10deg, rgb(5, 150, 105) 49.9%, rgb(5, 150, 105) 81.7%, rgb(52, 211, 153) 99.88%)",
    accentColor: "bg-[#10B981]",
    textAccent: "text-[#10B981]",
    bullets: [
      "Developed a full-stack hydration tracking system using Streamlit (frontend) and FastAPI (backend) with SQLite for persistent user data storage.",
      "Implemented backend SQL queries to store each intake entry with a unique user ID and dynamically compute the total daily water consumption.",
      "Designed a processing pipeline where the aggregated daily intake is passed to a LangChain-powered ChatOllama (Llama 3.2:1B) model for contextual analysis.",
      "Engineered structured prompt templates to generate concise, supportive hydration feedback based on computed totals.",
      "Delivered real-time AI-driven hydration insights to the Streamlit frontend, completing an end-to-end data-to-LLM response workflow.",
    ],
    techStack: [
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "Streamlit", src: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    image: "/water.png",
    metadata: { type: "Full Stack App", role: "Full Stack Developer", year: "2025" },
    motivation:
      "Most water tracking apps show a progress bar and stop there. I wanted an app that contextualizes hydration data — telling you not just how much you've drunk, but whether you're on track for your body weight, activity level, and time of day, with encouraging AI-generated feedback.",
    concept:
      "Streamlit provides a rapid UI for logging intake entries. FastAPI serves as the data and AI layer — persisting entries in SQLite, aggregating daily totals via SQL, and piping the computed intake to a LangChain ChatOllama chain that generates personalized hydration advice. The frontend never touches the database directly; all operations flow through REST endpoints.",
    howItWorks:
      "Users log water intake (ml) through Streamlit sliders and buttons. Each entry POSTs to FastAPI with a user ID and timestamp. The backend inserts into SQLite and runs an aggregation query for today's total. When the user requests feedback, FastAPI fetches the daily total, injects it into a LangChain prompt template alongside the recommended daily intake, and invokes Llama 3.2 via Ollama. The generated insight renders in the Streamlit sidebar within seconds.",
    architecture: [
      { title: "Streamlit Frontend", description: "Interactive widgets for logging intake, viewing progress rings, and displaying AI feedback." },
      { title: "FastAPI Backend", description: "REST endpoints for CRUD operations, daily aggregation, and LLM insight generation." },
      { title: "SQLite Database", description: "Lightweight persistent storage with indexed user_id and date columns for fast daily queries." },
      { title: "LangChain + Ollama", description: "Prompt templating and chain orchestration over local Llama 3.2 for privacy-friendly insights." },
    ],
    folderStructure: [
      {
        name: "water-tracker/",
        type: "folder",
        children: [
          { name: "backend/", type: "folder", children: [
            { name: "main.py", type: "file", description: "FastAPI app, routes, CORS config" },
            { name: "database.py", type: "file", description: "SQLite connection and schema" },
            { name: "ai_chain.py", type: "file", description: "LangChain prompt + ChatOllama setup" },
          ]},
          { name: "frontend/", type: "folder", children: [
            { name: "app.py", type: "file", description: "Streamlit UI and API client" },
          ]},
          { name: "data/", type: "folder", children: [
            { name: "hydration.db", type: "file", description: "SQLite database file" },
          ]},
        ],
      },
    ],
    codeSnippets: [
      {
        filename: "main.py",
        language: "python",
        code: `@app.get("/daily-total/{user_id}")
def get_daily_total(user_id: str):
    today = date.today().isoformat()
    total = db.execute(
        "SELECT COALESCE(SUM(amount_ml), 0) FROM intake "
        "WHERE user_id = ? AND date(timestamp) = ?",
        (user_id, today),
    ).fetchone()[0]
    return {"total_ml": total, "date": today}`,
      },
      {
        filename: "ai_chain.py",
        language: "python",
        code: `prompt = ChatPromptTemplate.from_template(
    "User has consumed {total_ml}ml of water today. "
    "Recommended intake: {target_ml}ml. "
    "Provide a brief, encouraging hydration tip."
)
chain = prompt | ChatOllama(model="llama3.2:1b")`,
      },
    ],
    decisions: [
      { title: "Streamlit over React frontend", description: "Python-native UI for rapid prototyping.", rationale: "Entire stack stays in Python — no separate JS build pipeline for a utility app." },
      { title: "SQLite over PostgreSQL", description: "File-based database for single-user / demo deployment.", rationale: "Zero infrastructure overhead; easy to ship as a self-contained demo." },
      { title: "Local Llama 3.2:1B", description: "Smallest capable model for short text generation.", rationale: "Hydration tips are simple — a 1B model is fast enough for real-time UX on modest hardware." },
    ],
    challenges: [
      { title: "Streamlit state desync with API", description: "Cached session state showed stale totals after logging new entries.", state: "error" },
      { title: "Explicit cache invalidation", description: "Added st.rerun() triggers after successful POST to force UI refresh.", state: "warning" },
      { title: "Sub-2s feedback generation", description: "1B model with concise prompts delivered insights in under 2 seconds locally.", state: "success" },
    ],
    learnings: [
      { title: "Separate data layer from presentation early", description: "FastAPI as a clean boundary made it trivial to swap Streamlit for a mobile app later." },
      { title: "Right-size the model for the task", description: "Not every feature needs GPT-4 — small local models excel at templated short-form generation." },
    ],
    bannerHeadline: "Smart hydration tracking with real-time AI insights",
    bannerHighlightWords: ["Smart hydration", "AI insights"],
  },
  {
    id: 4,
    slug: "vehicle-insurance-mlops",
    tagline: "End-to-end MLOps pipeline that trains, evaluates, and self-deploys a production ML model.",
    title: "Vehicle Insurance Risk — MLOps Pipeline",
    description:
      "A fully automated, cloud-native ML pipeline for vehicle insurance risk prediction — spanning MongoDB data ingestion to AWS-hosted Flask API — with CI/CD that deploys on every Git push without any manual intervention.",
    gradientStyle:
      "linear-gradient(10deg, rgb(109, 40, 217) 49.9%, rgb(109, 40, 217) 81.7%, rgb(167, 139, 250) 99.88%)",
    accentColor: "bg-[#7C3AED]",
    textAccent: "text-[#7C3AED]",
    bullets: [
      "Architected a 6-stage modular ML pipeline (Ingestion → Validation → Transformation → Training → Evaluation → Model Push) where each stage produces typed Artifact entities consumed by the next, enabling isolated testing and clean component handoffs.",
      "Integrated MongoDB Atlas as the cloud data layer, pulling live records programmatically at runtime to eliminate static file dependencies and mirror real enterprise data architectures.",
      "Implemented automated model governance: a newly trained model only promotes to production if it surpasses the live S3-hosted model by a configurable performance threshold, preventing regressions from ever reaching users.",
      "Built a full CI/CD pipeline using GitHub Actions with a self-hosted EC2 runner — on every Git push, Docker builds, pushes to AWS ECR, and redeploys to EC2 automatically with zero manual steps.",
      "Packaged the entire codebase as an installable local Python package via setup.py and pyproject.toml, with centralized logging, custom exception handling, and YAML-based schema validation across all pipeline stages.",
    ],
    techStack: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS", src: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Scikit-Learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ],
    image: "/vehicle.png",
    metadata: { type: "MLOps Pipeline", role: "ML Engineer", year: "2025" },
    motivation:
      "Training a model in a notebook is easy — keeping it accurate, deployed, and governed in production is hard. I built this pipeline to mirror how enterprise ML teams operate: modular stages, automated promotion gates, cloud-native data ingestion, and zero-touch CI/CD from Git push to live API.",
    concept:
      "The pipeline decomposes ML into six independent stages, each producing typed Artifact objects (DataIngestionArtifact, DataValidationArtifact, etc.) that the next stage consumes. MongoDB Atlas provides live training data. After training and evaluation, a model only pushes to S3 if it beats the current production model by a configurable threshold. GitHub Actions on a self-hosted EC2 runner builds Docker images, pushes to ECR, and redeploys the Flask prediction API automatically.",
    howItWorks:
      "On pipeline trigger, the ingestion component pulls records from MongoDB Atlas and saves them as CSV artifacts. Validation checks schema and data quality against YAML-defined rules. Transformation handles imputation, encoding, and feature engineering. Training fits a scikit-learn model and serializes it. Evaluation compares metrics against the model currently hosted on S3 — if the new model exceeds the threshold, it's promoted; otherwise the pipeline logs a rejection. CI/CD watches the main branch: Docker build → ECR push → EC2 container restart with the latest image.",
    architecture: [
      { title: "6-Stage Pipeline", description: "Ingestion → Validation → Transformation → Training → Evaluation → Model Push with typed inter-stage artifacts." },
      { title: "MongoDB Atlas", description: "Cloud data source eliminating static CSV dependencies and enabling live retraining on fresh records." },
      { title: "S3 Model Registry", description: "Versioned model storage with automated promotion gates based on performance thresholds." },
      { title: "GitHub Actions + EC2", description: "Self-hosted runner builds Docker images, pushes to ECR, and redeploys the Flask API on every push." },
    ],
    folderStructure: [
      {
        name: "vehicle-insurance-mlops/",
        type: "folder",
        children: [
          { name: "src/vehicle/components/", type: "folder", children: [
            { name: "data_ingestion.py", type: "file", description: "MongoDB pull and artifact creation" },
            { name: "data_validation.py", type: "file", description: "Schema and quality checks" },
            { name: "data_transformation.py", type: "file", description: "Feature engineering pipeline" },
            { name: "model_trainer.py", type: "file", description: "scikit-learn training logic" },
            { name: "model_evaluation.py", type: "file", description: "Metric comparison and promotion gate" },
          ]},
          { name: "config/", type: "folder", children: [
            { name: "schema.yaml", type: "file", description: "Data validation schema" },
            { name: "params.yaml", type: "file", description: "Training hyperparameters" },
          ]},
          { name: ".github/workflows/", type: "folder", children: [
            { name: "deploy.yml", type: "file", description: "CI/CD pipeline definition" },
          ]},
          { name: "Dockerfile", type: "file", description: "Container image for Flask API" },
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
        filename: "deploy.yml",
        language: "yaml",
        code: `name: Deploy to EC2
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t $ECR_REPO:latest .
      - run: docker push $ECR_REPO:latest
      - run: docker-compose up -d --force-recreate`,
      },
    ],
    decisions: [
      { title: "Typed artifacts over shared globals", description: "Each pipeline stage returns a Pydantic/dataclass artifact.", rationale: "Explicit contracts between stages enable isolated unit testing and clear failure attribution." },
      { title: "Performance-gated promotion", description: "New models must beat production by a threshold before S3 push.", rationale: "Prevents silent regressions — a core requirement for any production ML system." },
      { title: "Self-hosted EC2 runner", description: "GitHub Actions runner on the deployment target machine.", rationale: "Eliminates SSH deploy scripts and keeps build/deploy in a single automated flow." },
    ],
    challenges: [
      { title: "Schema drift in MongoDB records", description: "New fields appeared in source data breaking validation rules.", state: "error" },
      { title: "YAML schema versioning", description: "Added optional field support and schema version tags for backward compatibility.", state: "warning" },
      { title: "Zero-touch deploys on push", description: "Full Git push → live API cycle completes in under 5 minutes.", state: "success" },
    ],
    learnings: [
      { title: "MLOps is mostly engineering, not modeling", description: "Artifact contracts, validation gates, and CI/CD matter more than algorithm choice for production reliability." },
      { title: "Package your pipeline code", description: "Installable Python packages with centralized logging and exceptions make multi-stage pipelines maintainable." },
    ],
    bannerHeadline: "Production ML that trains, evaluates, and deploys itself",
    bannerHighlightWords: ["trains, evaluates", "deploys itself"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
