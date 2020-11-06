export interface IVehicleDef {
    id: number;
    year: number | [number, number] | number[];
    make: string;
    model: string;
    engine: string;
}
