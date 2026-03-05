import CountUp from "react-countup"
import { useSuccess } from "../../shared/hooks/useSuccess"

function OurSuccess(){

  const { data, isLoading } = useSuccess()

  if(isLoading) return null

  return(
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-[40px] text-center mb-12">
          Our Success
        </h1>

        <div className="grid grid-cols-5 gap-8 text-center">

          {data?.results?.map((item:any)=>(
            <div key={item.id}>

              <h2 className="text-[50px]">
                <CountUp end={Number(item.title)} duration={2}/>+
              </h2>

              <p className="text-gray-500">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default OurSuccess