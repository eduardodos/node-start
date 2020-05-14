import { Router } from 'express';

const routes = Router();

routes.get('/', (_req, res) => res.json({ message: 'Acredite em seu potencial, vc é lgal' }));

export default routes;
