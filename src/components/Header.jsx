import React, { useEffect, useState } from 'react'
import { navigate } from '../router'
const A='/assets/'
const nav=[['About','/about'],['Services','/services'],['Process','/process'],['Industries','/industries'],['Platforms','/platforms']]

function Header(){
 const [open,setOpen]=useState(false)
 useEffect(()=>{ const close=()=>setOpen(false); window.addEventListener('popstate',close); return()=>window.removeEventListener('popstate',close)},[])
 return <header className="site-header" id="siteHeader">
   <div className="container nav-wrap">
    <a href="/" className="wordmark" aria-label="Synertrix home" onClick={e=>{e.preventDefault();navigate('/')}}><img src={A+'Logos/LOGOS_MAIN-06.png'} alt="Synertrix" width="150" height="58"/></a>
    <button className={'menu-toggle'+(open?' active':'')} id="menuToggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span></span><span></span><span></span></button>
    <nav className={'main-nav'+(open?' open':'')} id="mainNav" aria-label="Main navigation">
      {nav.map(([label,path])=><a key={path} href={path} onClick={e=>{e.preventDefault();setOpen(false);navigate(path)}}>{label}</a>)}
      <a href="/contact" className="nav-contact" onClick={e=>{e.preventDefault();setOpen(false);navigate('/contact')}}>Talk to us <span>↗</span></a>
    </nav>
   </div>
 </header>
}

export default Header
