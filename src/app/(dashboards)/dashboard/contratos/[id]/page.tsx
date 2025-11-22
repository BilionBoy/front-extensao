import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ContratoDetalhePage() {
    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Contrato #001</h1>
                    <p className="text-muted-foreground">Detalhes completos do contrato</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" size="lg" className="rounded-2xl h-12 px-6 bg-transparent">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                        </svg>
                        Editar
                    </Button>
                    <Button size="lg" className="rounded-2xl h-12 px-6">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Baixar PDF
                    </Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Cliente */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Dados do Cliente</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Nome Completo</p>
                                    <p className="font-semibold text-foreground">Maria Silva Santos</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">CPF</p>
                                    <p className="font-semibold text-foreground">123.456.789-00</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                                    <p className="font-semibold text-foreground">(11) 98765-4321</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Data de Nascimento</p>
                                    <p className="font-semibold text-foreground">15/03/1990</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-sm text-muted-foreground mb-1">Endereço</p>
                                    <p className="font-semibold text-foreground">Rua das Flores, 123 - Jardim Primavera</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Itens */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Itens da Locação</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[
                                    { item: "Mesa", qty: 2, price: 50, total: 100 },
                                    { item: "Cadeira com apoio", qty: 8, price: 20, total: 160 },
                                    { item: "Toalha Oxford", qty: 2, price: 25, total: 50 },
                                    { item: "Geleira 360L", qty: 1, price: 80, total: 80 },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
                                        <div>
                                            <p className="font-semibold text-foreground">{item.item}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.qty} × R$ {item.price},00
                                            </p>
                                        </div>
                                        <p className="font-bold text-foreground">R$ {item.total},00</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t flex items-center justify-between">
                                <p className="text-lg font-semibold text-foreground">Total</p>
                                <p className="text-3xl font-bold text-primary">R$ 450,00</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Observações */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Observações</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground">
                                Entregar às 14h. Cliente solicitou toalhas na cor branca. Endereço de entrega confirmado por WhatsApp.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Status */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Status do Contrato</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Pagamento</p>
                                <Badge className="h-8 px-4 rounded-xl">Pago</Badge>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Forma de Pagamento</p>
                                <p className="font-semibold text-foreground">PIX</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Datas */}
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Datas Importantes</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Entrega</p>
                                    <p className="font-semibold text-foreground">15/11/2025 às 14:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-secondary-foreground"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Devolução</p>
                                    <p className="font-semibold text-foreground">16/11/2025 às 10:00</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Criado em */}
                    <Card className="shadow-sm">
                        <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-1">Contrato criado em</p>
                            <p className="font-semibold text-foreground">10/11/2025 às 16:30</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
