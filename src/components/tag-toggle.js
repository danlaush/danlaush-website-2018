import React from 'react'

class TagToggle extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   active: false,
    // }
  }

  update() {
    const newActive = !this.props.active
    this.props.update(this.props.id, newActive)
    // this.setState({
    //   active: newActive
    // })
  }

  render() {
    return (
      <label htmlFor={`tag-${this.props.id}`} key={this.props.id}>
        <input
          type="checkbox"
          id={`tag-${this.props.id}`}
          name={this.props.id}
          defaultChecked={this.props.active ? this.props.active : undefined }
          onClick={this.update.bind(this)}
        />
        {this.props.name}
      </label>
    )
  }
}

export default TagToggle
