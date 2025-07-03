# 🌍 Country Visit Tracker

This is a simple Node.js and PostgreSQL web application that allows users to view and add countries they've visited. It uses Express for the backend and EJS for rendering the frontend.

---

## 🚀 Features

- Display a list of visited countries.
- Add a new visited country by its name.
- Automatically fetches country codes from the database.
- Responsive UI using EJS templates.

---

## 🛠️ Technologies Used

- **Node.js**
- **Express**
- **PostgreSQL**
- **body-parser**
- **EJS**

---

## 📁 Project Structure

```project-folder/
Travel-Tracker/
│
├── 📁 public/                        # Static assets
│   └── main.css                   # Optional: CSS file
│
├── 📁 views/                        # EJS templates
│   ├── index.ejs                   # Main page
│   
│
├── 📄 index.js                     # Main Express server file
├── 📄 package.json                 # NPM dependencies and scripts
├── 📄 README.md                    # Project documentation
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/country-visit-tracker.git
cd country-visit-tracker
```

2. Install dependencies
```bash

npm install
```
3. Create PostgreSQL Database
   
Run these SQL commands in pgAdmin or psql:

```sql
CREATE DATABASE world;

\c world

CREATE TABLE countries (
    country_code VARCHAR(3) PRIMARY KEY,
    country_name TEXT NOT NULL
);

CREATE TABLE visited_countries (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(3) REFERENCES countries(country_code)
);

-- Sample data
INSERT INTO countries (country_code, country_name) VALUES
('IN', 'India'),
('US', 'United States'),
('FR', 'France');
```
4. Update your database credentials in index.js
```js

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "your_password_here",
  port: 5432,
});
```
5. Start the server
```bash

nodemon index.js
# or
node index.js
```
6. Visit in browser
```arduino
http://localhost:3003
```
