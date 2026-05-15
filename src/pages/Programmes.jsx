import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProgramCard from '../components/cards/ProgramCard.jsx'

export default function Programmes({ onEnquiryClick }) {
	return (
		<div className="container-responsive py-10">
			<Helmet>
				<title>Programmes — Jadhavar College of Law, Pune</title>
				<meta name="description" content="Explore LL.B, LL.M, and certificate programmes at Jadhavar College of Law, Pune." />
				<link rel="canonical" href="https://www.jadhavar-law.edu.in/programmes" />
			</Helmet>
			<h1 className="text-3xl font-bold">Academic Programmes</h1>
			<p className="mt-3 max-w-3xl">Our programmes blend doctrinal learning with clinical exposure through moots, internships and legal aid.</p>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
				<ProgramCard title="B.A. LL.B (5 years)" duration="5 years" description="Integrated honours degree with clinical internships and moot courts." onEnquire={onEnquiryClick} />
				<ProgramCard title="LL.B (3 years)" duration="3 years" description="Intensive professional program for graduates." onEnquire={onEnquiryClick} />
				<ProgramCard title="LL.M (1–2 years)" duration="1–2 years" description="Specializations include Constitutional, Corporate, Criminal Justice, Human Rights." onEnquire={onEnquiryClick} />
				<ProgramCard title="Certificate: Cyber Law" duration="6 months" description="Foundations of cybercrime, IT Act, and compliance." onEnquire={onEnquiryClick} />
				<ProgramCard title="Certificate: IPR" duration="6 months" description="Patents, trademarks, copyrights, and enforcement." onEnquire={onEnquiryClick} />
				<ProgramCard title="Certificate: ADR & Mediation" duration="6 months" description="Negotiation, mediation, and arbitration practice." onEnquire={onEnquiryClick} />
			</div>
		</div>
	)
}


