import aceraImg from "@assets/acera_1778674937402.png";
import inquiryEngineImg from "@assets/inquiryengine_1779487568442.png";
import cnnImg from "@assets/cnn_1778674937402.png";
import crmsImg from "@assets/crms_1778674937403.png";
import ctfImg from "@assets/ctf_1778674937400.png";
import hasflagImg from "@assets/hasflag_1778674937400.png";
import qsImg from "@assets/qs_1778674937401.jpg";
import snap2calImg from "@assets/snap2cal_1778674937401.png";
import tvtImg from "@assets/tvt_1778674937401.png";

export type ProjectStatus = "ACTIVE" | "DEPLOYED" | "R&D";

export interface ProjectPipeline {
  label?: string;
  stages: string[];
}

export interface ProjectDetails {
  overview: string;
  pipeline?: ProjectPipeline;
  whatIBuilt: string[];
  impact: string;
  github?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  role: string;
  status: ProjectStatus;
  featured: boolean;
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: "sea-guard",
    title: "SEA-GUARD: Multi-Agent RL CTF",
    description:
      "Python + PyTorch + PPO multi-agent reinforcement learning system: trained coordinated capture-the-flag policies for autonomous surface vessels using curriculum training and league-style self-play.",
    tags: ["Python", "PyTorch", "PPO", "NumPy", "pandas", "MARL", "Reinforcement Learning", "Simulation"],
    image: ctfImg,
    role: "AI Engineer · Lead MARL Researcher",
    status: "ACTIVE",
    featured: true,
    details: {
      overview:
        "A research-grade multi-agent reinforcement learning system for autonomous surface vessel capture-the-flag. Built with Python and PyTorch, agents learn coordinated attack, defense, and interception behavior through curriculum training and league-style self-play — demonstrating agentic multi-agent systems applied to autonomous coordination.",
      pipeline: {
        label: "TRAINING LOOP // SEA-GUARD",
        stages: [
          "Environment",
          "Observations",
          "PPO Policy",
          "Agent Actions",
          "Reward",
          "Training Logs",
          "Evaluation",
        ],
      },
      whatIBuilt: [
        "Python + PyTorch + PPO: trained multi-agent reinforcement learning policies for coordinated capture-the-flag behavior — attack, defense, and interception.",
        "Built a CUDA-ready PyTorch tensor environment for state, dynamics, observations, rewards, and evaluation metrics.",
        "Used NumPy and pandas to analyze win rates, policy stability, routing behavior, and generalization against held-out opponents.",
        "League-style self-play curriculum with scripted adversary phases to drive robust generalization across unseen opponents.",
        "Configurable multi-team simulation (2v2 to 8v8) with team-consistent reward shaping for cooperative coordination.",
      ],
      impact:
        "Agents trained with league-style self-play generalize significantly better against novel opponents than fixed scripted policies — proving the approach on a problem with direct relevance to autonomous multi-agent coordination and agentic systems research.",
      github: "https://github.com/TheK-B1000/MultiAgentUAV",
    },
  },
  {
    id: "ctf",
    title: "Capture the Flag",
    description:
      "Autonomous surface vessel capture-the-flag simulation built with reinforcement learning and multi-agent systems.",
    tags: ["Python", "RL", "Simulation", "CTF"],
    image: hasflagImg,
    role: "RL Engineer",
    status: "ACTIVE",
    featured: false,
    details: {
      overview:
        "An earlier CTF simulation environment used to prototype agent behaviors before scaling up to the SEA-GUARD MARL framework. Focused on single-agent and simple multi-agent scenarios.",
      whatIBuilt: [
        "Custom CTF game environment with Python",
        "Rule-based and RL-trained agent baselines",
        "Visual test suite for agent behavior verification",
      ],
      impact:
        "Served as the foundational testbed that informed the architecture decisions of the full SEA-GUARD system.",
      github: "https://github.com/TheK-B1000/CaptureTheFlagAI",
    },
  },
  {
    id: "inquiry-engine",
    title: "Inquiry Engine",
    description:
      "R&D pipeline that turns raw transcripts into structured claims, cleaner summaries, steelman arguments, and evidence-ready research outputs.",
    tags: [
      "Python",
      "NLP",
      "LLM Gateway",
      "Claim Extraction",
      "Transcript Processing",
      "Evidence Retrieval",
      "MLOps",
    ],
    image: inquiryEngineImg,
    role: "AI Engineer · Solo Developer",
    status: "R&D",
    featured: true,
    details: {
      overview:
        "I built Inquiry Engine to explore how AI can help transform long-form video or transcript content into research-ready argument maps. The system keeps a strict separation between raw source text and cleaned processing text so citations and offsets can stay verifiable.",
      pipeline: {
        label: "INQUIRY PIPELINE",
        stages: [
          "Raw Transcript",
          "Cleaner",
          "Chunker",
          "Claim Extractor",
          "LLM Gateway",
          "Steelman Output",
          "Evidence Layer",
        ],
      },
      whatIBuilt: [
        "Transcript cleaning, chunking, claim extraction, LLM gateway, steelman generation, and the evidence-layer architecture — end-to-end pipeline design.",
        "Guardrails around LLM usage so prompts, models, and responses are constrained, observable, and safe to extend.",
        "Structured outputs (typed claims, steelmans, evidence links) so downstream consumers don't have to parse free-form text.",
        "Run logs that capture each stage's inputs, outputs, and metrics for reproducibility and debugging.",
        "Source-aware processing: strict separation between raw transcript text and cleaned processing text so citations and character offsets remain verifiable.",
      ],
      impact:
        "Demonstrates applied AI engineering beyond simple chatbot usage. It shows transcript processing, NLP-style extraction, LLM orchestration, citation-aware design, and MLOps thinking in one pipeline.",
    },
  },
  {
    id: "quantum-strike",
    title: "Quantum Strike",
    description:
      "Mixed reality action game at Blended Reality Systems — Unity + C#, an OpenAI-powered companion (K2B2) with ElevenLabs voice output, and spatial anchoring so digital objects interact with real-world space.",
    tags: ["Unity", "C#", "Mixed Reality", "OpenAI API", "LLM", "ElevenLabs", "SDLC"],
    image: qsImg,
    role: "Software Engineer · Blended Reality Systems",
    status: "ACTIVE",
    featured: true,
    details: {
      overview:
        "A mixed reality action game built professionally at Blended Reality Systems (July 2024 – present). Players physically move through real space to interact with digital objects in PvP arenas and horde survival modes. Features an AI companion powered by OpenAI and ElevenLabs that understands natural language and responds in voice.",
      pipeline: {
        label: "COMPANION LOOP // K2B2",
        stages: [
          "Player Input",
          "Game Context",
          "LLM Prompt",
          "Response",
          "ElevenLabs Voice",
          "Unity Companion",
        ],
      },
      whatIBuilt: [
        "Unity + C# + SDLC: built mixed-reality software so users could interact with digital objects in real-world spaces across the full development cycle.",
        "OpenAI LLM: connected natural-language prompts to the K2B2 companion so it understands player input and generates contextual conversational responses.",
        "ElevenLabs: integrated AI voice output so K2B2 speaks responses instead of displaying static on-screen text.",
        "Mixed reality spatial anchoring — digital objects placed and persisted relative to real-world environments.",
        "Technical communication: explained gameplay and UI behavior to non-technical teammates so design problems could be understood and fixed faster.",
      ],
      impact:
        "Shipped professional XR software as part of a real product team — combining game engineering, LLM integration, and AI voice in a single shipped mixed-reality experience.",
    },
  },
  {
    id: "acera-ai",
    title: "Acera AI Assistant",
    description:
      "Python + OpenAI API agentic AI assistant: connects LLM responses with real-time speech recognition, computer vision gesture control, and a live animated interface.",
    tags: ["Python", "OpenAI API", "LLM", "NLP", "Speech Recognition", "Computer Vision", "Agentic AI"],
    image: aceraImg,
    role: "Solo Developer",
    status: "DEPLOYED",
    featured: false,
    details: {
      overview:
        "A multimodal agentic AI assistant built with Python and the OpenAI API. Connects LLM reasoning with real-time speech input and computer vision gesture detection — a hands-free interface that demonstrates AI applied to natural human-computer interaction.",
      whatIBuilt: [
        "Python + OpenAI API: built a multi-turn AI assistant with smart context management and natural language responses.",
        "Speech recognition pipeline with real-time transcription for hands-free voice control.",
        "Computer vision gesture detection — users interact without keyboard or touch.",
        "Python + Pygame animated GUI with real-time feedback states responding to voice and gesture events.",
        "Explained the system and its capabilities to non-technical audiences at the Nights & Weekends Season 5 showcase.",
      ],
      impact:
        "Demonstrated a production-ready agentic AI assistant combining voice, computer vision, and LLM reasoning — selected for the Nights & Weekends Season 5 showcase.",
    },
  },
  {
    id: "pac-man-rl",
    title: "Pac-Man Deep Q-Learning AI",
    description:
      "Deep Q-learning agent that learns to play Pac-Man using reinforcement learning and game-state processing.",
    tags: ["Python", "TensorFlow", "DQN", "Reinforcement Learning", "CNNs", "Pygame"],
    image: cnnImg,
    role: "RL Engineer",
    status: "DEPLOYED",
    featured: false,
    details: {
      overview:
        "A Deep Q-Network (DQN) agent trained from scratch to play Pac-Man. The agent learns directly from game-state observations, developing strategies for pellet collection and ghost avoidance.",
      whatIBuilt: [
        "DQN architecture with experience replay and target network",
        "Custom Pygame-based Pac-Man environment",
        "CNN feature extractor for spatial game-state processing",
        "Training telemetry dashboard for reward and loss tracking",
      ],
      impact:
        "Agent exceeded human-baseline score on the custom environment after ~500k training steps, showcasing applied deep RL competency.",
    },
  },
  {
    id: "hope-haven",
    title: "Hope Haven Inventory System",
    description:
      "Inventory management system using Azure, C#, Quartz.NET, and SQL to improve operational workflows.",
    tags: ["C#", "SQL", "Azure", "Software Engineering"],
    image: crmsImg,
    role: "Software Engineer",
    status: "DEPLOYED",
    featured: false,
    details: {
      overview:
        "A Collaborative Resource Management System (CRMS) built for Hope Haven to digitize and streamline their inventory and resource allocation workflows, replacing manual spreadsheet-based tracking.",
      whatIBuilt: [
        "Full-stack C# .NET application with SQL Server backend",
        "RFID badge authentication for staff login",
        "Quartz.NET scheduled jobs for automated inventory alerts",
        "Azure deployment pipeline for production hosting and scheduled services",
        "Role-based access control for staff and administrators",
      ],
      impact:
        "Reduced manual inventory errors and improved resource tracking speed for the nonprofit, directly improving operational efficiency for staff and clients.",
      github: "https://github.com/TheK-B1000/HopeHaven",
    },
  },
  {
    id: "snap2cal",
    title: "Snap2Cal Food Classifier App",
    description:
      "Python + TensorFlow CNN food image classifier: users photograph a meal and instantly receive calorie and macro estimates via transfer learning and a nutrition estimation pipeline.",
    tags: ["Python", "TensorFlow", "CNNs", "Transfer Learning", "Computer Vision", "NumPy"],
    image: snap2calImg,
    role: "Solo Developer",
    status: "DEPLOYED",
    featured: false,
    details: {
      overview:
        "A mobile-first AI application built with Python and TensorFlow. Users photograph a meal and instantly receive nutritional estimates. Uses a CNN classifier trained with transfer learning on labeled food image datasets, achieving ~85% accuracy.",
      whatIBuilt: [
        "Python + TensorFlow: built a CNN food image classifier using transfer learning, trained on labeled food datasets (~85% accuracy).",
        "Nutrition estimation pipeline that maps classification results to calorie and macro data.",
        "NumPy-powered image preprocessing pipeline for camera capture and input normalization.",
        "Clean UI for displaying calorie and macro breakdowns in a mobile-first layout.",
      ],
      impact:
        "Streamlined food logging by eliminating manual calorie entry — demonstrating applied TensorFlow, CNNs, and transfer learning in a consumer health context.",
    },
  },
  {
    id: "tomatoes-vs-trollies",
    title: "Tomatoes vs Trollies",
    description:
      "Tower defense game made during a 10-day game jam and livestream, combining quirky strategy with fast development.",
    tags: ["Game Jam", "2D Art", "Unity", "Design"],
    image: tvtImg,
    role: "Game Jam Lead",
    status: "DEPLOYED",
    featured: false,
    details: {
      overview:
        "A fully playable tower defense game built and shipped in 10 days during a live-streamed game jam. Players deploy sentient tomato characters to defend against waves of shopping trollies in a surreal garden battlefield.",
      whatIBuilt: [
        "Full tower defense game loop in Unity",
        "Wave spawning system with difficulty scaling",
        "Original 2D art direction and character designs",
        "Live development streamed from concept to shipped game",
      ],
      impact:
        "Shipped a complete, playable game in 10 days — demonstrating rapid prototyping, creative direction, and execution under real time pressure.",
    },
  },
];
