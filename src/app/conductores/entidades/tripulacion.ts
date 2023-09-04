export class Tripulacion{
    IdCodigo:number=0;
    IdChofer1: string;
    IdChofer2: string;
    IdChofer3: string;

    constructor(id:number,idc1:string,idc2:string,idc3:string)
    {
        this.IdCodigo = id;
        this.IdChofer1 = idc1;
        this.IdChofer2 = idc2;
        this.IdChofer3 =idc3;
    }
}