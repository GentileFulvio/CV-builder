import React, { FC } from 'react'

import {
  Wrapper,
  FullName,
  JobTitle,
  Sidebar,
  Email,
  Address,
  Phone,
  Main
} from './TemplateOne.style'

const TemplateOne: FC = (props: any) => {
  return (
    <Wrapper>
      <Sidebar>
        <h3>Contact Informations</h3>
        <Email>{ props.getEmail ? `E-mail: ${props.getEmail}` : ''}</Email>
        <Address>{ props.getAddress ? `Address: ${props.getAddress}` : ''}</Address>
        <Phone>{ props.getPhone ? `Phone: ${props.getPhone}` : ''}</Phone>
        <h3>Lingue</h3>
        <h3>Competenze</h3>
      </Sidebar>
      <Main>
        <FullName>{ props.getFirstName + ' ' + props.getLastName}</FullName>
        <JobTitle>{ props.getJobTitle }</JobTitle>
      </Main>
    </Wrapper>
  )
}

export default TemplateOne