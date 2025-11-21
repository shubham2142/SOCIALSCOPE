# 📄 Social Media Content Analyzer  
### MERN + OCR + PDF Parsing + Google Gemini 2.5 Flash AI 🚀

A full-stack AI-powered project where users can upload PDFs or images, extract text from them (PDF parsing + OCR),  
and improve the content using the latest **Gemini 2.5 Flash** AI model.

This project is built as part of the **Software Engineering Technical Assessment**.

---

# ⭐ Features

### 🔹 File Upload  
- PDF + Image file support  
- Drag & Drop + File Picker  
- Backend file handling with Multer  

### 🔹 Text Extraction  
- **PDF content extraction** using `pdfjs-dist`  
- **OCR for images** using `tesseract.js`  
- Clean paragraph formatting  

### 🔹 AI Processing (Gemini 2.5 Flash)  
- Rewritten / improved text version  
- Social-media engagement suggestions  
- Bullet-point actionable insights  

### 🔹 UI (React + Tailwind)  
- Extracted Text (Left)  
- AI Enhanced Text (Right)  
- AI Suggestions (Bottom)

---

# 🛠️ Tech Stack

### Frontend
- React.js  
- TailwindCSS  
- Axios  
- Dropzone  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Multer  
- pdfjs-dist  
- tesseract.js  
- Google Gemini AI SDK  

---

# 📁 Folder Structure

```
SocialScope/
│
├── client/               # React frontend
│   ├── src/
│   ├── package.json
│
├── server/               # Backend
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── app.js
│   ├── .env
│   ├── package.json
│
└── README.md             # YOU ARE HERE 😄
```

---

# 🚀 Installation Guide

## 1️⃣ Clone Project

```
git clone <your_repo_url>
cd SocialScope
```

---

# ▶ Backend Setup

```
cd server
npm install
```

Create **server/.env**:

```
MONGO_URI=mongodb://localhost:27017/socialscope
GEMINI_API_KEY=AIzaSyXXXXXXXXXXXX
```

Run backend:

```
npm start
```

Server starts at:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

```
cd client
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# 🧪 API Endpoint

### **POST /api/upload**

Uploads file → Extracts text → Runs AI → Returns:

```json
{
  "original": "Extracted text...",
  "rewritten": "Improved AI version...",
  "suggestions": "• Add hashtags\n• Use a better CTA..."
}
```

---

# 🤖 AI Model Used
### **Gemini 2.5 Flash**
- Super fast  
- Long context (1M tokens)  
- Perfect for rewriting + suggestions  
- Latest 2025 model  

---

# 🧩 System Flow

```
User Uploads File
       ↓
File stored by Multer
       ↓
PDF Parsing or OCR
       ↓
Gemini AI (rewrite + suggestions)
       ↓
React UI displays results
```

---

# 🚀 Future Upgrades
- AI Hashtag Generator  
- AI Caption Maker  
- Content Score out of 10  
- Multi-language OCR  
- Save analysis history  

---

# 👤 Developed By  
**Shubham Singh**  
MERN Developer | AI Engineer  
(Your GitHub Link)

---

# 📌 Note  
This project is created for the **Software Engineer Technical Assessment**,  
demonstrating skills in:

✔ Full-stack development  
✔ AI integration  
✔ OCR & PDF parsing  
✔ Clean code + production-ready design  

