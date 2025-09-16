# Setup React: Vite

## DIRECTIONS
### 1. Create vite project:
#### a. in a new folder:
``` powershell
npm create vite@latest {project-name} -- --template react-ts
```
#### b. inside the current folder:

``` powershell
npm create vite@latest . -- --template react-ts
```

## INSTALLATION
### 1. `npm (node package manager)`:
``` powershell
npm install
```

### 2. `react-router-dom` (opt.)
``` powershell
npm install react-router-dom
```

### 3. Install `fontsawesome` (font assets):
``` powershell
npm install @fortawesome/fontawesome-free
```

- Then, update {Component} / `Main.css`:
``` css
import '@fortawesome/fontawesome-free/css/all.min.css';
```

### 4. Install `tailwindcss` (fast styling):
``` powershell
npm install tailwindcss @tailwindcss/vite
```

- Then, update `vite.config.ts`:
``` typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

- Then, update `tailwind.config.js`:
``` ini
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // insert fonts
      },
    },
  },
  plugins: [],
}
```

-Then, `index.css`:
``` css
@import "tailwindcss";
```

- Then, add `src/Styles.ts`

### 5. Install `bootstrap` (component presets)
``` powershell
npm install react-bootstrap bootstrap
```

- Then, update `main.tsx`:
``` typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## CLEANING
### 1. Remove `src/assets`, `src/App.css`
### 2. Clear `index.css`, `App.tsx`
### 3. Create `src/pages` (if routing needed)
### 4. Add routing in `App.tsx` (optional):
``` typescript
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
```

### 5. Update `main.tsx`:
``` typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
```

### 6. Update `Home.tsx`:
``` typescript
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
		<h1>Home</h1>
		<Link to="/"></Link>
	</div>
	);
};
export default Home;
```