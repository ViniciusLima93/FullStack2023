import { Router } from "express";
import Joi from "joi";
import accoutsController from '../controllers/accounts'
import {validateAccountSchema, validateLoginSchema, validateUpdateAccountSchema, validateAuth} from './middlewares'
import calc from 'ms-commons/calc'


const router = Router ();

router.get('/accounts/',validateAuth, accoutsController.getAccounts);

router.get('/accounts/:id',validateAuth, accoutsController.getAccount);

router.patch('/accounts/:id',validateAuth,validateUpdateAccountSchema, accoutsController.setAccount);

router.post('/accounts/',validateAccountSchema, accoutsController.addAccount);

router.post('/accounts/login', validateLoginSchema,accoutsController.loginAccount);

router.post('accounts/logout', accoutsController.logoutAccount);

router.get('/somar/:val1/:val2', (req, res, next) => {
    const val1 = parseInt(`${req.params.val1}`);
    const val2 = parseInt(`${req.params.val2}`);
    const resultado = calc(val1, val2);
    res.json({resultado});
})

export default router;