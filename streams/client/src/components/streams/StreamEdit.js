import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { showStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.showStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues={{
          //   title: this.props.stream.title,
          //   description: this.props.stream.description
          // }}
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { showStream, editStream })(StreamEdit);
