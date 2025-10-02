/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store"
  })

  const {data: posts} = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
        {
          posts.map((post:any) =><BlogCard key={post.id} post={post} />)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
