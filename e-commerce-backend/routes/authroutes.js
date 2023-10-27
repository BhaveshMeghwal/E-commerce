import express from "express"
import {registerController, loginController, testController} from "../controller/authController.js"
import {isAdmin, requireSignIn} from "../middleware/authMiddleware.js"

//router object
 const router = express.Router()

 //routing
 //REGISTER || METHOD POST
 router.post('/register',registerController)

 //login || METHOD POST
 router.post('/login',loginController)

 // test rotes
 router.get('/test',requireSignIn, testController)

  // protected route user auth
  router.get('/user-auth',requireSignIn, (req,res)=>{{
    res.status(200).send({ok:true});
  }})

    // protected route admin auth
    router.get('/admin-auth',requireSignIn,isAdmin, (req,res)=>{{
      res.status(200).send({ok:true});
    }})

    

 export default router;