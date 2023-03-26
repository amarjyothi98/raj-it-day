import React from 'react'
import './footer.css'
import { userLang, langProvider } from '../language/languageProvider'
export default function Footer() {
  return (
    <>
      <div className="text-center p-3 border-top">

        <div className=" text-muted">
          {langProvider[userLang].home.footerText}
        </div>
      </div>
    </>
  )
}
