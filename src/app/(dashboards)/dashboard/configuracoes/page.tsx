"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfiguracoesPage() {
    const [isEditing, setIsEditing] = useState(false)
    const [profileData, setProfileData] = useState({
        nome: "João Silva",
        email: "joao.silva@empresa.com.br",
        telefone: "(11) 98765-4321",
        cargo: "Administrador",
        bio: "Responsável pela gestão de contratos de locação da empresa.",
        avatar: "/diverse-avatars.png",
    })

    const handleSave = () => {
        // Aqui você faria a chamada para API para salvar
        setIsEditing(false)
    }

    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Configurações</h1>
                    <p className="text-muted-foreground text-lg">Gerencie suas informações pessoais e preferências da conta</p>
                </div>

                {/* Profile Section */}
                <Card className="border-2 border-border rounded-3xl overflow-hidden shadow-sm">
                    <CardHeader className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pb-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <CardTitle className="text-2xl font-bold text-foreground mb-2">Perfil</CardTitle>
                                <CardDescription className="text-base">
                                    Atualize suas informações pessoais e foto de perfil
                                </CardDescription>
                            </div>
                            {!isEditing ? (
                                <Button onClick={() => setIsEditing(true)} variant="outline" className="rounded-2xl border-2 gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    Editar
                                </Button>
                            ) : (
                                <div className="flex gap-2">
                                    <Button onClick={() => setIsEditing(false)} variant="outline" className="rounded-2xl border-2">
                                        Cancelar
                                    </Button>
                                    <Button
                                        onClick={handleSave}
                                        className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Salvar
                                    </Button>
                                </div>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                        {/* Avatar Section */}
                        <div className="flex items-start gap-8">
                            <div className="flex flex-col items-center gap-4">
                                <Avatar className="w-32 h-32 rounded-3xl shadow-lg ring-4 ring-accent/10">
                                    <AvatarImage src={profileData.avatar || "/placeholder.svg"} alt={profileData.nome} />
                                    <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-accent text-white rounded-3xl">
                                        {profileData.nome
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                {isEditing && (
                                    <Button variant="outline" className="rounded-2xl text-sm gap-2 bg-transparent">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        Alterar Foto
                                    </Button>
                                )}
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome" className="text-sm font-semibold text-foreground">
                                            Nome Completo
                                        </Label>
                                        <Input
                                            id="nome"
                                            value={profileData.nome}
                                            onChange={(e) => setProfileData({ ...profileData, nome: e.target.value })}
                                            disabled={!isEditing}
                                            className="rounded-2xl border-2 h-12 disabled:opacity-100 disabled:bg-muted/30"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cargo" className="text-sm font-semibold text-foreground">
                                            Cargo
                                        </Label>
                                        <Input
                                            id="cargo"
                                            value={profileData.cargo}
                                            onChange={(e) => setProfileData({ ...profileData, cargo: e.target.value })}
                                            disabled={!isEditing}
                                            className="rounded-2xl border-2 h-12 disabled:opacity-100 disabled:bg-muted/30"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                                            E-mail
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                            disabled={!isEditing}
                                            className="rounded-2xl border-2 h-12 disabled:opacity-100 disabled:bg-muted/30"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="telefone" className="text-sm font-semibold text-foreground">
                                            Telefone
                                        </Label>
                                        <Input
                                            id="telefone"
                                            type="tel"
                                            value={profileData.telefone}
                                            onChange={(e) => setProfileData({ ...profileData, telefone: e.target.value })}
                                            disabled={!isEditing}
                                            className="rounded-2xl border-2 h-12 disabled:opacity-100 disabled:bg-muted/30"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bio" className="text-sm font-semibold text-foreground">
                                        Biografia
                                    </Label>
                                    <Textarea
                                        id="bio"
                                        value={profileData.bio}
                                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                        disabled={!isEditing}
                                        rows={3}
                                        className="rounded-2xl border-2 resize-none disabled:opacity-100 disabled:bg-muted/30"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Security Section */}
                <Card className="border-2 border-border rounded-3xl overflow-hidden shadow-sm">
                    <CardHeader className="bg-gradient-to-br from-primary/5 via-destructive/5 to-accent/5">
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">Segurança</CardTitle>
                        <CardDescription className="text-base">Gerencie sua senha e opções de segurança da conta</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-6 rounded-2xl bg-muted/30 border-2 border-border">
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        Senha
                                    </h3>
                                    <p className="text-sm text-muted-foreground">Última alteração há 3 meses</p>
                                </div>
                                <Button variant="outline" className="rounded-2xl border-2 gap-2 bg-transparent">
                                    Alterar Senha
                                </Button>
                            </div>


                        </div>
                    </CardContent>
                </Card>


            </div>
        </div>
    )
}
