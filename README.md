# Module 06: Cloud & DevOps Capstone Project

## 1. Architecture Overview
- **Application:** Node.js Express Web App.
- **Cloud Compute:** AWS EC2 (Amazon Linux 2023).
- **Managed Database:** MongoDB Atlas (Cloud).
- **CI/CD:** GitHub Actions building and pushing to Docker Hub.
- **Monitoring:** UptimeRobot pinging the `/health` endpoint.
- **Containerization:** Docker.

## 2. Architecture Diagram
*(Insert your diagram image here)*

## 3. Deployment & Monitoring Steps
1. Code pushed to GitHub triggers the CI/CD pipeline.
2. Pipeline builds the Docker image and pushes it to Docker Hub (`makeit34943/capstone-app`).
3. An AWS EC2 instance pulls the image and runs the container on port 8080.
4. Environment variables (`PORT`, `MONGODB_URI`) are securely injected at runtime.
5. UptimeRobot actively monitors the `/health` endpoint for 200 OK responses.

## 4. Proof of Work
<img width="2308" height="1086" alt="Screenshot From 2026-11-08 20-16-55" src="https://github.com/user-attachments/assets/84c7b88d-bdc8-4697-8c46-83dae3723975" />
<img width="2308" height="1086" alt="Screenshot From 2026-11-08 20-20-52" src="https://github.com/user-attachments/assets/e9f6efa3-7965-4e52-bd6e-5845dd160745" />
<img width="2308" height="1086" alt="Screenshot From 2026-11-08 20-33-32" src="https://github.com/user-attachments/assets/2aa73131-9a0a-4f5f-b1f4-2c1bbd1d74a2" />
