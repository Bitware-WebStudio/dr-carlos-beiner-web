import { CreditCard, Banknote, Landmark } from 'lucide-react';

export default function FinancingBar() {
    return (
        <div className="bg-white border-y border-neutral-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <div className="flex items-center space-x-3 group">
                        <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                            <CreditCard className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-800">RedCompra</p>
                            <p className="text-xs text-neutral-500">Débito y Crédito</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 group">
                        <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                            <Landmark className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-800">Transferencia</p>
                            <p className="text-xs text-neutral-500">Bancaria</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 group">
                        <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                            <Banknote className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                            <p className="font-bold text-neutral-800">Efectivo</p>
                            <p className="text-xs text-neutral-500">Pago directo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
