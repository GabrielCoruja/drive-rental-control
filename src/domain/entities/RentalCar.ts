class RentalCar {
  constructor(
    public licensePlateId: string,
    public driverId: number,
    public startDate: Date,
    public endDate: Date | null,
    public description: string,
  ) { }
}

export default RentalCar;
