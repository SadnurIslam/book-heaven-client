# 📚 The Book Haven

A full-stack digital library web application where users can explore, add, update, and manage books in one place.  
Built using **React**, **Firebase Authentication**, **Axios**, and **TailwindCSS + DaisyUI** for a clean, responsive UI.

---

## 🌐 Live Site URL
🔗 [Visit The Book Haven Live](https://book-heaven-2e7d1.web.app/)

---

## 🧠 Project Features

- 🔐 **User Authentication** using Firebase (Email/Password & Google Login)
- 📚 **CRUD Operations** (Add, Read, Update, Delete Books)
- 🧾 **Private Routes** for Add Book, My Books, Update Book, and Book Details
- 🌗 **Light/Dark Theme Toggle** for better accessibility
- ⚙️ **Sorting & Filtering** books by Rating (Low to High / High to Low)
- 💬 **Real-time Comments** on Book Details page
- 📱 **Fully Responsive Design** for mobile, tablet, and desktop
- 🌩 **Deployed on Netlify** with Firebase domain authorization

---

## 🧭 Navigation Structure

| Route | Description | Access |
|-------|--------------|--------|
| `/` | Home page with Banner, Latest Books, and Static Sections | Public |
| `/all-books` | Shows all books in table format with sorting options | Public |
| `/book-details/:id` | Shows full details of a selected book | Private |
| `/add-book` | Add new book form (with image upload) | Private |
| `/my-books` | List of books added by the logged-in user | Private |
| `*` | Custom 404 Not Found Page | Public |

---

## 🧩 Tech Stack

**Frontend:**
- React.js (Vite)
- React Router
- Firebase Authentication
- Axios for API calls
- React Hot Toast for notifications
- React Tooltip for info popups
- TailwindCSS + DaisyUI for styling

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```bash
VITE_apiUrl=https://your-server-side.vercel.app
VITE_imgbb_key=your_imgbb_api_key
VITE_firebase_apiKey=your_firebase_api_key
VITE_firebase_authDomain=your_firebase_authDomain
VITE_firebase_projectId=your_firebase_projectId
VITE_firebase_storageBucket=your_firebase_storageBucket
VITE_firebase_messagingSenderId=your_firebase_messagingSenderId
VITE_firebase_appId=your_firebase_appId
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/SadnurIslam/book-heaven-client

# Go to project directory
cd book-heaven-client

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🧾 Packages Used

| Package | Purpose |
|---------|---------|
| react-router-dom | Routing and navigation |
| firebase | Authentication |
| axios | API requests |
| react-hot-toast | Success/error messages |
| react-tooltip | Tooltip display |
| tailwindcss + daisyui | Styling & themes |
| framer-motion | Animations (optional) |

---

## 🧑‍💻 Author

**Developer:** [Sadnur Islam](https://github.com/SadnurIslam)  
📧 **Contact:** sadnurislam@gmail.com  
🔗 **GitHub:** [github.com/SadnurIslam](https://github.com/SadnurIslam)  


