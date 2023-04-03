import Equipos from "./Equipos";

enum Consumo{Bajo=("bajo"),Medio=("medio"),Alto=("alto")};
 
class Motor extends Equipos{
    
    public id:string;
    public potencia:number;
    public eficiencia=Consumo;
    public fabricante:string;

    constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,
        potencia:number,eficiencia:Consumo,fabricante:string){
        super(id,descripcion,fechaFabricacion,fechaInstalacion);
        this.id=id;
        this.potencia=potencia;
        this.fabricante=fabricante;
    }

} 

export default Motor