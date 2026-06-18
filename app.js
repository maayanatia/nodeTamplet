import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { requestLogger } from './utils/logger.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use('/api', routes);
app.use(express.static('public'));

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default app;
