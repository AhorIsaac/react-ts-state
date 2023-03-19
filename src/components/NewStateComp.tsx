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
        {/* album */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="assets/images/71.jpg"
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    alt="img"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img
                    src="assets/images/72.jpg"
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    alt="img"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img
                    src="assets/images/73.jpg"
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    alt="img"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of album */}

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
