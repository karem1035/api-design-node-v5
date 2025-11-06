import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRouters from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'

const app = express()

app.get('/health', (req, res) => {
  res
    .json({
      message: 'hello',
    })
    .status(200)
})

app.post('/cake', (req, res) => {
  res.send('ok')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRouters)
app.use('/api/habit', habitRoutes)

export { app }
export default app
