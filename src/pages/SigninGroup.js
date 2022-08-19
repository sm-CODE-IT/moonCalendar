import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Signin from './Signin'
import Signin_3 from './Signin_3'

const SigninGroup = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' })

  return (
    <>
      {isDesktop && <Signin />}
      {isMobile && <Signin_3 />}
    </>
  )
}
export default SigninGroup
