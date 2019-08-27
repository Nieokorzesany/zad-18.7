class Contact extends React.Component {
  // propTypes: {
  //   item: React.PropTypes.object.isRequired
  //  };
  render() {
    return (
      <div className={"contactItem"}>
        <img
          className={"contactImage"}
          src={
            "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-039_address_book-512.png"
          }
        />
        <p className={"contactLabel"}>Imię: {this.props.item.firstName}</p>
        <p className={"contactLabel"}>Nazwisko: {this.props.item.lastName}</p>
        <a href={"mailto:" + this.props.item.email}>{this.props.item.email}</a>
      </div>
    );
  }
}
