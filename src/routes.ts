import {Router} from 'express'
import { CreateDoctorsController } from './controllers/CreateDoctorsController'
import { CreateProductivityController } from './controllers/CreateProductivityController'
import { ListDoctorsController } from './controllers/ListDoctorsController'

const routes = Router()

routes.get('/doctors', new ListDoctorsController().list)
routes.post('/doctors', new CreateDoctorsController().create)
routes.post('/doctors/:doctor_id/productivities', new CreateProductivityController().create)


export default routes