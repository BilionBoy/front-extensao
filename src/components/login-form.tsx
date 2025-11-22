"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        window.location.href = "/dashboard"
    }

    const formatCPF = (value: string) => {
        const numbers = value.replace(/\D/g, "")
        if (numbers.length <= 11) {
            return numbers
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1")
        }
        return cpf
    }

    return (
        <div className="w-full max-w-md space-y-8">
            {/* Logo placeholder */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5D4E37] to-[#8D6E63] flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-[#37474F]">LOCAÇÕES</h2>
                    <p className="text-xs text-[#78909C]">Sistema de Gestão</p>
                </div>
            </div>

            <div className="space-y-3">
                <h1 className="text-3xl font-bold text-[#37474F]">Bem-vindo ao Portal de Locações</h1>
                <p className="text-[#78909C]">Acesse sua conta para continuar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="cpf" className="text-sm font-medium text-[#37474F]">
                        CPF<span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={(e) => setCpf(formatCPF(e.target.value))}
                        required
                        className="h-12 rounded-xl bg-[#F5F5F5] border-0 placeholder:text-[#BDBDBD]"
                        maxLength={14}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-[#37474F]">
                        Senha<span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12 rounded-xl bg-[#F5F5F5] border-0 placeholder:text-[#BDBDBD]"
                    />
                    <div className="flex justify-end">
                        <a href="#" className="text-sm text-[#78909C] hover:text-[#5D4E37] transition-colors">
                            Esqueci minha senha
                        </a>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 rounded-xl text-base font-semibold bg-[#BDBDBD] hover:bg-[#9E9E9E] text-[#616161]"
                >
                    Entrar
                </Button>
            </form>
        </div>
    )
}
