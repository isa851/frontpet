import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            SchoolPortal
          </h2>
          <p className="text-sm text-gray-400">
            Информационный портал школы. Здесь вы можете найти новости,
            расписание, учителей и важные документы.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Навигация
          </h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Главная
              </Link>
            </li>

            <li>
              <Link to="/news" className="hover:text-white transition">
                Новости
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-white transition">
                Галерея
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Контакты
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <MapPin size={18} />
              г. Ош
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} />
              +996 555 123 456
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} />
              isa@mail.com
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Мы в соцсетях
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition"
            >
              <Instagram size={18} />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SchoolPortal. Все права защищены.
      </div>
    </footer>
  )
}