import { NextResponse } from "next/server";
import { blogs } from "../route";

export async function GET(request: Request, { params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params;

    const blog = blogs.find((blog) => blog.id === parseInt(blogId));
    return NextResponse.json(blog);
}


// import { NextResponse } from "next/server";
// import { blogs } from "../route";

// export async function GET(
//   request: Request,
//   { params }: { params: { blogId: string } }
// ) {
//   const { blogId } = params;

//   const blog = blogs.find((blog) => blog.id === parseInt(blogId));

//   if (!blog) {
//     return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//   }

//   return NextResponse.json(blog);
// }
