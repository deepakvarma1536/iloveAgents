const customerSuccessCheckin = {
    id: "customer-success-checkin",

    name: "Customer Success Check-In Email Generator",

    description:
        "Generates warm and personalized customer success check-in emails using customer activity and milestones.",

    category: "Sales",

    inputs: [
        {
            label: "Customer Name",
            key: "customerName",
            type: "text",
            placeholder: "Acme Corp",
        },

        {
            label: "Contact Name",
            key: "contactName",
            type: "text",
            placeholder: "Sarah",
        },

        {
            label: "Recent Activity",
            key: "recentActivity",
            type: "textarea",
            placeholder: "Completed onboarding for 120 employees",
        },

        {
            label: "Usage Milestone",
            key: "usageMilestone",
            type: "text",
            placeholder: "Reached 10,000 API calls",
        },

        {
            label: "CSM Goal",
            key: "csmGoal",
            type: "textarea",
            placeholder: "Encourage feature adoption",
        },

        {
            label: "Tone",
            key: "tone",
            type: "text",
            placeholder: "Warm and professional",
        },
    ],

    prompt: (data) => `
You are an expert Customer Success Manager.

Generate a warm, personalized customer check-in email.

Customer Name: ${data.customerName}
Contact Name: ${data.contactName}
Recent Activity: ${data.recentActivity}
Usage Milestone: ${data.usageMilestone}
Goal: ${data.csmGoal}
Tone: ${data.tone}

Instructions:
- Keep the email human and natural
- Avoid robotic phrasing
- Mention milestones naturally
- Include encouragement
- Add a soft CTA
- Keep it concise
`,
};

export default customerSuccessCheckin;