export class Bus{
    IdCodigo:number=0;
    IdTripulacion: number;
    Placa:string;
    Tipo:string;
    Mantenimiento:boolean = false;
    Ocupado:boolean = false;
    constructor(id:number, tri:number, placa:string, tipo:string,mant:boolean,ocup:boolean)
    {
        this.IdCodigo = id;
        this.IdTripulacion = tri;
        this.Placa = placa;
        this.Tipo = tipo;
        this.Mantenimiento =mant;
        this.Ocupado = ocup;
    }
}