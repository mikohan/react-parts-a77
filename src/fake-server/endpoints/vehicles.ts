// application
import { clone, delayResponse, error } from '~/fake-server/utils';
import { IVehicle } from '~/interfaces/vehicle';
import { userVehicles, vehicles, makeVehiclesPromise } from '~/fake-server/database/vehicles';
import { AnyCnameRecord } from 'dns';

export async function getYears(): Promise<number[]> {
    const result: number[] = [];
    const vehicles: any = await makeVehiclesPromise();

    vehicles.forEach((vehicle: any) => {
        if (result.indexOf(vehicle.year) === -1) {
            result.push(vehicle.year);
        }
    });

    return delayResponse(Promise.resolve(result.sort()), 150);
}

export async function getMakes(year: number): Promise<string[]> {
    const result: string[] = [];
    const vehicles: IVehicle[] = await makeVehiclesPromise();

    vehicles
        .filter((x) => x.year === year)
        .forEach((vehicle) => {
            if (result.indexOf(vehicle.make) === -1) {
                result.push(vehicle.make);
            }
        });

    return delayResponse(Promise.resolve(result.sort()), 150);
}

export async function getModels(year: number, make: string): Promise<string[]> {
    const result: string[] = [];
    const vehicles: IVehicle[] = await makeVehiclesPromise();

    vehicles
        .filter((x) => x.year === year && x.make === make)
        .forEach((vehicle) => {
            if (result.indexOf(vehicle.model) === -1) {
                result.push(vehicle.model);
            }
        });

    return delayResponse(Promise.resolve(result.sort()), 150);
}

export async function getVehicles(year: number, make: string, model: string): Promise<IVehicle[]> {
    const vehicles: IVehicle[] = await makeVehiclesPromise();
    const result = vehicles.filter((x) => x.year === year && x.make === make && x.model === model);

    return delayResponse(Promise.resolve(result.sort()), 150);
}

export function getVehicleByVin(vin: string): Promise<IVehicle> {
    const vinValue = vin.trim();

    const vehicle = vehicles.find((x) => x.model === 'Focus S');

    if (vinValue === '' || vinValue === 'error' || !vehicle) {
        return error('Page Not Found');
    }

    return Promise.resolve(vehicle);
}

export function getUserVehicles(): Promise<IVehicle[]> {
    return Promise.resolve(clone(userVehicles));
}

export function addUserVehicles(vehicleId: number): Promise<void> {
    const index = userVehicles.findIndex((x) => x.id === vehicleId);
    const vehicle = vehicles.find((x) => x.id === vehicleId);

    if (vehicle && index === -1) {
        userVehicles.push(vehicle);
    }

    return delayResponse(Promise.resolve());
}

export function removeUserVehicles(vehicleId: number): Promise<void> {
    const index = userVehicles.findIndex((x) => x.id === vehicleId);

    if (index !== -1) {
        userVehicles.splice(index, 1);
    }

    return delayResponse(Promise.resolve());
}
