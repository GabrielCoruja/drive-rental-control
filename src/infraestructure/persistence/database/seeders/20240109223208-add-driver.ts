import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('drivers', [
      {
        fullname: 'Lucas Silva',
        email: 'lucas.silva@email.com',
      },
      {
        fullname: 'João Nascimento',
        email: 'joao.nascimento@email.com',
      },
      {
        fullname: 'Maria Silva',
        email: 'maria.silva@email.com',
      },
      {
        fullname: 'Pedro Silva',
        email: 'pedro.silva@email.com',
      },
      {
        fullname: 'Pedro Nascimento',
        email: 'pedro.nascimento@email.com',
      },
    ], {});
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('drivers', {});
  }
};
