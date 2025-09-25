import express, {Application} from 'express'
import routeUser from "../routes/user";
import routeCatalogos from "../routes/catalogos"
import rRegistros from "../routes/registros"
import rBuscador from "../routes/buscador"
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser'
import { verifyToken } from '../middlewares/auth';

class Server {

    private app: Application
    private port: string


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.router();
        this.DBconnetc();
        this.listen();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicación se esta corriendo exitosamente en el puerto => "+ this.port)
        })
    }

    router(){
          this.app.use(routeUser);
          this.app.use(routeCatalogos);
          this.app.use(rRegistros);
          this.app.use(rBuscador);
    }


    midlewares(){
        //Parseo BOdy
        this.app.use(express.json())
         this.app.use(cors({
            origin: 'https://bibliolex.gob.mx',
            credentials: true
        }))
        this.app.use(cookieParser());
        this.app.use('/storage', express.static(path.join(process.cwd(), 'storage')));
        this.app.use(function (req, res, next) {
            const publicPaths = [
                '/api/user/login',
                '/api/buscador',
            ];
            const isPublic = publicPaths.some(path => req.originalUrl.startsWith(path));
            if (isPublic) {
                return next(); 
            }
            return verifyToken(req, res, next); 
        });
    }

    async DBconnetc(){
        try {
            console.log("Conexion de DB exitoso");

        } catch (error) {
            console.log("Conexion de DB errorena => "+error);

        }
    }


}


export default Server
