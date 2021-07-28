import { CardPost, Footer, Navbar, posts } from "../components";

export default function uiPage() {
  return (
    <div className="bg-gradient-to-b from-body1 to-body2 min-h-screen text-white ">
      <div className=" container mx-auto px-4 space-y-16">
        <Navbar />
        <h1 className="text-center text-3xl">UI DESIGN</h1>
        <div className="flex justify-center flex-wrap gap-3">
          {posts.map((post, index) => (
            <CardPost
              key={index}
              imgCard={post.imgCard}
              tag={post.tag}
              date={post.date}
              title={post.title}
              description={post.description}
              imgProfile={post.imgProfile}
              name={post.name}
              job={post.job}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
