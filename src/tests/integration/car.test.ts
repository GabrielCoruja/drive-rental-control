import * as request from 'supertest';

import app from '../../application/app';
import CarModel from '../../infraestructure/persistence/database/models/CarModel';
import { cars, carsByBrand, carsByColor, carsByBrandAndColor } from '../mocks/carMock';

describe('Car routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET/', () => {
    it('Return get all cars', async () => {
      const carsBuild = cars.map((carMock) => CarModel.build(carMock));
      jest.spyOn(CarModel, 'findAll').mockResolvedValueOnce(carsBuild);

      const response = await request(app).get('/cars');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(cars);
    });

    it('Return get all cars by color', async () => {
      const carsBuild = carsByColor.map((carMock) => CarModel.build(carMock));
      jest.spyOn(CarModel, 'findAll').mockResolvedValueOnce(carsBuild);

      const response = await request(app).get('/cars?color=red');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(carsByColor);
    });

    it('Return get all cars by brand', async () => {
      const carsBuild = carsByBrand.map((carMock) => CarModel.build(carMock));
      jest.spyOn(CarModel, 'findAll').mockResolvedValueOnce(carsBuild);

      const response = await request(app).get('/cars?brand=Chevrolet');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(carsByBrand);
    });

    it('Return get all cars by color and brand', async () => {
      const carsBuild = carsByBrandAndColor.map((carMock) => CarModel.build(carMock));
      jest.spyOn(CarModel, 'findAll').mockResolvedValueOnce(carsBuild);

      const response = await request(app).get('/cars?color=red&brand=Chevrolet');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(carsByBrandAndColor);
    });
  });

  describe('GET/ id', () => {
    it('Return get one car when find', async () => {
      const carBuild = CarModel.build(cars[0]);
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(carBuild);

      const response = await request(app).get('/cars/AAA-1111');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(cars[0]);
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
      const carBuild = CarModel.build(cars[0]);
      jest.spyOn(CarModel, 'create').mockResolvedValueOnce(carBuild);

      const response = await request(app).post('/cars').send(cars[0]);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(cars[0]);
    });
  });

  describe('PUT/', () => {
    it('Return no car when not found', async () => {
      jest.spyOn(CarModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).put('/cars/AAA-8888').send(cars[0]);

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
