import { useState } from "react"
import { useGallery } from "../../shared/hooks/useGallery"

function Gallery() {

  const [page, setPage] = useState(1)

  const { data, isLoading } = useGallery(page)

  if (isLoading) return <p>Loading...</p>

  const images = data?.results || []

  const PAGE_SIZE = 10
  const totalPages = Math.ceil((data?.count || 0) / PAGE_SIZE)

  return (
    <section className="py-[40px]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {images.map((item: any) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl group cursor-pointer"
            >

              <img
                src={item.image}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12 gap-3">

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

      </div>

    </section>
  )
}

export default Gallery