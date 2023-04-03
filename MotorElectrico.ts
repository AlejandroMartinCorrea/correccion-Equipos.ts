import Motor from "./Motor";

enum Consumo{Bajo=("bajo"),Medio=("medio"),Alto=("alto")}


class MotorElectrico extends Motor{
   public id:string;
   public voltaje:string;
   public consumoKwH:number;
public isBajoConsumo:boolean;

   constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,potencia:number,eficiencia:Consumo,
    fabricante:string,voltaje:string,consumoKwH:number,isBajoConsumo:boolean){

  super(id,descripcion,fechaFabricacion,fechaInstalacion,potencia,eficiencia,fabricante);
   this.id=id;
   this.voltaje=voltaje;
    this.consumoKwH=consumoKwH;
    this.isBajoConsumo=isBajoConsumo;
   
   }
}
 let motorElectrico=new MotorElectrico("MEBC","motor electrico bajo consumo",new Date("2023/01/02"),new Date("2023/02/02"),
 100,Consumo.Bajo,"siemmens","nonofasico",250,true,) 
console.log(motorElectrico)

