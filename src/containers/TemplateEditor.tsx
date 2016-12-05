import React, { Component } from 'react';
import EditableLabel from 'components/EditableLabel';

export interface ITemplateEditorProps {}

export interface ITemplateEditorState {
  template: Api.Models.ITemplate;
}

export class TemplateEditor extends Component<ITemplateEditorProps, ITemplateEditorState> {

  state: ITemplateEditorState;

  constructor(props: ITemplateEditorProps) {
    super(props);
    this.state = {
      template: {
        id: null,
        name: 'New Template',
        color: '#abcdef',
        icon: '',
        description: '',
        sessionAttributeDefinitions: [],
        subjectAttributeDefinitions: [],
        sessionAttributesMetaData: {},
        subjectAttributesMetaData: {},
        permissionLevel: null,
        supportsActivities: false
      }
    };
  }

  private onNameChanged(name: string) {
    this.setState({
      template: Object.assign({}, this.state.template, {
        name: name
      })
    });
  }

  render() {
    return (
        <EditableLabel text={this.state.template.name} onValueChanged={v => this.onNameChanged(v)} />
    );
  }
}

export default TemplateEditor;