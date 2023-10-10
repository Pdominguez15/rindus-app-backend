import '@/config';

import app, { sessionController } from '@/bootstrap';
import { logger } from '@/config/logger';

app.get('/', async (_req, res) => {
  res.send('Hello World!');
});

app.post('/login', async (req, res) => sessionController.login(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
