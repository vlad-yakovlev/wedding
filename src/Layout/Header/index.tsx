import {Container} from 'common/Container'
import {Link} from 'common/Link'
import {memo} from 'react'
const linkCn = 'block px-5 py-5 tracking-widest font-medium'
const activeLinkCn = '-mb-0.5 border-b-4 border-red-500'

export const Header = memo(function Header() {
  return <div>
    <Container className="border-gray-300 uppercase" innerClassName="flex flex-wrap">
      <div className="mr-auto py-5 tracking-wider font-semibold">Свадьба Владислава и Александры Яковлевых</div>
      <div className="flex space-x-6">
        <Link href="/" className={linkCn} activeClassName={activeLinkCn}>Регистрация</Link>
        <Link href="/party" className={linkCn} activeClassName={activeLinkCn}>Вечеринка</Link>
      </div>
    </Container>

    <Container className="py-10 text-white bg-blue-800">
      <div className="mb-6 text-3xl leadind-extra-tight font-bold">26 сентября 2020 года</div>
      <div className="text-xl">Большое спасибо, что Вы с нами в этот важный день начала нашей совместной истории!</div>
    </Container>
  </div>
})
