import React, { Component } from 'react';
import moment from 'moment';
import { style, keyframes } from 'typestyle';

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
      <h1 className={Styles.welcomeMessage}>
        {`Hello, world`}
      </h1>
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