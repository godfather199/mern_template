import app from './app'
import {PORT} from './config/config'


// Database connection


// Start server
app.listen(PORT, () => {
  console.log(`Server started on ported: ${PORT}`);
});


