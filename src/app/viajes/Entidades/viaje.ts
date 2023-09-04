export class Viaje{
    IdCodigo:number=0;
    Codigo:string;
    Tripulacion: number;
    Bus: number;
    Origen:string;
    Destino:string;
    FechaHora:string;
    constructor(id:number, cod:string,trip:number, bus: number,or:string,des:string,fec:string)
    {
        this.IdCodigo = id;
        this.Codigo = cod;
        this.Tripulacion = trip;
        this.Bus= bus;
        this.Origen = or;
        this.Destino = des;
        this.FechaHora = fec;
    }
}