import React, { Component } from 'react';
import TemplateHeader from 'components/TemplateHeader';

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

  private onColorChanged(color: string) {
    this.setState({
      template: Object.assign({}, this.state.template, {
        color: color
      })
    });
  }

  render() {
    return (
        <div>
          <TemplateHeader {...this.state.template} onNameChanged={v => this.onNameChanged(v)} onColorChanged={v => this.onColorChanged(v)} />
          <h1 style={{ color: this.state.template.color }}>{this.state.template.name}</h1>
        </div>

    );
  }
}

export default TemplateEditor;