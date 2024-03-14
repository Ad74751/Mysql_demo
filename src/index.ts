import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import db from './database/db';
import compression from 'compression';

const app: express.Application = express();
const port: Number = Number(process.env.PORT) || 8000;

app.use(compression());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/../ui/views'));

app.get('/', (req: express.Request, res: express.Response) => {
    db.query("SELECT  *  FROM SuperMarketSales LIMIT 9", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.render('home', { data: data });
    });
});
app.get('/signin',(req: express.Request, res: express.Response) => {
        res.render('login');
});

app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
});