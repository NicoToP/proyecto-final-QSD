import { app } from './app.js'
import { connectDB } from './database/mongo.js'
import { PORT } from './config/db.config.js'
import './libs/initialSetup.js'

connectDB()
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
