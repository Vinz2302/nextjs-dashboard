import AcmeLogo from "../ui/acme-logo";
import { lusitana } from "../ui/fonts";
import LoginForm from "../ui/login-form";
import { GiFallingLeaf } from "react-icons/gi";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            {/* <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-green-400 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                    <div className="text-white">
                        <GiFallingLeaf className="text-8xl" />
                    </div>
                    <div className="text-white">
                        <GiFallingLeaf className="text-6xl" />
                    </div>
                    <div className="text-white font-bold text-3xl md:text-4xl">
                        <h1>Hidroponik - Dashboard</h1>
                    </div>
                    <div className="text-white">
                        <GiFallingLeaf className="text-6xl" />
                    </div>
                </div>
                <LoginForm />
            </div> */}
            <div className="relative mx-auto w-full max-w-[400px] flex flex-col space-y-4 p-4 md:-mt-32 bg-gradient-to-br from-green-400 to-green-500 rounded-lg shadow-lg">
                <div className="flex justify-center items-center space-x-2">
                    <div className="text-white">
                        <GiFallingLeaf className="text-6xl" />
                    </div>
                    <div className="flex flex-col justify-center items-center ps-4 pe-4">
                        <div className="text-white font-bold text-3xl md:text-4xl">
                            <h1 className={`${lusitana.className} text-center`}>
                                Hidroponik
                                <br></br>
                                Dashboard
                            </h1>
                        </div>
                    </div>
                    <div className="text-white">
                        <GiFallingLeaf className="text-6xl transform rotate-180" />
                    </div>
                </div>
                <LoginForm />
            </div>

        </main>
    );
}