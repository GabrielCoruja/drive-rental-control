import * as request from 'supertest';

import app from '../../application/app';
import CarModel from '../../infraestructure/persistence/database/models/CarModel';
import carsMock from '../mocks/carMock';

describe('Car routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET/', () => {
    it('Return get all cars', async () => {
      const carsBuild = carsMock.map((carMock) => CarModel.build(carMock));
      jest.spyOn(CarModel, 'findAll').mockResolvedValueOnce(carsBuild);

      const response = await request(app).get('/cars');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(carsMock);
    });
  });

  describe('GET/ id', () => {
    it('Return get one car when find', async () => {
      const carBuild = CarModel.build(carsMock[0]);
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(carBuild);

      const response = await request(app).get('/cars/AAA-1111');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(carsMock[0]);
    });

    it('Return no car when not found', async () => {
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).get('/cars/AAA-8888');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Car not found' });
    });
  });

  describe('POST/', () => {
    it('Return create car', async () => {
      const carBuild = CarModel.build(carsMock[0]);
      jest.spyOn(CarModel, 'create').mockResolvedValueOnce(carBuild);

      const response = await request(app).post('/cars').send(carsMock[0]);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(carsMock[0]);
    });
  });

  describe('PUT/', () => {
    it('Return no car when not found', async () => {
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).put('/cars/AAA-8888').send(carsMock[0]);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Car not found' });
    });
  });

  describe('DELETE/', () => {
    it('Return no car when not found', async () => {
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).delete('/cars/AAA-8888');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Car not found' });
    });
  });
});
