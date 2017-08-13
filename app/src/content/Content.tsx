import * as React from 'react';
import './Content.css';

export interface Props {
  url: string;
}

class Content extends React.Component<Props, object> {
  render() {
    return (
      <iframe src={this.props.url} className="Content" />
    );
  }
}

export default Content;