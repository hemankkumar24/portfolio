import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const allowedOrigin = 'https://hemank.vercel.app';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
app.use(cors({origin: allowedOrigin})); 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.post('/contact_submit', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received data:', { name, email, message });

  try 
    {
      const { data, error } = await supabase
      .from('form_data').insert([{ Name:name, Email:email, Message:message }]);

      if (error)
      {
        console.error('Supabase insert error:', error);
        throw error;
      }
      res.status(200).json({ success: true, msg: 'Data received successfully' });
    } 
    catch (err) 
    {
      console.log(err);
      res.status(500).json({ success: false, msg: 'Server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});