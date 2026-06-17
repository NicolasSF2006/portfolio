import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@/styles/index.css"
import App from "@/app/App"
import { ThemeProvider } from "@/app/providers/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
