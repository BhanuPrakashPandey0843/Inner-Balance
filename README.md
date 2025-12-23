<p align="center">
  <img src="./Inner Balance Logo.png" alt="Inner-Balance Logo" width="180" />
</p>

<h1 align="center">#Inner-Balance</h1>

<p align="center">
  <strong>"Reconnecting Minds, Restoring Balance."</strong>
</p>

---

##  Overview

**Inner-Balance** is an intelligent digital mental health assessment platform designed to transform the pre-consultation stage of psychological evaluation.  
It bridges the gap between standardized screening tools and personalized clinical interviews using **AI-powered adaptive questioning** grounded in medical evidence.

The platform combines **Next.js** for an elegant, interactive frontend and **Django + AI/ML pipelines** for backend intelligence — featuring a **Retrieval-Augmented Generation (RAG)** architecture integrated with a medical LLM.

---

##  Problem Statement

### Inefficiencies and Barriers in Pre-Consultation Mental Health Assessment

The pre-consultation phase of mental healthcare is hindered by systemic and patient-centric challenges:

- **Information Asymmetry & Articulation Difficulty:**  
  Patients struggle to express complex emotions accurately, leading to incomplete or biased self-reports.

- **Lack of Personalization:**  
  Current static tools (e.g., PHQ-9, GAD-7) fail to adapt to each individual’s psychological context or cultural background.

- **Data-Poor Clinical Onboarding:**  
  Clinicians often begin sessions with minimal structured data, wasting valuable therapeutic time on redundant information gathering.

- **Latency in Risk Detection:**  
  Static assessments often miss subtle warning signs that may indicate critical mental health risks.

- **Technological Limitations:**  
  Most existing digital tools lack clinical reasoning, interoperability with healthcare systems, and evidence-based intelligence.

---

##  Proposed Solution

### InnerBalance — An Adaptive, AI-Powered Clinical Assessment Framework

InnerBalance introduces a **two-stage adaptive assessment protocol**, supported by a **RAG-enhanced clinical reasoning engine** that ensures safe, context-aware, and evidence-based questioning.

#### 1. Two-Stage Adaptive Assessment
- **Stage 1 – Standardized Screening:**  
  Patients complete a short set of validated clinical questions to establish a baseline.

- **Stage 2 – AI-Powered Personalization:**  
  The system dynamically generates follow-up questions using LLM reasoning, probing deeper into symptoms and risk indicators.

#### 2. RAG-Enhanced Clinical Intelligence
- **Knowledge Grounding:**  
  A medical knowledge base (DSM-5, NICE, WHO mhGAP) stored in **ChromaDB** ensures factual and clinical grounding.  
- **Context-Aware Reasoning:**  
  A specialized **medical LLM (Meditron-7B)** retrieves contextually relevant knowledge for adaptive questioning.  
- **Safe Generation:**  
  The LLM operates under constrained prompts, ensuring **ethical**, **evidence-based**, and **safety-compliant** outputs.

#### 3. Clinical Output
- Comprehensive, structured report integrating symptom summary, risk factors, and insights.  
- Seamlessly integrable with **Electronic Health Records (EHR)** and clinical workflows.

---

##  System Architecture

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | Next.js (React) | Responsive user interface with advanced animations |
| **Backend** | Django REST Framework | Secure and scalable RESTful API layer |
| **Database** | PostgreSQL | Primary database (SQLite used for development) |
| **AI/ML Engine** | LangChain + Meditron-7B | Adaptive reasoning and question generation |
| **Vector DB** | ChromaDB | Semantic retrieval for RAG pipeline |

---

##  Tech Stack

### **Backend (Python)**
- **Django 4.2** – Core web framework  
- **Django REST Framework** – API development  
- **PostgreSQL** – Production-grade database  
- **LangChain** – Orchestration and RAG pipeline  
- **Meditron-7B** – Medical reasoning LLM  
- **Microsoft DialoGPT-medium** – Fallback conversational LLM  
- **Hugging Face Transformers** – Model integration  
- **Sentence Transformers** – Text embeddings  
- **ChromaDB** – Vector store for semantic search  
- **PyTorch** – Deep learning framework  

### **Frontend (Next.js)**
- **Next.js 14+** – App router and SSR architecture  
- **Tailwind CSS** – Modern utility-first styling  
- **Lucide Icons** – Clean and consistent iconography  
- **Framer Motion** – Smooth animations and interactions  
- **GSAP + Lenis** – Parallax and scroll effects  

---

##  Animations & Libraries

| Animation Type        | Library                             | Use Case                     |
| --------------------- | ----------------------------------- | ---------------------------- |
| Microanimations       | **Framer Motion**                   | Buttons, modals, cards       |
| Animated Icons        | **Lottie + Lucide**                 | Icons, loaders               |
| Full Page Transitions | **Framer Motion (AnimatePresence)** | Between Next.js routes       |
| Scroll Effects        | **Lenis + GSAP**                    | Parallax, storytelling pages |

These libraries ensure the website remains **smooth, engaging, and visually balanced** — reflecting the mindfulness philosophy of *Inner-Balance*.

---

## 🪷 Branding

### **#Inner-Balance**

**Slogan:**  
> *"Reconnecting Minds, Restoring Balance."*

The project’s identity is rooted in harmony, calmness, and clarity.  
Centered in the interface, the logo and tagline visually represent serenity and intelligence combined.

**Logo File:** `Inner Balance Logo.png`  
*(Located in the root directory of the project.)*

---

##  Getting Started

### Clone the Repository
```bash
git clone https://github.com/BhanuPrakashPandey0843/Inner-Balance.git
cd Inner-Balance
````

---

### 🖥️ Frontend Setup (Next.js)

```bash
cd my-app
npm install
npm run dev
```

Then open:
**[http://localhost:3000](http://localhost:3000)**

---

###  Backend Setup (Django + AI)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Then open:
**[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

##  System Highlights

* **Adaptive AI Assessment:** Dynamic, personalized mental health questioning
* **RAG Clinical Engine:** Evidence-grounded reasoning for safe AI usage
* **Seamless Integration:** Ready for clinical workflow and EHR inclusion
* **Cross-Platform:** Next.js frontend with Python/Django backend
* **Scalable & Secure:** JWT authentication and modular architecture

---

##  Future Scope

* Integration with **wearable data streams** (sleep, heart rate variability)
* Deployment of **on-device inference** for privacy-sensitive applications
* Expansion of **multilingual support** for global accessibility
* Incorporation of **clinician dashboards** with analytical insights

---

##  License

This project is open-source and available under the **MIT License**.

---

## 👥 Contributors

* **Bhanu Prakash Pandey** – Full Stack & AI Developer
* **Team InnerBalance** – Research, Design, and Development

---

> *Inner-Balance bridges the human mind and intelligent systems — enabling empathy through AI.*

```

