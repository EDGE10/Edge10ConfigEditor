import React, { Component } from 'react';
import { style, keyframes } from 'typestyle';

import TemplateEditor from 'containers/TemplateEditor';

export interface IAppProps {}
export interface IAppState {}

export default class App extends Component<IAppProps, IAppState> {

  public state: IAppState;

  constructor(props: IAppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TemplateEditor />
    );
  }
}

namespace Styles {
  const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '30%': { opacity: 0 },
    '100%': { opacity: 1 }
  })
  export const welcomeMessage = style({
    textAlign: 'center',
    marginTop: 200,
    opacity: 0,
    animationName: fadeIn,
    animationDuration: '2s',
    animationFillMode: 'forwards'
  });
}