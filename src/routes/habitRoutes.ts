import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Habits',
  })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'got one habit' })
})

router.post('/', (req, res) => {
  res.status(201).json({ message: 'created habit' })
})

router.delete('/', (req, res) => {
  res.status(201).json({ message: 'dete' })
})

router.post('/:id/complete', (req, res) => {
  res.status(201).json({ message: 'complete habit' })
})

export default router
