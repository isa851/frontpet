import { Link } from "react-router-dom"
import { useLatestNews } from "../../shared/hooks/useLatestNews"

type NewsType = {
  id: number
  title: string
  description: string
  image: string
}

type NewsResponse = {
  results: NewsType[]
}

function News() {

  const { data, isLoading } = useLatestNews()

  if (isLoading) return <p>Loading...</p>

  const news: NewsType[] = (data as NewsResponse)?.results || []

  return (
    <section className="py-[80px]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[40px] font-semibold text-center mb-12">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-[22px] font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 mb-5">
                  {item.description}
                </p>

                <Link
                  to="/news"
                  className="text-[#ff4d0d] font-semibold hover:underline"
                >
                  Read more →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default News