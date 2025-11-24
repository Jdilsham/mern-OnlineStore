# 🚀 MERN Online Store – Cloud Native DevOps Project  
### **Author: Janitha Dilsham**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![GKE](https://img.shields.io/badge/GKE-Google%20Kubernetes%20Engine-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-D33833?style=for-the-badge&logo=jenkins&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![DevOps](https://img.shields.io/badge/DevOps-A020F0?style=for-the-badge)

---

# 📌 Project Overview

**MERN Online Store** is a simple practice application built to understand the MERN stack,  
but it includes a **complete, production-style DevOps pipeline** using:

- Docker  
- Jenkins CI/CD  
- Google Cloud  
- Google Kubernetes Engine (GKE)  
- Kubernetes manifests  
- Ingress Load Balancing  

Although the application itself is simple, the **cloud infrastructure and deployment pipeline are full production grade**.

---

# 🏗 Architecture Overview

### 🔹 High-Level Workflow

GitHub → Jenkins Pipeline → Docker Build & Push → GKE (Kubernetes) → Ingress Load Balancer → User


### 🔹 Core Components
- **Frontend:** React (Vite) served via Nginx  
- **Backend:** Node.js + Express REST API  
- **Database:** MongoDB deployed inside Kubernetes (PVC storage)  
- **Containerization:** Docker images pushed to Docker Hub  
- **Orchestration:** GKE Autopilot cluster  
- **Exposure:** Google Cloud Load Balancer via Ingress  
- **Automation:** Jenkins CI/CD pipeline  

---

# ☸️ Kubernetes Deployment (GKE)

This project includes multiple Kubernetes manifests located in the `k8s/` directory:

### Kubernetes Resources:
- `namespace.yaml` – Project namespace (`online-store`)
- `mongo.yaml` – MongoDB Deployment + Service + PVC
- `backend.yaml` – Backend Deployment + Service
- `frontend.yaml` – Frontend Deployment + Service
- `ingress.yaml` – Google Cloud Load Balancer + URL routing

### Ingress Routing:
- `/` → Frontend service (React app)
- `/api` → Backend service (Express API)

GKE automatically creates:
- Google Network Load Balancer  
- Health checks  

---

# 🔄 CI/CD Pipeline (Jenkins)

A fully automated Jenkins pipeline handles:

1. Pull latest source from GitHub  
2. Build Docker images for frontend & backend  
3. Push images to Docker Hub  
4. Authenticate to Google Cloud  
5. Apply Kubernetes manifests (namespace, DB, frontend, backend, ingress)  
6. Update deployments using `kubectl apply -f`  
7. Trigger rolling updates in GKE  

This ensures:
- **Zero downtime deployments**  
- **Always up-to-date containers**  
- **Fully automated build → deploy workflow**  

---

# 🌐 Google Cloud Infrastructure

### Services Used:
- **Google Kubernetes Engine (GKE Autopilot)**
- **Cloud Load Balancing**
- **IAM + Service Accounts** (Jenkins authentication)

---

# 🧑‍💻 Author  
### **Janitha Dilsham**  
DevOps | Cloud | Kubernetes | Jenkins | Docker | GKE | MERN

---

# ⭐ Support  
If this project helped you, a **⭐ star on GitHub** would be greatly appreciated!
