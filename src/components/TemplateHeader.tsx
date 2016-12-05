import React, { Component } from 'react';
import EditableLabel from 'components/EditableLabel';

interface ITemplateHeaderProps {
  name: string;
  color: string;
  onNameChanged: (newValue: string) => void;
  onColorChanged: (newValue: string) => void;
}

const TemplateHeader = (props: ITemplateHeaderProps) => {
  return (
    <div>
    <EditableLabel 
      text={props.name}
      onValueChanged={props.onNameChanged} />
    <EditableLabel 
      text={props.color}
      onValueChanged={props.onColorChanged} />
    </div>
  )
};

export default TemplateHeader;