const React = require('react');

class Index extends React.Component {
  render() {
    const fruits = this.props.fruits
    return (
      <div>
        <h1> Index Page </h1>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li>
                The{' '}
                <a href={`/fruits/${i}`}>
                  {fruit.name}
                </a>
                {' '}is {fruit.color} <br></br>
                and {fruit.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!'}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;