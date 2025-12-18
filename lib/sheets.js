/**
 * Google Sheets API for form submissions
 * Submissions will be sent to Google Sheets via Next.js API route
 */
export async function submitToSheet(type, data) {
    try {
        // Prepare the form data
        const formData = formatDataForEmail(type, data);

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.result === 'success') {
            return { success: true, message: 'Submission received' };
        } else {
            return { success: false, error: 'Submission failed' };
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}



function formatDataForEmail(type, data) {
    const timestamp = new Date().toLocaleString();

    switch (type) {
        case 'waitlist':
            return {
                'Form Type': 'Waitlist Signup',
                'Email': data.email,
                'Submitted At': timestamp,
            };

        case 'newsletter':
            return {
                'Form Type': 'Newsletter Subscription',
                'Email': data.email,
                'Submitted At': timestamp,
            };

        case 'group-join':
            return {
                'Form Type': 'Group Join Request',
                'Full Name': data.fullName,
                'Phone': data.phone,
                'Email': data.email,
                'Date of Birth': data.dateOfBirth,
                'Date Born Again': data.dateBornAgain,
                'Department': data.department,
                'Has Experience': data.hasExperience,
                'Note': data.note || 'N/A',
                'Submitted At': timestamp,
            };

        case 'contact':
            return {
                'Form Type': 'Contact Form',
                'Name': data.name,
                'Email': data.email,
                'Subject': data.subject || 'General Inquiry',
                'Message': data.message,
                'Submitted At': timestamp,
            };

        case 'prayer-request':
            return {
                'Form Type': 'Prayer Request',
                'Name': data.name,
                'Email': data.email || 'Not provided',
                'Prayer Request': data.request,
                'Submitted At': timestamp,
            };

        default:
            return {
                'Form Type': type,
                ...data,
                'Submitted At': timestamp,
            };
    }
}
