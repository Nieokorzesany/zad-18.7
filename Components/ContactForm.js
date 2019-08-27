class ContactForm extends React.Component {
  //propTypes: {
  //   contact: React.PropTypes.object.isRequired
  // },
  render() {
    return (
      <form className={"contactForm"}>
        <input
          type={"text"}
          placeholder={"First Name"}
          value={this.props.contact.firstName}
        />
        <input
          type={"text"}
          placeholder={"Last Name"}
          value={this.props.contact.lastName}
        />
        <input
          type={"text"}
          placeholder={"Email"}
          value={this.props.contact.email}
        />
        <button type={"submit"}>Add contact</button>
      </form>
    );
  }
}
