# 🐾 Hapivet AI

## 🧠 Project Overview
**Hapivet AI** is an intelligent pet healthcare platform designed to connect pet owners and veterinarians through **virtual consultations**, **real-time health monitoring**, and **easy appointment booking**.  
The system aims to improve pet health awareness and enable quick diagnosis through digital tools and IoT-based monitoring.

---

## 🎯 Objectives
- Provide a **virtual consultation platform** for pets and doctors.  
- Integrate **health monitoring devices** to track pet vitals in real time.  
- Allow **customers to schedule appointments** easily online.  
- Send **alerts** to pet owners if abnormal health data is detected.

---

## 🩺 Core Features

### 1️⃣ Virtual Appointment / Consultation Platform
**📘 Idea:**  
A digital interface where pet owners can connect with veterinarians remotely.

**🧠 Approach:**
- The website includes a “Consultation” section.  
- Two options appear:  
  - **Doctor Mode:** Mark availability and manage consultation slots.  
  - **Pet Owner Mode:** Book a consultation with an available doctor.  
- Once a request is sent and accepted, both parties can connect via **video call (concept using WebRTC/Jitsi)**.

**🛠️ Tech (Concept):**
- Frontend: HTML, CSS, JavaScript  
- Backend: Flask / Node (for managing availability)  
- Video: WebRTC / Jitsi Meet API  

**✨ Expected Output:**  
Seamless virtual doctor-pet owner consultation experience.

---

### 2️⃣ Pet Health Rate Monitoring Device
**📘 Idea:**  
A wearable device continuously monitors a pet’s vital signs such as:
- Temperature  
- Heart rate  
- Activity level  

**🧠 Approach:**
- The wearable device (conceptually) sends health data to the backend.  
- Data is analyzed using **rule-based or ML-based logic**.  
- If abnormal readings are detected, the system sends an **alert message** to the pet owner on the website dashboard.

**💡 Example Logic:**
```python
if temperature > 39 or heart_rate > 120:
    status = "Danger"
    send_alert_to_owner()
else:
    status = "Normal"
