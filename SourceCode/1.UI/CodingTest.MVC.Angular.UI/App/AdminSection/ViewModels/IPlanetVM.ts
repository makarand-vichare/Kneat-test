module AdminSection.ViewModels
{
    export class IPlanetVM extends Common.ViewModels.IBaseVM
    {
        Model: string;
        RotationPeriod: number;
        Diameter: number;
        Gravity: string;
        Population: number;
        Climate: string;
    }
}