import React from 'react'
import { useForm } from 'react-hook-form'

export default function EnquiryModal({ open, onClose }) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm()

	async function onSubmit(data) {
		const payload = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			program: data.program || 'MCA',
			message: data.message || '',
			consent: !!data.consent,
			utm: {
				source: new URLSearchParams(window.location.search).get('utm_source'),
				medium: new URLSearchParams(window.location.search).get('utm_medium'),
				campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
			}
		}

		const res = await fetch('/api/enquiry', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		})

		if (res.ok) {
			alert('Thank you! Your MCA admission enquiry has been received.')
			reset()
			onClose?.()
		} else {
			const error = await res.json().catch(() => ({}))
			alert(error?.message || 'Submission failed. Please try again.')
		}
	}

	React.useEffect(() => {
		function onEsc(e) {
			if (e.key === 'Escape') onClose?.()
		}
		if (open) window.addEventListener('keydown', onEsc)
		return () => window.removeEventListener('keydown', onEsc)
	}, [open, onClose])

	if (!open) return null

	return (
		<div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/40" onClick={onClose} />

			<div className="relative bg-white rounded-2xl max-w-xl w-full p-6 mx-4 shadow-xl">
				{/* Header */}
				<div className="flex items-center justify-between">
					<h3 className="text-2xl font-semibold">
						MCA & MBA Admission Enquiry
					</h3>
					<button
						aria-label="Close"
						onClick={onClose}
						className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/30"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 8.586l4.95-4.95 1.414 1.415L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.415L10 8.586z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">

					{/* Name */}
					<div>
						<input
							aria-invalid={!!errors.name}
							{...register('name', { required: 'Full name is required' })}
							placeholder="Full Name *"
							className="w-full p-3 border rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
						/>
						{errors.name && (
							<p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
						)}
					</div>

					{/* Email */}
					<div>
						<input
							aria-invalid={!!errors.email}
							{...register('email', {
								required: 'Email address is required',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Enter a valid email address'
								}
							})}
							placeholder="Email Address *"
							className="w-full p-3 border rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
						/>
						{errors.email && (
							<p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
						)}
					</div>

					{/* Phone */}
					<div>
						<input
							aria-invalid={!!errors.phone}
							{...register('phone', {
								required: 'Mobile number is required',
								pattern: {
									value: /^[0-9]{10,15}$/,
									message: 'Enter valid 10–15 digit mobile number'
								}
							})}
							placeholder="Mobile / WhatsApp Number *"
							className="w-full p-3 border rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
						/>
						{errors.phone && (
							<p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
						)}
					</div>

					{/* Program */}
					<select
						{...register('program')}
						className="w-full p-3 border rounded-lg border-gray-300 focus:border-primary focus:ring-primary"
					>
						<option value="MCA">MCA (Master of Computer Applications)</option>
						<option value="MBA">MBA (Master of Business Administration)</option>
						
					</select>

					{/* Message */}
					<textarea
						{...register('message')}
						placeholder="Your query about MCA admission (optional)"
						className="w-full p-3 border rounded-lg border-gray-300 focus:border-primary focus:ring-primary min-h-[100px]"
					/>

					{/* Consent */}
					<label className="flex items-start gap-2 text-sm">
						<input
							{...register('consent', { required: true })}
							type="checkbox"
							className="mt-1"
						/>
						<span>
							I consent to be contacted regarding MCA admissions, counselling,
							fees and placement details, and I agree to the{' '}
							<a href="/privacy" className="underline">
								privacy policy
							</a>.
						</span>
					</label>
					{errors.consent && (
						<p className="text-sm text-red-600">
							Consent is required to proceed
						</p>
					)}

					{/* Actions */}
					<div className="flex justify-end gap-2 pt-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 rounded-lg border"
						>
							Cancel
						</button>
						<button
							disabled={isSubmitting}
							type="submit"
							className="px-4 py-2 bg-primary text-white rounded-lg"
						>
							{isSubmitting ? 'Submitting…' : 'Submit Enquiry'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
