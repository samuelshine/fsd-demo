import React from 'react'
import CountryCard from './CountryCard'

export default function CountryList({ countries }) {
  if (!countries || countries.length === 0) {
    return <div className="text-slate-400">No countries to show.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map(c => (
        <CountryCard key={c.cca2 || c.name?.common} country={c} />
      ))}
    </div>
  )
}