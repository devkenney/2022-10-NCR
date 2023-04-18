import * as userSvc from '../utilities/users-service';

function OrderHistory() {
  
  const handleCheckToken = async () => {
    const expDate = await userSvc.checkToken()
    console.log(expDate);
  }

  return (
    <div>
      <h1>OrderHistory Page</h1>
      <button onClick={handleCheckToken}>Check when my login expires!</button>
    </div>
  );
}

export default OrderHistory;
