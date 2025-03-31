export async function postLogin(userData) {
    fetch('http://localhost:3000/api/v1/auth/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((res)=>{
      if(res.status.ok) return data = res.json()
      else return postError = res.json().message
    })
    .catch((error)=>{
      return error = "Server is offline."
    })
}
