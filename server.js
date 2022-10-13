console.clear();
import connectDB from './server/config/db.js';
import './server/config/env.js';
import httpServer from './server/config/http.js';

const bootstrap = async () => {
    await connectDB(process.env.URI);

    httpServer.listen(process.env.PORT, () => {
        console.log(`Estoy flama en el puerto: ${process.env.PORT}`);
    });
};

bootstrap();