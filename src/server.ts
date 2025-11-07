import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRouters from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

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
app.use('/api/habits', habitRoutes)

export { app }
export default app
