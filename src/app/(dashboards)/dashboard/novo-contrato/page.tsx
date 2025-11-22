"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const rentalItems = [
    { id: "mesa", name: "Mesa", price: 50, icon: "🪑" },
    { id: "cadeira-sem", name: "Cadeira sem apoio", price: 15, icon: "🪑" },
    { id: "cadeira-com", name: "Cadeira com apoio", price: 20, icon: "🪑" },
    { id: "geleira", name: "Geleira 360L", price: 80, icon: "❄️" },
    { id: "tampao", name: "Tampão redondo (6 lugares)", price: 35, icon: "⭕" },
    { id: "toalha", name: "Toalha Oxford", price: 25, icon: "🧺" },
]

export default function NovoContratoPage() {
    const [quantities, setQuantities] = useState<Record<string, number>>({})
    const [paymentMethod, setPaymentMethod] = useState("")
    const [paymentStatus, setPaymentStatus] = useState("")

    const updateQuantity = (id: string, delta: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) + delta),
        }))
    }

    const calculateTotal = () => {
        return rentalItems.reduce((sum, item) => {
            const qty = quantities[item.id] || 0
            return sum + item.price * qty
        }, 0)
    }

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Novo Contrato de Locação</h1>
                <p className="text-muted-foreground">Preencha os dados para gerar um novo contrato</p>
            </div>

            <div className="grid gap-8">
                {/* A) Dados do Cliente */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <CardTitle>Dados do Cliente</CardTitle>
                                <CardDescription>Informações pessoais e de contato</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="nome">Nome Completo *</Label>
                                <Input id="nome" placeholder="Digite o nome completo" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cpf">CPF ou RG *</Label>
                                <Input id="cpf" placeholder="000.000.000-00" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="telefone">Telefone *</Label>
                                <Input id="telefone" placeholder="(00) 00000-0000" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="nascimento">Data de Nascimento *</Label>
                                <Input id="nascimento" type="date" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="endereco">Endereço Residencial *</Label>
                                <Input id="endereco" placeholder="Rua, número, complemento" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bairro">Bairro *</Label>
                                <Input id="bairro" placeholder="Bairro" className="h-12 rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="entrega">Local de Entrega</Label>
                                <Input id="entrega" placeholder="Se diferente do endereço" className="h-12 rounded-2xl" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* B) Itens da Locação */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-secondary-foreground"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <CardTitle>Itens da Locação</CardTitle>
                                <CardDescription>Selecione os itens e quantidades</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {rentalItems.map((item) => {
                                const qty = quantities[item.id] || 0
                                const subtotal = qty * item.price

                                return (
                                    <Card key={item.id} className={qty > 0 ? "border-primary shadow-sm" : ""}>
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="font-semibold text-foreground">{item.name}</p>
                                                    <p className="text-sm text-muted-foreground">R$ {item.price},00 / unidade</p>
                                                </div>
                                                <span className="text-2xl">{item.icon}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-10 w-10 rounded-xl bg-transparent"
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                    </svg>
                                                </Button>

                                                <span className="text-2xl font-bold text-foreground min-w-[3ch] text-center">{qty}</span>

                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-10 w-10 rounded-xl bg-transparent"
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </Button>
                                            </div>

                                            {qty > 0 && (
                                                <div className="pt-2 border-t">
                                                    <p className="text-sm text-muted-foreground">Subtotal:</p>
                                                    <p className="text-lg font-bold text-primary">R$ {subtotal},00</p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        <div className="mt-8 p-6 rounded-3xl bg-accent/10 border-2 border-accent/20">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
                                        <svg
                                            className="w-7 h-7 text-accent-foreground"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Valor Total da Locação</p>
                                        <p className="text-3xl font-bold text-foreground">R$ {calculateTotal()},00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* C) Pagamento + Informações Finais */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <CardTitle>Pagamento e Datas</CardTitle>
                                <CardDescription>Informações de pagamento e agendamento</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="pagamento">Forma de Pagamento *</Label>
                                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                                    <SelectTrigger className="h-12 rounded-2xl">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="credito">Crédito</SelectItem>
                                        <SelectItem value="debito">Débito</SelectItem>
                                        <SelectItem value="pix">PIX</SelectItem>
                                        <SelectItem value="dinheiro">Dinheiro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status">Status do Pagamento *</Label>
                                <Select value={paymentStatus} onValueChange={setPaymentStatus}>
                                    <SelectTrigger className="h-12 rounded-2xl">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pago">Pago</SelectItem>
                                        <SelectItem value="pendente">Falta Pagar</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="entrega-data">Data da Entrega *</Label>
                                <Input id="entrega-data" type="date" className="h-12 rounded-2xl" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="devolucao">Data da Devolução *</Label>
                                <Input id="devolucao" type="date" className="h-12 rounded-2xl" />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="observacoes">Observações</Label>
                                <Textarea
                                    id="observacoes"
                                    placeholder="Adicione observações adicionais sobre o contrato..."
                                    className="rounded-2xl min-h-[120px]"
                                />
                            </div>
                        </div>

                        <Button size="lg" className="w-full h-14 rounded-2xl text-lg font-semibold">
                            <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Gerar Contrato de Locação
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
