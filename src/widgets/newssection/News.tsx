import { useState } from "react"
import { useNews } from "../../shared/hooks/useNews"

function News() {

  const [page, setPage] = useState(1)

  const { data, isLoading, error } = useNews(page)

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error loading news</p>

  const newsList = data?.results || []

  const PAGE_SIZE = 9
  const totalPages = Math.ceil((data?.count || 0) / PAGE_SIZE)

  return (
    <section className="py-[100px]">

      <div className="max-w-7xl mx-auto px-6 space-y-[120px]">

        {newsList.map((item: any, index: number) => (

          <div
            key={item.id}
            className="grid md:grid-cols-2 gap-16 items-center"
          >

            {index % 2 === 0 ? (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-tr-[70px] w-[745px] h-[558px] object-cover"
                />

                <div>
                  <h2 className="text-[34px] font-semibold mb-6">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-[34px] font-semibold mb-6">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-tl-[70px] w-[745px] h-[558px] object-cover"
                />
              </>
            )}

          </div>

        ))}

      </div>

      {totalPages > 1 && (

        <div className="flex justify-center mt-16 gap-3">

          {Array.from({ length: totalPages }, (_, i) => (

            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-lg border ${
                page === i + 1
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>

          ))}

        </div>

      )}

    </section>
  )
}

export default News