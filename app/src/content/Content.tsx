import * as React from 'react';
import './Content.css';

export interface IProps {
  url: string;
}

class Content extends React.Component<IProps, object> {
  public render() {
    return (
      <iframe src={this.props.url} className="Content" />
    );
  }
}

export default Content;