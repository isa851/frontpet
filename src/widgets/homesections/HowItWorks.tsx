import { useHowItWorks } from "../../shared/hooks/useHowItWorks"

type HowType = {
  id: number
  title: string
  description: string
  icon?: string
}

type HowResponse = {
  results: HowType[]
}

function HowItWorks() {

  const { data, isLoading } = useHowItWorks()

  if (isLoading) return <p>Loading...</p>

  const steps: HowType[] = (data as HowResponse)?.results || []

  return (
    <section className="bg-gray-900 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-white text-[40px] font-semibold text-center mb-20">
          How It Works
        </h1>

        <div className="grid md:grid-cols-4 gap-12 text-white">

          {steps.map((item) => (
            <div key={item.id} className="text-center">

              <div className="w-[70px] h-[70px] border border-white rounded-full flex items-center justify-center mx-auto mb-6">

                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[30px] h-[30px]"
                  />
                )}

              </div>

              <h3 className="text-[20px] font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-[14px] opacity-90 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        <div className="flex justify-center mt-[80px]">

          <button className="border border-white text-white px-10 py-3 rounded-full hover:bg-white hover:text-[#ff4d0d] transition">
            Start Now
          </button>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks