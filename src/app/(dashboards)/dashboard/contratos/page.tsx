import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const contratos = [
    { id: 1, cliente: "Maria Silva", entrega: "15/11/2025", total: "R$ 450,00", pagamento: "PIX", status: "pago" },
    {
        id: 2,
        cliente: "João Santos",
        entrega: "16/11/2025",
        total: "R$ 280,00",
        pagamento: "Dinheiro",
        status: "pendente",
    },
    { id: 3, cliente: "Ana Costa", entrega: "18/11/2025", total: "R$ 380,00", pagamento: "Crédito", status: "pago" },
    { id: 4, cliente: "Pedro Oliveira", entrega: "20/11/2025", total: "R$ 520,00", pagamento: "PIX", status: "pago" },
    {
        id: 5,
        cliente: "Carla Mendes",
        entrega: "22/11/2025",
        total: "R$ 315,00",
        pagamento: "Débito",
        status: "pendente",
    },
]

export default function ContratosPage() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Contratos</h1>
                    <p className="text-muted-foreground">Gerencie todos os contratos de locação</p>
                </div>
                <Link href="/dashboard/novo-contrato">
                    <Button size="lg" className="rounded-2xl h-12 px-6">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Novo Contrato
                    </Button>
                </Link>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
                <Button variant="outline" className="rounded-2xl bg-transparent">
                    Todos
                </Button>
                <Button variant="outline" className="rounded-2xl bg-transparent">
                    Pagos
                </Button>
                <Button variant="outline" className="rounded-2xl bg-transparent">
                    Pendentes
                </Button>
            </div>

            {/* Contracts List */}
            <div className="space-y-4">
                {contratos.map((contrato) => (
                    <Card key={contrato.id} className="shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold text-lg text-foreground">{contrato.cliente}</p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                {contrato.entrega}
                                            </span>
                                            <span>•</span>
                                            <span>{contrato.pagamento}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">Total</p>
                                        <p className="text-xl font-bold text-foreground">{contrato.total}</p>
                                    </div>

                                    <Badge variant={contrato.status === "pago" ? "default" : "secondary"} className="h-8 px-4 rounded-xl">
                                        {contrato.status === "pago" ? "Pago" : "Pendente"}
                                    </Badge>

                                    <Link href={`/dashboard/contratos/${contrato.id}`}>
                                        <Button variant="outline" size="icon" className="rounded-xl w-10 h-10 bg-transparent">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
