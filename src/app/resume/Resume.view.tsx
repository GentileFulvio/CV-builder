import React, { FC } from 'react'
import { connect } from 'react-redux'
import { PDFDownloadLink } from '@react-pdf/renderer'

import { Wrapper, PageWrapper, Actions } from './Resume.style'
import Props from './Resume.model'
import TemplateOneView from '../templates/TemplateOne.view'
import FilePDF from '../PDF/PDF.view'


const Resume: FC<Props> = (props: any) => {

  const {
    getJobTitle,
    getFirstName,
    getLastName,
    getEmail,
    getPhone,
    getPostalCode,
    getCity,
    getAddress,
    getCountry,
    getDateOfBirth,
    getPlaceOfBirth,
    getJobDescription,
    getDrivingLicense,
    getNationality
  } = props

  const dataFromState: object = {
    getJobTitle: getJobTitle,
    getFirstName: getFirstName,
    getLastName: getLastName,
    getEmail: getEmail,
    getPhone: getPhone,
    getPostalCode: getPostalCode,
    getCity: getCity,
    getAddress: getAddress,
    getCountry: getCountry,
    getDateOfBirth: getDateOfBirth,
    getPlaceOfBirth: getPlaceOfBirth,
    getJobDescription: getJobDescription,
    getDrivingLicense: getDrivingLicense,
    getNationality: getNationality
  }
  
  return (
    <Wrapper>
      <PageWrapper>
        <TemplateOneView {...dataFromState} />
      </PageWrapper>
      <Actions>
        <PDFDownloadLink document={<FilePDF { ...dataFromState } />} fileName="CV.pdf">
          {({ loading, error }) => (loading ? 'Loading document...' : 'Download')}
        </PDFDownloadLink>
      </Actions>
    </Wrapper>
  )
}

const mapStateToProps = (state: any) => {

  const  {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    city,
    country,
    postalCode,
    address,
    drivingLicense,
    nationality,
    placeOfBirth,
    dateOfBirth
  } = state.personalDetails

  const { jobDescription } = state.professionalSummary

	return {
    getJobTitle: jobTitle,
    getFirstName: firstName,
    getLastName: lastName,
    getCity: city,
    getAddress: address,
    getEmail: email,
    getPhone: phone,
    getCountry: country,
    getPostalCode: postalCode,
    getDateOfBirth: dateOfBirth,
    getPlaceOfBirth: placeOfBirth,
    getJobDescription: jobDescription,
    getDrivingLicense: drivingLicense,
    getNationality: nationality
  }
}

export default connect(mapStateToProps, null)(Resume)