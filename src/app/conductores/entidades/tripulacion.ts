export class Tripulacion{
    IdCodigo:number=0;
    IdChofer1: number;
    IdChofer2: number;
    IdChofer3: number;
    IdChofer4: number;

    constructor(id:number,idc1:number,idc2:number,idc3:number,idc4:number)
    {
        this.IdCodigo = id;
        this.IdChofer1 = idc1;
        this.IdChofer2 = idc2;
        this.IdChofer3 =idc3;
        this.IdChofer4 = idc4;
    }
}