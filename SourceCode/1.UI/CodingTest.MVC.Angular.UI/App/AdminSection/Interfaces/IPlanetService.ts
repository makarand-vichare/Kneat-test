module AdminSection.Interfaces
{
    export interface IPlanetService
    {
        GetByPage(page: number): ng.IPromise<any>;
    }
}