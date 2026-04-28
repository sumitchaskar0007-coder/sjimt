import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Placements() {
	return (
		<div className="container-responsive py-10">
			<Helmet>
				<title>Placements — Jadhavar College of Law, Pune</title>
				<meta name="description" content="Placement statistics and recruiters for Jadhavar College of Law, Pune." />
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/placements" />
			</Helmet>
			<h1 className="text-3xl font-bold">Placements</h1>
			<div className="mt-4 grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl bg-white border p-5">
					<h2 className="font-semibold">Highlights</h2>
					<ul className="list-disc list-inside text-sm mt-2 space-y-1">
						<li>Top recruiters: Law firms, corporates, NGOs</li>
						<li>Internships from 1st year onwards</li>
						<li>Placement training & career services</li>
					</ul>
				</div>
				<div className="rounded-2xl bg-white border p-5">
					<h2 className="font-semibold">Recruiters</h2>
					<p className="text-sm mt-2 text-gray-700">List your recruiters here.</p>
				</div>
			</div>
		</div>
	)
}


