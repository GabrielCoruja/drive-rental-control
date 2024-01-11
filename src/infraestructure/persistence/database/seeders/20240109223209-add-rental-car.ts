import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('rental_cars', [
      {
        license_plate_id: 'ABC-1234',
        driver_id: 1,
        start_date: new Date(),
        end_date: new Date(),
        description: 'Rental car 1',
      },
      {
        license_plate_id: 'DEF-5678',
        driver_id: 2,
        start_date: new Date(),
        end_date: null,
        description: 'Rental car 1',
      },
      {
        license_plate_id: 'GHI-9012',
        driver_id: 3,
        start_date: new Date(),
        end_date: new Date(),
        description: 'Rental car 1',
      },
      {
        license_plate_id: 'JKL-3456',
        driver_id: 1,
        start_date: new Date(),
        end_date: null,
        description: 'Rental car 1',
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('rental_cars', {});
  }
};
