export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    titulo: String;
    acerca_de_mi: String;

    constructor(nombre: String, apellido: String, img: String, titulo: String, acerca_de_mi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;
        this.acerca_de_mi = acerca_de_mi;
    }
}
