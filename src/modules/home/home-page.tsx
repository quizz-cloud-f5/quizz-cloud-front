import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Bienvenido a QuizzF5.org</h1>
            <Button asChild className="mt-4">
                <Link to="/login">Ir al Login</Link>
            </Button>
        </div>
    )
}


