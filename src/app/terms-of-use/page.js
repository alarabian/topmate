import PageCover from '@/components/common/cover/PageCover'
import TermsUse from '@/components/terms-of-use/TermsUse'
import React from 'react'

const page = () => {
  return (
    <>
      <PageCover title="user agreement" />
      <TermsUse />
    </>
  )
}

export default page