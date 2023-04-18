const BASE_URL = '/api/users';

export async function login(userData) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    return response.json()
  } else {
    throw new Error('Invalid Login!')
  }
}

export async function signUp(userData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Invalid Signup!')
  }
}