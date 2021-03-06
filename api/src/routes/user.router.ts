import {Router} from 'express';
const router = Router();
import passport from 'passport';
import { isAuthenticated } from '../lib/Autenticated';
import { upload } from '../lib/Upload';

import * as UserController from '../controllers/user.controller';

router.post('/login', passport.authenticate('local'), UserController.login);

router.get('/login', UserController.verifyLogin);

router.get('/avatar/:username', UserController.getAvatar);

router.put('/avatar',isAuthenticated, upload, UserController.updateAvatar);

export default router;