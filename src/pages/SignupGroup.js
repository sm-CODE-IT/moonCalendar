import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Signup from './Signup'
import Signup_3 from './Signup_3'

const SignupGroup = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' })

  return (
    <>
      {isDesktop && <Signup />}
      {isMobile && <Signup_3 />}
    </>
  )
}
export default SignupGroup
