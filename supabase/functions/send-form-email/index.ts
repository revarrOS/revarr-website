import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface FormSubmission {
  type: 'partner_registration' | 'partner_apply' | 'blog_subscription';
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: FormSubmission = await req.json();

    const emailSubjects: Record<FormSubmission['type'], string> = {
      partner_registration: 'New Partner Registration - revARR',
      partner_apply: 'New Partner Application - revARR',
      blog_subscription: 'New Blog Subscription - revARR'
    };

    const subject = emailSubjects[formData.type];

    let emailBody = `
New ${formData.type.replace('_', ' ')} submission from revARR website:

Email: ${formData.email}
`;

    if (formData.name) emailBody += `Name: ${formData.name}\n`;
    if (formData.company) emailBody += `Company: ${formData.company}\n`;
    if (formData.phone) emailBody += `Phone: ${formData.phone}\n`;
    if (formData.message) emailBody += `\nMessage:\n${formData.message}\n`;

    emailBody += `\nSubmitted at: ${new Date().toISOString()}\n`;

    console.log('Form submission received:', {
      type: formData.type,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        note: 'Email notifications will be configured with SMTP settings'
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});