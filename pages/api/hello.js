// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs';


const handler = (req, res) => {
  if (req.query.error) throw new Error('Api error.')

  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler);
