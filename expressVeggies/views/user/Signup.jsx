const React = require('react');
const DefaultLayout = require('../layout/Default');

class Signup extends React.Component {
  render() {
    return (
      <DefaultLayout title="Sign Up">
        <form action="/users/signup" method="POST">
          <fieldset>
            <legend>New User</legend>
            <label htmlFor="username">USERNAME: </label>
            <input type="text" name="username" required /><br />
            <label htmlFor="password">PASSWORD: </label>
            <input type="password" name="password" required /><br />
            <input type="submit" value="Create Account!" />
          </fieldset>
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = Signup;