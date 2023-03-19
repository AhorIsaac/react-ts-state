import React, { Component, CSSProperties } from "react";

interface IProps {}

interface IState {
  message: string;
  sub: string;
  imageURL: any;
}

class NewStateComp extends Component<IProps, IState> {
  state: IState = {
    message: `Subscribe to Simplilearn`,
    sub: `Subscribe`,
    imageURL: "🔔",
  };

  buttonChange: () => void = (): void => {
    this.setState({
      message: `Hit the bell icon to never miss an update!`,
      sub: `Subscribed`,
    });
  };

  imageChange: () => void = (): void => {
    this.setState({
      message: `Thank you! Happy Learning!`,
      imageURL: "❤️",
    });
  };

  render() {
    const { message, sub, imageURL } = this.state;

    return (
      <div className="App container text-center py-3">
        <h3 className="text-dark h3"> {message} </h3>
        <button className="btn btn-primary btn-md" onClick={this.buttonChange}>
          {" "}
          {sub}{" "}
        </button>
        <p className="my-3 display-4">
          <span className="badge bg-white" onClick={this.imageChange}>
            {imageURL}
          </span>
        </p>
      </div>
    );
  }
}

export default NewStateComp;
