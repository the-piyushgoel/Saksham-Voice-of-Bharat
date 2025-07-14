# Saksham: Voice of Bharat 🇮🇳

> **Empowering the Differently-Abled with Technology, Compassion, and Community**

## 🚩 Problem Statement

India is home to **over 3 crore (30 million)** differently-abled individuals, many of whom face daily challenges in accessing basic services, communication tools, educational content, job opportunities, and emotional support. Despite various government schemes and social initiatives, the gap between accessibility and empowerment remains wide.

Visually and hearing-impaired individuals especially struggle with online interaction, finding meaningful careers, or receiving timely guidance and motivation. These issues, though pressing, are often overlooked in the mainstream digital ecosystem.

## 👥 Our Mission

Keeping this challenge at the heart of our mission, a passionate group of **first-year college students** came together under the team name **NextGen Bharat**. With creativity, empathy, and a vision for an inclusive India, we developed a solution tailored to support and uplift the differently-abled community.

---

## 💡 Our Solution: Saksham - Voice of Bharat

**Saksham: Voice of Bharat** is an accessible, AI-powered, inclusive web platform that empowers disabled individuals through the following key features:

### 🌐 Key Features

- 🔊 **Text-to-Voice Converter**: Designed especially for the visually impaired, this feature converts written text into audio in real-time, enhancing content accessibility.

- 🤖 **AI Chatbot for Emotional Support & Queries**: A friendly assistant trained to provide emotional support, answer doubts, and guide users through general and scheme-specific queries.

- 🌟 **Success Stories**: A curated section featuring inspiring real-life journeys of people who have overcome disabilities and achieved remarkable success. This motivates users and fosters hope.

- 🧭 **Career Guidance & Job Discovery**: A dedicated section helping users explore personalized career paths, discover job opportunities, and build professional growth — with inclusivity in mind.

- 🌍 **Multilingual and Accessible UI**: Built keeping screen-readers and regional languages in mind for a seamless experience across India.

---

## 🛠️ Tech Stack

### 👨‍💻 Frontend
- **Languages**: HTML, CSS, JavaScript
- **Frameworks & Libraries**: Tailwind CSS, React.js

### 🧠 Backend
- **Languages**: JavaScript (Node.js), Python
- **Framework**: Flask (for AI chatbot and backend API handling)

### 🚀 Deployment
- **Platform**: [Vercel](https://vercel.com/) — for seamless, global deployment and hosting

---

## 👨‍💻 Team NextGen Bharat

👩‍💻 **Prachi Sharma**  
  [GitHub](https://github.com/prachi9506) | [LinkedIn](https://www.linkedin.com/in/prachisharma95/)

- 👩‍💻 **Apurva Jain**  
  [GitHub](https://github.com/APURVA122) | [LinkedIn](https://www.linkedin.com/in/apurva-jain-9462a7330/)

- 👨‍💻 **Piyush Goel**  
  [GitHub](https://github.com/the-piyushgoel) | [LinkedIn](https://www.linkedin.com/in/the-piyushgoel/)





> United by purpose, driven by innovation.

---

## 📢 Join Us in Making Bharat Truly Saksham!

We believe **Being different shouldn't mean being alone**. Through Saksham, we aim to create a truly inclusive digital India where no voice is unheard, and every individual is empowered to rise and shine.

Feel free to contribute, collaborate, or share your thoughts with us. Let’s build a better tomorrow, together.

---

## 🔗 Live Demo

You can explore the live project here:  
👉 **[https://saksham-voice-of-bharat.vercel.app/](https://saksham-voice-of-bharat.vercel.app/)**

---


## Steps to Run the project on local system!
After cloning the repo, To run the project follow the following steps and run all the commands on in terminal step by step:

1)	cd .\Saksham-Voice-of-Bharat\

2)	cd .\saksham\

3)	New-Item -Path "public\.htaccess" -ItemType "File"

4)	@'

<IfModule mod_rewrite.c>
 
 	 RewriteEngine On
 	 RewriteBase /
  	RewriteCond %{REQUEST_FILENAME} !-f
  	RewriteCond %{REQUEST_FILENAME} !-d
  	RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_headers.c>
 
  	Header set X-Powered-By "Hostinger Horizons"
</IfModule>

'@ |
Set-Content -Path "public\.htaccess"

5)	npm install

6)	npm run dev
