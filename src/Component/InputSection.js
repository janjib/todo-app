import React from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap'

function InputSection({handleClickAdd,handleInputChange,inputQuery}) {
    return (
        <div>
            <InputGroup className="mb-3 mx-auto" style={{maxWidth:"65%"}}>
    <FormControl
      placeholder="What do you want to do today"
      aria-label="Input for todo"
      aria-describedby="basic-addon2"
      onChange={handleInputChange}
      value={inputQuery}
      className="input-style"
    />
    <InputGroup.Append >
      <Button variant="warning" onClick={handleClickAdd}><i className="fas fa-plus"></i></Button>
    </InputGroup.Append>
  </InputGroup>
        </div>
    )
}

export default InputSection
