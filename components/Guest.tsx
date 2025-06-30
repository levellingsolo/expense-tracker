import { SignInButton } from "@clerk/nextjs"
export default function Guest() {
    return (
        <div className="guest">
            <h1>Welcome</h1>
            <p>please sign in to manage your expenses</p>
            <SignInButton />
        </div>
    )
}