import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Ecuaciones Diferenciales - Material Educativo",
    description: "Recursos interactivos para el estudio de ecuaciones diferenciales",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
