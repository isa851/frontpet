import { useState } from "react"
import needSupport from "../../shared/images/needSupport.png"
import { useNeedSupport } from "../../shared/hooks/useNeedSupport"

function NeedSupport() {

    const mutation = useNeedSupport()

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        yourQuery: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        mutation.mutate(form)

        setForm({
            name: "",
            email: "",
            phone: "",
            yourQuery: ""
        })
    }

    return (
        <section className="py-[80px]">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <div className="flex justify-center">
                    <img
                        src={needSupport}
                        alt="support"
                        className="max-w-[420px] w-full"
                    />
                </div>

                <div>

                    <h2 className="text-[36px] font-semibold mb-2">
                        Need Support
                    </h2>

                    <p className="text-gray-500 mb-8">
                        Contact professionals for guidance
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-md px-4 py-3"
                        />

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full border border-gray-300 rounded-md px-4 py-3"
                        />

                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="text"
                            placeholder="+996"
                            className="w-full border border-gray-300 rounded-md px-4 py-3"
                        />

                        <textarea
                            name="yourQuery"
                            value={form.yourQuery}
                            onChange={handleChange}
                            placeholder="Type here..."
                            rows={4}
                            className="w-full border border-gray-300 rounded-md px-4 py-3"
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#ff4d0d] text-white py-4 rounded-full text-lg font-medium"
                        >
                            {mutation.isPending ? "Sending..." : "Join Now"}
                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default NeedSupport