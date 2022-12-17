import { JwtToken } from './JwtToken'
import { JwtHeader } from 'jsonwebtoken'


export interface Jwt {
  header: JwtHeader
  payload: JwtToken
}
