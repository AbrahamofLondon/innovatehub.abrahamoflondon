// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, enquiryType, message } = req.body;
    
    // TODO: Add your email sending logic here
    console.log('Contact form submission:', { name, email, subject, enquiryType, message });
    
    // Redirect to thank-you page
    res.redirect(302, '/thank-you');
  } catch (error) {
    console.error('Contact form error:', error);
    res.redirect(302, '/contact?error=submission_failed');
  }
}