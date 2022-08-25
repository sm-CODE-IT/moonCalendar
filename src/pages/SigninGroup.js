import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Signin from './Signin'
import Signin_3 from './Signin_3'

const SigninGroup = ({ toggle }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' })

  return (
    <div className="SigninGroup">
      {isDesktop && <Signin toggle={toggle} />}
      {isMobile && <Signin_3 toggle={toggle} />}
    </div>
  )
}
export default SigninGroup
