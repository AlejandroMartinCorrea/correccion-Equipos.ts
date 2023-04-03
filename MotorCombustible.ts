import Equipos from "./Equipos";
import Motor from "./Motor";

enum Consumo {Bajo = "bajo",Medio = "medio",Alto = "alto",}

enum Combustible {Nafta = "nafta",Diesel = "diesel",Mezcla = "mezcla",}

export default class MotorCombustible extends Motor {
  public id: string;
  public cilindros: number;
  private tipoCombustible: Combustible;

  private static listaMotores: MotorCombustible[] = [];

  constructor( id: string,descripcion: string,fechaFabricacion: Date,fechaInstalacion: Date,potencia: number,eficiencia: Consumo,fabricante: string,
    cilindros: number,tipoCombustible: Combustible) {
    super(id, descripcion, fechaFabricacion, fechaInstalacion, potencia, eficiencia, fabricante);
    this.id = id;
    this.cilindros = cilindros;
    this.tipoCombustible = tipoCombustible;
  }

  static agregarMotor(motor: MotorCombustible) {
    MotorCombustible.listaMotores.push(motor);
  }

  static buscarMotorPorId(id: string): MotorCombustible | undefined {
    return MotorCombustible.listaMotores.find((motor) => motor.id === id);
  }

  static modificarMotor(id: string, nuevoMotor: MotorCombustible) {
    const indiceMotor = MotorCombustible.listaMotores.findIndex((motor) => motor.id === id);
    MotorCombustible.listaMotores[indiceMotor] = nuevoMotor;
  }

  static eliminarMotor(id: string) {
    MotorCombustible.listaMotores = MotorCombustible.listaMotores.filter((motor) => motor.id !== id);
  }

  static obtenerListaMotores(): MotorCombustible[] {
    return MotorCombustible.listaMotores;
    
  }
} let motorExplocion=new MotorCombustible("RR","motor explocion",new Date("2015/06/17"),
new Date("2018/09/02"),100,Consumo.Bajo,"toyota",4,Combustible.Nafta,);

let motorAltoRendimiento=new MotorCombustible("mar","motor alto rendimiento",new Date("2018/12/10"),
new Date("2020/08/07"),200,Consumo.Medio,"honda",6,Combustible.Diesel,);
MotorCombustible.agregarMotor(motorExplocion);
MotorCombustible.agregarMotor(motorAltoRendimiento);
let motorEncontrado = MotorCombustible.buscarMotorPorId("RR");
console.log(motorEncontrado);
let motorModificado=new MotorCombustible("RR","motor explocion 2t",new Date("2015/06/17"),
new Date("2018/09/02"),100,Consumo.Bajo,"toyota",4,Combustible.Nafta,);
console.log(motorModificado);
let totalMotores=MotorCombustible.obtenerListaMotores();
console.log(totalMotores);