import { version } from '../../package.json';
import { Router } from 'express';
import task from './task';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/task', task);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
