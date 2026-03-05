import { useBanner } from "../../shared/hooks/useBanner"

function Banner(){

  const { data, isLoading } = useBanner()

  if (isLoading) return null

  const banner = data?.[0]
  return (
    <div
      style={{
        backgroundImage: `url(${banner?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "732px",
        width: "100%"
      }}
    >
      <div>
        <h1 className="text-white text-[56px] pt-[224px] text-center max-w-[700px] mx-auto">
          {banner?.title}
        </h1>

        <p className="text-white text-[20px] text-center max-w-[900px] mx-auto">
          {banner?.description}
        </p>
      </div>
    </div>
  )
}

export default Banner