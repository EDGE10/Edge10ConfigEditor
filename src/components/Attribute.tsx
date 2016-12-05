import React, { Component } from 'react';

interface IAttributeProps {
  name: string;
  onNameChanged: (newValue: string) => void;
  onFocus: () => void;
}

const AttributeItem = (props: IAttributeProps) => {
  let input: HTMLInputElement;
  return (
    <input type="text" 
      value={props.name} 
      ref={i => input = i} 
      onChange={v => props.onNameChanged(input.value)} />
  )
};

export default AttributeItem;