import { Duplicata } from "./duplicatas.model";

export class NotaFiscal {
    id: number;
    numero: string;
    dhRegistro: Date;
    nomeEmitente: string ;
    nomeDestinatario: string;
    valorNota: number;
    nomeArquivo: string;
    status: string;
    duplicatas: Array<Duplicata> | [] = [];
}