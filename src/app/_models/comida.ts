export class Comida {
    public id: number | undefined;
    public nombre: string | undefined;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}
