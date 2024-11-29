
interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedDate: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Empowering Communities through Social Development',
    content: `
      BARWAQO SOCIAL DEVELOPMENT COMMITTEE (BSDC) is committed to making a difference by focusing on key areas such as education, health, and community empowerment. Through various initiatives, BSDC has managed to improve lives and inspire hope in communities.
      This article highlights some of the amazing work done by BSDC and how you can get involved.`,
    imageUrl: '/logo.jpg',
    publishedDate: 'November 5, 2024',
  },
  // Add more blog post objects here...
];

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="container mx-auto px-6 py-8 md:py-28">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 text-sm">{post.publishedDate}</p>
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-md my-4" />
      <div className="prose max-w-none">{post.content}</div>
    </div>
  );
}
