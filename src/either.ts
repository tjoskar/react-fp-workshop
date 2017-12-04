import { Either } from 'monet'

type User = typeof userInput

const userInput = {
  username: 'Username',
  email: 'something',
  password: ''
}

function isUsernameValid(user: User) {
  if (user.username && user.username.length > 2) {
    return Either.Right(user)
  }
  return Either.Left('Username must be longer than 2 char')
}

function isEmailValid(user: User) {
  if (user.email && user.email.includes('@')) {
    return Either.Right(user)
  }
  return Either.Left('Enter a valid emial address')
}

function isPasswordValid(user: User) {
  if (user.password && user.password !== 'password') {
    return Either.Right(user)
  }
  return Either.Left('Enter a secure password')
}

const returnSuccess = () => 'success'
const returnErrorMessage = error => error

const t = Either.Right(userInput)
  .chain(isUsernameValid)
  .chain(isEmailValid)
  .chain(isPasswordValid)
  .cata(returnErrorMessage, returnSuccess)

console.log(t)
