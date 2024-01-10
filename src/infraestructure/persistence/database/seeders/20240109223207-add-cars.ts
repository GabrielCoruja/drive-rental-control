import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('cars', [
      {
        license_plate_id: 'ABC-1234',
        name: 'Corsa',
        brand: 'Chevrolet',
        color: 'red',
      },
      {
        license_plate_id: 'DEF-5678',
        name: 'Opala',
        brand: 'Chevrolet',
        color: 'gray',
      },
      {
        license_plate_id: 'GHI-9012',
        name: 'Chevette',
        brand: 'Chevrolet',
        color: 'blue',
      },
      {
        license_plate_id: 'JKL-3456',
        name: 'Monza',
        brand: 'Chevrolet',
        color: 'red',
      },
      {
        license_plate_id: 'MNO-7890',
        name: 'Fusca',
        brand: 'Volkswagen',
        color: 'gray',
      },
      {
        license_plate_id: 'PQR-1234',
        name: 'Brasilia',
        brand: 'Volkswagen',
        color: 'blue',
      },
      {
        license_plate_id: 'STU-5678',
        name: 'Kombi',
        brand: 'Volkswagen',
        color: 'red',
      },
      {
        license_plate_id: 'VWX-9012',
        name: 'Corcel',
        brand: 'Ford',
        color: 'gray',
      },
      {
        license_plate_id: 'YZA-3456',
        name: 'Maverick',
        brand: 'Ford',
        color: 'blue',
      },
      {
        license_plate_id: 'BCD-7890',
        name: 'Fiesta',
        brand: 'Ford',
        color: 'green',
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('cars', {});
  }
};
