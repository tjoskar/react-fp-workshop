// import { Either } from 'monet'

function validate(user: User) {
  if (user.username && user.username.length > 2) {
    if (user.email && user.email.includes('@')) {
      if (user.password && user.password !== 'password') {
        return null
      } else {
        return 'Enter a secure password'
      }
    } else {
      return 'Enter a valid email'
    }
  } else {
    return 'Enter a valid username'
  }
}

console.log(validate(userInput))
