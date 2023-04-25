const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const port = process.env.PORT || 3001;

// Supabase setup
const supabaseUrl = 'your_supabase_url';
const supabaseKey = 'your_supabase_key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(express.json());

// API endpoints
app.post('/api/users', async (req, res) => {
    const { username } = req.body;
    try {
      // Check if the username is unique
      const { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .single();
  
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists.' });
      }
  
      // Insert a new user
      const { data: newUser, error } = await supabase
        .from('users')
        .insert([{ username, status: 'buying' }])
        .single();
  
      if (error) {
        throw error;
      }
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', details: error.message });
    }
  });
  
  app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      // Check if the provided status is valid
      if (status !== 'buying' && status !== 'selling') {
        return res.status(400).json({ message: 'Invalid status.' });
      }
  
      // Update the user's status
      const { data: updatedUser, error } = await supabase
        .from('users')
        .update({ status })
        .eq('id', id)
        .single();
  
      if (error) {
        throw error;
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user status', details: error.message });
    }
  });
  
  app.get('/api/users', async (req, res) => {
    try {
      const { data: users, error } = await supabase.from('users').select('*');
  
      if (error) {
        throw error;
      }
  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', details: error.message });
    }
  });
  

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
