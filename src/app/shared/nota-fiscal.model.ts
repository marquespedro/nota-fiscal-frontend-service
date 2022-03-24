import { Duplicata } from "./duplicatas.model";

export class NotaFiscal {
    id: number | undefined | null;
    numero: string | undefined;
    dhRegistro: Date | undefined;
    nomeEmitente: string | undefined;
    nomeDestinatario: string | undefined;
    valorNota: number | undefined;
    nomeArquivo: string | undefined;
    status: string | undefined;
    duplicatas: Array<Duplicata> | [] = [];
}