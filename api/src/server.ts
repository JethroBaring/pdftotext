import express, { Request, Response } from 'express';
import { pdfToText } from 'text-from-pdf';
import upload from './upload';
import cors from 'cors'
const app = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('test')
})

app.post(
  '/pdftotext',
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      const text = await pdfToText(req.file?.path!);
      res.status(200).json({ result: text });
    } catch (error) {
      res.status(400).json({
        error: error
      })
    }
  }
);

app.listen(4000, () => {
  console.log('Listening on port 8008');
});
