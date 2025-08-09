import React from 'react'

export default function CountryCard({ country }) {
  // destructure nested props
  const { name, capital, region, population, flags } = country
  const commonName = name?.common || '—'
  return (
    <article className="bg-gradient-to-br from-slate-800/70 to-slate-900/40 p-5 rounded-xl shadow-lg border border-slate-700 hover:shadow-slate-500/20 hover:scale-[1.02] transition-transform duration-200">
      <img src={flags?.png} alt={`${commonName} flag`} className="w-20 h-14 object-cover rounded-md flex-none" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{commonName}</h3>
        <p className="text-sm text-slate-400">Capital: {capital ? capital[0] : '—'}</p>
        <p className="text-sm text-slate-400">Region: {region}</p>
      </div>
      <div className="text-right">
        <div className="text-sm text-slate-400">Population</div>
        <div className="font-medium">{population?.toLocaleString() ?? '—'}</div>
      </div>
    </article>
  )
}