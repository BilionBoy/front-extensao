import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#E8F5E9] via-[#E3F2FD] to-[#F1F8E9]">
            <div className="w-full max-w-6xl">
                <div className="grid lg:grid-cols-2 rounded-[32px] overflow-hidden shadow-2xl bg-white">
                    {/* Left side - Login form */}
                    <div className="flex items-center justify-center p-8 lg:p-16 bg-[#FAFAFA]">
                        <LoginForm />
                    </div>

                    {/* Right side - Branding with organic shapes background */}
                    <div className="hidden lg:flex relative bg-gradient-to-br from-[#B2DFDB] via-[#C5E1A5] to-[#B2DFDB] items-center justify-center p-12 overflow-hidden">
                        {/* Decorative organic shapes */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center space-y-8 max-w-lg">
                            {/* Illustration placeholder */}
                            <div className="mx-auto w-48 h-48 rounded-3xl bg-white/80 backdrop-blur flex items-center justify-center shadow-lg">
                                <svg className="w-24 h-24 text-[#5D4E37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl font-bold text-[#37474F] text-balance leading-tight">Portal de Locações</h1>
                                <p className="text-xl text-[#546E7A] text-pretty leading-relaxed">
                                    Transforme a <span className="font-semibold">Gestão</span> com <br />
                                    Controle Inteligente
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
