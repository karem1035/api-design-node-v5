import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.ts'
import { z } from 'zod'

const createHabitSchema = z.object({
  name: z.string(),
  id: z.number().min(50),
  code: z.number().optional(),
})

const completeParamsSchema = z.object({
  id: z.string().max(2),
})

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Habits',
  })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'got one habit' })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
  res.status(201).json({ message: 'created habit' })
})

router.delete('/', (req, res) => {
  res.status(201).json({ message: 'dete' })
})

router.post(
  '/:id/complete',
  validateParams(completeParamsSchema),
  validateBody(createHabitSchema),
  (req, res) => {
    res.status(201).json({ message: 'complete habit' })
  }
)

export default router
