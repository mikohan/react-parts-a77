/* eslint-disable import/prefer-default-export,class-methods-use-this */
// 1. Needs to implement Redux save vehicle
// 2. Place to show where vehicle will be shown
// 3. Method to store active vehicle to localstorage
// 4. Method to get from localstorage to Redux if exists

// application
import { IVehicle } from '~/interfaces/vehicle';
import { VehicleApi } from '~/api/base';
import {
    addUserVehicles,
    getMakes,
    getModels,
    getUserVehicles,
    getVehicleByVin,
    getVehicles,
    getYears,
    removeUserVehicles,
} from '~/fake-server/endpoints';

export class FakeVehicleApi extends VehicleApi {
    getYears(): Promise<number[]> {
        return getYears();
    }

    getMakes(year: number): Promise<string[]> {
        return getMakes(year);
    }

    getModels(year: number, make: string): Promise<string[]> {
        return getModels(year, make);
    }

    getVehicles(year: number, make: string, model: string): Promise<IVehicle[]> {
        return getVehicles(year, make, model);
    }

    getVehicleByVin(vin: string): Promise<IVehicle> {
        return getVehicleByVin(vin);
    }

    getUserVehicles(): Promise<IVehicle[]> {
        return getUserVehicles();
    }

    addUserVehicle(vehicleId: number): Promise<void> {
        return addUserVehicles(vehicleId);
    }

    removeUserVehicle(vehicleId: number): Promise<void> {
        return removeUserVehicles(vehicleId);
    }
}
