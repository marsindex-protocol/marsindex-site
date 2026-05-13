import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body
    const { data, error } = await supabase.from('waitlist').insert([{ email }])
    if (error) return res.status(400).json({ error: error.message })
    res.status(200).json({ message: 'Successfully joined the waitlist' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}