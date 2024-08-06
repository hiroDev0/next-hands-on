// React-iconsからメニューアイコンをインポート
import { FaBars } from 'react-icons/fa6'
// インストールしたButtonコンポーネントをインポート
import { Button } from '../ui/button'
// Next.jsで使えるLinkコンポーネントをインポート
import Link from 'next/link'

export default function CustomHeader() {
  // グローバルメニューの一覧　表示用のテキストとURLを設定
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Work', url: '/work' },
    { text: 'Contact', url: '/contact' },
  ]

  return (
    <div>
      <header
        className={`
          flex justify-normal md:justify-between items-center
          p-4 mx-4 md:mx-36
        `}
      >
        {/* Buttonコンポーネントを使ってメニューアイコンを表示 */}
        <Button aria-label='menu' role='button' variant='default' className='mx-8 block md:hidden'>
          <FaBars />
        </Button>

        <h1 className='text-3xl'>My-site</h1>
        <nav className='flex space-x-4 hidden md:block'>
          {/* メニューの一覧をループして表示 */}
          {menuItems.map((item) => (
            // Linkコンポーネントを使ってリンクを設定
            <Link key={item.text} href={item.url}>
              {item.text}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
