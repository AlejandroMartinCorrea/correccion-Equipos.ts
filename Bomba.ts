import Equipos from "./Equipos";

class Bomba extends Equipos{
    
    public id:string;
    public caudalEntrada:number;
    public caudalSalida:number;
    public fabricante:string;

    constructor (id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,caudalEntrada:number,caudalSalida:number,fabricante:string){
        super(id,descripcion,fechaFabricacion,fechaInstalacion)
        this.id=id;
        this.caudalEntrada=caudalEntrada;
        this.caudalSalida=caudalSalida;
        this.fabricante=fabricante;
        
    }
   
    }
     
    


export default Bomba


