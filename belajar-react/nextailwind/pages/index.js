import 'tailwindcss/tailwind.css'
import {Navbar,FeaturedPost, CardPost, posts} from './components/index.js'
export default function Home(props) {
  return (
    <div className="bg-gradient-to-b from-body1 to-body2 min-h-screen text-white ">
      <div className=" container mx-auto px-4 space-y-16">
        <Navbar />
        <FeaturedPost />
        <div className="flex flex-wrap gap-3">
          {posts.map((post,index) => (
            <CardPost 
            key = {index}
            imgCard = {post.imgCard}
            tag = {post.tag}
            date= {post.date}
            title= {post.title}
            description = {post.description}
            imgProfile= {post.imgProfile}
            name = {post.name}
            job= {post.job}
          />
          ))}
        </div>
        <footer className="text-center py-3">
          Copyright &copy; 2021 - Design By Nauval
        </footer>
      </div>
    </div>
  )
}
