import 'dotenv/config';
import app from './app';


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})
