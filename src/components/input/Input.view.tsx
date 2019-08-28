import React, {
  FC,
  Fragment
} from 'react'

import Props from './Input.model'
import Input from './Input.style'
import FieldLabel from '../FieldLabel.view' 

const InputView: FC<Props> = props => {
  return (
    <Fragment>
      {
        props.withLabel ? <FieldLabel value={ props.label } /> : null
      }
      <Input
        type={ props.type }
        placeholder={ props.label }
        onChange={ props.onChange }
        style={ props.style }
        defaultValue={ props.defaultValue }
        value={ props.value }
        name={ props.name }
        readOnly={ props.readOnly }
        id={ props.id }
      />
    </Fragment>
  )
}

export default InputView