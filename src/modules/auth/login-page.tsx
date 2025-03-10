import { PiIcon } from "lucide-react"

import { LoginForm } from "@/modules/auth/components/login-form"
import { Link } from "react-router-dom"


export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link to="/" className="flex items-center gap-2 self-center font-medium hover:bg-primary-foreground hover:text-primary rounded-md p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                        <PiIcon className="size-4" />
                    </div>
                    QuizzF5.org
                </Link>
                <LoginForm />
            </div>
        </div>
    )
}
