export class Chofer{
    IdCodigo:number=0;
    Cedula:string;
    Nombre:string;
    Apellidos:string;
    Sexo:string;
    FechaNacimiento:string;
    Experiencia:number;
    constructor(id:number, ced:string, nom:string,ape:string,sex:string,fec:string,exp:number)
    {
        this.IdCodigo = id;
        this.Cedula = ced;
        this.Nombre = nom;
        this.Apellidos =ape;
        this.Sexo = sex;
        this.FechaNacimiento = fec;
        this.Experiencia = exp;
    }
}