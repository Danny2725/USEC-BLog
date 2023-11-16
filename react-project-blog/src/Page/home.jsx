import { Banner } from "../conponents/Banner"
import { BlogPage } from "../conponents/BlogPage"

export const Home = () => {
  return (
    <div>
    <Banner/>
        <div className="max-w-7xl mx-auto">
          <BlogPage/>
        </div>
    </div>
    
  )
}
