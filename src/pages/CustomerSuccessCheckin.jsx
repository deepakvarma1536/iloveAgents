import React, { useState } from "react";

export default function CustomerSuccessCheckin() {
    const [formData, setFormData] = useState({
        customerName: "",
        contactName: "",
        recentActivity: "",
        usageMilestone: "",
        csmGoal: "",
        tone: "",
    });

    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const generateEmail = () => {
        const generated = `
Hi ${formData.contactName},

I noticed your team at ${formData.customerName} recently ${formData.recentActivity}.

Congratulations on reaching ${formData.usageMilestone} 🎉

I’d love to help you continue progressing toward your goals, especially around ${formData.csmGoal}.

Let me know if you'd like to explore additional workflows or best practices.

Best regards,
Customer Success Team
`;

        setEmail(generated);
    };

    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Customer Success Check-In Generator
            </h1>

            <div className="space-y-4">

                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <textarea
                    name="recentActivity"
                    placeholder="Recent Activity"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="usageMilestone"
                    placeholder="Usage Milestone"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <textarea
                    name="csmGoal"
                    placeholder="CSM Goal"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="tone"
                    placeholder="Tone"
                    className="w-full border p-3 rounded"
                    onChange={handleChange}
                />

                <button
                    onClick={generateEmail}
                    className="bg-black text-white px-6 py-3 rounded"
                >
                    Generate Email
                </button>
            </div>

            {email && (
                <div className="mt-8 border rounded p-6 whitespace-pre-wrap">
                    {email}
                </div>
            )}
        </div>
    );
}