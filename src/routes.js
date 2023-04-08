import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import SessionController from './controllers/SessionController'
import HouseControler from './controllers/HouseControler'
import DashboardController from './controllers/DashboardController'
import ReserveController from './controllers/ReserveController'

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.post('/houses', upload.single('thumbnail'), HouseControler.store)
routes.get('/houses', HouseControler.index)
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseControler.update)
routes.delete('/houses', HouseControler.destroy)


routes.get('/dashboard', DashboardController.show)

routes.post('/houses/:house_id/reserve', ReserveController.store)
routes.get('/reserves', ReserveController.index)
routes.delete('/reserves/cancel', ReserveController.destroy)
 

export default routes