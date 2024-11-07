import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  publishedDate: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Empowering Communities through Social Development',
    summary: 'Learn how BARWAQO SOCIAL DEVELOPMENT COMMITTEE is impacting lives positively...',
    imageUrl: '/logo.jpg',
    publishedDate: 'November 5, 2024',
  },
  // Add more blog post objects here...
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        BSDC Blog
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link href={`/blog/${post.id}`}>
                <span className="text-blue-600 hover:underline">Read More</span>
              </Link>
              <p className="text-gray-400 text-sm mt-2">{post.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
