````markdown
# Inner-Balance Backend

Backend for the **Inner-Balance** project using **Django**, **Django REST Framework**, and RAG AI modules with **LangChain** and **Transformers**.

---

## Table of Contents

- [Setup](#setup)
- [Virtual Environment](#virtual-environment)
- [Install Dependencies](#install-dependencies)
- [Run Server](#run-server)
- [API](#api)
- [Notes](#notes)

---

## Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd InnerBalance/backend/InnerBalance/backend/innerbalance
````

2. Ensure **Python 3.12+** is installed.

---

## Virtual Environment

1. Create a virtual environment:

```bash
python -m venv venv
```

2. Activate the virtual environment:

* **Windows:**

```bash
venv\Scripts\activate
```

* **Linux / MacOS:**

```bash
source venv/bin/activate
```

3. Deactivate when done:

```bash
deactivate
```

---

## Install Dependencies

1. Upgrade pip:

```bash
pip install --upgrade pip
```

2. Install required packages:

```bash
pip install -r requirements.txt
```

> For low storage or CPU-only systems:

```bash
pip install torch --index-url https://download.pytorch.org/whl/cpu
pip install transformers
```

---

## Run Server

1. Apply migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

2. Start the development server:

```bash
python manage.py runserver
```

3. Access the backend at:

```
http://127.0.0.1:8000/
```

---

## API

* Main API route: `http://127.0.0.1:8000/api/`
* Endpoints defined in `api/urls.py`
* RAG system integrated in `rag_views.py` using LangChain.

---

## Notes

* Clear temp files if device has low space.
* Ensure `langchain`, `chromadb`, `sentence-transformers`, and `transformers` are installed properly.
* Use CPU versions if GPU is unavailable.

```
```



