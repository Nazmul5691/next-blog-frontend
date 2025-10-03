import { NextResponse } from "next/server";

export const blogs = [
        {
            "id": 8,
            "title": "abc",
            "content": "avasdfasdf",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "asd"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2025-10-03T19:03:52.297Z",
            "updatedAt": "2025-10-03T19:03:52.297Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 7,
            "title": "next server actions",
            "content": "next server actions next server actions next server actions next server actions next server actionsnext server actions",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "abc",
                "nextjs",
                "action",
                "server"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2025-10-03T18:59:55.189Z",
            "updatedAt": "2025-10-03T18:59:55.189Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 6,
            "title": "Getting Started with prisma",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 2,
            "authorId": 1,
            "createdAt": "2025-10-02T05:57:30.683Z",
            "updatedAt": "2025-10-03T15:48:20.295Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 5,
            "title": "Getting Started with express",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 6,
            "authorId": 1,
            "createdAt": "2025-10-02T05:57:23.041Z",
            "updatedAt": "2025-10-03T16:12:03.979Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 4,
            "title": "Getting Started with nodejs",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 4,
            "authorId": 1,
            "createdAt": "2025-10-02T05:57:17.431Z",
            "updatedAt": "2025-10-03T16:11:28.936Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 3,
            "title": "Getting Started with react",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 1,
            "authorId": 1,
            "createdAt": "2025-10-02T05:57:10.247Z",
            "updatedAt": "2025-10-03T15:48:33.907Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 2,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 1,
            "authorId": 1,
            "createdAt": "2025-10-02T05:57:03.594Z",
            "updatedAt": "2025-10-03T15:48:39.201Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        },
        {
            "id": 1,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 3,
            "authorId": 1,
            "createdAt": "2025-10-01T17:54:04.110Z",
            "updatedAt": "2025-10-03T15:50:16.241Z",
            "author": {
                "id": 1,
                "name": "nazmul islam",
                "email": "nazmul@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-10-01T17:53:31.281Z",
                "updatedAt": "2025-10-01T17:53:31.281Z"
            }
        }
    ]


// export async function GET() {
//     return Response.json({message: "Hello World"})
// }


export async function GET() {
    return Response.json(blogs)
}


export const POST = async(request: Request) =>{
    const blog = await request.json();

    const newBlog = {
        ...blog,
        id: blogs.length + 1
    };

    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-type" : "application/json"
        }
    })
}