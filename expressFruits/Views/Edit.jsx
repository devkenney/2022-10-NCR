const React = require('react');
const DefaultLayout = require('./layout/Default');

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <form action={`/fruits/${this.props.fruit._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.fruit.name} /><br />
          Color: <input type="text" name="color" defaultValue={this.props.fruit.color} /><br />
          Is Ready To Eat: { 
            this.props.fruit.readyToEat ?
            <input type="checkbox" name="redyToEat" defaultChecked /> :
            <input type="checkbox" name="readyToEat" />
          }
          <input type="submit" value="Submit Changes" />
        </form>

      </DefaultLayout>
    )
  }
}

module.exports = Edit;