module AdminSection.ViewModels
{
    export class IStarshipVM extends Common.ViewModels.IBaseVM
    {
        Model: string;
        Manufacturer: string;
        ShipLength: number;
        Crew: number;
        Passengers: number;
        CargoCapacity: number;
        Consumables: number;
        MGLT: number;
        HyperdriveRating: string;
        MaxAtmospheringSpeed: string;
        StarshipClass: string;
    }
}