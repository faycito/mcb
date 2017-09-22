import * as express from 'express';

import { BaseRoutes } from './../0.crosswalk/extends/base.route';
import { DogController } from './../2.controllers/dog.controller';

let router = express.Router();

export class DogRoutes extends BaseRoutes {

	constructor() {

		super('dogs', DogController);
	}


}

Object.seal(DogRoutes);
