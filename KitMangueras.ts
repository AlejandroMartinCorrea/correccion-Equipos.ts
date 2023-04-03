import Equipos from "./Equipos";
  enum rosca{"rosca fina NPT","rosca gruesa NPT","rosca fina BSP","rosca gruesa BSP",}

  class kitMangueras extends Equipos{
    public id:string;
    public elementos:number;
    public medidaPulgada:number;
    private roscaMaterial:rosca;

    constructor(id:string,descripcion:string,fechaFabricacion:Date,fechaInstalacion:Date,elementos:number,medidaPulgada:number,roscaMaterial:rosca,){
    super(id,descripcion,fechaFabricacion,fechaInstalacion);

    this.id=id;
    this.elementos=elementos;
    this.medidaPulgada=medidaPulgada;
    this.roscaMaterial=roscaMaterial;

    } 

  } export default kitMangueras