
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }







// export const middleware = async () =>{
//     console.log('hello from middleware');
// }

// export const config = {
//     matcher : ["/about"]
// }









// import { NextResponse, NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// export const config = {
//   matcher: '/about',
// }