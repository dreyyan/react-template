# Setup React: Vite

## DIRECTIONS
### 1. Create vite project:
#### a. in a new folder:
``` bash
npm create vite@latest {project-name} -- --template react-ts
```
#### b. inside the current folder:

``` bash
npm create vite@latest . -- --template react-ts
```
### 2. Select framework `React`:
```bash
◆  Select a framework:
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
```

### 3. Select variant `TypeScript`:
```bash
◆  Select a variant:
│  ● TypeScript
│  ○ TypeScript + React Compiler
│  ○ TypeScript + SWC
│  ○ JavaScript
│  ○ JavaScript + React Compiler
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗
```

### 4. Click the link to your React website shown in the terminal:
```bash
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
## INSTALLATION
### 1. `npm (Node Package Manager)`:
``` bash
npm install
```

### 2. `react-router-dom` (Route Handling)
``` bash
npm install react-router-dom
```

### 3. Install `fontsawesome` (Font Assets):
``` bash
npm install @fortawesome/fontawesome-free
```

- Then, import to your main component (e.g. `Home.tsx`):
``` css
import '@fortawesome/fontawesome-free/css/all.min.css';
```

### 4. Install `tailwindcss` (Easy & Lightweight Styling):
``` bash
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

### 5. Install `bootstrap` [Opt.](Component Presets)
``` bash
npm install react-bootstrap bootstrap
```

- Then, update `main.tsx`:
``` typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

## CLEANING
### 1. Remove `src/assets`, `src/App.css`
### 2. Clear content of `index.css`, `App.tsx`  (if not yet updated)
### 3. Create folder `src/pages`
### 4. Add routing in `App.tsx` [Opt.]:
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