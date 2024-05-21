interface Profile {
    id: number,
    description: string,
    url : string

}
const profiles: Profile[] = [
    {
        id: 1,
        description: 'description of a driver with a vehicle',
        url : 'driver-with-vehicle'
    
    },
    {
        id: 2,
        description: 'description of a driver without a vehicle',
        url : 'driver-only'
    
    },
    {
        id: 3,
        description: 'description of a hotel-type subscriber',
        url : 'hotel-type'
    
    },
    {
        id: 4,
        description: 'description of a transport-agency type subscriber',
        url : 'transport-agency'
    
    },
    {
        id: 5,
        description: 'description of a vehicle-company type subscriber',
        url : 'driver-with-vehicle'
    
    }
]

export default profiles