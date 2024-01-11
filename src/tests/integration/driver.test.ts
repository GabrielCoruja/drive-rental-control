import * as request from 'supertest';

import app from '../../application/app';
import DriverModel from '../../infraestructure/persistence/database/models/DriverModel';
import { drivers, driversByName, oneDriver, createDriver  } from '../mocks/driverMock';

describe('Driver routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET/', () => {
    it('Return get all drivers by name', async () => {
      const driversBuild = driversByName.map((driverMock) => DriverModel.build(driverMock));
      jest.spyOn(DriverModel, 'findAll').mockResolvedValueOnce(driversBuild);

      const response = await request(app).get('/drivers?fullname=Silva');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(driversByName);
    });
  });

  describe('GET/ id', () => {
    it('Return get one driver when find', async () => {
      const driverBuild = DriverModel.build(oneDriver);
      jest.spyOn(DriverModel, 'findByPk').mockResolvedValueOnce(driverBuild);

      const response = await request(app).get('/drivers/1');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(oneDriver);
    });

    it('Return no driver when not found', async () => {
      jest.spyOn(DriverModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).get('/drivers/999');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Driver not found' });
    });
  });

  describe('POST/', () => {
    it('Return create driver', async () => {
      const driverBuild = DriverModel.build(oneDriver);
      jest.spyOn(DriverModel, 'create').mockResolvedValueOnce(driverBuild);

      const response = await request(app).post('/drivers').send(createDriver);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(oneDriver);
    });
  });

  describe('PUT/', () => {
    it('Return no driver when not found', async () => {
      jest.spyOn(DriverModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).put('/drivers/999').send(oneDriver);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Driver not found' });
    });
  });

  describe('DELETE/', () => {
    it('Return no driver when not found', async () => {
      jest.spyOn(DriverModel, 'findByPk').mockResolvedValueOnce(null);

      const response = await request(app).delete('/drivers/999');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: 'Driver not found' });
    });
  });
});
