import React, { Component } from 'react';

interface IEditableLabelProps {
  text: string;
  onValueChanged: (newValue: string) => void;
}

const EditableLabel = (props: IEditableLabelProps) => {
  let input: HTMLInputElement;
  return (
    <input type="text" 
      value={props.text} 
      ref={i => input = i} 
      onChange={v => props.onValueChanged(input.value)} />
  )
};

export default EditableLabel;