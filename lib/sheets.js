/**
 * Web3Forms API for form submissions
 * Submissions will be sent directly to your email
 */
const WEB3FORMS_KEY = '7b55ae2b-ea92-4da8-88fb-4c1cdd274cb5';

/**
 * Submit form data via Web3Forms
 * @param {string} type - Type of submission: 'waitlist', 'newsletter', 'group-join', 'contact', 'prayer-request'
 * @param {object} data - Form data to submit
 * @returns {Promise<{success: boolean, message?: string, error?: string}>}
 */
export async function submitToSheet(type, data) {
    try {
        // Prepare the form data for Web3Forms
        const formData = {
            access_key: WEB3FORMS_KEY,
            subject: getSubjectLine(type),
            from_name: 'RCCG Covenant Chapel Website',
            ...formatDataForEmail(type, data),
        };

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            return { success: true, message: 'Submission received' };
        } else {
            return { success: false, error: result.message || 'Submission failed' };
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return { success: false, error: 'Network error. Please try again.' };
    }
}

function getSubjectLine(type) {
    const subjects = {
        'waitlist': '🔔 New Waitlist Signup - RCCG CCMZ',
        'newsletter': '📧 New Newsletter Subscription - RCCG CCMZ',
        'group-join': '👥 New Group Join Request - RCCG CCMZ',
        'contact': '📩 New Contact Message - RCCG CCMZ',
        'prayer-request': '🙏 New Prayer Request - RCCG CCMZ',
    };
    return subjects[type] || 'New Form Submission - RCCG CCMZ';
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
