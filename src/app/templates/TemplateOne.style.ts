import styled from 'styled-components'

import colors from '../../styles/color.style'

export const Wrapper = styled.div`
  display: flex;
`

export const Email = styled.h4`
`

export const Address = styled.h4`
  text-transform: capitalize;
`

export const Phone = styled.h4`
`

export const Description = styled.p`
  margin-left: 10px;
`

export const Main = styled.main`
  width: 65%;
`

export const Sidebar = styled.aside`
  background: ${ colors.grey };
  width: 35%;
  height: 100%;
  float: left;
  padding: 0 10px;
`

export const FullName = styled.h1`
  margin-left: 10px;
  text-transform: capitalize;
  margin-bottom: 0;
`

export const JobTitle = styled.h3`
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 15px;
  margin-top: 5px;
  color: ${ colors.lightGrey };
`