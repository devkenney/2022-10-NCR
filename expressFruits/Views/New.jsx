const React = require('react');
const DefaultLayout = require('./layout/Default')

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Fruits New Page"}>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method="POST">
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            name="name" 
          /><br/>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            name="color"
          /><br/>
          <label htmlFor="readyToEat">Is Ready To Eat:</label>
          <input
            type="checkbox"
            name="readyToEat"
          /><br/>
          <input 
            type="submit"
            name=""
            value="Create a Fruit"
          />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;