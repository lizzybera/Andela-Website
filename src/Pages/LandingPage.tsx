import React from 'react'
import Hero from '../components/static/Hero'
import AfterHero from '../components/reUse/AfterHero'
import AndelaLaunches from '../components/reUse/AndelaLaunches'
import BuildYourTeam from '../components/reUse/BuildYourTeam'
import EmpowerYour from '../components/reUse/EmpowerYour'
import BrilliantMinds from '../components/reUse/BrilliantMinds'
import WelcomeTo from '../components/reUse/WelcomeTo'
import Anywher from '../components/reUse/Anywher'
import NearFooter from '../components/reUse/NearFooter'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AfterHero />
      <AndelaLaunches />
      <BuildYourTeam />
      <EmpowerYour />
      <BrilliantMinds />
      <WelcomeTo />
      <Anywher />
      <NearFooter />
    </div>
  )
}

export default LandingPage
